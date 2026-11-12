import test from 'node:test';
import assert from 'node:assert/strict';
import {loadMetro} from './metro-harness.mjs';
const ROOT='/v1/shops/demo-shop';
test('an Excel file can be exported, parsed and applied locally without creating a sale',async()=>{
 const storage=new Map(),app=create(storage);
 const workbook=app.require(994);
 const bytes=workbook.exportWorkbook({products:[{id:'fixture',name:'کالای فایل محلی',stock:7,price:35000}],movements:[]});
 const rows=workbook.importWorkbook(bytes);
 await app.request(ROOT+'/imports/apply','POST',{rows,source:'excel'},{key:'import-workbook'});
 const next=create(storage);
 const inventory=await next.request(ROOT+'/inventory');
 const product=inventory.products.find(item=>item.name==='کالای فایل محلی');
 assert.equal(product.stock,7);
 assert.equal(product.version,1);
 const before=(await next.request(ROOT+'/summary?days=7')).days.map(day=>day.revenue);
 await next.request(ROOT+'/imports/apply','POST',{rows:[{name:product.name,stock:2}],source:'excel'});
 const after=await next.request(ROOT+'/inventory');
 assert.equal(after.products.find(item=>item.id===product.id).stock,2);
 assert.equal(after.products.find(item=>item.id===product.id).version,2);
 assert.deepEqual((await next.request(ROOT+'/summary?days=7')).days.map(day=>day.revenue),before);
});

test('a rejected catalog import leaves earlier rows in the file unapplied',async()=>{
 const app=create();
 const existing=(await app.request(ROOT+'/inventory')).products[0];
 const rows=[{name:'کالای نباید ثبت شود',stock:3},{name:existing.name,stock:2},{name:existing.name,stock:4}];
 await assert.rejects(app.request(ROOT+'/imports/apply','POST',{rows,source:'json'}),/import_invalid/);
 assert(!(await app.request(ROOT+'/inventory')).products.some(item=>item.name===rows[0].name));
});

test('the original bank-account form route persists edits in this browser',async()=>{
 const storage=new Map(),app=create(storage);
 const path=ROOT+'/bank-account';
 assert.equal((await app.request(path)).account,null);
 await app.request(path,'PUT',{holderName:'صاحب حساب آزمایشی',cardNumber:'1234567890123456',sheba:''});
 assert.equal((await create(storage).request(path)).account.holderName,'صاحب حساب آزمایشی');
});

function create(storage=new Map()){
 const app=loadMetro({directory:'local-web/_expo/static/js/web',runtime:true,storage});
 const api=app.require(415);
 return {...app,request:api.request};
}

test('local customer-club edits survive a fresh application runtime',async()=>{
 const storage=new Map();
 const app=create(storage);
 const path='/v1/shops/demo-shop/club';
 const before=await app.request(path);
 await app.request(path,'PUT',{...before.club,earnToman:20000});
 const restarted=create(storage);
 assert.equal((await restarted.request(path)).club.earnToman,20000);
});

test('all local premium features are available with no checkout',async()=>{
 const app=create();
 const bill=await app.request(ROOT+'/billing');
 for(const name of ['team','reports','spreadsheet','pdf','integrations','ledger','cheques','club'])assert.equal(bill.subscription.features[name],true,name);
 assert.equal(app.require(461).clubPlanOpen(bill.subscription.plan_id),true);
 assert.equal(bill.checkoutAvailable,false);
 assert.equal((await app.request('/v1/auth/session')).user.id,'local-owner');
 await assert.rejects(app.request(ROOT+'/billing/checkout','POST',{}),/local_payment_not_required/);
});

test('customer club members and team configuration survive reload',async()=>{
 const storage=new Map(),app=create(storage);
 const joined=await app.request(ROOT+'/club/members','POST',{name:'مشتری آزمایشی محلی',phone:'09120000001'});
 assert.equal(joined.contact.name,'مشتری آزمایشی محلی');
 const team=await app.request(ROOT+'/staff','POST',{name:'همکار محلی',username:'local_test',access:{see:{ledger:true},do:{sell:true}}});
 assert(team.staff.id);
 const next=create(storage);
 assert((await next.request(ROOT+'/club')).members.some(m=>m.name==='مشتری آزمایشی محلی'));
 assert((await next.request(ROOT+'/staff')).staff.some(m=>m.name==='همکار محلی'));
});

test('failed storage restores the pre-write state and reports failure',async()=>{
 const app=create(),path=ROOT+'/club';
 const before=await app.request(path);
 app.context.AnbariLocalStore.write=async()=>{throw Object.assign(new Error('Quota exceeded'),{name:'QuotaExceededError'});};
 await assert.rejects(app.request(path,'PUT',{...before.club,earnToman:99999}),/local_storage_full/);
 assert.equal(app.require(449).demoSnapshot().products.length>0,true);
 assert.equal(app.local.states.get('engine').get().club.rule.earnToman,before.club.earnToman);
});

test('backup preserves Map fields and rejects invalid replacement data',async()=>{
 const app=create();await app.request(ROOT+'/club');
 const raw=await app.local.backup();
 await app.request(ROOT+'/club','PUT',{enabled:true,earnToman:70000,redeemPoints:100,redeemToman:10000});
 await app.local.importBackup(raw);
 assert.equal((await app.request(ROOT+'/club')).club.earnToman,10000);
 assert(app.local.states.get('engine').get().notes instanceof Map);
 await assert.rejects(app.local.importBackup('{"version":1,"states":{}}'),/local_backup_invalid/);
});

