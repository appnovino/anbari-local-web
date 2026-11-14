const root = document.querySelector('#app');
const notice = document.querySelector('#message');
const sessionKey = 'novino.session';
const shopKey = 'novino.shop';
const number = new Intl.NumberFormat('fa-IR', { maximumFractionDigits: 3 });
const date = new Intl.DateTimeFormat('fa-IR', { dateStyle: 'medium' });
const paymentId = new URLSearchParams(location.search).get('payment');
const adminPage = location.pathname === '/admin';
let token = sessionStorage.getItem(sessionKey);
let shopId = sessionStorage.getItem(shopKey);
let methods;
let view = paymentId ? 'billing' : 'inventory';
let renderVersion = 0;

const statusLabels = {
  creating: 'در حال ساخت سفارش', pending: 'در انتظار تأیید', paid: 'تأییدشده',
  failed: 'ناموفق', review: 'نیازمند بررسی',
};
const kinds = {
  purchase: 'خرید', sale: 'فروش', adjustment: 'اصلاح موجودی', transfer: 'انتقال بین انبارها',
  receipt: 'دریافت', payment: 'پرداخت', expense: 'هزینه', redemption: 'مصرف امتیاز',
  reversal: 'اصلاح سند', 'sale-return': 'برگشت فروش', 'purchase-return': 'برگشت خرید',
};
const errors = {
  authentication_required: 'نشست شما پایان یافته است. دوباره وارد شوید.',
  invalid_credentials: 'ایمیل یا رمز عبور درست نیست.',
  sms_code_invalid_or_expired: 'کد پیامک نامعتبر، مصرف‌شده یا منقضی است.',
  sms_send_unavailable: 'ارسال پیامک انجام نشد. بعداً دوباره تلاش کنید.',
  service_limit_reached: 'سقف درخواست پر شده است. بعداً دوباره تلاش کنید.',
  api_rate_limited: 'تعداد درخواست‌ها زیاد است. یک دقیقه صبر کنید.',
  duplicate_product: 'هر کالا را یک بار وارد کنید و تعداد را در همان قلم بنویسید.',
  invalid_report_range: 'بازهٔ گزارش باید معتبر و حداکثر ۳۶۶ روز باشد.',
  platform_admin_required: 'این حساب دسترسی مدیریت سامانه ندارد.',
  insufficient_stock: 'موجودی این انبار کافی نیست.',
  registration_closed: 'ثبت‌نام در حال حاضر بسته است.',
  server_busy: 'سرویس مشغول است. کمی بعد دوباره تلاش کنید.',
  payment_not_found: 'این سفارش در فروشگاه انتخاب‌شده پیدا نشد.',
  intelligence_response_invalid: 'خروجی قابل استفاده‌ای از سرویس هوش مصنوعی دریافت نشد.',
};

