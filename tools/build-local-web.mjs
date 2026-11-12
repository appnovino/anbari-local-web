import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
import crypto from 'node:crypto';
const require=createRequire(import.meta.url);
const {parse}=require('./js-vendor/babel-parser.cjs');
const source=path.resolve('recovered/web');
const output=path.resolve('local-web');
fs.mkdirSync(output,{recursive:true});
if(fs.existsSync('local-web-assets'))fs.cpSync('local-web-assets',output,{recursive:true});
for(const file of fs.readdirSync(output,{recursive:true}).filter(name=>name.endsWith('index.html')&&name!=='index.html')){
 const full=path.join(output,file);let html=fs.readFileSync(full,'utf8');
 html=html.replace(/(<body\b[^>]*>)/i,'$1<div dir="rtl" style="padding:10px 16px;background:#e2f3ef;color:#174e46;font:13px/1.8 Tahoma,sans-serif">نسخهٔ محلی — این صفحه نسخهٔ ذخیره‌شدهٔ راهنمای سرویس اصلی است. سرویس‌های سروری اینجا فعال نیستند. <a href="/">بازگشت به برنامهٔ محلی</a></div>');
 html=html.replace(/(<a\b[^>]*\bhref=["'])https:\/\/myanbari\.ir\//gi,'$1/');
 fs.writeFileSync(full,html);
}
for(const name of ['_expo','assets','manifest.json','anbari-icon-512.png','anbari-touch-icon.png','favicon.ico','notifications-sw.js']){
 if(fs.existsSync(path.join(source,name)))fs.cpSync(path.join(source,name),path.join(output,name),{recursive:true});
}
const index=JSON.parse(fs.readFileSync(path.join(source,'readable/module-index.json'),'utf8'));
const patches=new Map();
const sourceOf=id=>fs.readFileSync(path.join(source,'readable',index.find(x=>x.id===id).file),'utf8');
function replaceOnce(text,oldText,newText){
 if(text.split(oldText).length!==2)throw Error('Patch anchor must occur exactly once: '+oldText.slice(0,90));
 return text.replace(oldText,newText);
}
function append(id,code){const s=patches.get(id)||sourceOf(id),ast=parse(s),factory=ast.program.body[0].expression.arguments[0];patches.set(id,s.slice(0,factory.body.end-1)+code+'\n'+s.slice(factory.body.end-1));}
append(449,`globalThis.AnbariLocal.register('engine',()=>V(),value=>{B=value;});globalThis.AnbariLocal.setEngine(_e.demoRequest);`);
patches.set(449,replaceOnce(patches.get(449),'(_e.resetDemo = function (e = {}) {','(_e.resetDemo = function (e = {}) {\n        if(globalThis.AnbariLocal) return;'));
patches.set(449,replaceOnce(patches.get(449),'(_e.clearDemo = function () {','(_e.clearDemo = function () {\n        if(globalThis.AnbariLocal) return;'));
patches.set(449,replaceOnce(patches.get(449),"if ('nudges' === q)",`if (globalThis.AnbariLocal && q === 'imports' && N === 'apply' && o === 'POST') {
        if (!Array.isArray(i.rows) || !['excel', 'csv', 'json'].includes(i.source))
          throw W('import_invalid', 400);
        const rows = n.validateImportRows(i.rows);
        const current = G(d);
        const originalById = new Map(current.products.map(product => [product.id, product]));
        const rowsByName = new Map(rows.map(row => [n.normalizeName(row.name), row]));
        const result = n.applyImport(current, rows, 'import-' + globalThis.crypto.randomUUID(), i.source);
        result.products = result.products.map(product => {
          const previous = originalById.get(product.id);
          if (previous === product) return product;
          const row = rowsByName.get(n.normalizeName(product.name));
          if (previous?.archivedAt || (row && product.stock !== row.stock))
            throw W('import_invalid', 400);
          const metadata = {};
          for (const field of ['unit', 'kind', 'packSize', 'packUnit', 'contentSize', 'contentUnit']) {
            if (row?.[field] !== undefined) metadata[field] = row[field];
          }
          return { unit: 'piece', kind: 'simple', ...product, ...metadata, version: (previous?.version || 0) + 1 };
        });
        J(d, result);
        d.revision++;
        return { ok: true, count: rows.length, revision: d.revision, policyRevision: L };
      }
      if ('nudges' === q)`));
append(468,`globalThis.AnbariLocal.register('expenses',()=>r,value=>{r=value;});`);
append(469,`globalThis.AnbariLocal.register('payroll',()=>t,value=>{t=value;});`);
append(471,`globalThis.AnbariLocal.register('recipes',()=>n,value=>{n.clear();for(const [key,item] of value)n.set(key,item);});`);
patches.set(415,replaceOnce(sourceOf(415),"async function C(e, t, n, o) {",`async function C(e, t, n, o) {
      if(globalThis.AnbariLocal) return globalThis.AnbariLocal.request(e,t,n,f.demoRequest,o);`));
// The local user enters the real UI, not the restricted marketing demo branch.
let account=sourceOf(379);
account=replaceOnce(account,"ao = () => '#demo' === window.location.hash,","ao = () => !globalThis.AnbariLocal && '#demo' === window.location.hash,");
patches.set(379,account);
let workspace=sourceOf(609);
workspace=replaceOnce(workspace,'qi = !(r || !e || !Ai || (0, ht.clubPlanOpen)(Ai));','qi = !globalThis.AnbariLocal && !(r || !e || !Ai || (0, ht.clubPlanOpen)(Ai));');
workspace=replaceOnce(workspace,'const e = (0, E.randomUUID)();\n                                    for (let r = 0; r < t.length; r += fo)',`if (globalThis.AnbariLocal) {
                                      await s.mutate('/imports/apply', 'POST', { rows: t, source: o });
                                      return;
                                    }
                                    const e = (0, E.randomUUID)();
                                    for (let r = 0; r < t.length; r += fo)`);
patches.set(609,workspace);
let dataPanel=sourceOf(835);
dataPanel=replaceOnce(dataPanel,"const n = 'json' !== o && !!t.activeShop;","const useRemoteParser = !globalThis.AnbariLocal && !!t.activeShop;\n          const n = 'json' !== o && useRemoteParser;");
dataPanel=replaceOnce(dataPanel,": t.activeShop\n                  ? (",": useRemoteParser\n                  ? (");
patches.set(835,dataPanel);
let inventory=sourceOf(699);
inventory=replaceOnce(inventory,'(async function c() {','(async function c() {\n                if(globalThis.AnbariLocal) return;');
patches.set(699,inventory);
let staff=sourceOf(903);
staff=replaceOnce(staff,'await P({ name: t, username: n, password: M })','await P(globalThis.AnbariLocal ? void 0 : { name: t, username: n, password: M })');
staff=replaceOnce(staff,"B && M && c.username\n                              ?", "!globalThis.AnbariLocal && B && M && c.username\n                              ?");
patches.set(903,staff);
// Keep the original UI's transport messages while explaining local-only failures.
let transport=patches.get(415);
transport=replaceOnce(transport,'return p.message;',`return function(error){
 const localMessages={local_service_unavailable:'این قابلیت به سرویس خارجی نیاز دارد؛ در نسخهٔ محلی متصل نیست.',local_integration_service_unavailable:'ساخت کلید قابل اتصال به سایت به سرور نیاز دارد. این صفحه محلی است و کلید فعال سروری ایجاد نمی‌کند.',local_workspace_changed:'اطلاعات در تب دیگری تغییر کرد؛ دوباره تلاش کنید.',local_payment_not_required:'همهٔ امکانات محلی رایگان است؛ نیازی به پرداخت نیست.',local_storage_full:'ذخیره انجام نشد. فضای مرورگر کافی نیست؛ پشتیبان بگیرید و فضا را بررسی کنید.',local_single_workspace:'این نسخه یک فضای کاری محلی دارد.',local_external_network_disabled:'ارتباط با سرویس خارجی در نسخهٔ محلی غیرفعال است.'};
 return localMessages[error?.message] || p.message(error);
};`);
patches.set(415,transport);
const modifications=[];
for(const filename of fs.readdirSync(path.join(source,'readable')).filter(x=>x.endsWith('.js'))){
 const s=fs.readFileSync(path.join(source,'readable',filename),'utf8');
 const ast=parse(s), edits=[];
 for(const statement of ast.program.body){
  const call=statement.expression;
  if(call?.callee?.name==='__d'&&patches.has(call.arguments[1].value)){
   const id=call.arguments[1].value;
   edits.push({start:statement.start,end:statement.end,text:patches.get(id)});
   modifications.push({id,bundle:filename,source:index.find(x=>x.id===id).file});
  }
 }
 let built=s;for(const edit of edits.reverse())built=built.slice(0,edit.start)+edit.text+built.slice(edit.end);
 parse(built);
 fs.writeFileSync(path.join(output,'_expo/static/js/web',filename),built);
}
for(const name of ['store.js','routes.js','runtime.js','tools-ui.js','local.css']){
 const p=path.resolve('local-web-src',name);if(fs.existsSync(p))fs.copyFileSync(p,path.join(output,name));
}
let html=fs.readFileSync('recovered/landing.html','utf8');
html=html.replace('</head>',`<link rel="stylesheet" href="/local.css"><script src="/store.js"></script><script src="/routes.js"></script><script src="/runtime.js"></script><script src="/tools-ui.js" defer></script></head>`);
fs.writeFileSync(path.join(output,'index.html'),html);
fs.writeFileSync(path.join(output,'build-manifest.json'),JSON.stringify({builtAt:new Date().toISOString(),sourceVersion:'0.17.173',originalModuleCount:index.length,modifiedModules:modifications,htmlSourceSha256:crypto.createHash('sha256').update(fs.readFileSync('recovered/landing.html')).digest('hex')},null,2));
console.log('Built local-web; '+modifications.length+' patched modules; all '+index.length+' original modules retained.');
