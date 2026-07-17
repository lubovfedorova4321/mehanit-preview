(function(){
  function render(){
    var oldHeader=document.querySelector('header');
    if(oldHeader){oldHeader.outerHTML='<header class="site-header"><div class="site-nav"><a class="site-logo" href="index.html"><img src="mehanit-logo-cropped.png" alt="Механит"></a><nav class="site-menu" aria-label="Главное меню"><div class="site-menu-item"><a href="equipment.html">Оборудование</a><div class="site-dropdown"><a href="equipment-turning.html">Токарное оборудование</a><a href="equipment-milling.html">Фрезерное оборудование</a><a href="equipment-milling-5-osevye-obrabatyvayuschie-centry.html">5-осевые обрабатывающие центры</a><a href="equipment-milling-portalnye-frezernye-centry.html">Портальные обрабатывающие центры</a><a href="equipment-boring.html">Горизонтально-расточные станки</a><a href="equipment-grinding.html">Шлифовальные станки</a><a href="equipment-saw.html">Ленточнопильные станки</a><a href="equipment-edm.html">Электроэрозионное оборудование</a><a href="equipment-drilling.html">Сверлильные станки</a><a href="equipment-laser.html">Лазерная резка</a></div></div><div class="site-menu-item"><a href="solutions.html">Решения</a><div class="site-dropdown"><a href="solution-auto.html">Автомобильная промышленность</a><a href="solution-aero.html">Авиационная промышленность</a><a href="solution-ship.html">Судостроение</a><a href="solution-rail.html">Железнодорожное машиностроение</a><a href="solution-agro.html">Сельхоз и дорожно-строительное</a><a href="solution-instr.html">Приборостроение</a><a href="solution-fuel.html">Топливно-энергетический сектор</a><a href="solution-mining.html">Горнорудная промышленность</a><a href="solution-space.html">Космическая промышленность</a></div></div><a href="stock.html">Станки в наличии</a><div class="site-menu-item"><a href="production-equipment.html">Комплексный подход</a><div class="site-dropdown"><a href="production-cutting-tools.html">Режущий инструмент</a><a href="production-tooling.html">Оснастка</a><a href="production-measurement.html">Измерение</a><a href="production-automation.html">Автоматизация</a><a href="production-coolant-chips.html">СОЖ и стружка</a><a href="production-complex.html">Комплексное оснащение</a></div></div><a href="press.html">Пресс-центр</a><a href="contacts.html">Контакты</a><div class="site-menu-mobile-extra"><button class="site-menu-mobile-action" id="mobileSearchBtn" type="button">Поиск по сайту</button><button class="site-menu-mobile-action site-menu-mobile-cta" id="mobileCallbackBtn" type="button">Заказать звонок</button><a class="site-menu-mobile-action" href="tel:88005511206">8 800 55 11 206</a><a class="site-menu-mobile-action" href="mailto:info@mehanit.ru">info@mehanit.ru</a><div class="site-menu-mobile-messengers"><a aria-label="Telegram" href="https://t.me/mehanit" rel="noopener" target="_blank"><svg viewBox="0 0 24 24"><path d="M21.7 3.4 18.5 20c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2L7.2 14.1 2.8 12.7c-1-.3-1-1 0-1.4L20.5 2.6c.8-.3 1.5.2 1.2.8Z"/></svg>Telegram</a><a aria-label="MAX" href="https://max.ru/id5256089670_biz" rel="noopener" target="_blank">MAX</a></div></div></nav><div class="site-actions"><button class="site-search-btn" id="headerSearchBtn" type="button" aria-label="Открыть поиск"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4.5 4.5"></path></svg></button><button class="site-cta" id="headerCallbackBtn" type="button">Заказать звонок</button><button class="site-phone" id="headerPhoneBtn" type="button" aria-expanded="false" aria-controls="headerContactsPanel"><span>8 800 55 11 206</span><svg class="site-phone-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"></path></svg></button><button class="site-burger" type="button" aria-label="Открыть меню">☰</button></div></div></header>'}
    var shellHeader=document.querySelector('.site-header');
    var shellBurger=document.querySelector('.site-burger');
    if(shellHeader&&shellBurger){shellBurger.addEventListener('click',function(){shellHeader.classList.toggle('menu-open')})}
    var oldFooter=document.querySelector('footer');
    if(oldFooter){oldFooter.outerHTML='<footer class="site-footer"><div class="site-footer-inner"><div class="site-footer-grid"><div class="site-footer-brand"><img src="mehanit-logo-cropped.png" alt="Механит"><p>Инженерный интегратор для металлообработки. Подбор оборудования под задачу, разработка технологии, поставка, пусконаладка и сервис с 2006 года.</p></div><div><h4>Оборудование</h4><a href="equipment-turning.html">Токарное и фрезерное</a><a href="equipment-edm.html">EDM и шлифование</a><a href="equipment-boring.html">Расточные и сверлильные</a><a href="equipment-saw.html">Пилы, лазер, гидроабразив</a><a href="stock.html">Склад в России</a></div><div><h4>Компания</h4><a href="equipment.html">Оборудование</a><a href="solutions.html">Решения</a><a href="stock.html">Склад РФ</a><a href="production-equipment.html">Комплексный подход</a><a href="press.html">Пресс-центр</a></div><div><h4>Контакты</h4><a href="tel:88005511206">8 800 55 11 206</a><a href="tel:+78312820500">8 (831) 282 0500</a><a href="mailto:info@mehanit.ru">info@mehanit.ru</a><a href="contacts.html">Нижний Новгород,<br>Южное шоссе, 16В</a><p class="site-footer-req">ОГРН 1095256004370<br>ИНН 5256089670<br>КПП 525601001</p></div></div><div class="site-footer-legal"><a href="cookie-policy.html" data-legal="cookie">Политика обработки файлов cookie</a><a href="privacy.html" data-legal="privacy">Политика конфиденциальности</a><a href="newsletter-consent.html" data-legal="newsletter">Согласие на получение рассылки</a><a href="personal-data-consent.html" data-legal="personal-data">Согласие на обработку персональных данных</a></div><div class="site-footer-bottom"><span>Механит · 2006–2026 · mehanit.ru</span><span>© 2026 ГК «Механит». Все права защищены.</span></div></div></footer>'}
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',render)}else{render()}

  /* ---- sticky-шапка: компактное состояние после небольшого скролла ---- */
  function initStickyHeader(){
    var header=document.querySelector('.site-header');
    if(!header)return;
    var ticking=false;
    function sync(){
      ticking=false;
      header.classList.toggle('is-stuck',window.scrollY>4);
    }
    window.addEventListener('scroll',function(){
      if(ticking)return;
      ticking=true;
      window.requestAnimationFrame(sync);
    },{passive:true});
    sync();
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initStickyHeader)}else{initStickyHeader()}

  /* ---- активный пункт меню: жёлтая линия + точка на реальном текущем разделе ---- */
  function initActiveNav(){
    var header=document.querySelector('.site-header');
    if(!header)return;
    var path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    function fileOf(a){return (a.getAttribute('href')||'').split('#')[0].split('/').pop().toLowerCase()}
    function isPageLink(a){return (a.getAttribute('href')||'').indexOf('#')===-1}
    function markActive(link){
      link.classList.add('is-active');
      link.setAttribute('aria-current','page');
    }
    header.querySelectorAll('.site-menu-item').forEach(function(item){
      var topLink=item.querySelector(':scope > a');
      if(!topLink)return;
      var children=item.querySelectorAll('.site-dropdown a');
      var match=isPageLink(topLink)&&fileOf(topLink)===path;
      children.forEach(function(a){if(isPageLink(a)&&fileOf(a)===path){match=true}});
      if(match)markActive(topLink);
    });
    header.querySelectorAll('.site-menu > a').forEach(function(link){
      if(isPageLink(link)&&fileOf(link)===path)markActive(link);
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initActiveNav)}else{initActiveNav()}

  /* ---- аналитика: используем существующий слой, если он появится (Яндекс.Метрика / dataLayer). На сайте пока не установлен ни один — событие безопасно no-op, пока счётчик не подключат. ---- */
  function trackEvent(event,params){
    if(typeof window.ym==='function'&&window.__ymCounterId){window.ym(window.__ymCounterId,'reachGoal',event,params)}
    if(window.dataLayer&&typeof window.dataLayer.push==='function'){var payload={event:event};for(var k in params){payload[k]=params[k]}window.dataLayer.push(payload)}
  }
  window.trackEvent=trackEvent;

  /* ---- боковая вкладка «Станки в наличии» + кнопка «Связаться» ---- */
  function initFloatingWidgets(){
    var STOCK_URL='stock.html';
    var STOCK_TAB_EXCLUDED_PAGES=['stock.html'];
    var path=(location.pathname.split('/').pop()||'index.html').toLowerCase();
    var stockTabAllowed=STOCK_TAB_EXCLUDED_PAGES.indexOf(path)===-1;

    /* убираем устаревший виджет мессенджеров там, где он ещё есть в разметке страницы */
    var legacy=document.querySelectorAll('.floating-messengers,.floating-action-panel');
    for(var i=0;i<legacy.length;i++){legacy[i].parentNode.removeChild(legacy[i])}

    var revealed=false,menuOpen=false,modalOpen=false,panelOpen=false;
    var stockTab=null;

    function stockTabVisible(){
      return revealed&&!menuOpen&&!modalOpen&&!panelOpen&&window.innerWidth>280;
    }
    function syncStockTab(){
      if(!stockTab)return;
      stockTab.classList.toggle('is-visible',stockTabVisible());
    }
    function syncLauncher(){
      if(!launcherWrap)return;
      launcherWrap.classList.toggle('is-dimmed',menuOpen);
    }

    if(stockTabAllowed){
      stockTab=document.createElement('a');
      stockTab.href=STOCK_URL;
      stockTab.className='stock-tab';
      stockTab.setAttribute('aria-label','Посмотреть станки в наличии');
      stockTab.innerHTML='<span class="stock-tab-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><rect x="2" y="14.2" width="20" height="2.6" rx="1"></rect><rect x="3" y="6" width="6.4" height="8" rx="1"></rect><circle cx="6.2" cy="10" r="1.6"></circle><path d="M9.4 10h8.6"></path><rect x="17" y="8" width="3.2" height="4" rx="0.6"></rect></svg></span><span class="stock-tab-text"><span class="stock-tab-text-full">Посмотреть станки в наличии</span><span class="stock-tab-text-short">Станки в наличии</span> <span class="stock-tab-arrow" aria-hidden="true">→</span></span>';
      stockTab.addEventListener('click',function(){
        trackEvent('stock_machines_tab_click',{
          page_path:location.pathname,
          page_title:document.title,
          device_type:(window.innerWidth<=900?'mobile':'desktop'),
          placement:'left_fixed_tab'
        });
      });
      document.body.appendChild(stockTab);

      var revealTicking=false;
      function onScroll(){
        if(revealTicking)return;
        revealTicking=true;
        window.requestAnimationFrame(function(){
          revealTicking=false;
          if(!revealed&&window.scrollY>180){
            revealed=true;
            syncStockTab();
            window.removeEventListener('scroll',onScroll);
          }
        });
      }
      window.addEventListener('scroll',onScroll,{passive:true});
      onScroll();
      window.addEventListener('resize',syncStockTab,{passive:true});
    }

    /* ---- «Связаться»: launcher + раскрываемая панель каналов ---- */
    var launcherWrap=document.createElement('div');
    launcherWrap.className='contact-widget';
    launcherWrap.innerHTML='<button type="button" class="contact-launcher" id="contactLauncher" aria-expanded="false" aria-controls="contactPanel"><span class="contact-launcher-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M4 5h16v11H8l-4 4Z"></path></svg></span><span class="contact-launcher-text">Связаться</span></button><div class="contact-panel" id="contactPanel" role="dialog" aria-modal="false" aria-labelledby="contactPanelTitle" hidden><div class="contact-panel-title" id="contactPanelTitle">Связаться через</div><a class="contact-panel-row" href="https://t.me/mehanit" target="_blank" rel="noopener"><span class="contact-panel-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M21.7 3.4 18.5 20c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2L7.2 14.1 2.8 12.7c-1-.3-1-1 0-1.4L20.5 2.6c.8-.3 1.5.2 1.2.8Z"/></svg></span>Telegram</a><a class="contact-panel-row" href="https://max.ru/id5256089670_biz" target="_blank" rel="noopener"><span class="contact-panel-ic contact-panel-ic-max" aria-hidden="true">MAX</span>MAX</a><a class="contact-panel-row" href="tel:88005511206"><span class="contact-panel-ic" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.2c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1Z"></path></svg></span>Позвонить</a></div>';
    document.body.appendChild(launcherWrap);

    var launcher=launcherWrap.querySelector('.contact-launcher');
    var panel=launcherWrap.querySelector('.contact-panel');

    function onPanelKeydown(e){
      if(e.key==='Escape'){closePanel(true);return}
      if(e.key==='Tab'){
        var f=panel.querySelectorAll('a,button');
        if(!f.length)return;
        var first=f[0],last=f[f.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
      }
    }
    function onOutsideClick(e){
      if(!panel.contains(e.target)&&e.target!==launcher){closePanel(false)}
    }
    function openPanel(){
      panel.hidden=false;
      window.requestAnimationFrame(function(){panel.classList.add('is-open')});
      launcher.setAttribute('aria-expanded','true');
      panelOpen=true;syncStockTab();
      document.addEventListener('keydown',onPanelKeydown);
      document.addEventListener('click',onOutsideClick,true);
      var firstLink=panel.querySelector('a');
      if(firstLink)firstLink.focus();
    }
    function closePanel(returnFocus){
      panel.classList.remove('is-open');
      launcher.setAttribute('aria-expanded','false');
      panelOpen=false;syncStockTab();
      document.removeEventListener('keydown',onPanelKeydown);
      document.removeEventListener('click',onOutsideClick,true);
      window.setTimeout(function(){panel.hidden=true},220);
      if(returnFocus)launcher.focus();
    }
    launcher.addEventListener('click',function(){
      if(panelOpen){closePanel(true)}else{openPanel()}
    });

    /* ---- закрытие мобильного меню / модалок автоматически прячет вкладку и приглушает панель связи ---- */
    var header=document.querySelector('.site-header');
    var burger=document.querySelector('.site-burger');
    if(burger){
      burger.addEventListener('click',function(){
        menuOpen=header.classList.contains('menu-open');
        syncStockTab();syncLauncher();
      });
    }
    if(window.MutationObserver){
      new MutationObserver(function(){
        modalOpen=document.body.style.overflow==='hidden';
        syncStockTab();
      }).observe(document.body,{attributes:true,attributeFilter:['style']});
    }
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initFloatingWidgets)}else{initFloatingWidgets()}

  /* ---- реальный индекс поиска по сайту (перенесён и расширен из существующего поиска на главной) ---- */
  var HEADER_SEARCH_ITEMS=[
    {title:'Токарный станок с ЧПУ Ø450×500 мм',category:'Станки в наличии',url:'stock-turning-450-500.html',text:'Токарное оборудование в наличии на складе.'},
    {title:'Токарный станок с ЧПУ Ø600×1100 мм',category:'Станки в наличии',url:'stock-turning-600-1100.html',text:'Токарное оборудование в наличии на складе.'},
    {title:'Токарный центр Ø680×950 мм',category:'Станки в наличии',url:'stock-turning-680-950.html',text:'Токарный обрабатывающий центр в наличии.'},
    {title:'Центр с приводным инструментом',category:'Станки в наличии',url:'stock-turning-live-tooling.html',text:'Токарный центр с приводным инструментом.'},
    {title:'Токарный центр TN500',category:'Станки в наличии',url:'stock-turning-tn500.html',text:'Токарный центр в наличии на складе.'},
    {title:'Вертикально-фрезерный центр, 3 оси',category:'Станки в наличии',url:'stock-vmc-3-axis.html',text:'Фрезерное оборудование в наличии.'},
    {title:'Вертикально-фрезерный центр, 3+1 оси',category:'Станки в наличии',url:'stock-vmc-3-plus-1.html',text:'Фрезерное оборудование в наличии.'},
    {title:'Барфидер Fedek DH65 S2',category:'Станки в наличии',url:'stock-barfeeder-fedek-dh65.html',text:'Автоматизация подачи прутка в наличии.'},
    {title:'Токарное оборудование',category:'Оборудование',url:'equipment-turning.html',text:'Токарные станки и обрабатывающие центры с ЧПУ.'},
    {title:'Фрезерное оборудование',category:'Оборудование',url:'equipment-milling.html',text:'Фрезерные обрабатывающие центры.'},
    {title:'5-осевые обрабатывающие центры',category:'Оборудование',url:'equipment-milling-5-osevye-obrabatyvayuschie-centry.html',text:'Сложная геометрия за один установ.'},
    {title:'Портальные обрабатывающие центры',category:'Оборудование',url:'equipment-milling-portalnye-frezernye-centry.html',text:'Крупногабаритные детали и оснастка.'},
    {title:'Горизонтально-расточные станки',category:'Оборудование',url:'equipment-boring.html',text:'Расточные станки с ЧПУ.'},
    {title:'Шлифовальные станки',category:'Оборудование',url:'equipment-grinding.html',text:'Круглошлифовальное и плоскошлифовальное оборудование.'},
    {title:'Ленточнопильные станки',category:'Оборудование',url:'equipment-saw.html',text:'Отрезное оборудование под серийные задачи.'},
    {title:'Электроэрозионное оборудование',category:'Оборудование',url:'equipment-edm.html',text:'EDM-станки для сложных материалов и геометрий.'},
    {title:'Сверлильные станки',category:'Оборудование',url:'equipment-drilling.html',text:'Радиально- и вертикально-сверлильные станки.'},
    {title:'Лазерная резка',category:'Оборудование',url:'equipment-laser.html',text:'Лазерное раскройное оборудование.'},
    {title:'Автомобильная промышленность',category:'Решения',url:'solution-auto.html',text:'Оборудование и технологии для автокомпонентов.'},
    {title:'Авиационная промышленность',category:'Решения',url:'solution-aero.html',text:'Решения для авиационных деталей и сплавов.'},
    {title:'Судостроение',category:'Решения',url:'solution-ship.html',text:'Оборудование для судостроительных предприятий.'},
    {title:'Железнодорожное машиностроение',category:'Решения',url:'solution-rail.html',text:'Решения для локомотиво- и вагоноремонта.'},
    {title:'Сельхоз и дорожно-строительное машиностроение',category:'Решения',url:'solution-agro.html',text:'Оборудование для крупных серийных деталей.'},
    {title:'Приборостроение',category:'Решения',url:'solution-instr.html',text:'Точная обработка для приборостроительных задач.'},
    {title:'Топливно-энергетический сектор',category:'Решения',url:'solution-fuel.html',text:'Решения для нефтегазового оборудования.'},
    {title:'Горнорудная промышленность',category:'Решения',url:'solution-mining.html',text:'Оборудование для горнодобывающих предприятий.'},
    {title:'Космическая промышленность',category:'Решения',url:'solution-space.html',text:'Высокоточная обработка для космической отрасли.'},
    {title:'Токарно-карусельный станок CK5116 для локомотиворемонтного предприятия',category:'Пресс-центр',url:'press.html',text:'Обработка крупногабаритных колёсных пар до 5000 кг.'},
    {title:'Вертикально-фрезерное оборудование для предприятия автокомпонентов',category:'Пресс-центр',url:'press.html',text:'Кейс: корпусные детали, фланцы, ступицы.'},
    {title:'Плоскошлифовальный комплекс для цветной металлургии',category:'Пресс-центр',url:'press.html',text:'Кейс: финишная обработка в цветной металлургии.'},
    {title:'Механит на МашЭкспо Сибирь 2026',category:'Пресс-центр',url:'press.html',text:'Выставка: подбор станков под допуски и задачи.'},
    {title:'Металлообработка-2026: первый день',category:'Пресс-центр',url:'press.html',text:'Выставка: оборудование, Macro Tools, сервис.'},
    {title:'Комплексный подход',category:'Оснащение',url:'production-equipment.html',text:'Инструмент, оснастка, измерение, автоматизация, СОЖ.'},
    {title:'Режущий инструмент',category:'Оснащение',url:'production-cutting-tools.html',text:'Подбор инструмента под материал и операцию.'},
    {title:'Оснастка',category:'Оснащение',url:'production-tooling.html',text:'Зажим, базирование, тиски, патроны, оправки.'},
    {title:'Измерение',category:'Оснащение',url:'production-measurement.html',text:'КИМ, видеоизмерение, 3D-сканирование.'},
    {title:'Автоматизация',category:'Оснащение',url:'production-automation.html',text:'Роботы, паллетные системы, загрузка станков.'},
    {title:'Лизинг',category:'Раздел',url:'leasing.html',text:'Финансовые варианты запуска оборудования.'},
    {title:'Частые вопросы',category:'Раздел',url:'faq.html',text:'Ответы о подборе, поставке, сроках и лизинге.'},
    {title:'Контакты',category:'Раздел',url:'contacts.html',text:'Телефон, почта, адрес и реквизиты компании.'}
  ];
  function normalizeSearch(v){return String(v||'').toLowerCase().replace(/ё/g,'е')}

  /* ---- шапка: поиск, «Заказать звонок», контактная панель телефона ---- */
  function initHeaderWidgets(){
    var header=document.querySelector('.site-header');
    if(!header)return;
    var searchBtn=document.getElementById('headerSearchBtn');
    var callbackBtn=document.getElementById('headerCallbackBtn');
    var phoneBtn=document.getElementById('headerPhoneBtn');
    var actions=document.querySelector('.site-actions');
    function deviceType(){return window.innerWidth<=1180?'mobile':'desktop'}

    /* ===== Контактная flyout-панель под телефоном ===== */
    var contactsPanel=document.createElement('div');
    contactsPanel.className='header-contacts-panel';
    contactsPanel.id='headerContactsPanel';
    contactsPanel.setAttribute('role','dialog');
    contactsPanel.setAttribute('aria-modal','false');
    contactsPanel.setAttribute('aria-labelledby','headerContactsPanelTitle');
    contactsPanel.hidden=true;
    contactsPanel.innerHTML='<div class="hcp-title" id="headerContactsPanelTitle">Связаться с нами</div><a class="hcp-phone-main" href="tel:88005511206">8 800 55 11 206</a><span class="hcp-note">многоканальный</span><a class="hcp-phone-second" href="tel:+78312820500">8 (831) 282 05 00</a><div class="hcp-divider"></div><span class="hcp-label">Электронная почта</span><a class="hcp-mail" href="mailto:info@mehanit.ru">info@mehanit.ru</a><div class="hcp-divider"></div><span class="hcp-label">Адрес</span><a class="hcp-address" href="contacts.html#contacts-map">Нижний Новгород,<br>Южное шоссе, 16В</a><div class="hcp-divider"></div><span class="hcp-label">Режим работы</span><div class="hcp-hours">Пн–Пт: 8:30–17:30</div><span class="hcp-note">по МСК</span><div class="hcp-divider"></div><div class="hcp-messengers"><a class="hcp-msg" href="https://t.me/mehanit" target="_blank" rel="noopener" aria-label="Telegram"><svg viewBox="0 0 24 24"><path d="M21.7 3.4 18.5 20c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2L7.2 14.1 2.8 12.7c-1-.3-1-1 0-1.4L20.5 2.6c.8-.3 1.5.2 1.2.8Z"/></svg></a><a class="hcp-msg hcp-msg-max" href="https://max.ru/id5256089670_biz" target="_blank" rel="noopener" aria-label="MAX">MAX</a></div><a class="hcp-all" href="contacts.html">Все контакты →</a>';
    if(actions){actions.style.position='relative';actions.appendChild(contactsPanel)}

    contactsPanel.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click',function(){
        if(a.classList.contains('hcp-mail')){trackEvent('header_email_click',{page_path:location.pathname,device_type:deviceType(),source:'header'})}
        else if(a.classList.contains('hcp-phone-main')||a.classList.contains('hcp-phone-second')){trackEvent('header_phone_click',{page_path:location.pathname,device_type:deviceType(),source:'header'})}
        else if(a.classList.contains('hcp-msg')){trackEvent('header_messenger_click',{page_path:location.pathname,device_type:deviceType(),source:'header',messenger_name:(a.classList.contains('hcp-msg-max')?'max':'telegram')})}
      });
    });

    var openTimer=null,closeTimer=null,pinned=false,contactsOpen=false;
    var canHover=window.matchMedia&&window.matchMedia('(hover:hover) and (pointer:fine)').matches;
    function reallyOpenContacts(){
      window.clearTimeout(closeTimer);
      if(contactsOpen)return;
      contactsOpen=true;
      contactsPanel.hidden=false;
      window.requestAnimationFrame(function(){contactsPanel.classList.add('is-open')});
      phoneBtn.setAttribute('aria-expanded','true');
      trackEvent('header_contacts_open',{page_path:location.pathname,device_type:deviceType(),source:'header'});
      document.addEventListener('keydown',onContactsKeydown);
      document.addEventListener('click',onContactsOutsideClick,true);
    }
    function reallyCloseContacts(returnFocus){
      if(!contactsOpen)return;
      contactsOpen=false;pinned=false;
      contactsPanel.classList.remove('is-open');
      phoneBtn.setAttribute('aria-expanded','false');
      document.removeEventListener('keydown',onContactsKeydown);
      document.removeEventListener('click',onContactsOutsideClick,true);
      window.setTimeout(function(){if(!contactsOpen)contactsPanel.hidden=true},220);
      if(returnFocus)phoneBtn.focus();
    }
    function onContactsKeydown(e){if(e.key==='Escape'){reallyCloseContacts(true)}}
    function onContactsOutsideClick(e){
      if(!contactsPanel.contains(e.target)&&e.target!==phoneBtn&&!phoneBtn.contains(e.target)){reallyCloseContacts(false)}
    }
    if(canHover){
      phoneBtn.addEventListener('mouseenter',function(){window.clearTimeout(openTimer);openTimer=window.setTimeout(reallyOpenContacts,140)});
      phoneBtn.addEventListener('mouseleave',function(){window.clearTimeout(openTimer);if(!pinned){closeTimer=window.setTimeout(reallyCloseContacts,240)}});
      contactsPanel.addEventListener('mouseenter',function(){window.clearTimeout(closeTimer)});
      contactsPanel.addEventListener('mouseleave',function(){if(!pinned){closeTimer=window.setTimeout(reallyCloseContacts,240)}});
    }
    phoneBtn.addEventListener('click',function(e){
      e.preventDefault();
      if(contactsOpen&&pinned){reallyCloseContacts(true);return}
      pinned=true;reallyOpenContacts();
    });
    phoneBtn.addEventListener('focus',function(){reallyOpenContacts()});
    contactsPanel.addEventListener('focusout',function(){
      window.setTimeout(function(){
        var active=document.activeElement;
        if(active!==phoneBtn&&!contactsPanel.contains(active)){reallyCloseContacts(false)}
      },0);
    });

    /* ===== Поиск ===== */
    var overlay=document.createElement('div');
    overlay.className='header-search-overlay';
    overlay.id='headerSearchOverlay';
    overlay.hidden=true;
    document.body.appendChild(overlay);

    var searchPanel=document.createElement('div');
    searchPanel.className='header-search-panel';
    searchPanel.id='headerSearchPanel';
    searchPanel.hidden=true;
    searchPanel.innerHTML='<div class="hsp-inner"><span class="hsp-icon" aria-hidden="true"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4.5 4.5"></path></svg></span><input aria-label="Поиск по сайту" autocomplete="off" class="hsp-input" id="headerSearchInput" placeholder="Поиск по оборудованию, решениям и материалам..." type="search"/><button aria-label="Закрыть поиск" class="hsp-close" id="headerSearchClose" type="button">×</button></div><div class="hsp-results" id="headerSearchResults"></div>';
    header.appendChild(searchPanel);

    var searchInput=searchPanel.querySelector('#headerSearchInput');
    var searchResults=searchPanel.querySelector('#headerSearchResults');
    var searchClose=searchPanel.querySelector('#headerSearchClose');
    var searchOpen=false,activeIndex=-1;

    function renderSearch(query){
      var q=normalizeSearch(query);
      var items=HEADER_SEARCH_ITEMS.filter(function(item){
        if(!q)return false;
        return normalizeSearch(item.title+' '+item.category+' '+item.text).indexOf(q)>-1;
      }).slice(0,8);
      activeIndex=-1;
      if(!q){
        searchResults.innerHTML='';
        searchResults.classList.remove('is-visible');
        return;
      }
      if(!items.length){
        searchResults.innerHTML='<div class="hsp-empty">Ничего не нашли. Попробуйте другой запрос.</div>';
        searchResults.classList.add('is-visible');
        return;
      }
      searchResults.innerHTML=items.map(function(item,i){
        return '<a class="hsp-item" href="'+item.url+'" data-index="'+i+'" data-url="'+item.url+'" data-type="'+item.category+'"><small>'+item.category+'</small><b>'+item.title+'</b><span>'+item.text+'</span></a>';
      }).join('')+'<a class="hsp-all" href="stock.html">Все результаты поиска →</a>';
      searchResults.classList.add('is-visible');
      searchResults.querySelectorAll('.hsp-item').forEach(function(el){
        el.addEventListener('click',function(){
          trackEvent('header_search_result_click',{page_path:location.pathname,device_type:deviceType(),source:'header',result_type:el.getAttribute('data-type')});
        });
      });
    }
    function highlightActive(){
      var items=searchResults.querySelectorAll('.hsp-item');
      items.forEach(function(el,i){el.classList.toggle('is-active',i===activeIndex)});
      if(activeIndex>=0&&items[activeIndex]){items[activeIndex].scrollIntoView({block:'nearest'})}
    }
    function openSearch(){
      if(searchOpen)return;
      searchOpen=true;
      overlay.hidden=false;
      searchPanel.hidden=false;
      window.requestAnimationFrame(function(){overlay.classList.add('is-open');searchPanel.classList.add('is-open')});
      searchBtn.setAttribute('aria-expanded','true');
      document.body.style.overflow='hidden';
      if(window.HTMLElement&&'inert' in document.body){
        Array.prototype.forEach.call(document.body.children,function(el){
          if(el!==header&&el!==overlay&&el!==searchPanel&&el.tagName!=='SCRIPT'){el.inert=true}
        });
      }
      window.setTimeout(function(){searchInput.focus()},80);
      trackEvent('header_search_open',{page_path:location.pathname,device_type:deviceType(),source:'header'});
      document.addEventListener('keydown',onSearchKeydown);
    }
    function closeSearch(returnFocus){
      if(!searchOpen)return;
      searchOpen=false;
      overlay.classList.remove('is-open');
      searchPanel.classList.remove('is-open');
      searchBtn.setAttribute('aria-expanded','false');
      document.body.style.overflow='';
      if(window.HTMLElement&&'inert' in document.body){
        Array.prototype.forEach.call(document.body.children,function(el){el.inert=false});
      }
      window.setTimeout(function(){overlay.hidden=true;searchPanel.hidden=true},220);
      document.removeEventListener('keydown',onSearchKeydown);
      if(returnFocus)searchBtn.focus();
    }
    function onSearchKeydown(e){
      if(e.key==='Escape'){
        if(activeIndex>=0){activeIndex=-1;highlightActive();searchInput.focus();return}
        closeSearch(true);return;
      }
      if(e.key==='ArrowDown'){
        e.preventDefault();
        var count=searchResults.querySelectorAll('.hsp-item').length;
        if(!count)return;
        activeIndex=(activeIndex+1)%count;highlightActive();
      }
      if(e.key==='ArrowUp'){
        e.preventDefault();
        var count2=searchResults.querySelectorAll('.hsp-item').length;
        if(!count2)return;
        activeIndex=(activeIndex-1+count2)%count2;highlightActive();
      }
      if(e.key==='Enter'){
        var items=searchResults.querySelectorAll('.hsp-item');
        if(activeIndex>=0&&items[activeIndex]){
          e.preventDefault();
          trackEvent('header_search_submit',{page_path:location.pathname,device_type:deviceType(),source:'header',search_query:searchInput.value});
          window.location.href=items[activeIndex].getAttribute('data-url');
        }else if(searchInput.value.trim()){
          trackEvent('header_search_submit',{page_path:location.pathname,device_type:deviceType(),source:'header',search_query:searchInput.value});
        }
      }
    }
    searchBtn.addEventListener('click',function(){openSearch()});
    searchClose.addEventListener('click',function(){closeSearch(true)});
    overlay.addEventListener('click',function(){closeSearch(false)});
    searchInput.addEventListener('input',function(){renderSearch(searchInput.value)});

    /* ===== Доп. пункты мобильного меню (поиск / звонок / телефон / почта / мессенджеры) ===== */
    var mobileSearchBtn=document.getElementById('mobileSearchBtn');
    var mobileCallbackBtn=document.getElementById('mobileCallbackBtn');
    if(mobileSearchBtn){mobileSearchBtn.addEventListener('click',function(){header.classList.remove('menu-open');openSearch()})}
    if(mobileCallbackBtn){mobileCallbackBtn.addEventListener('click',function(){header.classList.remove('menu-open');openCallback()})}
    document.querySelectorAll('.site-menu-mobile-messengers a').forEach(function(a){
      a.addEventListener('click',function(){
        trackEvent('header_messenger_click',{page_path:location.pathname,device_type:deviceType(),source:'header',messenger_name:(a.getAttribute('aria-label')==='MAX'?'max':'telegram')});
      });
    });
    document.querySelectorAll('.site-menu-mobile-extra a[href^="tel:"]').forEach(function(a){
      a.addEventListener('click',function(){trackEvent('header_phone_click',{page_path:location.pathname,device_type:deviceType(),source:'header'})});
    });
    document.querySelectorAll('.site-menu-mobile-extra a[href^="mailto:"]').forEach(function(a){
      a.addEventListener('click',function(){trackEvent('header_email_click',{page_path:location.pathname,device_type:deviceType(),source:'header'})});
    });

    /* ===== Модальное окно «Заказать звонок» ===== */
    var callbackModal=document.createElement('div');
    callbackModal.className='header-modal';
    callbackModal.id='headerCallbackModal';
    callbackModal.setAttribute('role','dialog');
    callbackModal.setAttribute('aria-modal','true');
    callbackModal.setAttribute('aria-labelledby','headerCallbackTitle');
    callbackModal.setAttribute('aria-hidden','true');
    callbackModal.innerHTML='<div class="header-modal-dialog"><button aria-label="Закрыть окно" class="header-modal-close" id="headerCallbackClose" type="button">×</button><h3 id="headerCallbackTitle">Заказать звонок</h3><p>Оставьте номер телефона — специалист Механита свяжется с вами в рабочее время.</p><form id="headerCallbackForm" novalidate=""><div class="hcm-field"><label for="headerCbName">Имя</label><input autocomplete="name" class="hcm-input" id="headerCbName" name="name" placeholder="Введите ваше имя" type="text"/></div><div class="hcm-field"><label for="headerCbPhone">Телефон</label><input autocomplete="tel" class="hcm-input" id="headerCbPhone" inputmode="tel" name="phone" placeholder="Введите ваш телефон" required="" type="tel"/><div class="hcm-err" id="headerCbPhoneErr" role="alert"></div></div><label class="hcm-consent" for="headerCbConsent"><input id="headerCbConsent" name="consent" required="" type="checkbox"/><span>Принимаю условия <a href="privacy.html" rel="noopener" target="_blank">Политики конфиденциальности</a> и даю согласие на обработку персональных данных</span></label><div class="hcm-err" id="headerCbConsentErr" role="alert"></div><button class="site-cta hcm-submit" type="submit">Заказать звонок</button><div class="hcm-status" id="headerCbStatus" role="status"></div></form></div>';
    document.body.appendChild(callbackModal);

    var cbClose=callbackModal.querySelector('#headerCallbackClose');
    var cbForm=callbackModal.querySelector('#headerCallbackForm');
    var cbOpen=false;
    function openCallback(){
      if(cbOpen)return;
      cbOpen=true;
      callbackModal.classList.add('is-open');
      callbackModal.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
      trackEvent('header_callback_open',{page_path:location.pathname,device_type:deviceType(),source:'header'});
      window.setTimeout(function(){callbackModal.querySelector('#headerCbName').focus()},80);
      document.addEventListener('keydown',onCallbackKeydown);
    }
    function closeCallback(returnFocus){
      if(!cbOpen)return;
      cbOpen=false;
      callbackModal.classList.remove('is-open');
      callbackModal.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
      document.removeEventListener('keydown',onCallbackKeydown);
      if(returnFocus)callbackBtn.focus();
    }
    function onCallbackKeydown(e){
      if(e.key==='Escape'){closeCallback(true);return}
      if(e.key==='Tab'){
        var f=callbackModal.querySelectorAll('a,button,input');
        if(!f.length)return;
        var first=f[0],last=f[f.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
      }
    }
    callbackBtn.addEventListener('click',openCallback);
    cbClose.addEventListener('click',function(){closeCallback(true)});
    callbackModal.addEventListener('click',function(e){if(e.target===callbackModal){closeCallback(false)}});
    cbForm.addEventListener('submit',function(e){
      e.preventDefault();
      var phone=cbForm.querySelector('#headerCbPhone');
      var consent=cbForm.querySelector('#headerCbConsent');
      var phoneErr=cbForm.querySelector('#headerCbPhoneErr');
      var consentErr=cbForm.querySelector('#headerCbConsentErr');
      var status=cbForm.querySelector('#headerCbStatus');
      var valid=true;
      var digits=phone.value.replace(/\D/g,'');
      if(digits.length<10){phoneErr.textContent='Проверьте номер телефона';phoneErr.classList.add('is-shown');valid=false}else{phoneErr.textContent='';phoneErr.classList.remove('is-shown')}
      if(!consent.checked){consentErr.textContent='Нужно принять условия обработки данных';consentErr.classList.add('is-shown');valid=false}else{consentErr.textContent='';consentErr.classList.remove('is-shown')}
      if(!valid)return;
      var btn=cbForm.querySelector('.hcm-submit');
      btn.disabled=true;
      status.className='hcm-status is-shown';
      status.textContent='Отправляем заявку…';
      trackEvent('header_callback_submit',{page_path:location.pathname,device_type:deviceType(),source:'header'});
      window.setTimeout(function(){
        btn.disabled=false;
        status.classList.add('ok');
        status.textContent='Заявка принята. Мы перезвоним в рабочее время.';
        cbForm.reset();
      },600);
    });

    /* ---- смена sticky/обычного режима не должна плодить дубли: слушатели навешаны один раз при инициализации ---- */
    window.addEventListener('resize',function(){
      if(!canHover){return}
    },{passive:true});
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initHeaderWidgets)}else{initHeaderWidgets()}

  /* ---- юридические тексты (cookie-баннер + всплывающие окна политик) ---- */
  var LEGAL_CONTENT={
    cookie:{title:'Политика обработки файлов cookie',html:`
<p>Настоящая Политика в отношении обработки файлов cookie (далее — «Политика») действует в отношении сайта mehanit.ru (далее — «Сайт»), принадлежащего ООО ГК «Механит» (ИНН 5256089670, ОГРН 1095256004370, далее — «Оператор», «Компания»).</p>

<h3>1. Что такое файлы cookie</h3>
<p>Cookie — небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении Сайта. Они позволяют Сайту «запоминать» ваши действия и предпочтения (настройки отображения, историю посещений и иные параметры) в течение определённого времени, чтобы не запрашивать их повторно при каждом переходе по страницам.</p>

<h3>2. Какие cookie использует Сайт</h3>
<ul>
<li><b>Технические (необходимые)</b> — обеспечивают базовую работу Сайта: навигацию, отображение страниц, работу форм. Без них Сайт может работать некорректно.</li>
<li><b>Аналитические</b> — используются для сбора обезличенной статистики о посещаемости и поведении пользователей на Сайте (в частности, средствами веб-аналитики).</li>
<li><b>Функциональные</b> — запоминают ваши настройки и предпочтения для повышения удобства использования Сайта при повторных визитах.</li>
</ul>

<h3>3. Цели использования cookie</h3>
<ul>
<li>обеспечение корректной работы и безопасности Сайта;</li>
<li>анализ посещаемости, улучшение содержания и удобства Сайта;</li>
<li>сохранение пользовательских настроек между визитами.</li>
</ul>

<h3>4. Управление файлами cookie</h3>
<p>Вы можете в любой момент изменить настройки браузера так, чтобы он блокировал файлы cookie или предупреждал об их использовании. Обращаем внимание, что при отключении cookie отдельные функции Сайта могут работать некорректно.</p>
<p>Продолжая использовать Сайт без изменения настроек браузера либо нажав кнопку «Принять» в уведомлении о cookie, вы даёте согласие на использование файлов cookie в соответствии с настоящей Политикой.</p>

<h3>5. Персональные данные</h3>
<p>Информация, собираемая с помощью cookie, используется в обезличенном виде и не позволяет прямо идентифицировать пользователя. Обработка персональных данных, которые вы самостоятельно указываете в формах Сайта, осуществляется Оператором в соответствии с Политикой конфиденциальности.</p>

<h3>6. Изменения Политики</h3>
<p>Оператор вправе вносить изменения в настоящую Политику. Актуальная редакция всегда доступна на Сайте по ссылке «Политика обработки файлов cookie».</p>

<h3>7. Контакты</h3>
<p>По вопросам, связанным с настоящей Политикой, вы можете обратиться по адресу <a href="mailto:info@mehanit.ru">info@mehanit.ru</a> или по телефону 8 800 55 11 206.</p>
`},
    privacy:{title:'Политика конфиденциальности',html:`
<h3>1. Общие положения</h3>
<p><b>1.1.</b> Настоящая Политика конфиденциальности (далее — «Политика») разработана в соответствии с пп. 2 ч. 1 статьи 18.1 Федерального закона от 27 июля 2006 года № 152-ФЗ «О персональных данных» (далее — «Закон о персональных данных»). Политика предназначена для ознакомления неограниченного круга лиц и опубликована на официальном сайте Общества с ограниченной ответственностью Группы компаний «Механит» (ИНН 5256089670, ОГРН 1095256004370, далее — «Оператор», сокращённое наименование — ООО ГК «Механит») — mehanit.ru.</p>
<p><b>1.2.</b> Настоящая Политика является частью Политики обработки персональных данных ООО ГК «Механит». Действие настоящей Политики распространяется непосредственно на сайт mehanit.ru (далее — «Сайт»), иные сайты и сервисы, принадлежащие ООО ГК «Механит», и на информацию, получаемую с их помощью.</p>
<p><b>1.3.</b> Политика распространяется на отношения в области обработки персональных данных, возникшие у Оператора как до, так и после утверждения настоящей Политики.</p>
<p><b>1.3.1.</b> Политика не применяется к отношениям, возникающим при обработке персональных данных сотрудников Оператора, их родственников, соискателей вакантных должностей и иных субъектов персональных данных, прямо не обозначенных в настоящей Политике, поскольку такие отношения урегулированы отдельными внутренними локальными актами, а также к отношениям, на которые Закон о персональных данных не распространяется (п. 2 ст. 1 Закона о персональных данных).</p>
<p><b>1.4.</b> Политика подлежит изменению и дополнению в случае появления новых и изменения существующих законодательных актов и специальных нормативных документов в сфере персональных данных, а также по результатам контрольных мероприятий по выполнению требований законодательства РФ о персональных данных.</p>
<p><b>1.5.</b> Использование Сайта Пользователем означает его безоговорочное согласие с правилами Политики и указанными в ней условиями обработки персональных данных. Если Пользователь не согласен с условиями настоящей Политики, ему следует воздержаться от использования Сайта.</p>
<p><b>1.6.</b> Под персональными данными понимается любая информация, относящаяся прямо или косвенно к определённому или определяемому физическому лицу (субъекту персональных данных).</p>
<p><b>1.7.</b> Под обработкой персональных данных понимается любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
<p><b>1.8.</b> Под безопасностью персональных данных понимается защищённость персональных данных от неправомерного и (или) несанкционированного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных.</p>
<p><b>1.9.</b> Определения и термины, содержащиеся в ст. 6 Закона о персональных данных, используются в Политике с аналогичным значением. Помимо этого, в данном документе используются следующие понятия:</p>
<ul>
<li><b>Оператор</b> — ООО ГК «Механит», самостоятельно или совместно с другими лицами организующее и (или) осуществляющее обработку персональных данных, определяющее цели обработки, состав персональных данных и совершаемые с ними действия.</li>
<li><b>Сайт</b> — сайт Оператора, находящийся в сети Интернет по адресу mehanit.ru, и иные сайты, принадлежащие ООО ГК «Механит», на которых размещена настоящая Политика или ссылка на неё. Исключительные права на Сайт и его отдельные элементы (включая программное обеспечение, дизайн) принадлежат ООО ГК «Механит» в полном объёме. Целью создания Сайта является предоставление физическим и юридическим лицам сведений о деятельности ООО ГК «Механит», информирование о продукции, оборудовании, работах и услугах, предлагаемых компанией.</li>
<li><b>Субъект персональных данных (субъект ПДн)</b> — физическое лицо, чьи персональные данные переданы ООО ГК «Механит» для обработки, в том числе Посетитель, Пользователь, а также любые иные физические лица, обращающиеся с заявлениями или обращениями, в том числе от имени контрагентов (партнёров) Оператора.</li>
<li><b>Посетитель Сайта</b> — физическое лицо, в том числе являющееся контрагентом (клиентом, партнёром) Оператора или представителем/работником контрагента, которое осуществляет переход на Сайт.</li>
<li><b>Пользователь Сайта</b> — Посетитель Сайта, использующий функционал Сайта, чем выражает согласие с настоящей Политикой и указанными в ней условиями обработки персональных данных.</li>
<li><b>Контрагент (клиент, партнёр)</b> — физические и юридические лица, заинтересованные в приобретении и (или) приобретающие оборудование, работы, услуги ООО ГК «Механит».</li>
</ul>

<h3>2. Правовые основания и цели обработки персональных данных</h3>
<p><b>2.1.</b> ООО ГК «Механит» является Оператором персональных данных в соответствии с Законом о персональных данных.</p>
<p><b>2.2.</b> Оператор осуществляет обработку персональных данных на законной и справедливой основе в соответствии с требованиями Закона о персональных данных, иными федеральными законами и нормативно-правовыми актами в сфере защиты персональных данных. Правовым основанием обработки персональных данных также являются: настоящая Политика; согласие субъектов ПДн на обработку персональных данных; договоры, заключаемые между Оператором и субъектами ПДн.</p>
<p><b>2.3.</b> Обработке подлежат только персональные данные, которые отвечают целям их обработки. Обработка персональных данных ограничивается достижением конкретных, заранее определённых и законных целей.</p>
<p><b>2.4.</b> Оператор осуществляет обработку персональных данных субъектов ПДн для следующих целей:</p>
<ul>
<li>выполнение Оператором действий (ответ на запрос, консультирование и иное), необходимых в соответствии с запросом субъекта ПДн в случае заполнения форм на Сайте (заявки, формы обратной связи и иные);</li>
<li>продвижение оборудования, работ, услуг Оператора на рынке путём осуществления прямых контактов с субъектом ПДн с помощью средств связи;</li>
<li>направление информационных и рекламных сообщений посредством рассылки по информационным системам связи, SMS, электронной почте и иным средствам связи;</li>
<li>реализация договорных отношений, в том числе установление предварительных договорных отношений, формирование базы данных контрагентов (клиентов, партнёров).</li>
</ul>

<h3>3. Объём и категории обрабатываемых персональных данных</h3>
<p><b>3.1.</b> Оператор в зависимости от целей обработки персональных данных обрабатывает следующие категории персональных данных, полученные у соответствующих категорий субъектов ПДн:</p>
<div class="legal-table-wrap">
<table class="legal-table">
<thead><tr><th>Цель обработки персональных данных</th><th>Категории и перечень персональных данных</th><th>Категории субъектов ПДн</th></tr></thead>
<tbody>
<tr><td>Выполнение Оператором действий (ответ на запрос, консультирование и иное), необходимых в случае заполнения субъектом ПДн форм на Сайте</td><td>ФИО; номер телефона; адрес электронной почты; данные, которые автоматически передаются Оператору в процессе входа на Сайт с помощью cookie-файлов (сведения об используемом браузере, местоположение, IP-адрес устройства, время доступа, история действий на Сайте); иные персональные данные, непосредственно необходимые для выполнения целей их обработки</td><td>Пользователь Сайта</td></tr>
<tr><td>Продвижение оборудования, работ, услуг Оператора на рынке путём осуществления прямых контактов с субъектом ПДн с помощью средств связи</td><td>ФИО, контактный телефон, адрес электронной почты</td><td>Пользователь Сайта; Контрагенты (клиенты, партнёры)</td></tr>
<tr><td>Направление информационных и рекламных сообщений (рассылок) по информационным системам связи, SMS, электронной почте и иным средствам связи</td><td>ФИО, контактный телефон, адрес электронной почты</td><td>Пользователь Сайта; Контрагенты (клиенты, партнёры)</td></tr>
<tr><td>Реализация договорных отношений, в том числе установление предварительных договорных отношений и формирование базы данных контрагентов (клиентов, партнёров)</td><td>ФИО, реквизиты, контактные данные</td><td>Пользователь Сайта; Контрагенты (клиенты, партнёры)</td></tr>
</tbody>
</table>
</div>
<p><b>3.2.</b> Оператором не осуществляется обработка персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, состояния здоровья, интимной жизни, биометрических персональных данных.</p>
<p><b>3.3.</b> Персональные данные, указанные в п. 3.1, могут быть получены Оператором: в ходе предоставления субъектом ПДн лично; в процессе использования Сайта (заполнение форм, сообщения в онлайн-чат); посредством направления корреспонденции или электронных писем на адреса электронной почты ООО ГК «Механит».</p>
<p><b>3.4.</b> Оператор может собирать информацию при посещении Сайта: IP-адрес, местонахождение, сведения об используемом браузере, уникальный идентификатор устройства, время доступа, историю действий на Сайте, адрес ссылающихся веб-сайтов и путь, по которому пользователь проходит через Сайт. Оператор может использовать файлы cookie и аналогичные технологии для сбора информации об использовании Сайта в целях обеспечения его работоспособности, повышения качества работы, исправления ошибок и улучшения пользовательского опыта, не преследуя цели идентифицировать конкретного посетителя.</p>

<h3>4. Порядок и условия обработки персональных данных</h3>
<p><b>4.1.</b> Обработка персональных данных осуществляется Оператором в соответствии с требованиями законодательства Российской Федерации.</p>
<p><b>4.2.</b> Оператор осуществляет обработку персональных данных путём автоматизированной обработки с передачей полученной информации по информационно-телекоммуникационным сетям или без таковой, а также путём смешанной обработки.</p>
<p><b>4.3.</b> Перечень действий, совершаемых Оператором с персональными данными: сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), блокирование, удаление и уничтожение.</p>
<p><b>4.4.</b> Обработка персональных данных осуществляется с согласия субъекта ПДн, за исключением установленных законодательством РФ случаев обработки без такого согласия.</p>
<p><b>4.5.</b> Согласие даётся в любой форме, позволяющей подтвердить факт его получения от конкретного субъекта ПДн, в том числе посредством технических возможностей, предоставляемых Оператором на Сайте.</p>
<p><b>4.6.</b> На Сайте субъект ПДн предоставляет согласие на обработку ПДн и (или) согласие на информационно-рекламные сообщения (рассылки) путём проставления отметки в специальном поле рядом с текстом при заполнении соответствующей формы на Сайте и нажатия кнопки отправки формы. Согласие считается полученным с момента совершения указанных действий.</p>
<p><b>4.7.</b> При получении от субъекта ПДн обращений (писем, электронных сообщений, телефонных звонков и т. п.), содержащих персональные данные, Оператор обрабатывает любые данные, содержащиеся в обращении. Факт направления такого обращения является согласием на обработку содержащихся в нём персональных данных.</p>
<p><b>4.8.</b> Субъект ПДн подтверждает, что самостоятельно принимает решение о предоставлении его персональных данных и даёт согласие на их обработку свободно, своей волей и в своём интересе.</p>
<p><b>4.9.</b> Оператор исходит из того, что субъекты ПДн, действуя разумно и добросовестно, предоставляют достоверные и достаточные персональные данные и поддерживают их в актуальном состоянии.</p>
<p><b>4.10.</b> Согласие на обработку персональных данных действует до реализации целей, изложенных в Политике и в самом согласии, либо до направления субъектом ПДн уведомления об отзыве согласия. Согласие на информационно-рекламные сообщения действует до отказа субъекта ПДн от их получения.</p>
<p><b>4.11.</b> Субъект ПДн вправе в любое время отозвать согласие на обработку персональных данных. Продолжение обработки без согласия возможно при наличии оснований, предусмотренных п. 2–11 ч. 1 ст. 6, ч. 2 ст. 10, ч. 2 ст. 11 Закона о персональных данных.</p>
<p><b>4.12.</b> Оператор обеспечивает обработку персональных данных с использованием баз данных, находящихся на территории Российской Федерации, за исключением случаев, указанных в Законе о персональных данных.</p>
<p><b>4.13.</b> Оператор не осуществляет действий, направленных на раскрытие персональных данных неопределённому кругу лиц. Распространение персональных данных возможно только на основаниях и в случаях, предусмотренных законодательством РФ.</p>
<p><b>4.14.</b> Персональные данные не могут быть использованы в целях причинения имущественного и морального вреда субъектам ПДн, затруднения реализации прав и свобод граждан РФ.</p>
<p><b>4.15.</b> Оператор вправе поручать обработку персональных данных третьим лицам — обработчикам — на основании заключаемых с ними договоров, предусматривающих перечень обрабатываемых данных, цели обработки, перечень совершаемых действий и обязанности обработчика по соблюдению конфиденциальности и обеспечению безопасности персональных данных, включая уведомление Оператора об инцидентах. В случаях, установленных законодательством РФ, Оператор вправе передавать персональные данные третьим лицам, в том числе без поручения им обработки персональных данных.</p>
<p><b>4.16.</b> Сбор персональных данных и доступ к такой информации в приложениях и на сайтах социальных сетей и иных сторонних ресурсах, ссылки на которые содержит Сайт, регулируется политикой конфиденциальности администратора соответствующего стороннего ресурса.</p>

<h3>5. Основные права субъекта персональных данных</h3>
<p>Субъект вправе: получать информацию, касающуюся обработки его персональных данных; требовать от Оператора уточнения, блокирования или уничтожения персональных данных в случае, если они являются неполными, устаревшими, неточными, незаконно полученными или не являются необходимыми для заявленной цели обработки; требовать извещения всех лиц, которым ранее были сообщены неверные или неполные персональные данные, обо всех произведённых в них изменениях; отозвать согласие на обработку персональных данных; отказаться от получения информационных и рекламных сообщений; на свободный безвозмездный доступ к своим персональным данным; обжаловать действия или бездействие Оператора в уполномоченный орган по защите прав субъектов ПДн или в судебном порядке; иные права, предусмотренные законодательством РФ.</p>

<h3>6. Основные обязанности Оператора персональных данных</h3>
<p>Оператор обязан: предоставлять по запросу субъекта ПДн информацию об обработке его персональных данных либо направлять обоснованный отказ; принимать меры, необходимые и достаточные для выполнения требований законодательства РФ; по требованию субъекта ПДн уточнять, блокировать или удалять его персональные данные, если они являются неполными, устаревшими, неточными, незаконно полученными или ненужными для заявленной цели обработки; обеспечивать правомерность обработки персональных данных; в случае отзыва согласия — прекратить обработку и уничтожить данные, за исключением случаев, когда обработка может быть продолжена в соответствии с законодательством РФ; при поступлении отказа от получения рассылок — немедленно прекратить соответствующую обработку; исполнять иные обязанности, предусмотренные законодательством РФ.</p>

<h3>7. Основания для прекращения обработки персональных данных</h3>
<p><b>7.1.</b> Оператор прекращает обработку персональных данных в случаях: достижения либо отсутствия необходимости в достижении целей обработки — в течение 30 дней (если иное не предусмотрено договором или согласием); истечения срока действия согласия — в течение 30 дней; отзыва согласия и (или) отказа от получения рассылок — в течение 30 дней; выявления неправомерной обработки персональных данных — в течение 30 дней; предоставления пользователем сведений, подтверждающих, что персональные данные являются незаконно полученными или не являются необходимыми для заявленной цели обработки, — в течение 7 рабочих дней со дня представления таких сведений. При обращении субъекта ПДн с требованием о прекращении обработки Оператор обязан в срок не более 10 рабочих дней прекратить обработку или обеспечить её прекращение.</p>
<p><b>7.2.</b> Согласие на обработку персональных данных может быть отозвано путём письменного уведомления, направленного на адрес электронной почты <a href="mailto:info@mehanit.ru">info@mehanit.ru</a> либо по адресу местонахождения ООО ГК «Механит» (603123, Россия, г. Нижний Новгород, Южное шоссе, д. 16 «В»), и должно содержать понятное требование и обязательные реквизиты для идентификации лица, в отношении персональных данных которого оно составлено. После получения уведомления обработка персональных данных субъекта будет прекращена, а его персональные данные — удалены, за исключением случаев, когда обработка может быть продолжена в соответствии с законодательством РФ.</p>
<p><b>7.3.</b> Для отказа от получения информационных и рекламных сообщений (рассылок) субъекту ПДн необходимо перейти по ссылке «Отписаться» в рекламно-информационном письме либо направить ООО ГК «Механит» заявление об отказе от получения таких сообщений на адрес электронной почты <a href="mailto:info@mehanit.ru">info@mehanit.ru</a>.</p>
<p><b>7.4.</b> Прекращение обработки Оператором персональных данных субъекта может сделать невозможным дальнейшее предоставление данному субъекту оборудования, работ и услуг Оператора.</p>

<h3>8. Сроки обработки и хранения персональных данных</h3>
<p><b>8.1.</b> Персональные данные субъектов ПДн хранятся на территории Российской Федерации.</p>
<p><b>8.2.</b> Сроки обработки (хранения) персональных данных определяются исходя из целей их обработки, срока действия договоров с субъектами ПДн и требований законодательства РФ, в том числе: персональные данные хранятся в течение периода использования Сайта, при рассмотрении отдельных запросов — в течение периода выполнения запроса; с согласия субъекта ПДн — в течение срока действия согласия до его отзыва; с согласия на рассылки — до отзыва такого согласия; персональные данные контрагентов (клиентов, партнёров) хранятся в течение срока ведения переговоров, а при заключении договора — в течение срока, установленного договором, после чего перемещаются в архив Оператора, где хранятся не менее пяти лет в соответствии с налоговым законодательством РФ.</p>
<p><b>8.3.</b> Персональные данные, срок обработки (хранения) которых истёк, уничтожаются, если иное не предусмотрено законодательством РФ. Хранение персональных данных после прекращения их обработки допускается только после их обезличивания.</p>
<p><b>8.4.</b> Уничтожение персональных данных осуществляется путём стирания информации с использованием программного обеспечения с гарантированным уничтожением.</p>

<h3>9. Защита персональных данных</h3>
<p><b>9.1.</b> Оператор при обработке персональных данных принимает необходимые правовые, организационные и технические меры для их защиты от неправомерного и (или) несанкционированного доступа, уничтожения, изменения, блокирования, копирования, предоставления, распространения, а также от иных неправомерных действий.</p>
<p><b>9.2.</b> К таким мерам, в частности, относятся: назначение лица, ответственного за обработку и безопасность персональных данных; издание локальных документов по вопросам обработки и защиты персональных данных; определение угроз безопасности персональных данных при их обработке; создание условий для работы с персональными данными, включая организацию работы с информационными системами; хранение персональных данных в условиях, исключающих неправомерный доступ к ним; получение согласия субъектов ПДн на обработку, за исключением случаев, предусмотренных законодательством РФ; контроль принимаемых мер по обеспечению безопасности и уровня защищённости информационных систем; ознакомление работников, осуществляющих обработку персональных данных, с требованиями законодательства РФ и локальными актами по вопросам защиты персональных данных.</p>

<h3>10. Обращения субъектов персональных данных</h3>
<p><b>10.1.</b> ООО ГК «Механит» рассматривает обращения, связанные с настоящей Политикой, включая запросы субъектов ПДн относительно использования их данных, полученные по адресу местонахождения Оператора или по электронному адресу <a href="mailto:info@mehanit.ru">info@mehanit.ru</a>.</p>
<p><b>10.2.</b> Запрос должен содержать: данные основного документа, удостоверяющего личность субъекта ПДн или его законного представителя; сведения, подтверждающие участие субъекта ПДн в отношениях с Оператором (номер договора, дата заключения, иные сведения), либо сведения, иным образом подтверждающие факт обработки ПДн Оператором; суть обращения; подпись субъекта ПДн или его представителя и дату обращения.</p>
<p><b>10.3.</b> Сроки ответов на обращения субъектов ПДн определяются в соответствии с законодательством Российской Федерации.</p>

<h3>11. Ответственность за нарушение Политики</h3>
<p>Лица, виновные в нарушении требований настоящей Политики, несут гражданскую, административную, дисциплинарную и иную ответственность, предусмотренную законодательством Российской Федерации.</p>

<h3>12. Заключительные положения</h3>
<p><b>12.1.</b> К настоящей Политике и отношениям между субъектом ПДн и ООО ГК «Механит» применяется законодательство Российской Федерации.</p>
<p><b>12.2.</b> ООО ГК «Механит» вправе в любой момент изменить настоящую Политику, опубликовав соответствующие изменения на Сайте. Новая редакция Политики вступает в силу с момента её размещения на Сайте.</p>
<p><b>12.3.</b> Действующая редакция Политики размещена на сайте mehanit.ru.</p>
<p><b>12.4.</b> Приложения: Согласие на обработку персональных данных; Согласие на получение информационных и рекламных сообщений (рассылок).</p>
`},
    newsletter:{title:'Согласие на получение рассылки',html:`
<p>Настоящим я даю согласие ООО ГК «Механит» (ИНН 5256089670, ОГРН 1095256004370, адрес: 603123, Россия, г. Нижний Новгород, Южное шоссе, д. 16 «В», далее — «Оператор») на получение информационных и рекламных сообщений (рассылок) посредством электронной почты, SMS и иных средств связи, указанных мной при заполнении форм на сайте mehanit.ru.</p>

<h3>1. Содержание рассылки</h3>
<p>Рассылка может содержать информацию о продукции, оборудовании, услугах, акциях, новостях и мероприятиях Оператора.</p>

<h3>2. Срок действия согласия</h3>
<p>Согласие даётся на срок до его отзыва субъектом персональных данных.</p>

<h3>3. Отзыв согласия</h3>
<p>Я вправе в любой момент отказаться от получения рассылки, перейдя по ссылке «Отписаться» в письме рассылки либо направив соответствующее заявление на адрес электронной почты <a href="mailto:info@mehanit.ru">info@mehanit.ru</a>.</p>

<h3>4. Соотношение с иными согласиями</h3>
<p>Отзыв настоящего согласия не влияет на обработку персональных данных для иных целей, предусмотренных Политикой конфиденциальности и согласием на обработку персональных данных. Настоящее согласие действует наряду с согласием на обработку персональных данных и не заменяет его.</p>
`},
    'personal-data':{title:'Согласие на обработку персональных данных',html:`
<p>Настоящим, я — пользователь сайта mehanit.ru (субъект персональных данных), действуя свободно, своей волей и в своём интересе, а также подтверждая свою дееспособность, предоставляя персональные данные, даю согласие Обществу с ограниченной ответственностью Группы компаний «Механит» (ООО ГК «Механит»), ОГРН 1095256004370, ИНН 5256089670, зарегистрированному по адресу 603123, Россия, г. Нижний Новгород, Южное шоссе, д. 16 «В» (далее — «Оператор»), на обработку моих персональных данных, указанных мной при заполнении соответствующих форм на Сайте или иным способом, на следующих условиях.</p>

<h3>Цель обработки персональных данных</h3>
<ul>
<li>выполнение Оператором действий (ответ на запрос, консультирование, подготовка коммерческого предложения и иное), необходимых в соответствии с запросом субъекта персональных данных в случае заполнения форм на Сайте;</li>
<li>продвижение оборудования, работ, услуг Оператора на рынке путём осуществления прямых контактов с субъектом персональных данных с помощью средств связи;</li>
<li>реализация договорных отношений, в том числе установление предварительных договорных отношений, формирование базы данных контрагентов (клиентов, партнёров);</li>
<li>оптимизация работы Сайта, настройка содержимого страниц в соответствии с предпочтениями пользователя, запоминание информации о посещаемых пользователем страницах Сайта и сделанном выборе, предоставление целевой информации по оборудованию/услугам/работам Оператора.</li>
</ul>

<h3>Перечень персональных данных, на обработку которых даётся согласие</h3>
<ul>
<li>фамилия, имя, отчество;</li>
<li>контактная информация (номер телефона, адрес электронной почты);</li>
<li>данные, которые автоматически передаются Оператору в процессе входа на Сайт с помощью сервисов веб-аналитики и файлов cookie: сведения об используемом браузере (или иной программе, с помощью которой осуществляется доступ к Сайту); местоположение; IP-адрес устройства субъекта персональных данных; время доступа к Сайту; история действий на Сайте и пр.;</li>
<li>иные данные, самостоятельно предоставленные субъектом персональных данных Оператору.</li>
</ul>

<h3>Перечень действий с персональными данными, способы обработки</h3>
<p>Сбор, запись, систематизация, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача (предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</p>
<p>Оператор осуществляет любое из данных действий или их совокупность путём автоматизированной и смешанной обработки персональных данных.</p>

<h3>Передача данных третьим лицам</h3>
<p>В связи с указанными выше целями я понимаю, что мои персональные данные могут быть переданы поставщикам IT-инфраструктуры и сервисов, обеспечивающим работу Сайта (в частности, сервисам веб-аналитики и картографическим сервисам, используемым для отображения местоположения офиса Оператора), исключительно в целях исполнения поручения Оператора по обработке персональных данных и на условиях обеспечения конфиденциальности, аналогичных изложенным в Политике конфиденциальности.</p>
<p>Согласие является конкретным, предметным, информированным, сознательным и однозначным.</p>

<h3>Срок обработки, хранения и действия согласия</h3>
<p>Срок обработки и хранения персональных данных — в течение срока действия настоящего Согласия.</p>
<p>Срок действия настоящего Согласия: с даты предоставления Оператору и до дня получения от субъекта персональных данных отзыва согласия либо требования о прекращении обработки персональных данных, или до достижения целей обработки, либо 5 лет — в зависимости от того, какой момент наступит раньше.</p>

<h3>Достоверность данных</h3>
<p>Я подтверждаю, что предоставленные мной персональные данные являются точными, актуальными и достоверными, и обязуюсь своевременно в письменной форме информировать Оператора об их изменении по адресу электронной почты <a href="mailto:info@mehanit.ru">info@mehanit.ru</a> либо по адресу местонахождения Оператора.</p>

<h3>Отзыв согласия</h3>
<p>Я вправе в любой момент отозвать настоящее согласие, направив письменное уведомление на адрес: 603123, Россия, г. Нижний Новгород, Южное шоссе, д. 16 «В», с пометкой «Отзыв согласия на обработку персональных данных», либо на адрес электронной почты <a href="mailto:info@mehanit.ru">info@mehanit.ru</a>. Отзыв согласия может сделать невозможным дальнейшее предоставление мне оборудования, работ и услуг Оператора.</p>
`}
  };
  function initLegalModals(){
    var modal=document.createElement('div');
    modal.className='legal-modal';
    modal.id='legalModal';
    modal.setAttribute('role','dialog');
    modal.setAttribute('aria-modal','true');
    modal.setAttribute('aria-labelledby','legalModalTitle');
    modal.setAttribute('aria-hidden','true');
    modal.innerHTML='<div class="legal-modal-dialog"><button aria-label="Закрыть окно" class="legal-modal-close" type="button">&times;</button><h3 class="legal-modal-title" id="legalModalTitle"></h3><div class="legal-modal-body" id="legalModalBody"></div><div class="legal-modal-footer"><button class="btn btn-dark legal-modal-close-btn" type="button">Закрыть</button></div></div>';
    document.body.appendChild(modal);
    var titleEl=modal.querySelector('#legalModalTitle');
    var bodyEl=modal.querySelector('#legalModalBody');
    var closeBtn=modal.querySelector('.legal-modal-close');
    var closeBtnBottom=modal.querySelector('.legal-modal-close-btn');
    var isOpen=false,lastFocus=null;
    function openModal(key){
      var data=LEGAL_CONTENT[key];
      if(!data)return;
      titleEl.textContent=data.title;
      bodyEl.innerHTML=data.html;
      bodyEl.scrollTop=0;
      lastFocus=document.activeElement;
      isOpen=true;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
      trackEvent('legal_modal_open',{page_path:location.pathname,legal_doc:key});
      window.setTimeout(function(){closeBtn.focus()},50);
      document.addEventListener('keydown',onKeydown);
    }
    function closeModal(){
      if(!isOpen)return;
      isOpen=false;
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden','true');
      document.body.style.overflow='';
      document.removeEventListener('keydown',onKeydown);
      if(lastFocus&&lastFocus.focus)lastFocus.focus();
    }
    function onKeydown(e){
      if(e.key==='Escape'){closeModal();return}
      if(e.key==='Tab'){
        var f=modal.querySelectorAll('a,button');
        if(!f.length)return;
        var first=f[0],last=f[f.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
      }
    }
    closeBtn.addEventListener('click',closeModal);
    closeBtnBottom.addEventListener('click',closeModal);
    modal.addEventListener('click',function(e){if(e.target===modal)closeModal()});
    document.addEventListener('click',function(e){
      var trigger=e.target.closest&&e.target.closest('[data-legal]');
      if(trigger){e.preventDefault();openModal(trigger.getAttribute('data-legal'))}
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initLegalModals)}else{initLegalModals()}

  /* ---- cookie-баннер: появляется через 5 секунд, запоминает согласие ---- */
  function initCookieBanner(){
    if(localStorage.getItem('mehanitCookieConsent')==='1')return;
    var bar=document.createElement('div');
    bar.className='cookie-banner';
    bar.id='cookieBanner';
    bar.setAttribute('role','region');
    bar.setAttribute('aria-label','Уведомление об использовании файлов cookie');
    bar.innerHTML='<div class="cookie-banner-text">Мы используем cookie-файлы для улучшения пользовательского опыта и сбора статистики. Для получения дополнительной информации вы можете ознакомиться с нашей <a href="cookie-policy.html" data-legal="cookie">Политикой в отношении файлов Cookie</a>.</div><button class="btn btn-dark cookie-banner-accept" id="cookieBannerAccept" type="button">Принять</button>';
    document.body.appendChild(bar);
    window.setTimeout(function(){bar.classList.add('is-visible')},5000);
    document.getElementById('cookieBannerAccept').addEventListener('click',function(){
      localStorage.setItem('mehanitCookieConsent','1');
      trackEvent('cookie_banner_accept',{page_path:location.pathname});
      bar.classList.remove('is-visible');
      window.setTimeout(function(){if(bar.parentNode)bar.parentNode.removeChild(bar)},420);
    });
  }
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',initCookieBanner)}else{initCookieBanner()}
})();