test('external services fail explicitly and no remote network is used',async()=>{
 const app=create();
 await assert.rejects(app.request('/api/voice','POST',{}),/local_service_unavailable/);
 await assert.rejects(app.context.fetch('https://myanbari.ir/v1/auth/session'),/local_external_network_disabled/);
});

test('a second open tab cannot overwrite another tab changes with an old snapshot',async()=>{
 const storage=new Map(),first=create(storage),second=create(storage);
 await first.request(ROOT+'/club');await second.request(ROOT+'/club');
 await first.request(ROOT+'/club','PUT',{enabled:true,earnToman:55555,redeemPoints:100,redeemToman:10000});
 await second.request(ROOT+'/dashboard');
 assert.equal((await create(storage).request(ROOT+'/club')).club.earnToman,55555);
});

test('invalid recipe-state backup cannot poison saved data or running state',async()=>{
 const storage=new Map(),app=create(storage);await app.request(ROOT+'/club');
 const raw=await app.local.backup();
 const invalid=JSON.parse(raw);invalid.states.recipes={oops:true};
 await assert.rejects(app.local.importBackup(JSON.stringify(invalid)),/local_backup_invalid/);
 assert.equal((await create(storage).request(ROOT+'/club')).club.earnToman,10000);
});

test('purchase, credit sale, club points and settlement stay consistent after restart',async()=>{
 const storage=new Map(),app=create(storage);
 const member=await app.request(ROOT+'/club/members','POST',{name:'آزمون گردش کامل',phone:'09120000002'});
 const product=(await app.request(ROOT+'/inventory')).products.find(p=>p.stock>2);
 const purchased=await app.request(ROOT+'/purchases','POST',{lines:[{productId:product.id,name:product.name,quantity:2,unitCost:10000}],payment:{method:'cash'}});
 assert(purchased.purchase.id);
 const sale=await app.request(ROOT+'/sales','POST',{contactId:member.contact.id,lines:[{productId:product.id,name:product.name,quantity:2,unitPrice:20000}],payment:{method:'credit'}});
 assert.equal(sale.sale.totalToman,40000);
 let person=(await app.request(ROOT+'/contacts')).contacts.find(c=>c.id===member.contact.id);
 assert.equal(person.balanceToman,40000);
 await app.request(ROOT+'/ledger/payments','POST',{contactId:person.id,direction:'in',amountToman:40000,method:'cash'});
 const next=create(storage);
 person=(await next.request(ROOT+'/contacts')).contacts.find(c=>c.id===member.contact.id);
 assert.equal(person.balanceToman,0);
 assert.equal((await next.request(ROOT+'/inventory')).products.find(p=>p.id===product.id).stock,product.stock);
 assert.equal((await next.request(ROOT+'/club/members/'+person.id)).member.points,4);
});

test('repeating a write with the same operation key does not sell twice',async()=>{
 const app=create(),p=(await app.request(ROOT+'/inventory')).products.find(p=>p.stock>2);
 const body={lines:[{productId:p.id,name:p.name,quantity:1,unitPrice:20000}],payment:{method:'cash'}};
 const one=await app.request(ROOT+'/sales','POST',body,{key:'sale-operation-1'});
 const two=await app.request(ROOT+'/sales','POST',body,{key:'sale-operation-1'});
 assert.equal(one.sale.id,two.sale.id);
 assert.equal((await app.request(ROOT+'/inventory')).products.find(x=>x.id===p.id).stock,p.stock-1);
});

test('expense and payroll state survive reload and a valid backup round trip',async()=>{
 const storage=new Map(),app=create(storage);
 const expenses=await app.request(ROOT+'/expenses');
 const payroll=await app.request(ROOT+'/staff-money');
 assert(expenses.expenses.length>0);assert(payroll.people.length>0);
 const raw=await app.local.backup();await app.local.importBackup(raw);
 const next=create(storage);
 assert.equal((await next.request(ROOT+'/expenses')).expenses.length,expenses.expenses.length);
 assert.equal((await next.request(ROOT+'/staff-money')).people.length,payroll.people.length);
});

test('integration key creation is explicitly unavailable and never returns fake credentials',async()=>{
 const app=create();
 await assert.rejects(app.request(ROOT+'/integrations/keys','POST',{name:'test'}),/local_integration_service_unavailable/);
 assert.equal((await app.request(ROOT+'/integrations/keys')).keys.length,0);
});

test('personal-name editing uses the original profile endpoint and persists',async()=>{
 const storage=new Map(),app=create(storage);
 await app.request('/v1/me/profile','PATCH',{name:'مدیر آزمایشی'});
 assert.equal((await create(storage).request('/v1/auth/session')).user.name,'مدیر آزمایشی');
});

test('invalid operation-receipts backup is rejected before it can poison writes',async()=>{
 const app=create();await app.request(ROOT+'/club');
 const invalid=JSON.parse(await app.local.backup());invalid.states.local.receipts={};
 await assert.rejects(app.local.importBackup(JSON.stringify(invalid)),/local_backup_invalid/);
 await app.request(ROOT+'/club','PUT',{enabled:true,earnToman:25000,redeemPoints:100,redeemToman:10000},{key:'club-rule-operation'});
 assert.equal((await app.request(ROOT+'/club')).club.earnToman,25000);
});

test('original account-gate demo cleanup cannot erase a local workspace on login',async()=>{
 const app=create();
 await app.request(ROOT+'/club/members','POST',{name:'عضو ماندگار',phone:'09120000004'});
 app.require(449).clearDemo();
 assert((await app.request(ROOT+'/club')).members.some(m=>m.name==='عضو ماندگار'));
});