function element(tag, attributes = {}, ...children) {
  const node = document.createElement(tag);
  for (const [name, value] of Object.entries(attributes)) node.setAttribute(name, value);
  node.append(...children.filter(child => child != null));
  return node;
}
function message(text, error = false) {
  notice.textContent = text;
  notice.hidden = !text;
  notice.dataset.error = String(error);
}
function displayError(error) {
  message(errors[error.message] ?? 'درخواست انجام نشد. ورودی را بررسی کنید و دوباره تلاش کنید.', true);
}
async function api(path, { method = 'GET', body, key } = {}) {
  const headers = { Accept: 'application/json' };
  if (token) headers.Authorization = 'Bearer ' + token;
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (key) headers['Idempotency-Key'] = key;
  const response = await fetch('/v1' + path, {
    method, headers, body: JSON.stringify(body), cache: 'no-store',
  });
  const data = await response.json();
  if (!response.ok) {
    const code = data.error?.code ?? 'request_failed';
    if (token && code === 'authentication_required') {
      remember(null);
      void render();
    }
    throw new Error(code);
  }
  return data;
}
const shopApi = (path, options) => api('/shops/' + shopId + path, options);
const post = (body, key) => ({ method: 'POST', body, key });
function remember(value) {
  token = value;
  if (value) sessionStorage.setItem(sessionKey, value);
  else {
    sessionStorage.removeItem(sessionKey);
    sessionStorage.removeItem(shopKey);
    shopId = null;
  }
}
function chooseShop(id) {
  shopId = id;
  sessionStorage.setItem(shopKey, id);
}
function input(name, label, attributes = {}) {
  return element('label', {}, label, element('input', { name, required: '', ...attributes }));
}
function optional(field) {
  field.lastElementChild.removeAttribute('required');
  return field;
}
function select(name, label, entries, empty) {
  const node = element('select', { name, required: '' });
  if (empty != null) node.append(element('option', { value: '' }, empty));
  for (const [value, title] of entries) node.append(element('option', { value }, title));
  return element('label', {}, label, node);
}
function button(label, action, attrs = {}) {
  const node = element('button', { type: 'button', ...attrs }, label);
  node.addEventListener('click', async () => {
    node.disabled = true;
    message('');
    try { await action(); } catch (error) { displayError(error); }
    finally { node.disabled = false; }
  });
  return node;
}
function form(label, fields, action) {
  const submit = element('button', { type: 'submit' }, label);
  const node = element('form', {}, ...fields, submit);
  let key = crypto.randomUUID();
  node.addEventListener('input', () => { key = crypto.randomUUID(); });
  node.addEventListener('submit', async event => {
    event.preventDefault();
    if (submit.disabled) return;
    const fields = new FormData(node);
    const controls = [...node.elements].filter(control => !control.disabled);
    for (const control of controls) control.disabled = true;
    message('');
    try {
      await action(fields, key);
      key = crypto.randomUUID();
    } catch (error) { displayError(error); }
    finally { for (const control of controls) control.disabled = false; }
  });
  return node;
}
function panel(title, ...children) {
  return element('section', {}, element('h2', {}, title), ...children);
}
function table(columns, rows) {
  if (!rows.length) return element('p', {}, 'هنوز موردی ثبت نشده است.');
  return element('div', { class: 'table' }, element('table', {},
    element('thead', {}, element('tr', {}, ...columns.map(label => element('th', { scope: 'col' }, label)))),
    element('tbody', {}, ...rows.map(row => element('tr', {}, ...row.map(cell => element('td', {}, cell ?? '—'))))),
  ));
}
const money = value => number.format(BigInt(value ?? 0));
const options = rows => rows.map(row => [row.id, row.name]);
const values = fields => Object.fromEntries(fields);
const numeric = (name, label, minimum = '0', step = '1') => input(name, label, { type: 'number', min: minimum, step });
const title = (label, fields) => element('details', {}, element('summary', {}, label), ...fields);

function shopForm(label, fields, path, body = values, method = 'POST') {
  return form(label, fields, async (data, key) => {
    await shopApi(path, { method, body: body(data), key });
    await render();
  });
}

function movementForm(label, fields, products, action, { priced = false, signed = false } = {}) {
  const lines = element('div', { class: 'invoice-lines' });
  function addLine() {
    const choices = options(products);
    const line = element('fieldset', { class: 'invoice-line' }, element('legend', {}, 'قلم کالا'),
      select('productId', 'کالا', choices, 'انتخاب کالا'),
      numeric('quantity', 'تعداد', signed ? '-999999999' : '0.001', '0.001'),
      priced ? numeric('unitPrice', 'قیمت واحد به تومان') : null);
    const remove = button('حذف قلم', () => {
      line.remove();
      lines.dispatchEvent(new Event('input', { bubbles: true }));
      refresh();
    });
    line.append(remove);
    lines.append(line);
    refresh();
  }
  const add = button('افزودن قلم', () => {
    addLine();
    lines.dispatchEvent(new Event('input', { bubbles: true }));
  });
  function refresh() {
    add.hidden = lines.children.length >= Math.min(products.length, 100);
    for (const row of lines.children) row.lastElementChild.hidden = lines.children.length === 1;
  }
  addLine();
  return form(label, [...fields, lines, add], (data, key) => {
    const ids = data.getAll('productId');
    if (new Set(ids).size !== ids.length) throw new Error('duplicate_product');
    const quantities = data.getAll('quantity');
    const prices = data.getAll('unitPrice');
    for (const name of ['productId', 'quantity', 'unitPrice']) data.delete(name);
    const movements = ids.map((productId, index) => ({
      productId, quantity: quantities[index], ...(priced ? { unitPrice: Number(prices[index]) } : {}),
    }));
    return action(values(data), movements, key);
  });
}

