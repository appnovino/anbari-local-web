import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url),{parse}=require('./js-vendor/babel-parser.cjs');
const manifest=JSON.parse(fs.readFileSync('local-web/build-manifest.json','utf8'));
const modified=new Set(manifest.modifiedModules.map(x=>x.id));
const original=new Map(),built=new Map();
const sha=text=>createHash('sha256').update(text).digest('hex');
for(const [directory,target] of [['recovered/web/readable',original],['local-web/_expo/static/js/web',built]]){
 for(const file of fs.readdirSync(directory).filter(x=>x.endsWith('.js'))){
  const text=fs.readFileSync(path.join(directory,file),'utf8'),ast=parse(text);
  for(const statement of ast.program.body){const call=statement.expression;if(call?.callee?.name==='__d')target.set(call.arguments[1].value,sha(text.slice(statement.start,statement.end)));}
 }
}
assert.equal(original.size,1308);assert.equal(built.size,1308);
let preserved=0;
for(const [id,hash] of original){assert(built.has(id));if(!modified.has(id)){assert.equal(built.get(id),hash,'Unexpected modification of module '+id);preserved++;}}
const assets=JSON.parse(fs.readFileSync('local-web-assets/asset-downloads.json','utf8'));
for(const asset of assets){assert(!asset.error);assert(fs.existsSync('local-web'+asset.path));if(asset.sha256)assert.equal(sha(fs.readFileSync('local-web'+asset.path)),asset.sha256);}
const result={verifiedAt:new Date().toISOString(),originalModules:original.size,retainedModules:built.size,byteIdenticalUnmodifiedModules:preserved,patchedModuleIds:[...modified].sort((a,b)=>a-b),publicAssets:assets.length};
fs.mkdirSync('docs',{recursive:true});
fs.writeFileSync('docs/local-build-verification.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));
