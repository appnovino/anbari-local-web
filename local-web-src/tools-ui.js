(function (g) {
  'use strict';
  function start() {
    const button=document.createElement('button');
    button.className='local-mode-button';button.textContent='محلی · رایگان';button.title='وضعیت نسخهٔ محلی و پشتیبان‌گیری';
    const panel=document.createElement('dialog');panel.className='local-mode-panel';panel.dir='rtl';
    panel.innerHTML='<form method="dialog"><button class="local-close" aria-label="بستن">×</button></form><h2>نسخهٔ محلی و رایگان</h2><p>اطلاعات در همین مرورگر ذخیره می‌شود. امکانات محلی شامل باشگاه، گزارش‌ها، فاکتورها و کارکنان به پرداخت نیاز ندارند.</p><p>ارسال پیامک و ایمیل، ورود واقعی، پرداخت، همگام‌سازی دستگاه‌ها و هوش مصنوعی ابری به سرویس خارجی نیاز دارند و اینجا انجام نمی‌شوند. حساب‌ها و کلیدهای اتصال این نسخه فقط محلی‌اند.</p><div class="local-actions"><button type="button" data-action="backup">دریافت پشتیبان</button><button type="button" data-action="restore">بازیابی پشتیبان</button></div><p class="local-feedback" role="status"></p><input type="file" accept="application/json,.json" hidden>';
    const feedback=panel.querySelector('.local-feedback'),input=panel.querySelector('input');
    button.onclick=()=>panel.showModal();
    panel.querySelector('[data-action="backup"]').onclick=async()=>{
      try{
        const raw=await g.AnbariLocal.backup();
        const url=URL.createObjectURL(new Blob([raw],{type:'application/json'}));
        const link=document.createElement('a');link.href=url;link.download='anbari-local-'+new Date().toISOString().slice(0,10)+'.json';link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
        feedback.textContent='فایل پشتیبان آماده شد. آن را در محل امن نگه دارید.';
      }catch{feedback.textContent='گرفتن پشتیبان انجام نشد؛ فضای ذخیره‌سازی و دسترسی مرورگر را بررسی کنید.';}
    };
    panel.querySelector('[data-action="restore"]').onclick=()=>input.click();
    input.onchange=async()=>{
      const file=input.files[0];if(!file)return;
      if(!g.confirm('اطلاعات فعلی این نسخهٔ محلی با فایل پشتیبان جایگزین شود؟')){input.value='';return;}
      try{await g.AnbariLocal.importBackup(await file.text());g.location.reload();}
      catch{feedback.textContent='فایل معتبر نیست یا ذخیره انجام نشد. اطلاعات فعلی حفظ شده است.';input.value='';}
    };
    document.body.append(button,panel);
    g.AnbariLocal.ready.catch(()=>{button.textContent='خطای ذخیره‌سازی محلی';button.classList.add('local-error');});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})(globalThis);