function smsForm(purpose) {
  const container = element('div');
  const base = '/auth/sms/' + purpose;
  const start = form('ارسال کد', [
    input('phone', 'شماره موبایل', { type: 'tel', autocomplete: 'tel' }),
    purpose === 'link' ? input('password', 'رمز فعلی', { type: 'password', autocomplete: 'current-password' }) : null,
  ], async fields => {
    const { challengeId } = await api(base + '/request', post(values(fields)));
    container.replaceChildren(form('تأیید کد', [
      input('code', 'کد پیامک', { inputmode: 'numeric', autocomplete: 'one-time-code', pattern: '[0-9۰-۹٠-٩]{6}' }),
    ], async fields => {
      const code = fields.get('code').replace(/[۰-۹٠-٩]/g, digit => String(digit.charCodeAt(0) & 15));
      const result = await api(base + '/confirm', post({ challengeId, code }));
      if (purpose === 'login') remember(result.token);
      await render();
      if (purpose === 'link') message('شمارهٔ موبایل تأیید شد.');
    }), button('ارسال دوباره', () => container.replaceChildren(start)));
    message('اگر شماره برای این عملیات معتبر باشد، کد پیامک می‌رسد.');
  });
  container.append(start);
  return container;
}

function loginView() {
  const credentials = () => [
    input('email', 'ایمیل', { type: 'email', autocomplete: 'username' }),
    input('password', 'رمز عبور', { type: 'password', autocomplete: 'current-password', minlength: '12' }),
  ];
  const signIn = form('ورود', credentials(), async fields => {
    remember((await api('/auth/login', post(values(fields)))).token);
    await render();
  });
  const register = methods.registration && !adminPage ? panel('ساخت حساب', form('ثبت‌نام', [
    input('name', 'نام', { autocomplete: 'name' }), ...credentials(),
  ], async fields => {
    remember((await api('/auth/register', post(values(fields)))).token);
    await render();
  })) : null;
  return element('div', { class: 'cards' }, panel(adminPage ? 'ورود مدیر سامانه' : 'ورود به نووینو', signIn), register,
    methods.sms ? panel('ورود با پیامک', smsForm('login')) : null);
}

async function adminView(user) {
  const { counts, integrations, limits } = await api('/admin/overview');
  const state = key => integrations[key] ? 'فعال در تنظیمات سرور' : 'در انتظار تنظیم روی سرور';
  const passwordForm = form('ذخیره رمز جدید', [
    input('password', 'رمز فعلی', { type: 'password', autocomplete: 'current-password' }),
    input('newPassword', 'رمز جدید', { type: 'password', autocomplete: 'new-password', minlength: '12' }),
  ], async fields => {
    remember((await api('/auth/password', post(values(fields)))).token);
    await render();
    message('رمز تغییر کرد و نشست‌های قبلی بسته شدند.');
  });
  return element('div', {},
    element('div', { class: 'row' }, element('h1', {}, 'مدیریت نووینو'), element('span', {}, user.email),
      element('a', { class: 'action', href: '/' }, 'ورود به برنامه'),
      button('خروج', async () => { await api('/auth/logout', { method: 'POST' }); remember(null); await render(); })),
    panel('وضعیت سرویس‌ها', table(['سرویس', 'وضعیت'], [['هوش مصنوعی', state('ai')],
      ['کاوه‌نگار', state('sms')], ['زیبال', state('billing')]])),
    panel('آمار و محدودیت‌ها', table(['عنوان', 'مقدار'], [
      ['حساب‌ها', money(counts.accounts)], ['فروشگاه‌ها', money(counts.shops)], ['اشتراک‌های فعال', money(counts.subscriptions)],
      ['خواندن در دقیقه برای هر IP', number.format(limits.readPerMinute)],
      ['نوشتن در دقیقه برای هر IP', number.format(limits.writePerMinute)],
      ['درخواست هم‌زمان', number.format(limits.concurrent)],
    ])),
    panel('تغییر رمز عبور', passwordForm));
}

