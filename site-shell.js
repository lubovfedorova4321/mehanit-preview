(function(){
  function render(){
    var oldHeader=document.querySelector('header');
    if(oldHeader){oldHeader.outerHTML='<header class="site-header"><div class="site-nav"><a class="site-logo" href="index.html"><img src="mehanit-logo-cropped.png" alt="Механит"></a><nav class="site-menu" aria-label="Главное меню"><div class="site-menu-item"><a href="index.html#equipment">Оборудование</a><div class="site-dropdown"><a href="equipment-turning.html">Токарное оборудование</a><a href="equipment-milling.html">Фрезерное оборудование</a><a href="equipment-milling-5-osevye-obrabatyvayuschie-centry.html">5-осевые обрабатывающие центры</a><a href="equipment-milling-portalnye-frezernye-centry.html">Портальные обрабатывающие центры</a><a href="equipment-boring.html">Горизонтально-расточные станки</a><a href="equipment-grinding.html">Шлифовальные станки</a><a href="equipment-saw.html">Ленточнопильные станки</a><a href="equipment-edm.html">Электроэрозионное оборудование</a><a href="equipment-drilling.html">Сверлильные станки</a><a href="equipment-laser.html">Лазерная резка</a></div></div><div class="site-menu-item"><a href="index.html#solutions">Решения</a><div class="site-dropdown"><a href="solution-auto.html">Автомобильная промышленность</a><a href="solution-aero.html">Авиационная промышленность</a><a href="solution-ship.html">Судостроение</a><a href="solution-rail.html">Железнодорожное машиностроение</a><a href="solution-agro.html">Сельхоз и дорожно-строительное</a><a href="solution-instr.html">Приборостроение</a><a href="solution-fuel.html">Топливно-энергетический сектор</a><a href="solution-mining.html">Горнорудная промышленность</a><a href="solution-space.html">Космическая промышленность</a></div></div><a href="stock.html">Станки в наличии</a><div class="site-menu-item"><a href="production-equipment.html">Комплексный подход</a><div class="site-dropdown"><a href="production-cutting-tools.html">Режущий инструмент</a><a href="production-tooling.html">Оснастка</a><a href="production-measurement.html">Измерение</a><a href="production-automation.html">Автоматизация</a><a href="production-coolant-chips.html">СОЖ и стружка</a><a href="production-complex.html">Комплексное оснащение</a></div></div><a href="press.html">Пресс-центр</a><a href="contacts.html">Контакты</a><div class="site-menu-mobile-extra"><button class="site-menu-mobile-action" id="mobileSearchBtn" type="button">Поиск по сайту</button><button class="site-menu-mobile-action site-menu-mobile-cta" id="mobileCallbackBtn" type="button">Заказать звонок</button><a class="site-menu-mobile-action" href="tel:88005511206">8 800 55 11 206</a><a class="site-menu-mobile-action" href="mailto:info@mehanit.ru">info@mehanit.ru</a><div class="site-menu-mobile-messengers"><a aria-label="Telegram" href="https://t.me/mehanit" rel="noopener" target="_blank"><svg viewBox="0 0 24 24"><path d="M21.7 3.4 18.5 20c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2L7.2 14.1 2.8 12.7c-1-.3-1-1 0-1.4L20.5 2.6c.8-.3 1.5.2 1.2.8Z"/></svg>Telegram</a><a aria-label="MAX" href="https://max.ru/id5256089670_biz" rel="noopener" target="_blank">MAX</a></div></div></nav><div class="site-actions"><button class="site-search-btn" id="headerSearchBtn" type="button" aria-label="Открыть поиск"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4.5 4.5"></path></svg></button><button class="site-cta" id="headerCallbackBtn" type="button">Заказать звонок</button><button class="site-phone" id="headerPhoneBtn" type="button" aria-expanded="false" aria-controls="headerContactsPanel"><span>8 800 55 11 206</span><svg class="site-phone-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"></path></svg></button><button class="site-burger" type="button" aria-label="Открыть меню">☰</button></div></div></header>'}
    var shellHeader=document.querySelector('.site-header');
    var shellBurger=document.querySelector('.site-burger');
    if(shellHeader&&shellBurger){shellBurger.addEventListener('click',function(){shellHeader.classList.toggle('menu-open')})}
    var oldFooter=document.querySelector('footer');
    if(oldFooter){oldFooter.outerHTML='<footer class="site-footer"><div class="site-footer-inner"><div class="site-footer-grid"><div class="site-footer-brand"><img src="mehanit-logo-cropped.png" alt="Механит"><p>Инженерный интегратор для металлообработки. Подбор оборудования под задачу, разработка технологии, поставка, пусконаладка и сервис с 2006 года.</p></div><div><h4>Оборудование</h4><a href="equipment-turning.html">Токарное и фрезерное</a><a href="equipment-edm.html">EDM и шлифование</a><a href="equipment-boring.html">Расточные и сверлильные</a><a href="equipment-saw.html">Пилы, лазер, гидроабразив</a><a href="stock.html">Склад в России</a></div><div><h4>Компания</h4><a href="index.html#equipment">Оборудование</a><a href="index.html#solutions">Решения</a><a href="stock.html">Склад РФ</a><a href="production-equipment.html">Комплексный подход</a><a href="press.html">Пресс-центр</a></div><div><h4>Контакты</h4><a href="tel:88005511206">8 800 55 11 206</a><a href="tel:+78312820500">8 (831) 282 0500</a><a href="mailto:info@mehanit.ru">info@mehanit.ru</a><a href="contacts.html">Нижний Новгород,<br>Южное шоссе, 16В</a><p class="site-footer-req">ОГРН 1095256004370<br>ИНН 5256089670<br>КПП 525601001</p></div></div><div class="site-footer-bottom"><span>Механит · 2006–2026 · mehanit.ru</span><span>© 2026 ГК «Механит». Все права защищены.</span></div></div></footer>'}
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
})();
