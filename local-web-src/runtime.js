(function (g) {
  'use strict';
  const store = g.AnbariLocalStore, registrations = new Map();
  let resolveEngine;
  const engineReady=new Promise(resolve=>{resolveEngine=resolve;});
  let restored = null, loaded = false, engine = null, queue = Promise.resolve(), generation = 0;
  let extras = { preferences: {}, team: [], keys: [], tickets: [], user: { id: 'local-owner', name: 'مدیر محلی', email: 'local@localhost', phone: null, hasPassword: false }, settings: {} };
  const ready = store.read().then((saved) => {
    if (saved && (saved.version !== 1 || !saved.states || typeof saved.states !== 'object')) throw Error('local_backup_invalid');
    restored = saved?.states || {};
    generation = saved?.generation || 0;
    if (restored.local) extras = restored.local;
    for (const [name, value] of registrations) if (Object.hasOwn(restored, name)) value.set(restored[name]);
    loaded = true;
  });
  // Store load failures remain visible to every operation, never replaced by empty data.
  ready.catch((error) => console.error('[anbari-local] storage initialization failed:', error.message));
  function register(name, get, set) {
    registrations.set(name, { get, set });
    if (loaded && Object.hasOwn(restored, name)) set(restored[name]);
  }
  function snapshot() {
    return { version: 1, generation, savedAt: new Date().toISOString(), states: { local: extras, ...Object.fromEntries([...registrations].map(([name, item]) => [name, item.get()])) } };
  }
  function restore(saved) {
    extras = saved.states.local;
    generation = saved.generation || 0;
    for (const [name, item] of registrations) if (Object.hasOwn(saved.states, name)) item.set(saved.states[name]);
  }
  function error(code, status = 409) {
    const e = new Error(code); e.status = status; return e;
  }
  function billing(original) {
    const result = store.clone(original);
    const features = { ...result.subscription?.features, voice: true, image: true, batch: true, pdf: true, spreadsheet: true, reports: true, team: true, integrations: true, ledger: true, cheques: true, club: true, customerClub: true, salary: true };
    return { ...result, access: 'active', local: true, trial: null, offlineDays: 36500,
      checkoutAvailable: false, checkoutOff: 'همهٔ امکانات محلی رایگان است؛ پرداختی انجام نمی‌شود.',
      subscription: { ...result.subscription, plan_id: 'team', purchased_plan_id: 'team', title: 'همهٔ امکانات · محلی و رایگان', status: 'active', expires_at: '2099-12-31T00:00:00.000Z', ai_daily_limit: 1000000, member_limit: 1000000, features },
      usage: { used: 0, limit: 1000000 }, records: { used: 0, limit: 1000000, remaining: 1000000 },
    };
  }
  async function run(path, method = 'GET', body, delegate, options = {}) {
    await ready;
    const latest = await store.read();
    if (latest && (latest.generation || 0) !== generation) restore(latest);
    if (delegate) setEngine(delegate);
    await engineReady;
    const url = new URL(path, g.location.origin);
    if (url.origin !== g.location.origin) throw error('local_external_network_disabled', 503);
    const verb = method.toUpperCase();
    extras.receipts ||= new Map();
    const receiptKey=options.key && !['GET','HEAD'].includes(verb) ? verb+' '+url.pathname+' '+options.key : null;
    const payload=store.encode(body);
    if(receiptKey&&extras.receipts.has(receiptKey)){
      const receipt=extras.receipts.get(receiptKey);
      if(receipt.payload!==payload)throw error('local_operation_conflict',409);
      return store.clone(receipt.answer);
    }
    const before = store.clone(snapshot());
    const started = Date.now();
    try {
      let answer = await g.AnbariLocalRoutes.handle({ url, method: verb, body: body || {}, extras, engine, error, billing, states: registrations });
      if (answer === g.AnbariLocalRoutes.PASS) answer = await engine(url.pathname + url.search, verb, body);
      if(receiptKey){
        extras.receipts.set(receiptKey,{payload,answer:store.clone(answer)});
        if(extras.receipts.size>500)extras.receipts.delete(extras.receipts.keys().next().value);
      }
      const next=snapshot();next.generation=generation+1;
      await store.write(next,generation);generation=next.generation;
      api.requests.push({ path: url.pathname, method: verb, ok: true, ms: Date.now() - started });
      if (api.requests.length > 300) api.requests.shift();
      return store.clone(answer);
    } catch (cause) {
      restore(before);
      api.requests.push({ path: url.pathname, method: verb, ok: false, error: cause.message });
      if (api.requests.length > 300) api.requests.shift();
      if (/quota|storage|disk/i.test(cause.name + ' ' + cause.message)) throw error('local_storage_full', 507);
      throw cause;
    }
  }
  function request(...args) {
    const task = queue.then(() => withLock(() => run(...args)));
    queue = task.catch((error) => console.warn('[anbari-local]',args[1]||'GET',args[0],error.message));
    return task;
  }
  function setEngine(value){engine=value;resolveEngine();}
  function withLock(callback) {
    return g.navigator?.locks?.request ? g.navigator.locks.request(store.key,callback) : callback();
  }
  function validate(saved) {
    const state=saved?.states?.engine, local=saved?.states?.local;
    const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v)&&!(v instanceof Map);
    const lists=['products','movements','contacts','entries','cheques','docs','categories','alarmRules','alerts','toBuy','extra'];
    if(saved?.version!==1||!state||!object(local)||!object(local.user)||!Array.isArray(local.team)||!Array.isArray(local.keys)||!object(local.preferences)||!object(local.settings)||!object(state.settings)||!Number.isFinite(state.seq)||!Number.isFinite(state.revision)||!(state.notes instanceof Map)||lists.some(name=>!Array.isArray(state[name])))throw error('local_backup_invalid',400);
    for(const name of registrations.keys())if(!Object.hasOwn(saved.states,name))throw error('local_backup_invalid',400);
    if(local.receipts!==undefined){
      if(!(local.receipts instanceof Map)||local.receipts.size>500)throw error('local_backup_invalid',400);
      for(const [key,value] of local.receipts)if(typeof key!=='string'||!object(value)||!Object.hasOwn(value,'answer')||!['string','undefined'].includes(typeof value.payload))throw error('local_backup_invalid',400);
    }
    if(state.products.some(p=>!object(p)||typeof p.id!=='string'||typeof p.name!=='string'||!Number.isFinite(p.stock)))throw error('local_backup_invalid',400);
    for(const name of ['contacts','docs','cheques'])if(state[name].some(p=>!object(p)||typeof p.id!=='string'))throw error('local_backup_invalid',400);
    if(!(saved.states.recipes instanceof Map))throw error('local_backup_invalid',400);
    for(const value of saved.states.recipes.values())if(!object(value)||!Array.isArray(value.items))throw error('local_backup_invalid',400);
    const expenses=saved.states.expenses,payroll=saved.states.payroll;
    if(expenses!==null&&(!object(expenses)||!Array.isArray(expenses.expenses)||!Array.isArray(expenses.reminders)))throw error('local_backup_invalid',400);
    if(payroll!==null&&(!object(payroll)||!Array.isArray(payroll.people)||!Array.isArray(payroll.lines)))throw error('local_backup_invalid',400);
    return saved;
  }
  function enqueue(callback){const task=queue.then(()=>withLock(callback));queue=task.catch(()=>{});return task;}
  function backup() { return enqueue(async()=>{await ready;const saved=await store.read();return store.encode(saved||snapshot());}); }
  function importBackup(raw) {
    return enqueue(async()=>{
      await ready;
      let saved;try{saved=validate(store.decode(raw));}catch{throw error('local_backup_invalid',400);}
      const current=await store.read();if(current)restore(current);
      const before=store.clone(snapshot());
      saved.generation=generation+1;
      try{restore(saved);await store.write(saved,before.generation);}
      catch(cause){restore(before);throw cause;}
      return {ok:true};
    });
  }
  const api = g.AnbariLocal = { register, setEngine, request, backup, importBackup, ready, requests: [], billing,
    get mode() { return 'local-free'; }, get states() { return registrations; },
  };
  // Every API path stays inside this browser. Remote fetches are rejected.
  const network = g.fetch.bind(g);
  g.fetch = async (input, options = {}) => {
    const url = new URL(typeof input === 'string' ? input : input instanceof URL ? input.href : input.url, g.location.href);
    if (url.origin !== g.location.origin && !['data:', 'blob:'].includes(url.protocol)) throw error('local_external_network_disabled', 503);
    if (/^\/(v1|api|updates)\//.test(url.pathname)) {
      try {
        const body = options.body ? JSON.parse(options.body) : undefined;
        const result = await request(url.href, options.method || 'GET', body);
        return new Response(JSON.stringify(result), { headers: { 'Content-Type': 'application/json' } });
      } catch (e) {
        return new Response(JSON.stringify({ error: { code: e.message, message: e.message } }), { status: e.status || 503, headers: { 'Content-Type': 'application/json' } });
      }
    }
    return network(input, options);
  };
  if (g.location.hash === '#demo' && g.history?.replaceState) g.history.replaceState(null, '', '/');
})(globalThis);