async function inventoryView(shop) {
  const [products, contacts, warehouses, report] = await Promise.all(
    ['/products', '/contacts', '/warehouses', '/reports/summary'].map(path => shopApi(path)),
  );
  const writable = shop.role !== 'viewer';
  const editor = (row, path, secondary, label) => writable ? title('ویرایش', [shopForm('ذخیره', [
    input('name', 'نام', { value: row.name }), optional(input(secondary, label, { value: row[secondary] ?? '' })),
  ], path + '/' + row.id, fields => ({ ...values(fields), version: row.version }), 'PUT')]) : null;
  const productPanel = panel('کالاها', table(['نام', 'کد', 'موجودی', 'عملیات'], products.items.map(row =>
    [row.name, row.sku, number.format(row.stock), editor(row, '/products', 'sku', 'کد کالا')])));
  const contactPanel = panel('طرف حساب و باشگاه مشتریان', table(['نام', 'مانده به تومان', 'امتیاز', 'عملیات'], contacts.items.map(row =>
    [row.name, money(row.balance), money(row.points), editor(row, '/contacts', 'phone', 'تلفن')])));
  if (shop.role === 'owner') {
    const settings = await shopApi('');
    contactPanel.append(title('تنظیم امتیاز باشگاه', [shopForm('ذخیره نرخ امتیاز', [
      input('pointsPerSale', 'امتیاز به‌ازای هر واحد فروخته‌شده', {
        type: 'number', min: '0', max: '1000000', step: '1', value: settings.pointsPerSale,
      }),
    ], '', fields => ({ pointsPerSale: Number(fields.get('pointsPerSale')) }), 'PATCH')]));
  }
  const stock = element('div');
  const warehousePanel = panel('انبارها', element('div', { class: 'row' }, ...warehouses.items.map(row =>
    button(row.name, async () => {
      const { items } = await shopApi('/warehouses/' + row.id + '/stock');
      stock.replaceChildren(table(['کالا', 'موجودی'], items.map(item => [item.name, number.format(item.stock)])));
    }))), stock);
  const creation = (path, label, fields) => form(label, fields, async fields => {
    await shopApi(path, post(values(fields)));
    await render();
  });
  if (writable) {
    productPanel.append(creation('/products', 'ثبت کالا', [input('name', 'نام کالا'), optional(input('sku', 'کد کالا'))]));
    contactPanel.append(creation('/contacts', 'ثبت طرف حساب', [input('name', 'نام طرف حساب'), optional(input('phone', 'تلفن'))]));
  }
  if (shop.role === 'owner') warehousePanel.append(creation('/warehouses', 'ثبت انبار', [input('name', 'نام انبار')]));
  const figures = data => [['خرید', data.purchases], ['فروش', data.sales], ['دریافت', data.receipts],
    ['پرداخت', data.payments], ['هزینه', data.expenses]];
  const totals = element('div');
  let activeReport = report;
  function setReport(data) {
    activeReport = data;
    totals.replaceChildren(table(['عنوان', 'مبلغ'], figures(data).map(([name, total]) => [name, money(total)])));
  }
  setReport(report);
  const filter = form('نمایش بازه', [
    input('from', 'از تاریخ', { type: 'date' }), input('to', 'تا تاریخ', { type: 'date' }),
  ], async fields => setReport(await shopApi('/reports/summary?' + new URLSearchParams(fields))));
  const exportReport = button('دانلود CSV', () => {
    const csv = ['عنوان,مبلغ به تومان', ...figures(activeReport).map(row => row.join(','))].join('\r\n');
    const url = URL.createObjectURL(new Blob(['\uFEFF', csv], { type: 'text/csv;charset=utf-8' }));
    const link = element('a', { href: url, download: 'novino-report.csv' });
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  });
  return element('div', {}, panel('خلاصه به تومان', filter,
    element('div', { class: 'row' }, button('همهٔ تاریخ‌ها', () => { filter.reset(); setReport(report); }), exportReport), totals),
    element('div', { class: 'cards' }, productPanel, contactPanel, warehousePanel));
}

