(function (g) {
  'use strict';
  const PASS = Symbol('use-original-local-engine');
  const now = () => new Date().toISOString();
  const id = () => g.crypto.randomUUID();
  async function handle({url, method, body, extras, engine, error, billing, states}) {
    const p = url.pathname, write = !['GET', 'HEAD'].includes(method);
    const root = '/v1/shops/demo-shop';
    const relative = p.startsWith(root + '/') ? p.slice(root.length + 1) : '';
    const [section, key, action] = relative.split('/').map(decodeURIComponent);
    if (p === '/v1/auth/session') return { user: extras.user };
    if (p === '/v1/auth/methods') return { google: false, otp: { sms: false, email: false }, local: true };
    if (p === '/v1/auth/identities') return {google:{linked:false,email:null},phone:{linked:false},phoneLink:null,suggest:false,local:true};
    if (p === '/v1/me/device') return {ok:true,local:true};
    if (p === '/v1/me/preferences') {
      if (write) Object.assign(extras.preferences, body);
      return { featureTips: false, tipsState: {}, ...extras.preferences, updatedAt: now() };
    }
    if (p === '/v1/auth/devices') return { devices: [{id:'local-browser',kind:'web',deviceName:'مرورگر محلی',current:true,lastSeenAt:now(),createdAt:now()}], rule: { browser: 1000000, phone: 1000000 } };
    if (p === '/v1/auth/logout') return {ok:true,local:true};
    if (p === '/v1/me' || p === '/v1/auth/profile' || p === '/v1/me/profile') {
      if (write) for (const field of ['name','displayName']) if (typeof body[field] === 'string') extras.user[field]=body[field].trim();
      return {user:extras.user};
    }
    if (p === '/v1/shops') {
      if (write) throw error('local_single_workspace',409);
      const result=await engine(p);
      return {...result,shopLimit:1,canAddShop:false};
    }
    if (p === '/v1/billing/catalog' || relative === 'billing') return billing(await engine(root+'/billing'));
    if (section === 'billing') {
      if (key === 'quote') return {finalAmountToman:0,originalAmountToman:0,currency:'IRT',checkoutAvailable:false,local:true};
      if (key === 'downgrade') return {scheduled:null,local:true};
      throw error('local_payment_not_required',409);
    }
    if (p === '/v1/fx') return { latest: null, local: true };
    if (relative === 'bank-account') {
      if (method === 'PUT') {
        const holderName = typeof body.holderName === 'string' ? body.holderName.trim() : '';
        const cardNumber = body.cardNumber || '';
        const sheba = body.sheba || '';
        if (!holderName || holderName.length > 100 || (!cardNumber && !sheba) ||
            (cardNumber && (typeof cardNumber !== 'string' || !/^\d{16}$/.test(cardNumber))) ||
            (sheba && (typeof sheba !== 'string' || !/^IR\d{24}$/.test(sheba)))) {
          throw error('invalid_request', 400);
        }
        extras.settings.bankAccount = {holderName, cardNumber, sheba};
      } else if (write) {
        throw error('invalid_request', 400);
      }
      return {account: extras.settings.bankAccount ?? null};
    }
    if (section === 'staff-username') return {available:true};
    if (section === 'staff') {
      if (key === 'activity') return {people:extras.team.map(person=>({...person,salesTotal:0,salesCount:0,owner:false})),days:Number(url.searchParams.get('days'))||7};
      if (key && action === 'activity') return {recent:[],person:extras.team.find(person=>person.id===key||person.userId===key)||null};
      if (key === 'pause') { for(const item of extras.team)item.paused=!!body.paused;return {ok:true}; }
      if (!key && method==='POST') {
        if(!String(body.name||'').trim())throw error('invalid_request',400);
        if(extras.team.some(x=>x.username===body.username))throw error('username_taken',409);
        const staff={...body,id:id(),userId:id(),role:'staff',createdAt:now(),updatedAt:now(),paused:false,local:true};
        delete staff.password;
        extras.team.push(staff);
        return {staff,username:body.username,password:'فقط مدل محلی؛ حساب سروری ساخته نمی‌شود',local:true};
      }
      if (key && write) {
        const item=extras.team.find(x=>x.id===key||x.userId===key);
        if(!item)throw error('not_found',404);
        if(method==='DELETE')extras.team.splice(extras.team.indexOf(item),1);
        else Object.assign(item,body,{updatedAt:now()});
        delete item.password;
        return {ok:true,staff:item,local:true};
      }
      return {staff:extras.team,team:true,limit:1000000,used:extras.team.length,planId:'team'};
    }
    if(section==='integrations'&&key==='keys'){
      if(!action&&method==='POST'){
        throw error('local_integration_service_unavailable',503);
      }
      if(action&&write){const item=extras.keys.find(x=>x.id===action);if(!item)throw error('not_found',404);item.revokedAt=now();return {ok:true};}
      return {keys:extras.keys,enabled:true,allowed:true,limit:1000000,local:true};
    }
    if(section==='devices')return {members:[],local:true};
    if(section==='referral')return {code:'LOCAL',url:g.location.origin+'/',balanceToman:0,totalEarnedToman:0,referrals:[],rewards:[],invited:0,local:true};
    if(section==='support'){
      if(key==='unread')return {unread:0,latest:null};
      if(key==='faq')return {questions:[{id:'local',question:'آیا اطلاعات به سرور اصلی ارسال می‌شود؟',answer:'خیر. این نسخه فقط در مرورگر خودتان اجرا می‌شود.'}]};
      if(key==='tickets'&&!write)return {tickets:[],next:null};
      throw error('local_service_unavailable',503);
    }
    if(section==='ai'){
      if(key==='status')return {ready:false,paused:false,mock:false,local:true,...extras.settings.ai};
      if(write&&['settings','key','config'].includes(key)){extras.settings.ai={...body,ready:false,local:true};return {ok:true,ready:false,local:true};}
      throw error('local_service_unavailable',503);
    }
    if(section==='ai-connections'){
      if(!write)return {connections:[],local:true};
      throw error('local_integration_service_unavailable',503);
    }
    if(section==='live-agent'){
      if(!key&&!write)return {enabled:true,ready:false,voice:null,local:true};
      throw error('local_service_unavailable',503);
    }
    if(section==='presence'||section==='client-report'||section==='device-report'||p==='/v1/client-errors'||p==='/v1/app-open')return {ok:true};
    if(section==='realtime-ticket')throw error('local_realtime_not_required',503);
    if(section==='campaigns')return {campaigns:[],notifications:[],items:[]};
    if(section==='telegram'&&key==='drafts')return {drafts:[]};
    if(p.startsWith('/api/')||p.startsWith('/updates/')||section==='jobs'||p.startsWith('/v1/auth/'))throw error('local_service_unavailable',503);
    return PASS;
  }
  g.AnbariLocalRoutes={PASS,handle};
})(globalThis);
