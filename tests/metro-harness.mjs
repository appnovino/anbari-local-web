import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {webcrypto} from 'node:crypto';

export function loadMetro({directory='recovered/web/readable', storage=new Map(), runtime=false}={}) {
 const factories=new Map(), modules=new Map();
 const document={cookie:'',documentElement:{style:{}},addEventListener(){},removeEventListener(){}};
 const sandbox={console,URL,URLSearchParams,TextEncoder,TextDecoder,Response,Request,Headers,AbortController,AbortSignal,Map,Set,Date,JSON,Math,Promise,setTimeout,clearTimeout,setInterval,clearInterval,queueMicrotask,crypto:webcrypto,atob,btoa,performance,
  process:{env:{NODE_ENV:'production'}},__DEV__:false,
  location:{hostname:'localhost',origin:'http://localhost:5173',href:'http://localhost:5173/',pathname:'/',search:'',hash:''},
  navigator:{language:'fa',languages:['fa'],onLine:true,userAgent:'Local-test'},
  document,addEventListener(){},removeEventListener(){},
  localStorage:{getItem:k=>storage.get(k)??null,setItem:(k,v)=>storage.set(k,String(v)),removeItem:k=>storage.delete(k)},
  fetch:async()=>{throw Error('Network calls are forbidden in local runtime tests');},
  __d:(factory,id,deps)=>factories.set(id,{factory,deps}),__r:()=>{},
 };
 sandbox.global=sandbox;sandbox.window=sandbox;sandbox.self=sandbox;
 const context=vm.createContext(sandbox);
 if(runtime){
  for(const filename of ['store.js','routes.js','runtime.js'])vm.runInContext(fs.readFileSync('local-web-src/'+filename,'utf8'),context,{filename});
 }
 for(const name of fs.readdirSync(directory).filter(x=>x.endsWith('.js'))){
  vm.runInContext(fs.readFileSync(path.join(directory,name),'utf8'),context,{filename:name});
 }
 function require(id){
  if(modules.has(id))return modules.get(id).exports;
  const entry=factories.get(id);if(!entry)throw Error('Missing module '+id);
  const module={exports:{}};modules.set(id,module);
  try{entry.factory(sandbox,require,importDefault,require,module,module.exports,entry.deps);}catch(error){error.message='Module '+id+': '+error.message;throw error;}
  return module.exports;
 }
 function importDefault(id){const m=require(id);return m?.__esModule?m.default:m;}
 require.importDefault=importDefault;require.importAll=require;
 return {require,context,storage,local:sandbox.AnbariLocal,factories};
}