async function documentsView(shop) {
  const [documents, products, contacts, warehouses] = await Promise.all(
    ['/documents', '/products', '/contacts', '/warehouses'].map(path => shopApi(path)),
  );
  const detail = element('div');
  const list = panel('اسناد', table(['نوع سند', 'مبلغ به تومان', 'تاریخ', 'جزئیات'], documents.items.map(row =>
    [kinds[row.kind], money(row.amount), date.format(new Date(row.createdAt)), button('مشاهده', async () => {
      detail.replaceChildren(await documentDetails(row.id, products.items, shop.role !== 'viewer'));
    })])), detail);
  if (shop.role === 'viewer') return list;
  const movement = products.items.length ? movementForm('ثبت خرید یا فروش', [
    select('kind', 'نوع سند', [['purchase', 'خرید'], ['sale', 'فروش']]),
    select('warehouseId', 'انبار', options(warehouses.items)),
    optional(select('contactId', 'طرف حساب', options(contacts.items), 'بدون طرف حساب')),
    optional(input('note', 'توضیح سند')),
  ], products.items, async ({ contactId, ...fields }, lines, key) => {
    await shopApi('/documents', post({ ...fields, contactId: contactId || null, lines }, key));
    await render();
    message('سند ثبت شد.');
  }, { priced: true }) : null;
  const simple = shopForm('ثبت سند', [
    select('kind', 'نوع عملیات', [['receipt', 'دریافت'], ['payment', 'پرداخت'], ['expense', 'هزینه'], ['redemption', 'مصرف امتیاز']]),
    optional(select('contactId', 'طرف حساب', options(contacts.items), 'بدون طرف حساب')),
    numeric('value', 'مبلغ به تومان یا تعداد امتیاز', '1'), optional(input('note', 'توضیح')),
  ], '/documents', fields => {
    const { kind, contactId, value, note } = values(fields);
    return { kind, contactId: kind === 'expense' ? null : contactId || null, note,
      [kind === 'redemption' ? 'points' : 'amount']: Number(value) };
  });
  const saveMovement = kind => async (fields, lines, key) => {
    await shopApi('/documents', post({ ...fields, kind, lines }, key));
    await render();
  };
  const transfer = warehouses.items.length > 1 && products.items.length ? movementForm('انتقال کالا', [
    select('fromWarehouseId', 'از انبار', options(warehouses.items)),
    select('toWarehouseId', 'به انبار', options(warehouses.items)),
  ], products.items, saveMovement('transfer')) : null;
  const adjustment = products.items.length ? movementForm('ثبت اصلاح موجودی', [
    select('warehouseId', 'انبار', options(warehouses.items)),
    optional(input('note', 'علت اصلاح')),
  ], products.items, saveMovement('adjustment'), { signed: true }) : null;
  return element('div', {}, panel('خرید و فروش', products.items.length ? movement :
    element('p', {}, 'ابتدا از بخش انبار یک کالا ثبت کنید.')), list,
  panel('عملیات دیگر', title('دریافت، پرداخت، هزینه و امتیاز', [simple]),
    transfer ? title('انتقال بین انبارها', [transfer]) : null,
    adjustment ? title('اصلاح موجودی', [adjustment]) : null));
}

async function documentDetails(id, products, writable) {
  const path = '/documents/' + id;
  const doc = await shopApi(path);
  const productName = productId => products.find(product => product.id === productId)?.name ?? productId;
  const documentPanel = panel(kinds[doc.kind] ?? 'جزئیات سند', doc.note ? element('p', {}, doc.note) : null,
    table(['کالا', 'گردش موجودی', 'قیمت واحد به تومان'], doc.movements.map(row =>
      [productName(row.productId), number.format(row.quantity), money(row.unitPrice)])));
  const attachments = table(['پیوست', 'دانلود', 'حذف'], doc.attachments.map(file => {
    const url = path + '/attachments/' + file.id;
    const download = button('دانلود', async () => {
      const result = await shopApi(url);
      const bytes = Uint8Array.from(atob(result.content), char => char.charCodeAt(0));
      const objectUrl = URL.createObjectURL(new Blob([bytes], { type: 'application/octet-stream' }));
      const link = element('a', { href: objectUrl, download: result.name });
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
    });
    return [file.name, download, writable ? button('حذف', async () => {
      if (!confirm('پیوست حذف شود؟')) return;
      await shopApi(url, { method: 'DELETE' });
      await render();
    }) : null];
  }));
  documentPanel.append(attachments);
  if (!writable) return documentPanel;
  documentPanel.append(form('افزودن پیوست', [
    input('file', 'فایل', { type: 'file', accept: 'image/png,image/jpeg,application/pdf' }),
  ], async (fields, key) => {
    const attachmentPath = '/shops/' + shopId + path + '/attachments';
    const file = fields.get('file');
    if (!file.size || file.size > 2097152) return message('فایل باید حداکثر ۲ مگابایت باشد.', true);
    const content = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    await api(attachmentPath, post({ name: file.name, mediaType: file.type, content }, key));
    await render();
  }));
  if (['purchase', 'sale'].includes(doc.kind) && doc.movements.length) {
    const eligible = doc.movements.map(row => ({ id: row.productId, name: productName(row.productId) }));
    documentPanel.append(title('برگشت کالا', [movementForm('ثبت برگشت', [
      optional(input('note', 'توضیح برگشت')),
    ], eligible, async (fields, lines, key) => {
      await shopApi(path + '/returns', post({ ...fields, lines }, key));
      await render();
    })]));
  }
  if (!['reversal', 'purchase-return', 'sale-return'].includes(doc.kind)) {
    documentPanel.append(button('ثبت سند معکوس', async () => {
      if (!confirm('برای این سند ثبت معکوس انجام شود؟')) return;
      await shopApi(path + '/reverse', post({}, crypto.randomUUID()));
      await render();
    }));
  }
  return documentPanel;
}

