// Offline mode (0.17.52): this worker (registered at app start, scope /) also keeps a copy of the app itself so the page
// opens without internet. Pages: network first, the saved copy when offline. Hashed bundles (/_expo/static/): saved once.
// Fonts and images: saved copy, refreshed in the background. Never cached: /v1 and /api (account and shop data, which
// the app keeps itself), /updates, /download and the on-phone voice model.
const SHELL='anbari-shell-v1',STATIC='anbari-static-v1',MAX_STATIC=200;
// Learn films the page kept for offline watching (frontend/src/notebook/learnVideoCacheWeb.ts): filled by the page, never cleared here
const LEARN='anbari-learn-v1';
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 for(const name of await caches.keys())if(name.startsWith('anbari-')&&![SHELL,STATIC,LEARN].includes(name))await caches.delete(name);
 await self.clients.claim();
})()));
const skip=path=>/^\/(v1|api|updates|download|admin)(\/|$)/.test(path)||/vosk|\/models\//i.test(path);
async function trim(cache){const keys=await cache.keys();for(let i=0;i<keys.length-MAX_STATIC;i++)await cache.delete(keys[i]);}
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==self.location.origin||skip(url.pathname))return;
 if(request.mode==='navigate'){
  event.respondWith((async()=>{
   try{const response=await fetch(request);if(response.ok&&url.pathname==='/'){const cache=await caches.open(SHELL);await cache.put('/',response.clone());}return response;}
   catch(error){const cache=await caches.open(SHELL);return (await cache.match(request,{ignoreSearch:true}))||(await cache.match('/'))||Response.error();}
  })());
  return;
 }
 const hashed=url.pathname.startsWith('/_expo/static/'),asset=hashed||/\.(js|css|ttf|otf|woff2?|png|jpe?g|webp|svg|ico|json)$/i.test(url.pathname);
 if(!asset)return;
 event.respondWith((async()=>{
  const cache=await caches.open(STATIC),saved=await cache.match(request);
  const refresh=fetch(request).then(async response=>{if(response.ok&&response.type==='basic'){await cache.put(request,response.clone());await trim(cache);}return response;});
  if(saved){if(!hashed)event.waitUntil(refresh.catch(()=>{}));return saved;}
  return refresh;
 })());
});
// Web Push (support answers, job 9b; backend/worker/webPush.mjs). Shows the note itself: the browser plays its own default
// sound (a page cannot choose another one). One note per ticket (tag), a new answer to the same ticket alerts again
// (renotify); it does not stay on screen by force. Only the app's own links are opened.
const TICKET=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function target(payload){
 const ticketId=typeof payload.ticketId==='string'&&TICKET.test(payload.ticketId)?payload.ticketId:null;
 if(ticketId)return {url:'/?ticket='+ticketId,ticketId};
 const url=typeof payload.url==='string'&&/^\/(?:preview\/[a-f0-9]{64})?\?view=alarms$/.test(payload.url)?payload.url:'/';
 return {url,ticketId:null};
}
self.addEventListener('push',event=>{
 let payload={};try{payload=event.data?.json()||{};}catch{}
 const title=typeof payload.title==='string'?payload.title.slice(0,100):'مای انباری',{url,ticketId}=target(payload);
 const tag=ticketId?'ticket-'+ticketId:typeof payload.tag==='string'?payload.tag.slice(0,60):'stock';
 event.waitUntil(self.registration.showNotification(title,{body:typeof payload.body==='string'?payload.body.slice(0,200):'',icon:'/anbari-touch-icon.png',badge:'/anbari-mark.png',
  tag,renotify:true,requireInteraction:false,lang:'fa',dir:'rtl',data:{url,ticketId}}));
});
self.addEventListener('notificationclick',event=>{
 event.notification.close();
 const {url='/',ticketId=null}=event.notification.data||{};
 event.waitUntil((async()=>{
  const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
  const client=clients.find(c=>new URL(c.url).origin===self.location.origin);
  if(client){await client.focus();client.postMessage(ticketId?{type:'OPEN_TICKET',ticketId}:{type:'OPEN_STOCK_ALARMS'});}
  else await self.clients.openWindow(url);
 })());
});