async function operationsView(shop) {
  const [cheques, reminders, shopping, contacts] = await Promise.all(
    ['/cheques', '/reminders', '/shopping-list', '/contacts'].map(path => shopApi(path)),
  );
  const writable = shop.role !== 'viewer';
  const chequeStates = { pending: 'باز', cleared: 'وصول‌شده', bounced: 'برگشتی', cancelled: 'لغوشده' };
  const chequePanel = panel('چک‌ها', table(['شماره', 'مبلغ به تومان', 'وضعیت', 'عملیات'], cheques.items.map(cheque =>
    [cheque.number, money(cheque.amount), chequeStates[cheque.status], writable && cheque.status === 'pending'
      ? element('div', { class: 'row' }, ...[['settle', 'وصول'], ['bounce', 'برگشت'], ['cancel', 'لغو']].map(([action, label]) =>
        button(label, async () => {
          await shopApi('/cheques/' + cheque.id + '/' + action, post({}, crypto.randomUUID()));
          await render();
        }))) : null])));
  if (writable && contacts.items.length) {
    chequePanel.append(shopForm('ثبت چک', [
      select('contactId', 'طرف حساب', options(contacts.items)), input('number', 'شماره چک'),
      numeric('amount', 'مبلغ به تومان', '1'), select('direction', 'نوع چک', [['incoming', 'دریافتی'], ['outgoing', 'پرداختی']]),
      input('dueOn', 'تاریخ سررسید', { type: 'date' }),
    ], '/cheques', fields => ({ ...values(fields), amount: Number(fields.get('amount')) })));
  }
  function tasks(rows, kind, heading) {
    const reminders = kind === '/reminders';
    const card = panel(heading, table(['عنوان', reminders ? 'موعد' : 'تعداد', 'وضعیت'], rows.map(row => [
      row.title, reminders ? date.format(new Date(row.dueAt)) : number.format(row.quantity),
      writable ? button(row.done ? 'بازکردن' : 'انجام شد', async () => {
        await shopApi(kind + '/' + row.id, { method: 'PATCH', body: { done: !row.done } });
        await render();
      }) : row.done ? 'انجام‌شده' : 'باز',
    ])));
    if (writable) card.append(shopForm('ثبت', [
      input('title', 'عنوان'), reminders ? input('dueAt', 'موعد', { type: 'datetime-local' }) : numeric('quantity', 'تعداد', '0.001', '0.001'),
    ], kind, fields => reminders ? { title: fields.get('title'), dueAt: new Date(fields.get('dueAt')).toISOString() } : values(fields)));
    return card;
  }
  return element('div', {}, chequePanel, element('div', { class: 'cards' },
    tasks(reminders.items, '/reminders', 'یادآورها'), tasks(shopping.items, '/shopping-list', 'لیست خرید')));
}

async function teamView() {
  const [members, employees, payments] = await Promise.all(
    ['/members', '/payroll/employees', '/payroll/payments'].map(path => shopApi(path)),
  );
  const memberPanel = panel('دسترسی اعضا', table(['نام', 'ایمیل', 'دسترسی', 'عملیات'], members.items.map(member => [
    member.name, member.email, { owner: 'مالک', staff: 'کارمند', viewer: 'مشاهده' }[member.role],
    member.role === 'owner' ? null : button('حذف دسترسی', async () => {
      if (!confirm('دسترسی این عضو حذف شود؟')) return;
      await shopApi('/members/' + member.id, { method: 'DELETE' });
      await render();
    }),
  ])), shopForm('افزودن عضو', [input('email', 'ایمیل حساب', { type: 'email' }),
    select('role', 'نقش', [['staff', 'کارمند'], ['viewer', 'مشاهده']])], '/members'));
  const pay = form('ثبت پرداخت حقوق', [
    select('employeeId', 'کارمند', options(employees.items)), input('period', 'ماه حقوق', { type: 'month' }),
    numeric('earnings', 'مبلغ ناخالص به تومان', '1'), numeric('deductions', 'کسورات به تومان'),
  ], async (fields, key) => {
    const { employeeId, period, earnings, deductions } = values(fields);
    await shopApi('/payroll/employees/' + employeeId + '/payments',
      post({ period, earnings: Number(earnings), deductions: Number(deductions) }, key));
    await render();
  });
  const payroll = panel('حقوق', table(['کارمند', 'ماه', 'خالص به تومان', 'وضعیت'], payments.items.map(payment => [
    employees.items.find(employee => employee.id === payment.employeeId)?.name, payment.period, money(payment.net),
    payment.reversalId ? 'اصلاح‌شده' : button('اصلاح پرداخت', async () => {
      if (!confirm('برای این پرداخت سند اصلاحی ثبت شود؟')) return;
      await shopApi('/payroll/payments/' + payment.id + '/reverse', post({}, crypto.randomUUID()));
      await render();
    }),
  ])), shopForm('تعریف کارمند', [input('name', 'نام کارمند')], '/payroll/employees'), employees.items.length ? pay : null);
  return element('div', {}, memberPanel, payroll);
}

async function billingView(shop) {
  if (shop.role !== 'owner') return panel('اشتراک', element('p', {}, 'مدیریت اشتراک در اختیار مالک فروشگاه است.'));
  const data = await shopApi('/billing');
  const subscription = data.subscription;
  const current = element('p', {}, subscription?.active
    ? 'اعتبار تا ' + date.format(new Date(subscription.expiresAt)) : 'اشتراک فعال ندارید.');
  if (!data.ready) return panel('اشتراک', current, element('p', {}, 'درگاه پرداخت هنوز فعال نیست.'));
  const checkoutKey = 'novino.checkout.' + shop.id;
  function bankLink(payment) {
    if (!payment.checkoutUrl) return null;
    const url = new URL(payment.checkoutUrl);
    if (url.origin !== 'https://gateway.zibal.ir' || !/^\/start\/[1-9]\d*$/.test(url.pathname)) return null;
    return element('a', { href: url.href, class: 'action', rel: 'noreferrer' }, 'رفتن به درگاه زیبال');
  }
  const bank = element('div', { class: 'row' });
  const history = await shopApi('/billing/payments?limit=20');
  if (paymentId) {
    const returned = history.items.find(payment => payment.id === paymentId);
    if (returned) bank.append(element('p', {}, 'وضعیت پرداخت بازگشتی: ' + statusLabels[returned.status]));
  }
  const checkout = button('ایجاد سفارش پرداخت', async () => {
    const key = sessionStorage.getItem(checkoutKey) ?? crypto.randomUUID();
    sessionStorage.setItem(checkoutKey, key);
    const payment = await shopApi('/billing/checkout', post({}, key));
    if (payment.status !== 'creating') sessionStorage.removeItem(checkoutKey);
    bank.replaceChildren(element('p', {}, statusLabels[payment.status]));
    const link = bankLink(payment);
    if (link) bank.append(link);
  });
  return panel('اشتراک', current, element('p', {}, money(data.plan.amountRial) + ' ریال برای ' +
    number.format(data.plan.durationDays) + ' روز'), checkout, bank, button('به‌روزرسانی وضعیت', render),
  table(['مبلغ به ریال', 'وضعیت', 'ادامه'], history.items.map(payment =>
    [money(payment.amountRial), statusLabels[payment.status], bankLink(payment)])));
}

async function aiView(shop) {
  const { ready } = await shopApi('/ai/status');
  if (!ready || shop.role === 'viewer') return panel('پیش‌نویس فاکتور', element('p', {}, ready
    ? 'ساخت پیش‌نویس به دسترسی ثبت سند نیاز دارد.' : 'سرویس هوش مصنوعی هنوز فعال نیست.'));
  const result = element('div');
  return panel('پیش‌نویس فاکتور', form('استخراج اقلام', [
    element('label', {}, 'متن فاکتور', element('textarea', { name: 'text', maxlength: '20000', rows: '6', required: '' })),
  ], async fields => {
    const { draft } = await shopApi('/ai/invoices/parse', post({ text: fields.get('text') }));
    result.replaceChildren(table(['کالا', 'تعداد', 'قیمت واحد به تومان'], draft.lines.map(line =>
      [line.name, line.quantity == null ? '—' : number.format(line.quantity), line.unitPriceToman == null ? '—' : money(line.unitPriceToman)])));
  }), result);
}

const views = [
  ['inventory', 'انبار و گزارش', inventoryView],
  ['documents', 'خرید و فروش', documentsView],
  ['operations', 'چک و پیگیری', operationsView],
  ['team', 'تیم و حقوق', teamView],
  ['billing', 'اشتراک', billingView],
  ['ai', 'پیش‌نویس فاکتور', aiView],
  ['account', 'حساب من', () => panel('حساب من', methods.sms ? smsForm('link') : element('p', {}, 'ورود پیامکی هنوز فعال نیست.'))],
];

async function render() {
  const version = ++renderVersion;
  const current = () => version === renderVersion;
  root.inert = true;
  try {
    methods ??= await api('/auth/methods');
    if (!current()) return;
    if (!token) {
      root.replaceChildren(loginView());
      return;
    }
    if (adminPage) {
      const { user } = await api('/auth/session');
      const page = await adminView(user);
      if (current()) root.replaceChildren(page);
      return;
    }
    const [{ user }, { items: shops }] = await Promise.all([api('/auth/session'), api('/shops')]);
    if (!current()) return;
    const shop = shops.find(item => item.id === shopId) ?? shops[0];
    const create = panel('فروشگاه جدید', form('ایجاد فروشگاه', [input('name', 'نام فروشگاه')], async fields => {
      chooseShop((await api('/shops', post(values(fields)))).id);
      view = 'inventory';
      await render();
    }));
    const heading = element('div', { class: 'row' }, element('h1', {}, shop?.name ?? user.name),
      button('خروج', async () => { await api('/auth/logout', { method: 'POST' }); remember(null); await render(); }));
    if (!shop) {
      root.replaceChildren(heading, create);
      return;
    }
    chooseShop(shop.id);
    const switcher = select('shop', 'فروشگاه', options(shops));
    switcher.lastElementChild.value = shop.id;
    switcher.addEventListener('change', async event => { chooseShop(event.target.value); await render(); });
    const available = views.filter(([id]) => id !== 'team' || shop.role === 'owner');
    if (!available.some(([id]) => id === view)) view = 'inventory';
    const navigation = element('nav', { 'aria-label': 'بخش‌های نووینو' }, ...available.map(([id, label]) =>
      button(label, async () => { view = id; await render(); }, id === view ? { 'aria-current': 'page' } : {})));
    const content = element('div', { 'aria-busy': 'true' }, 'در حال دریافت اطلاعات…');
    root.replaceChildren(heading, switcher, navigation, content);
    const page = await available.find(([id]) => id === view)[2](shop);
    if (current()) {
      content.replaceChildren(page, create);
      content.removeAttribute('aria-busy');
    }
  } catch (error) {
    if (current()) {
      displayError(error);
      if (adminPage && error.message === 'platform_admin_required') {
        root.replaceChildren(panel('مدیریت نووینو',
          button('خروج', async () => { await api('/auth/logout', { method: 'POST' }); remember(null); await render(); })));
      }
      root.querySelector('[aria-busy]')?.remove();
      if (!root.childNodes.length) root.append(button('تلاش دوباره', render));
    }
  } finally { if (current()) root.inert = false; }
}

void render();
