(function(){
  function render(){
    var oldHeader=document.querySelector('header');
    if(oldHeader){oldHeader.outerHTML='<header class="site-header"><div class="site-nav"><a class="site-logo" href="index.html"><img src="mehanit-logo-cropped.png" alt="Механит"></a><nav class="site-menu" aria-label="Главное меню"><div class="site-menu-item"><a href="equipment.html">Оборудование</a><div class="site-dropdown"><a href="equipment-turning.html">Токарные станки</a><a href="equipment-milling.html">Фрезерные станки</a><a href="equipment-boring.html">Горизонтально-расточные станки</a><a href="equipment-drilling.html">Сверлильные станки</a><a href="equipment-grinding.html">Шлифовальные станки</a><a href="equipment-saw.html">Ленточнопильные станки</a><a href="equipment-edm.html">Электроэрозионные станки</a><a href="equipment-laser.html">Листообработка</a></div></div><div class="site-menu-item"><a href="solutions.html">Решения</a><div class="site-dropdown"><a href="solution-auto.html">Автомобильная промышленность</a><a href="solution-aero.html">Авиационная промышленность</a><a href="solution-ship.html">Судостроение</a><a href="solution-rail.html">Железнодорожное машиностроение</a><a href="solution-agro.html">Сельхоз и дорожно-строительное</a><a href="solution-instr.html">Приборостроение</a><a href="solution-fuel.html">Топливно-энергетический сектор</a><a href="solution-mining.html">Горнорудная промышленность</a><a href="solution-space.html">Космическая промышленность</a></div></div><a href="stock.html">Станки в наличии</a><div class="site-menu-item"><a href="production-equipment.html">Комплексный подход</a><div class="site-dropdown"><a href="production-cutting-tools.html">Режущий инструмент</a><a href="production-tooling.html">Оснастка</a><a href="production-measurement.html">Измерение</a><a href="production-automation.html">Автоматизация</a><a href="production-coolant-chips.html">СОЖ и стружка</a><a href="production-complex.html">Комплексное оснащение</a></div></div><a href="press.html">Пресс-центр</a><a href="contacts.html">Контакты</a><div class="site-menu-mobile-extra"><button class="site-menu-mobile-action" id="mobileSearchBtn" type="button">Поиск по сайту</button><button class="site-menu-mobile-action site-menu-mobile-cta" id="mobileCallbackBtn" type="button">Заказать звонок</button><a class="site-menu-mobile-action" href="tel:88005511206">8 800 55 11 206</a><a class="site-menu-mobile-action" href="mailto:info@mehanit.ru">info@mehanit.ru</a><div class="site-menu-mobile-messengers"><a aria-label="Telegram" href="https://t.me/mehanit" rel="noopener" target="_blank"><svg viewBox="0 0 24 24"><path d="M21.7 3.4 18.5 20c-.2 1-.8 1.2-1.6.8l-4.5-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6 8.4-7.6c.4-.3-.1-.5-.5-.2L7.2 14.1 2.8 12.7c-1-.3-1-1 0-1.4L20.5 2.6c.8-.3 1.5.2 1.2.8Z"/></svg>Telegram</a><a aria-label="MAX" href="https://max.ru/id5256089670_biz" rel="noopener" target="_blank">MAX</a></div></div></nav><div class="site-actions"><button class="site-search-btn" id="headerSearchBtn" type="button" aria-label="Открыть поиск"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4.5 4.5"></path></svg></button><button class="site-cta" id="headerCallbackBtn" type="button">Заказать звонок</button><button class="site-phone" id="headerPhoneBtn" type="button" aria-expanded="false" aria-controls="headerContactsPanel"><span>8 800 55 11 206</span><svg class="site-phone-chevron" aria-hidden="true" viewBox="0 0 24 24"><path d="m7 10 5 5 5-5"></path></svg></button><button class="site-burger" type="button" aria-label="Открыть меню">☰</button></div></div></header>'}
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
    {title:'Токарные станки',category:'Оборудование',url:'equipment-turning.html',text:'Токарные станки и обрабатывающие центры с ЧПУ.'},
    {title:'Фрезерные станки',category:'Оборудование',url:'equipment-milling.html',text:'Фрезерные обрабатывающие центры.'},
    {title:'Горизонтально-расточные станки',category:'Оборудование',url:'equipment-boring.html',text:'Расточные станки с ЧПУ.'},
    {title:'Шлифовальные станки',category:'Оборудование',url:'equipment-grinding.html',text:'Круглошлифовальное и плоскошлифовальное оборудование.'},
    {title:'Ленточнопильные станки',category:'Оборудование',url:'equipment-saw.html',text:'Отрезное оборудование под серийные задачи.'},
    {title:'Электроэрозионные станки',category:'Оборудование',url:'equipment-edm.html',text:'EDM-станки для сложных материалов и геометрий.'},
    {title:'Сверлильные станки',category:'Оборудование',url:'equipment-drilling.html',text:'Радиально- и вертикально-сверлильные станки.'},
    {title:'Листообработка',category:'Оборудование',url:'equipment-laser.html',text:'Лазерная и гидроабразивная резка, гильотины, листогибы.'},
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
    {title:'Контакты',category:'Раздел',url:'contacts.html',text:'Телефон, почта, адрес и реквизиты компании.'},
    {title:'TK6111-CNC / TK6113-CNC Ft',category:'Горизонтально-расточные станки',url:'equipment-boring-tk6111-cnc-tk6113-cnc-ft.html',text:'TK6111-CNC/TK6113-CNC — горизонтально-расточные станки с чпу: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'TK6511 / TK6513 / TK6516 / TK6813 / TK6816 Ft',category:'Горизонтально-расточные станки',url:'equipment-boring-tk6511-tk6513-tk6516-tk6813-tk6816-ft.html',text:'TK6511/TK6513/TK6516/TK6813/TK6816 — горизонтально-расточные станки с чпу: модельный ряд из 5 типоразмеров, характеристики каждой модели в описании.'},
    {title:'TK6913 / TK6916 / TK6920 / TK6926 Ft',category:'Горизонтально-расточные станки',url:'equipment-boring-tk6913-tk6916-tk6920-tk6926-ft.html',text:'TK6913/TK6916/TK6920/TK6926 — горизонтально-расточные станки с чпу: модельный ряд из 4 типоразмеров, характеристики каждой модели в описании.'},
    {title:'TPX6111B-3 F',category:'Горизонтально-расточные станки',url:'equipment-boring-tpx6111b-3-f.html',text:'TPX6111B/3 — горизонтально-расточной станок со шпинделем Ø110 мм, конусом 7:24 №50 и устройством цифровой индикации по осям X/Y/Z/B.'},
    {title:'TPX6113F1-Manual / TPX6113F2-Manual Ft',category:'Горизонтально-расточные станки',url:'equipment-boring-tpx6113f1-manual-tpx6113f2-manual-ft.html',text:'TPX6113F1-Manual/TPX6113F2-Manual — горизонтально-расточные станки с уци: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'D320 F',category:'Сверлильные станки',url:'equipment-drilling-d320-f.html',text:'D320 — вертикально-сверлильный станок: сверление до Ø25 мм, резьба М12, конус МТ3, бесступенчатый привод 80–1600 об/мин, 0,70/1,3 кВт.'},
    {title:'D350 F',category:'Сверлильные станки',url:'equipment-drilling-d350-f.html',text:'D350 — вертикально-сверлильный станок: сверление до Ø35 мм, резьба М20, конус МТ4, бесступенчатый привод 85–1800 об/мин, 1,0/1,7 кВт.'},
    {title:'D5140 / D5150 / D5163 / D5180 F',category:'Сверлильные станки',url:'equipment-drilling-d5140-d5150-d5163-d5180-f.html',text:'D5140/D5150/D5163/D5180 — вертикально-сверлильные станки коробчатого типа: сверление Ø40–80 мм, конус МТ4–МТ6, мощность 3–7,5 кВт.'},
    {title:'DM30H F',category:'Сверлильные станки',url:'equipment-drilling-dm30h-f.html',text:'DM30H — сверлильно-фрезерный станок с редукторной головкой: сверление до Ø40 мм, конус МТ4, 12 ступеней 75–3200 об/мин, 0,85/1,1 кВт.'},
    {title:'DM38H F',category:'Сверлильные станки',url:'equipment-drilling-dm38h-f.html',text:'DM38H — сверлильно-фрезерный станок: сверление до Ø40 мм, резьба М24, конус МТ3/МТ4/R8/ISO30, 12 ступеней 75–3200 об/мин, 1,5 кВт.'},
    {title:'DM5032 F',category:'Сверлильные станки',url:'equipment-drilling-dm5032-f.html',text:'DM5032 — сверлильно-фрезерный станок: сверление до Ø35 мм, резьба М22, конус МТ4, 12 ступеней 75–3200 об/мин, 1,5/1,1 кВт.'},
    {title:'DM5040 F',category:'Сверлильные станки',url:'equipment-drilling-dm5040-f.html',text:'DM5040 — сверлильно-фрезерный станок: сверление до Ø40 мм, резьба М20/М24, конус МТ4, 50–1450 об/мин, 0,75/1,5 кВт.'},
    {title:'DN4025 F',category:'Сверлильные станки',url:'equipment-drilling-dn4025-f.html',text:'DN4025 — настольный вертикально-сверлильный станок: сверление до Ø25 мм, резьба М16, конус МТ3, 125–2825 об/мин, 0,75 кВт.'},
    {title:'DN5025 F',category:'Сверлильные станки',url:'equipment-drilling-dn5025-f.html',text:'DN5025 — колонный вертикально-сверлильный станок: сверление до Ø25 мм, конус МТ3, 6 ступеней 125–2825 об/мин, мощность 0,75 кВт.'},
    {title:'DN5030A / DN5035A / DN5040A / DN5050A F',category:'Сверлильные станки',url:'equipment-drilling-dn5030a-dn5035a-dn5040a-dn5050a-f.html',text:'Серия DN (DN5030–DN5050) — вертикально-сверлильные станки: сверление Ø30–50 мм, резьба М20–М30, бесступенчатый привод до 3500 об/мин, поворотный стол ±45°.'},
    {title:'DWB5030A / DWB5035A / DWB5040A / DWB5050A F',category:'Сверлильные станки',url:'equipment-drilling-dwb5030a-dwb5035a-dwb5040a-dwb5050a-f.html',text:'Серия DWB (DWB5030–DWB5050) — вертикально-сверлильные станки: сверление Ø30–50 мм, резьба М20–М30, бесступенчатый привод до 3500 об/мин, поворотный стол ±45°.'},
    {title:'DY5030A/B / DY5035A/B / DY5040A/B / DY5050A/B F',category:'Сверлильные станки',url:'equipment-drilling-dy5030a-b-dy5035a-b-dy5040a-b-dy5050a-b-f.html',text:'Серия DY (DY5030–DY5050) — вертикально-сверлильные станки: сверление Ø30–50 мм, резьба М20–М30, конус МТ4, до 3030 об/мин, поворотный стол ±45°.'},
    {title:'MD 19S / MD 23S / MD 28S F',category:'Сверлильные станки',url:'equipment-drilling-md-19s-md-23s-md-28s-f.html',text:'MD 19S/23S/28S — переносные магнитные сверлильные станки: сверление до Ø19/23/28 мм, магнитный прижим до 14000 Н, 220 В.'},
    {title:'MD 23RL F',category:'Сверлильные станки',url:'equipment-drilling-md-23rl-f.html',text:'MD 23RL — переносной магнитный сверлильный станок: сверление до Ø23 мм, 140–480 об/мин, магнитный прижим 13000 Н, 1300 Вт, 220 В.'},
    {title:'MD 32H / MD 38H / MD 49H F',category:'Сверлильные станки',url:'equipment-drilling-md-32h-md-38h-md-49h-f.html',text:'MD 32H/38H/49H — магнитные сверлильные станки: сверление до Ø32/38/49 мм, магнитный прижим до 18000 Н, ход 220 мм, 380 В.'},
    {title:'MD 32S F',category:'Сверлильные станки',url:'equipment-drilling-md-32s-f.html',text:'MD 32S — переносной магнитный сверлильный станок: сверление до Ø35 мм, 190–850 об/мин, магнитный прижим 12500 Н, 1250 Вт, 220 В.'},
    {title:'RD3210 / RD4010 / RD5016 / RD5020 / RD6320 / RD8025 F',category:'Сверлильные станки',url:'equipment-drilling-rd3210-rd4010-rd5016-rd5020-rd6320-rd8025-f.html',text:'Серия RD (RD3210–RD8025) — радиально-сверлильные станки: сверление Ø32–80 мм, вылет до 2050 мм, конус МТ4–МТ6, 16 ступеней частот.'},
    {title:'RD4013 / RD5014 / RD6016 / RD8020 / RD8025 F',category:'Сверлильные станки',url:'equipment-drilling-rd4013-rd5014-rd6016-rd8020-rd8025-f.html',text:'Серия RD (RD4013–RD8025) — радиально-сверлильные станки с гидрозажимом: сверление Ø40–80 мм (чугун до Ø105), бесступенчатый привод, конус МТ4–МТ6.'},
    {title:'RM4011 / RM4014 / RM5016 F',category:'Сверлильные станки',url:'equipment-drilling-rm4011-rm4014-rm5016-f.html',text:'Серия RM (RM4011, RM4014, RM5016) — радиально-сверлильные станки: сверление Ø40–50 мм, вылет до 1600 мм, конус МТ4/МТ5, поворот шпинделя 360°.'},
    {title:'Z3025x8 F',category:'Сверлильные станки',url:'equipment-drilling-z3025x8-f.html',text:'Радиально-сверлильный станок Z3025x8: вылет 800 мм, диаметр сверления до 25 мм, мощность 1.1-3 кВт. Для тяжёлых деталей и крупногабаритных изделий.'},
    {title:'Z3032x10-1 W',category:'Сверлильные станки',url:'equipment-drilling-z3032x10-1-w.html',text:'Z3032×10/1 — радиально-сверлильный станок: сверление до Ø32 мм, вылет шпинделя 300–1000 мм, конус Морзе 4, 2.2 кВт.'},
    {title:'Z3032x10 F',category:'Сверлильные станки',url:'equipment-drilling-z3032x10-f.html',text:'Радиально-сверлильный станок Z3032x10: вылет 1000 мм, диаметр сверления до 32 мм, мощность 1.5-4 кВт. Для тяжёлых деталей и крупногабаритных изделий.'},
    {title:'Z3040x12 F',category:'Сверлильные станки',url:'equipment-drilling-z3040x12-f.html',text:'Радиально-сверлильный станок Z3040x12: вылет 1200 мм, диаметр сверления до 40 мм, мощность 3-5.5 кВт. Для тяжёлых деталей и крупногабаритных изделий.'},
    {title:'Z3040x13-2 W',category:'Сверлильные станки',url:'equipment-drilling-z3040x13-2-w.html',text:'Z3040×13/2 — радиально-сверлильный станок: сверление до Ø40 мм, вылет шпинделя 300–1300 мм, конус Морзе 4, 3 кВт.'},
    {title:'Z3050x16-1 W',category:'Сверлильные станки',url:'equipment-drilling-z3050x16-1-w.html',text:'Z3050×16/1 — радиально-сверлильный станок: сверление до Ø50 мм, вылет шпинделя 350–1600 мм, конус Морзе 5, 4 кВт.'},
    {title:'Z3050x16 F',category:'Сверлильные станки',url:'equipment-drilling-z3050x16-f.html',text:'Радиально-сверлильный станок Z3050x16: вылет 1600 мм, диаметр сверления до 50 мм, мощность 4-7.5 кВт. Для тяжёлых деталей и крупногабаритных изделий.'},
    {title:'Z3063x16-1 W',category:'Сверлильные станки',url:'equipment-drilling-z3063x16-1-w.html',text:'Z3063×16/1 — радиально-сверлильный станок: сверление до Ø63 мм, вылет шпинделя 400–1600 мм, конус Морзе 5, 5.5 кВт.'},
    {title:'Z3063x20-1 W',category:'Сверлильные станки',url:'equipment-drilling-z3063x20-1-w.html',text:'Z3063×20/1 — радиально-сверлильный станок: сверление до Ø63 мм, вылет шпинделя 450–2000 мм, конус Морзе 5, 5.5 кВт.'},
    {title:'Z3080x25-1 W',category:'Сверлильные станки',url:'equipment-drilling-z3080x25-1-w.html',text:'Z3080×25/1 — радиально-сверлильный станок: сверление до Ø80 мм, вылет шпинделя 500–2500 мм, конус Морзе 6, 7.5 кВт.'},
    {title:'Z5025 F',category:'Сверлильные станки',url:'equipment-drilling-z5025-f.html',text:'Вертикально-сверлильный станок Z5025: диаметр сверления до 25 мм, мощность 6-8 кВт. Промышленное оборудование для сверления, зенкования и нарезания резьбы.'},
    {title:'Z5035 F',category:'Сверлильные станки',url:'equipment-drilling-z5035-f.html',text:'Вертикально-сверлильный станок Z5035: диаметр сверления до 35 мм, мощность 9-11 кВт. Промышленное оборудование для сверления, зенкования и нарезания резьбы.'},
    {title:'Z5035A W',category:'Сверлильные станки',url:'equipment-drilling-z5035a-w.html',text:'Z5035A — вертикально-сверлильный станок: сверление до Ø35 мм, нарезание резьбы до M24, шпиндель 70–2600 об/мин, 1.5/2.2 кВт.'},
    {title:'Z5040 F',category:'Сверлильные станки',url:'equipment-drilling-z5040-f.html',text:'Вертикально-сверлильный станок Z5040: диаметр сверления до 40 мм, мощность 5-5.5 кВт. Промышленное оборудование для сверления, зенкования и нарезания резьбы.'},
    {title:'Z5040A W',category:'Сверлильные станки',url:'equipment-drilling-z5040a-w.html',text:'Z5040A — вертикально-сверлильный станок: сверление до Ø40 мм, нарезание резьбы до M30, шпиндель 42–2050 об/мин, 2.2/2.8 кВт.'},
    {title:'Z5045 F',category:'Сверлильные станки',url:'equipment-drilling-z5045-f.html',text:'Вертикально-сверлильный станок Z5045: диаметр сверления до 45 мм, мощность 5.5-7.5 кВт. Промышленное оборудование для сверления, зенкования и нарезания резьбы.'},
    {title:'Z5050A W',category:'Сверлильные станки',url:'equipment-drilling-z5050a-w.html',text:'Z5050A — вертикально-сверлильный станок: сверление до Ø50 мм, нарезание резьбы до M32, шпиндель 42–1865 об/мин, 2.2/2.8 кВт.'},
    {title:'ZQ3040x16 F',category:'Сверлильные станки',url:'equipment-drilling-zq3040x16-f.html',text:'Радиально-сверлильный станок ZQ3040x16: вылет 1600 мм, диаметр сверления до 40 мм, мощность 3-5.5 кВт. Для тяжёлых деталей и крупногабаритных изделий.'},
    {title:'ZX5025 F',category:'Сверлильные станки',url:'equipment-drilling-zx5025-f.html',text:'Вертикально-сверлильный станок ZX5025: диаметр сверления до 25 мм, мощность 1.5 кВт. Промышленное оборудование для сверления, зенкования и нарезания резьбы.'},
    {title:'ZX5032 F',category:'Сверлильные станки',url:'equipment-drilling-zx5032-f.html',text:'Вертикально-сверлильный станок ZX5032: диаметр сверления до 32 мм, мощность 1.5 кВт. Промышленное оборудование для сверления, зенкования и нарезания резьбы.'},
    {title:'BH-320 F',category:'Электроэрозионные станки',url:'equipment-edm-bh-320-f.html',text:'BH-320 — среднескоростной проволочно-вырезной электроэрозионный станок T-образной конструкции: стол 760×520 мм, ход 400×320 мм, толщина реза до 250 мм.'},
    {title:'BH-400 F',category:'Электроэрозионные станки',url:'equipment-edm-bh-400-f.html',text:'BH-400 — среднескоростной проволочно-вырезной электроэрозионный станок T-образной конструкции: стол 850×600 мм, ход 500×400 мм, толщина реза до 250 мм.'},
    {title:'BH-500 F',category:'Электроэрозионные станки',url:'equipment-edm-bh-500-f.html',text:'BH-500 — среднескоростной проволочно-вырезной электроэрозионный станок T-образной конструкции: стол 1000×750 мм, ход 630×500 мм, толщина реза до 300 мм.'},
    {title:'BH-630 F',category:'Электроэрозионные станки',url:'equipment-edm-bh-630-f.html',text:'BH-630 — среднескоростной проволочно-вырезной электроэрозионный станок T-образной конструкции: стол 1170×830 мм, ход 800×630 мм, толщина реза до 300 мм.'},
    {title:'BH4030 F',category:'Электроэрозионные станки',url:'equipment-edm-bh4030-f.html',text:'BH4030 — высокоскоростной электроэрозионный супердрель: стол 400×600 мм, электрод Ø0.3–3.0 мм, скорость 30–60 мм/мин.'},
    {title:'BH5040 F',category:'Электроэрозионные станки',url:'equipment-edm-bh5040-f.html',text:'BH5040 — высокоскоростной электроэрозионный супердрель: стол 440×630 мм, электрод Ø0.3–3.0 мм, скорость 30–60 мм/мин.'},
    {title:'BSW1270 M',category:'Электроэрозионные станки',url:'equipment-edm-bsw1270-m.html',text:'Проволочно-вырезной станок BSW1270 (погружной, AWT): ход 1200×700×350 мм, стол 1530×970 мм, заготовки до 1500 кг. Тяжёлый класс, автоматическая заправка…'},
    {title:'BSW325 M',category:'Электроэрозионные станки',url:'equipment-edm-bsw325-m.html',text:'Проволочно-вырезной станок BSW325 (погружной, AWT): ход 350×250×200 мм, стол 560×410 мм, заготовки до 350 кг, конус ±15°. Автоматическая заправка проволоки.'},
    {title:'BSW530 M',category:'Электроэрозионные станки',url:'equipment-edm-bsw530-m.html',text:'Проволочно-вырезной станок BSW530 (погружной, AWT): ход 500×300×250 мм, стол 710×460 мм, заготовки до 350 кг, конус ±15°. Автозаправка проволоки, высокая…'},
    {title:'BSW645 M',category:'Электроэрозионные станки',url:'equipment-edm-bsw645-m.html',text:'Проволочно-вырезной станок BSW645 (погружной, AWT): ход 600×450×300 мм, стол 868×668 мм, заготовки до 500 кг, конус ±15°. Высокая точность, автозаправка…'},
    {title:'CNC-C26 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-c26-m.html',text:'Копировально-прошивочный станок CNC-C26: ход 280×230×150 мм, стол 600×300 мм, заготовки до 800 кг, ток 30 А, 3 кВА. Полное CNC-управление, линейные шкалы.'},
    {title:'CNC-C36 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-c36-m.html',text:'Копировально-прошивочный станок CNC-C36: ход 380×280×185 мм, стол 650×350 мм, заготовки до 1000 кг, ток 50 А, 4,5 кВА. CNC-управление, линейные шкалы 1 мкм.'},
    {title:'CNC-C54 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-c54-m.html',text:'Копировально-прошивочный станок CNC-C54: ход 480×380×185 мм, стол 850×450 мм, заготовки до 1300 кг, ток 75 А, 8 кВА. CNC-управление с линейными шкалами 1 мкм.'},
    {title:'CNC-P26 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-p26-m.html',text:'Копировально-прошивочный станок CNC-P26: ход 280×230×150 мм, стол 600×300 мм, заготовки до 800 кг, ток 30 А, 3 кВА. Серия P с подвижным столом, CNC-управление.'},
    {title:'CNC-P36 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-p36-m.html',text:'Копировально-прошивочный станок CNC-P36: ход 380×280×185 мм, стол 650×350 мм, заготовки до 1000 кг, ток 50 А, 4,5 кВА. Серия P с подвижным столом,…'},
    {title:'CNC-P54 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-p54-m.html',text:'Копировально-прошивочный станок CNC-P54: ход 480×380×185 мм, стол 850×450 мм, заготовки до 1300 кг, ток 75 А, 8 кВА. Серия P с подвижным столом, CNC-управление.'},
    {title:'CNC-P56 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-p56-m.html',text:'Копировально-прошивочный станок CNC-P56: ход 580×470×250 мм, стол 1000×550 мм, заготовки до 1600 кг, ток 75 А, 8 кВА. Серия P, CNC-управление.'},
    {title:'CNC S-26 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-s-26-m.html',text:'Электроэрозионная супердрель CNC S-26: ход 280×230×350 мм, электрод Ø0,3–3,0 мм, ток 30 А, 3,5 кВА. Многоосевой CNC-контроллер, опциональные оси A/B.'},
    {title:'CNC S-36 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-s-36-m.html',text:'Электроэрозионная супердрель CNC S-36: ход 380×280×350 мм, электрод Ø0,3–3,0 мм, ток 30 А, 3,5 кВА. Многоосевой CNC-контроллер для точной прошивки отверстий.'},
    {title:'CNC S-46 M',category:'Электроэрозионные станки',url:'equipment-edm-cnc-s-46-m.html',text:'Электроэрозионная супердрель CNC S-46: ход 450×360×350 мм, заготовки до 1300 кг, электрод Ø0,3–3,0 мм, ток 30 А, 3,5 кВА. CNC-контроллер.'},
    {title:'CNC1260 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc1260-f.html',text:'CNC1260 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC1470 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc1470-f.html',text:'CNC1470 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC1880 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc1880-f.html',text:'CNC1880 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC2110 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc2110-f.html',text:'CNC2110 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC2510 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc2510-f.html',text:'CNC2510 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC3110 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc3110-f.html',text:'CNC3110 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC320J F',category:'Электроэрозионные станки',url:'equipment-edm-cnc320j-f.html',text:'CNC320J — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC4030 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc4030-f.html',text:'CNC4030 — электроэрозионный супердрель с ЧПУ и трёхосевым сервоприводом: стол 400×600 мм, электрод Ø0.2–3.0 мм, ток 30 А.'},
    {title:'CNC430 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc430-f.html',text:'CNC430 — прошивной электроэрозионный (копировально-прошивочный) станок, в интегрированном и раздельном (split) исполнении. Прошивка пресс-форм, штампов,…'},
    {title:'CNC430-S F',category:'Электроэрозионные станки',url:'equipment-edm-cnc430-s-f.html',text:'CNC430-S — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC450 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc450-f.html',text:'CNC450 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC450J F',category:'Электроэрозионные станки',url:'equipment-edm-cnc450j-f.html',text:'CNC450J — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC5040 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc5040-f.html',text:'CNC5040 — электроэрозионный супердрель с ЧПУ и трёхосевым сервоприводом: стол 440×630 мм, электрод Ø0.2–3.0 мм, ток 30 А.'},
    {title:'CNC540 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc540-f.html',text:'CNC540 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC540-S F',category:'Электроэрозионные станки',url:'equipment-edm-cnc540-s-f.html',text:'CNC540-S — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC540J F',category:'Электроэрозионные станки',url:'equipment-edm-cnc540j-f.html',text:'CNC540J — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC640 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc640-f.html',text:'CNC640 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC640-S F',category:'Электроэрозионные станки',url:'equipment-edm-cnc640-s-f.html',text:'CNC640-S — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC850 F',category:'Электроэрозионные станки',url:'equipment-edm-cnc850-f.html',text:'CNC850 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'CNC850-S F',category:'Электроэрозионные станки',url:'equipment-edm-cnc850-s-f.html',text:'CNC850-S — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'DK77100H F',category:'Электроэрозионные станки',url:'equipment-edm-dk77100h-f.html',text:'DK77100H — среднескоростной проволочно-вырезной электроэрозионный станок (C-тип): стол 1220×1550 мм, ход 1000×1200 мм, толщина реза до 550 мм.'},
    {title:'DK7732H F',category:'Электроэрозионные станки',url:'equipment-edm-dk7732h-f.html',text:'DK7732H — среднескоростной проволочно-вырезной электроэрозионный станок (C-тип): стол 500×720 мм, ход 320×400 мм, толщина реза до 250 мм.'},
    {title:'DK7735 F',category:'Электроэрозионные станки',url:'equipment-edm-dk7735-f.html',text:'DK7735 — проволочно-вырезной электроэрозионный станок серии DK77: стол 750×510 мм, ход 350×450 мм, ход по Z 400 мм.'},
    {title:'DK7740F F',category:'Электроэрозионные станки',url:'equipment-edm-dk7740f-f.html',text:'DK7740F — проволочно-вырезной электроэрозионный станок серии DK77F с большим углом наклона (±30°): стол 1060×600 мм, ход 400×600 мм.'},
    {title:'DK7740H F',category:'Электроэрозионные станки',url:'equipment-edm-dk7740h-f.html',text:'DK7740H — среднескоростной проволочно-вырезной электроэрозионный станок (C-тип): стол 600×820 мм, ход 400×500 мм, толщина реза до 250 мм.'},
    {title:'DK7745 F',category:'Электроэрозионные станки',url:'equipment-edm-dk7745-f.html',text:'DK7745 — проволочно-вырезной электроэрозионный станок серии DK77: стол 820×580 мм, ход 450×550 мм, ход по Z 400 мм.'},
    {title:'DK7750 F',category:'Электроэрозионные станки',url:'equipment-edm-dk7750-f.html',text:'DK7750 — проволочно-вырезной электроэрозионный станок серии DK77: стол 1000×690 мм, ход 500×630 мм, ход по Z 600 мм.'},
    {title:'DK7750F F',category:'Электроэрозионные станки',url:'equipment-edm-dk7750f-f.html',text:'DK7750F — проволочно-вырезной электроэрозионный станок серии DK77F с большим углом наклона (±30°): стол 1060×660 мм, ход 500×700 мм.'},
    {title:'DK7750H F',category:'Электроэрозионные станки',url:'equipment-edm-dk7750h-f.html',text:'DK7750H — среднескоростной проволочно-вырезной электроэрозионный станок (C-тип): стол 700×1000 мм, ход 500×630 мм, толщина реза до 300 мм.'},
    {title:'DK7763 F',category:'Электроэрозионные станки',url:'equipment-edm-dk7763-f.html',text:'DK7763 — проволочно-вырезной электроэрозионный станок серии DK77: стол 1140×770 мм, ход 630×800 мм, ход по Z 600 мм.'},
    {title:'DK7763F F',category:'Электроэрозионные станки',url:'equipment-edm-dk7763f-f.html',text:'DK7763F — проволочно-вырезной электроэрозионный станок серии DK77F с большим углом наклона (±30°): стол 1360×770 мм, ход 630×1000 мм.'},
    {title:'DK7763H F',category:'Электроэрозионные станки',url:'equipment-edm-dk7763h-f.html',text:'DK7763H — среднескоростной проволочно-вырезной электроэрозионный станок (C-тип): стол 800×1200 мм, ход 630×800 мм, толщина реза до 300 мм.'},
    {title:'DK7780 F',category:'Электроэрозионные станки',url:'equipment-edm-dk7780-f.html',text:'DK7780 — проволочно-вырезной электроэрозионный станок серии DK77: стол 1350×1000 мм, ход 800×1000 мм, ход по Z 600 мм.'},
    {title:'DK7780H F',category:'Электроэрозионные станки',url:'equipment-edm-dk7780h-f.html',text:'DK7780H — среднескоростной проволочно-вырезной электроэрозионный станок (C-тип): стол 1000×1350 мм, ход 800×1000 мм, толщина реза до 400 мм.'},
    {title:'DZNC S26 M',category:'Электроэрозионные станки',url:'equipment-edm-dznc-s26-m.html',text:'Электроэрозионная супердрель DZNC S26: ход 300×250×350 мм, электрод Ø0,3–3,0 мм, ток 30 А, 3,5 кВА. Работа на воде, цифровая индикация координат.'},
    {title:'DZNC S36 M',category:'Электроэрозионные станки',url:'equipment-edm-dznc-s36-m.html',text:'Электроэрозионная супердрель DZNC S36: ход 400×300×350 мм, заготовки до 800 кг, электрод Ø0,3–3,0 мм, ток 30 А. Работа на чистой воде, 3-осевые линейные шкалы.'},
    {title:'DZNC S46 M',category:'Электроэрозионные станки',url:'equipment-edm-dznc-s46-m.html',text:'Электроэрозионная супердрель DZNC S46: ход 470×380×350 мм, заготовки до 1300 кг, электрод Ø0,3–3,0 мм, ток 30 А. Работа на чистой воде, ZNC-управление.'},
    {title:'FW-BFW 1270 M',category:'Электроэрозионные станки',url:'equipment-edm-fw-bfw-1270-m.html',text:'FW/BFW 1270 — проволочно-вырезной электроэрозионный станок. Размер стола: 1530×970 мм; Макс. габариты заготовки: 1600 x 1000 x 350 мм.'},
    {title:'FW-BFW 325 M',category:'Электроэрозионные станки',url:'equipment-edm-fw-bfw-325-m.html',text:'FW/BFW 325 — проволочно-вырезной электроэрозионный станок. Размер стола: 560×410 мм; Макс. габариты заготовки: 800x550x200 мм.'},
    {title:'FW-BFW 530 M',category:'Электроэрозионные станки',url:'equipment-edm-fw-bfw-530-m.html',text:'FW/BFW 530 — проволочно-вырезной электроэрозионный станок. Макс. габариты заготовки: 850x550x250 мм; Макс. масса заготовки: 350 кг.'},
    {title:'FW-BFW 645 M',category:'Электроэрозионные станки',url:'equipment-edm-fw-bfw-645-m.html',text:'FW/BFW 645 — проволочно-вырезной электроэрозионный станок. Макс. габариты заготовки: 1250x850x300 мм; Макс. масса заготовки: 600 кг.'},
    {title:'FW-BFW 845 M',category:'Электроэрозионные станки',url:'equipment-edm-fw-bfw-845-m.html',text:'FW/BFW 845 — проволочно-вырезной электроэрозионный станок. Макс. габариты заготовки: 1350x850x300 мм; Макс. масса заготовки: 600 кг.'},
    {title:'FW1270 M',category:'Электроэрозионные станки',url:'equipment-edm-fw1270-m.html',text:'Проволочно-вырезной станок FW1270 (промывной тип): ход 1200×700×350 мм, стол 1530×970 мм, заготовки до 1500 кг, конус ±15°. Тяжёлый класс для промышленности.'},
    {title:'FW325 M',category:'Электроэрозионные станки',url:'equipment-edm-fw325-m.html',text:'Проволочно-вырезной станок FW325 (промывной тип): ход 350×250×200 мм, стол 560×410 мм, заготовки до 350 кг, угол конусности ±15°. Поставка и поддержка.'},
    {title:'FW530 M',category:'Электроэрозионные станки',url:'equipment-edm-fw530-m.html',text:'Проволочно-вырезной станок FW530 (промывной тип): ход 500×300×250 мм, стол 710×460 мм, заготовки до 350 кг, конус ±15°. Поставка под заказ.'},
    {title:'FW645 M',category:'Электроэрозионные станки',url:'equipment-edm-fw645-m.html',text:'Проволочно-вырезной станок FW645 (промывной тип): ход 600×450×300 мм, стол 868×668 мм, заготовки до 600 кг, конус ±15°. Надёжное решение для производства.'},
    {title:'FW845 M',category:'Электроэрозионные станки',url:'equipment-edm-fw845-m.html',text:'Проволочно-вырезной станок FW845 (промывной тип): ход 800×450×300 мм, стол 1068×670 мм, заготовки до 600 кг, угол конусности ±15°. Для серийного производства.'},
    {title:'FX600 M',category:'Электроэрозионные станки',url:'equipment-edm-fx600-m.html',text:'FX600 — прошивной электроэрозионный станок с наклонной осью B (-40°~110°): ходы 620×520×460 мм, заготовка до Ø520×330 мм, 7000 кг.'},
    {title:'P207 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p207-cnc-m.html',text:'P207 CNC — копировально-прошивочной с подвижным хоботом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 2000х700 мм; Размер стола: 1600х950 мм.'},
    {title:'P307 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p307-cnc-m.html',text:'P307 CNC — копировально-прошивочной с подвижным хоботом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 3000х700 мм; Макс. габариты…'},
    {title:'P36 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p36-cnc-m.html',text:'P36 CNC — копировально-прошивочной с подвижным столом электроэрозионный станок. Ход по осям Z и U: 185 / 230 мм; Размер стола: 650х350 мм.'},
    {title:'P36 ZNC M',category:'Электроэрозионные станки',url:'equipment-edm-p36-znc-m.html',text:'P36 ZNC — копировально-прошивочной с подвижным столом электроэрозионный станок. Ход по осям Z и U: 185 / 230 мм; Размер стола: 650х350 мм.'},
    {title:'P40 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p40-cnc-m.html',text:'P40 CNC — копировально-прошивочной с подвижным хоботом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 400х300 мм; Макс. габариты…'},
    {title:'P50 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p50-cnc-m.html',text:'P50 CNC — копировально-прошивочной с подвижным хоботом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 600х500 мм; Размер стола: 800х650 мм.'},
    {title:'P54 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p54-cnc-m.html',text:'P54 CNC — копировально-прошивочной с подвижным столом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 480x380 мм; Ход по осям Z и U: 185 /…'},
    {title:'P54 ZNC M',category:'Электроэрозионные станки',url:'equipment-edm-p54-znc-m.html',text:'P54 ZNC — копировально-прошивочной с подвижным столом электроэрозионный станок. Ход по осям Z и U: 185 / 300 мм; Размер стола: 850x450 мм.'},
    {title:'P56 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p56-cnc-m.html',text:'P56 CNC — копировально-прошивочной с подвижным столом электроэрозионный станок. Ход по осям Z и U: 250 / 450 мм; Размер стола: 1000x550 мм.'},
    {title:'P56 ZNC M',category:'Электроэрозионные станки',url:'equipment-edm-p56-znc-m.html',text:'P56 ZNC — копировально-прошивочной с подвижным столом электроэрозионный станок. Ход по осям Z и U: 250 / 450 мм; Размер стола: 1000x550 мм.'},
    {title:'P58 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p58-cnc-m.html',text:'P58 CNC — копировально-прошивочной с подвижным хоботом электроэрозионный станок. Макс. габариты заготовки: 1480х1050х510 мм; Макс. масса заготовки: 4000 кг.'},
    {title:'P66 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-p66-cnc-m.html',text:'P66 CNC — копировально-прошивочной с подвижным хоботом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 1300х700 мм; Размер стола: 1600х950 мм.'},
    {title:'R26 CNC M',category:'Электроэрозионные станки',url:'equipment-edm-r26-cnc-m.html',text:'R26 CNC — копировально-прошивочной с подвижным столом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 280x230 мм; Ход по осям Z и U: 150 /…'},
    {title:'R26 ZNC M',category:'Электроэрозионные станки',url:'equipment-edm-r26-znc-m.html',text:'R26 ZNC — копировально-прошивочной с подвижным столом электроэрозионный станок. Ход по осям Z и U: 150 / 150 мм; Макс. габариты заготовки: 750х500х240 мм.'},
    {title:'RTA40 M',category:'Электроэрозионные станки',url:'equipment-edm-rta40-m.html',text:'RTA40 — высокоскоростной копировально-прошивочный электроэрозионный станок с зеркальным качеством поверхности: ход 400×300×400 мм, заготовки до 800 кг.'},
    {title:'RTA50 M',category:'Электроэрозионные станки',url:'equipment-edm-rta50-m.html',text:'RTA50 — высокоскоростной копировально-прошивочный электроэрозионный станок с зеркальным качеством поверхности: ход 600×500×400 мм, заготовки до 2000 кг.'},
    {title:'RTA58 M',category:'Электроэрозионные станки',url:'equipment-edm-rta58-m.html',text:'RTA58 — высокоскоростной копировально-прошивочный электроэрозионный станок с зеркальным качеством поверхности: ход 800×500×400 мм, заготовки до 3000 кг.'},
    {title:'S26-R26 M',category:'Электроэрозионные станки',url:'equipment-edm-s26-r26-m.html',text:'S26/R26 — копировально-прошивочной с подвижным хоботом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 280×230 мм; Размер стола: 600×300 мм.'},
    {title:'S36-R36 M',category:'Электроэрозионные станки',url:'equipment-edm-s36-r36-m.html',text:'S36/R36 — копировально-прошивочной с подвижным хоботом электроэрозионный станок. CNC, перемещение по осям X и Y от ЧПУ: 380×280 мм; Размер стола: 650×350 мм.'},
    {title:'S54-R54 M',category:'Электроэрозионные станки',url:'equipment-edm-s54-r54-m.html',text:'S54/R54 — копировально-прошивочной с подвижным хоботом электроэрозионный станок. Размер стола: 850×450 мм; Масса станка нетто: 2450 кг.'},
    {title:'SDR56 M',category:'Электроэрозионные станки',url:'equipment-edm-sdr56-m.html',text:'SDR56 — электроэрозионный прошивной станок-супердрель: ходы 600×500×450 мм, АС-серво, УСИ на 18 позиций, электрод Ø0,3–3,0 мм.'},
    {title:'SW-BSW 1270 M',category:'Электроэрозионные станки',url:'equipment-edm-sw-bsw-1270-m.html',text:'SW/BSW 1270 — проволочно-вырезной электроэрозионный станок. Макс. габариты заготовки: 1600 x 1000 x 310 мм; Макс. масса заготовки: 1500 кг.'},
    {title:'SW-BSW 325 M',category:'Электроэрозионные станки',url:'equipment-edm-sw-bsw-325-m.html',text:'SW/BSW 325 — проволочно-вырезной электроэрозионный станок. Макс. габариты заготовки: 700 x 450 x 180 мм; Макс. масса заготовки: 350 кг.'},
    {title:'SW-BSW 530 M',category:'Электроэрозионные станки',url:'equipment-edm-sw-bsw-530-m.html',text:'SW/BSW 530 — проволочно-вырезной электроэрозионный станок. Макс. габариты заготовки: 850x500x200 мм; Макс. масса заготовки: 350 кг.'},
    {title:'SW-BSW 645 M',category:'Электроэрозионные станки',url:'equipment-edm-sw-bsw-645-m.html',text:'SW/BSW 645 — проволочно-вырезной электроэрозионный станок. Макс. габариты заготовки: 1100 x 800 x 250 мм; Макс. масса заготовки: 500 кг.'},
    {title:'SW1270 M',category:'Электроэрозионные станки',url:'equipment-edm-sw1270-m.html',text:'Проволочно-вырезной станок SW1270 (погружной тип): ход 1200×700×350 мм, стол 1530×970 мм, заготовки до 1500 кг, конус ±15°. Тяжёлый класс для промышленности.'},
    {title:'SW645 M',category:'Электроэрозионные станки',url:'equipment-edm-sw645-m.html',text:'Проволочно-вырезной станок SW645 (погружной тип): ход 600×450×300 мм, стол 868×668 мм, заготовки до 500 кг, угол конусности ±15°. Надёжность и точность.'},
    {title:'ZNC-C26 M',category:'Электроэрозионные станки',url:'equipment-edm-znc-c26-m.html',text:'ZNC-C26 — прошивной электроэрозионный станок ZNC: ходы 300×250×150 мм, стол 600×300 мм, ток до 30 А, заготовка до 800 кг.'},
    {title:'ZNC-C36 M',category:'Электроэрозионные станки',url:'equipment-edm-znc-c36-m.html',text:'Копировально-прошивочный станок ZNC-C36: ход 400×300×185 мм, стол 650×350 мм, заготовки до 1000 кг, ток 50 А, мощность 4,5 кВА. Линейные шкалы 1 мкм.'},
    {title:'ZNC-C54 M',category:'Электроэрозионные станки',url:'equipment-edm-znc-c54-m.html',text:'Копировально-прошивочный станок ZNC-C54: ход 500×400×185 мм, стол 850×450 мм, заготовки до 1300 кг, ток 75 А, мощность 8 кВА. Высокая производительность.'},
    {title:'ZNC-P26 M',category:'Электроэрозионные станки',url:'equipment-edm-znc-p26-m.html',text:'Копировально-прошивочный станок ZNC-P26: ход 300×250×150 мм, стол 600×300 мм, заготовки до 800 кг, ток 30 А, 3 кВА. Серия P, ZNC-управление, линейные шкалы.'},
    {title:'ZNC-P36 M',category:'Электроэрозионные станки',url:'equipment-edm-znc-p36-m.html',text:'Копировально-прошивочный станок ZNC-P36: ход 400×300×185 мм, стол 650×350 мм, заготовки до 1000 кг, ток 50 А, 4,5 кВА. Серия P, ZNC-управление, линейные шкалы.'},
    {title:'ZNC-P54 M',category:'Электроэрозионные станки',url:'equipment-edm-znc-p54-m.html',text:'Копировально-прошивочный станок ZNC-P54: ход 500×400×185 мм, стол 850×450 мм, заготовки до 1300 кг, ток 75 А, 8 кВА. Серия P, ZNC-управление, линейные шкалы.'},
    {title:'ZNC-P56 M',category:'Электроэрозионные станки',url:'equipment-edm-znc-p56-m.html',text:'Копировально-прошивочный станок ZNC-P56: ход 580×470×250 мм, стол 1000×550 мм, заготовки до 1600 кг, ток 75 А, 8 кВА. Тяжёлый класс серии P, ZNC-управление.'},
    {title:'ZNC320 F',category:'Электроэрозионные станки',url:'equipment-edm-znc320-f.html',text:'ZNC320 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'ZNC320Y F',category:'Электроэрозионные станки',url:'equipment-edm-znc320y-f.html',text:'ZNC320Y — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'ZNC350 F',category:'Электроэрозионные станки',url:'equipment-edm-znc350-f.html',text:'ZNC350 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'ZNC350Y F',category:'Электроэрозионные станки',url:'equipment-edm-znc350y-f.html',text:'ZNC350Y — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'ZNC450 F',category:'Электроэрозионные станки',url:'equipment-edm-znc450-f.html',text:'ZNC450 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'ZNC450Y F',category:'Электроэрозионные станки',url:'equipment-edm-znc450y-f.html',text:'ZNC450Y — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'ZNC540 F',category:'Электроэрозионные станки',url:'equipment-edm-znc540-f.html',text:'ZNC540 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'ZNC540Y F',category:'Электроэрозионные станки',url:'equipment-edm-znc540y-f.html',text:'ZNC540Y — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'ZNC760 F',category:'Электроэрозионные станки',url:'equipment-edm-znc760-f.html',text:'ZNC760 — прошивной электроэрозионный (копировально-прошивочный) станок. Прошивка пресс-форм, штампов, зеркальная обработка.'},
    {title:'BSM75 / BSM150L F',category:'Шлифовальные станки',url:'equipment-grinding-bsm75-bsm150l-f.html',text:'BSM75/BSM150L — круглошлифовальные станки: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'DBS75 / MD150 / B686 F',category:'Шлифовальные станки',url:'equipment-grinding-dbs75-md150-b686-f.html',text:'DBS75/MD150/B686 — круглошлифовальные станки: модельный ряд из 3 типоразмеров, характеристики каждой модели в описании.'},
    {title:'FSG2550HV F',category:'Шлифовальные станки',url:'equipment-grinding-fsg2550hv-f.html',text:'FSG2550HV — портальный плоскошлифовальный станок с ЧПУ. Тяжёлый прецизионный портальный шлифовальный станок с ЧПУ (ПЛК + HMI), жёсткий коробчатый…'},
    {title:'GH20T F',category:'Шлифовальные станки',url:'equipment-grinding-gh20t-f.html',text:'GH20T — универсальный заточной станок для заточки свёрл, фрез, резцов: алмазный круг 5000 об/мин, углы 0–40°/0–180°.'},
    {title:'HCGM-H6060 F',category:'Шлифовальные станки',url:'equipment-grinding-hcgm-h6060-f.html',text:'HCGM-H6060 — бесцентровошлифовальный станок: диаметр шлифования 10–300 мм, шлифовальный круг 55 кВт.'},
    {title:'HCGM-L6060 F',category:'Шлифовальные станки',url:'equipment-grinding-hcgm-l6060-f.html',text:'HCGM-L6060 — бесцентровошлифовальный станок: диаметр шлифования 10-250 мм, шлифовальный круг Ø600×600×305 мм.'},
    {title:'HCGM-M6020 F',category:'Шлифовальные станки',url:'equipment-grinding-hcgm-m6020-f.html',text:'HCGM-M6020 — бесцентровошлифовальный станок: диаметр шлифования 5-100 мм, шлифовальный круг Ø600×200(250)×305 мм.'},
    {title:'HCGM-M6040 F',category:'Шлифовальные станки',url:'equipment-grinding-hcgm-m6040-f.html',text:'HCGM-M6040 — бесцентровошлифовальный станок: диаметр шлифования 5-200 мм, шлифовальный круг Ø600×400×305 мм.'},
    {title:'HCGM-S4020 F',category:'Шлифовальные станки',url:'equipment-grinding-hcgm-s4020-f.html',text:'HCGM-S4020 — бесцентровошлифовальный станок: диаметр шлифования 2-45 мм, шлифовальный круг PSA400×150(200)×203 мм.'},
    {title:'HCGM-S5020 F',category:'Шлифовальные станки',url:'equipment-grinding-hcgm-s5020-f.html',text:'HCGM-S5020 — бесцентровошлифовальный станок: диаметр шлифования 2-60 мм, шлифовальный круг Ø500×200×305 мм.'},
    {title:'HCGM-S5025 F',category:'Шлифовальные станки',url:'equipment-grinding-hcgm-s5025-f.html',text:'HCGM-S5025 — бесцентровошлифовальный станок: диаметр шлифования 2-60 мм, шлифовальный круг Ø500×250×305 мм.'},
    {title:'HD-010 H',category:'Шлифовальные станки',url:'equipment-grinding-hd-010-h.html',text:'HD-010 — высокоскоростной двухкруговой шлифовальный станок с ЧПУ (мостовые оси). Технические характеристики — в карточке.'},
    {title:'HDGie2010 H',category:'Шлифовальные станки',url:'equipment-grinding-hdgie2010-h.html',text:'HDGie2010 — круглошлифовальный ЧПУ (нар./внутр.) станок. Center Height: 135mm; Max. External Dia.: 200mm.'},
    {title:'M10100 F',category:'Шлифовальные станки',url:'equipment-grinding-m10100-f.html',text:'M10100 — бесцентровошлифовальный станок: диаметр шлифования 10-100 мм, шлифовальный круг Ø500×200×305 мм.'},
    {title:'M10200 F',category:'Шлифовальные станки',url:'equipment-grinding-m10200-f.html',text:'M10200 — бесцентровошлифовальный станок): диаметр шлифования 10-200 мм, шлифовальный круг Ø600×400×305 мм.'},
    {title:'M1040B F',category:'Шлифовальные станки',url:'equipment-grinding-m1040b-f.html',text:'M1040B — бесцентровошлифовальный станок: диаметр шлифования 2-40 мм, шлифовальный круг PSA350×125×127 мм.'},
    {title:'M1050A F',category:'Шлифовальные станки',url:'equipment-grinding-m1050a-f.html',text:'M1050A — бесцентровошлифовальный станок: диаметр шлифования 5-50 мм, шлифовальный круг Ø400×150×203 мм.'},
    {title:'M1080B F',category:'Шлифовальные станки',url:'equipment-grinding-m1080b-f.html',text:'M1080B — бесцентровошлифовальный станок: диаметр шлифования 5-80 мм, шлифовальный круг Ø500×150×305 мм.'},
    {title:'M1083B F',category:'Шлифовальные станки',url:'equipment-grinding-m1083b-f.html',text:'M1083B — бесцентровошлифовальный станок: диаметр шлифования 10-150 мм, шлифовальный круг Ø600×200×305 мм.'},
    {title:'M11100 F',category:'Шлифовальные станки',url:'equipment-grinding-m11100-f.html',text:'M11100 — бесцентровошлифовальный станок): диаметр шлифования 10-100 мм, шлифовальный круг Ø500×400×305 мм.'},
    {title:'M11200 F',category:'Шлифовальные станки',url:'equipment-grinding-m11200-f.html',text:'M11200 — бесцентровошлифовальный станок): диаметр шлифования 10-200 мм, шлифовальный круг Ø500×600×305 мм.'},
    {title:'M1420 / M1432B / M1432H / M1450 / M1463 H',category:'Шлифовальные станки',url:'equipment-grinding-m1420-m1432b-m1432h-m1450-m1463-h.html',text:'M1420/M1432B/M1432H/M1450/M1463 — круглошлифовальные станки: модельный ряд из 5 типоразмеров, характеристики каждой модели в описании.'},
    {title:'M1420 / MW1420 / M1432B / M1450 F',category:'Шлифовальные станки',url:'equipment-grinding-m1420-mw1420-m1432b-m1450-f.html',text:'M1420/MW1420/M1432B/M1450 — круглошлифовальные станки: модельный ряд из 4 типоразмеров, характеристики каждой модели в описании.'},
    {title:'M7130A / M7140 / M7140Ax1600 / M7140Ax2200 / M7150A / M7150Ax1600 / M7150Ax2200 / M7170Ax1250 / M7170Ax1600 / M7170Ax2200 / M7180x1600 / M7180x2200 / M7180x3000 H',category:'Шлифовальные станки',url:'equipment-grinding-m7130a-m7140-m7140ax1600-m7140ax2200-m7150a-m7150ax1600-m7150ax2200-m7170ax1250-m7170ax1600-m7170ax2200-m7180x1600-m7180x2200-m7180x3000-h.html',text:'M7130A/M7140/M7140Ax1600/M7140Ax2200/M7150A/M7150Ax1600/M7150Ax2200/M7170Ax1250/M7170Ax1600/M7170Ax2200/M7180x1600/M7180x2200/M7180x3000 —…'},
    {title:'M7140Ax2200 / M7150A / M7150Ax1600 / M7150Ax2200 / M7163A / M7163x1600 / M7163x2200 F',category:'Шлифовальные станки',url:'equipment-grinding-m7140ax2200-m7150a-m7150ax1600-m7150ax2200-m7163a-m7163x1600-m7163x2200-f.html',text:'M7140Ax2200/M7150A/M7150Ax1600/M7150Ax2200/M7163A/M7163x1600/M7163x2200 — плоскошлифовальные станки: модельный ряд из 7 типоразмеров, характеристики каждой…'},
    {title:'MD3212F / MD3225G / MD3215F / MD3215E / MD3220F / MD3212G / MD150-200FG / MD3215G F',category:'Шлифовальные станки',url:'equipment-grinding-md3212f-md3225g-md3215f-md3215e-md3220f-md3212g-md150-200fg-md3215g-f.html',text:'MD3212F/MD3225G/MD3215F/MD3215E/MD3220F/MD3212G/MD150-200FG/MD3215G — круглошлифовальные станки: модельный ряд из 8 типоразмеров, характеристики каждой…'},
    {title:'MG-NC-Saddle H',category:'Шлифовальные станки',url:'equipment-grinding-mg-nc-saddle-h.html',text:'MG-NC-Saddle — плоскошлифовальный станок с ЧПУ и подвижным седлом. Технические характеристики — в карточке.'},
    {title:'MG1432 / MG1350 / MG1363 H',category:'Шлифовальные станки',url:'equipment-grinding-mg1432-mg1350-mg1363-h.html',text:'MG1432/MG1350/MG1363 — круглошлифовальные станки: модельный ряд из 3 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MG2050 / MG40100 H',category:'Шлифовальные станки',url:'equipment-grinding-mg2050-mg40100-h.html',text:'MG2050/MG40100 — плоскошлифовальные станки: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MG50100 / MG60220 H',category:'Шлифовальные станки',url:'equipment-grinding-mg50100-mg60220-h.html',text:'MG50100/MG60220 — плоскошлифовальные станки: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MG618A H',category:'Шлифовальные станки',url:'equipment-grinding-mg618a-h.html',text:'MG618A — плоскошлифовальный с ручной подачей станок. Table size(L*W) — 460*180, мм: 460*180; Max.travel of table(L*W) — 500*190, мм: 500*190.'},
    {title:'MG73120 H',category:'Шлифовальные станки',url:'equipment-grinding-mg73120-h.html',text:'MG73120 — с круглым столом ЧПУ (MG73120NC) станок. Electromagnetic suction cup diameter, мм: 1250; Effective diameter of electromagnetic suction cup, мм: 1200.'},
    {title:'MG7330 / MG7340 / MG7350 H',category:'Шлифовальные станки',url:'equipment-grinding-mg7330-mg7340-mg7350-h.html',text:'MG7330/MG7340/MG7350 — плоскошлифовальные станки: модельный ряд из 3 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MGK1450x2000 / MGK1463x3000 H',category:'Шлифовальные станки',url:'equipment-grinding-mgk1450x2000-mgk1463x3000-h.html',text:'MGK1450x2000/MGK1463x3000 — круглошлифовальные станки: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MGK7160x120 H',category:'Шлифовальные станки',url:'equipment-grinding-mgk7160x120-h.html',text:'MGK7160×120 — высокоточный ЧПУ профилешлифовальный станок. Grinding length dimensions: 1200; Grinding width dimensions: 600.'},
    {title:'MGK84 H',category:'Шлифовальные станки',url:'equipment-grinding-mgk84-h.html',text:'MGK84 — вальцешлифовальный станок с ЧПУ (серия MGK84). Технические характеристики — в карточке.'},
    {title:'MGKW8250 H',category:'Шлифовальные станки',url:'equipment-grinding-mgkw8250-h.html',text:'MGKW8250 — коленвальный шлифовальный станок с ЧПУ (следящий). Технические характеристики — в карточке.'},
    {title:'MK-End-Face H',category:'Шлифовальные станки',url:'equipment-grinding-mk-end-face-h.html',text:'MK-End-Face — круглоторцешлифовальный станок с ЧПУ. Технические характеристики — в карточке.'},
    {title:'MK1060 F',category:'Шлифовальные станки',url:'equipment-grinding-mk1060-f.html',text:'MK1060 — бесцентровошлифовальный станок: диаметр шлифования 5-60 мм, шлифовальный круг Ø500×200（250）×305 мм.'},
    {title:'MK11250 F',category:'Шлифовальные станки',url:'equipment-grinding-mk11250-f.html',text:'MK11250 — бесцентровошлифовальный станок): диаметр шлифования 10-250 мм, шлифовальный круг Ø600×600×305 мм.'},
    {title:'MK1320B / MK1332 / MK1620B / MK1632 / MKE1350 F',category:'Шлифовальные станки',url:'equipment-grinding-mk1320b-mk1332-mk1620b-mk1632-mke1350-f.html',text:'MK1320B/MK1332/MK1620B/MK1632/MKE1350 — круглошлифовальные станки: модельный ряд из 5 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MKS2720x500 / MKS2732x1000 H',category:'Шлифовальные станки',url:'equipment-grinding-mks2720x500-mks2732x1000-h.html',text:'MKS2720x500/MKS2732x1000 — круглошлифовальные станки: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MKS8320x500 H',category:'Шлифовальные станки',url:'equipment-grinding-mks8320x500-h.html',text:'MKS8320x500 — кулачковый шлифовальный станок с ЧПУ (следящий). Технические характеристики — в карточке.'},
    {title:'MKW1350TA / MKW1363 H',category:'Шлифовальные станки',url:'equipment-grinding-mkw1350ta-mkw1363-h.html',text:'MKW1350TA/MKW1363 — круглошлифовальные станки: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MM2315 / MM4115 F',category:'Шлифовальные станки',url:'equipment-grinding-mm2315-mm4115-f.html',text:'MM2315/MM4115 — круглошлифовальные станки: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MMKS1312x350 H',category:'Шлифовальные станки',url:'equipment-grinding-mmks1312x350-h.html',text:'MMKS1312×350 — высокоскоростной круглошлифовальный станок. Center Height: 100mm; Min. External Dia.: 5 mm.'},
    {title:'MPRG7360NC H',category:'Шлифовальные станки',url:'equipment-grinding-mprg7360nc-h.html',text:'MPRG7360NC — плоскошлифовальный станок с круглым столом с ЧПУ. Технические характеристики — в карточке.'},
    {title:'MW1320 / M1332 / M1350 / M1363 / M1380 F',category:'Шлифовальные станки',url:'equipment-grinding-mw1320-m1332-m1350-m1363-m1380-f.html',text:'MW1320/M1332/M1350/M1363/M1380 — круглошлифовальные станки: модельный ряд из 5 типоразмеров, характеристики каждой модели в описании.'},
    {title:'MW1320 / M1332x1000 / M1332x1500 / M1332Hx2000 / M1332Hx3000 / M1350 / M1363 / MQ1380A H',category:'Шлифовальные станки',url:'equipment-grinding-mw1320-m1332x1000-m1332x1500-m1332hx2000-m1332hx3000-m1350-m1363-mq1380a-h.html',text:'MW1320/M1332x1000/M1332x1500/M1332Hx2000/M1332Hx3000/M1350/M1363/MQ1380A — круглошлифовальные станки: модельный ряд из 8 типоразмеров, характеристики каждой…'},
    {title:'MYGK7370 H',category:'Шлифовальные станки',url:'equipment-grinding-mygk7370-h.html',text:'MYGK7370 — ЧПУ торце-шлицешлифовальный станок. Table Size (L*W), мм: 800×1600; Grinding Range on Worktable (L*W), мм: 700×700.'},
    {title:'PSG103DNC H',category:'Шлифовальные станки',url:'equipment-grinding-psg103dnc-h.html',text:'PSG103DNC — прецизионный профилешлифовальный станок с ЧПУ. Технические характеристики — в карточке.'},
    {title:'SG50100PC2 / SG50120PC2 / SG60120PC2 / SG60160PC2 / SG60220PC2 H',category:'Шлифовальные станки',url:'equipment-grinding-sg50100pc2-sg50120pc2-sg60120pc2-sg60160pc2-sg60220pc2-h.html',text:'SG50100PC2/SG50120PC2/SG60120PC2/SG60160PC2/SG60220PC2 — плоскошлифовальные станки: модельный ряд из 5 типоразмеров, характеристики каждой модели в описании.'},
    {title:'SG60160SD / SG60220SD / SG60600SD / SG80160SD / SG80220SD / SG80300SD / SG80400SD H',category:'Шлифовальные станки',url:'equipment-grinding-sg60160sd-sg60220sd-sg60600sd-sg80160sd-sg80220sd-sg80300sd-sg80400sd-h.html',text:'SG60160SD/SG60220SD/SG60600SD/SG80160SD/SG80220SD/SG80300SD/SG80400SD — плоскошлифовальные станки: модельный ряд из 7 типоразмеров, характеристики каждой…'},
    {title:'SG618 / SG618A / SG818A F',category:'Шлифовальные станки',url:'equipment-grinding-sg618-sg618a-sg818a-f.html',text:'SG618/SG618A/SG818A — плоскошлифовальные станки: модельный ряд из 3 типоразмеров, характеристики каждой модели в описании.'},
    {title:'SG618 / SG820 F',category:'Шлифовальные станки',url:'equipment-grinding-sg618-sg820-f.html',text:'SG618/SG820 — плоскошлифовальные станки: модельный ряд из 2 типоразмеров, характеристики каждой модели в описании.'},
    {title:'SGA-100220ZNC / SGA-100300ZNC / SGA-100400ZNC / SGA-50450ZNC / SGA-60600ZNC F',category:'Шлифовальные станки',url:'equipment-grinding-sga-100220znc-sga-100300znc-sga-100400znc-sga-50450znc-sga-60600znc-f.html',text:'SGA-100220ZNC/SGA-100300ZNC/SGA-100400ZNC/SGA-50450ZNC/SGA-60600ZNC — плоскошлифовальные станки: модельный ряд из 5 типоразмеров, характеристики каждой…'},
    {title:'SGA-2050CNC / SGA-2550CNC / SGA-3063CNC / SGA-40100CNC F',category:'Шлифовальные станки',url:'equipment-grinding-sga-2050cnc-sga-2550cnc-sga-3063cnc-sga-40100cnc-f.html',text:'SGA-2050CNC/SGA-2550CNC/SGA-3063CNC/SGA-40100CNC — плоскошлифовальные станки: модельный ряд из 4 типоразмеров, характеристики каждой модели в описании.'},
    {title:'SGA-3063AHR / SGA-3063AHD / SGA-30100AH / SGA-30100AHR / SGA-30100AHD / SGA-4080AH / SGA-4080AHR / SGA-4080AHD / SGA-40100AH / SGA-40100AHR / SGA-40100AHD F',category:'Шлифовальные станки',url:'equipment-grinding-sga-3063ahr-sga-3063ahd-sga-30100ah-sga-30100ahr-sga-30100ahd-sga-4080ah-sga-4080ahr-sga-4080ahd-sga-40100ah-sga-40100ahr-sga-40100ahd-f.html',text:'SGA-3063AHR/SGA-3063AHD/SGA-30100AH/SGA-30100AHR/SGA-30100AHD/SGA-4080AH/SGA-4080AHR/SGA-4080AHD/SGA-40100AH/SGA-40100AHR/SGA-40100AHD — плоскошлифовальные…'},
    {title:'SGA-50100NC / SGA-50160NC / SGA-60120NC / SGA-60160NC / SGA-60220NC F',category:'Шлифовальные станки',url:'equipment-grinding-sga-50100nc-sga-50160nc-sga-60120nc-sga-60160nc-sga-60220nc-f.html',text:'SGA-50100NC/SGA-50160NC/SGA-60120NC/SGA-60160NC/SGA-60220NC — плоскошлифовальные станки: модельный ряд из 5 типоразмеров, характеристики каждой модели в…'},
    {title:'SGA-80160NC / SGA-80220NC / SGA-80300NC / SGA-85250NC F',category:'Шлифовальные станки',url:'equipment-grinding-sga-80160nc-sga-80220nc-sga-80300nc-sga-85250nc-f.html',text:'SGA-80160NC/SGA-80220NC/SGA-80300NC/SGA-85250NC — плоскошлифовальные станки: модельный ряд из 4 типоразмеров, характеристики каждой модели в описании.'},
    {title:'SGA2050 / SGA2550 / SGA3063 / SGA30100 / SGA4080 / SGA40100 H',category:'Шлифовальные станки',url:'equipment-grinding-sga2050-sga2550-sga3063-sga30100-sga4080-sga40100-h.html',text:'SGA2050/SGA2550/SGA3063/SGA30100/SGA4080/SGA40100 — плоскошлифовальные станки: модельный ряд из 6 типоразмеров, характеристики каждой модели в описании.'},
    {title:'SGT60160SD / SGT60220SD / SGT80160SD / SGT80220SD / SGT80300SD H',category:'Шлифовальные станки',url:'equipment-grinding-sgt60160sd-sgt60220sd-sgt80160sd-sgt80220sd-sgt80300sd-h.html',text:'SGT60160SD/SGT60220SD/SGT80160SD/SGT80220SD/SGT80300SD — плоскошлифовальные станки: модельный ряд из 5 типоразмеров, характеристики каждой модели в описании.'},
    {title:'Tube-Grinder F',category:'Шлифовальные станки',url:'equipment-grinding-tube-grinder-f.html',text:'Tube-Grinder — трубошлифовальный (полировальный) станок. Шлифование и полировка наружной поверхности труб и профиля абразивной лентой.'},
    {title:'BS-1018B F',category:'Ленточнопильные станки',url:'equipment-saw-bs-1018b-f.html',text:'BS-1018B — ручной ленточнопильный станок с поворотной рамой: рез под 90° Ø254 мм (127×457), под 45° Ø150 мм, полотно 3280×27×0.9 мм, 1.5 (2 л.с., 3 фазы) кВт.'},
    {title:'BS-1018R F',category:'Ленточнопильные станки',url:'equipment-saw-bs-1018r-f.html',text:'BS-1018R — ручной ленточнопильный станок с поворотной рамой: рез под 90° Ø254 мм (160×406), под 45° Ø170 мм, полотно 3215×27×0.9 мм, 1.5 (2 л.с., 3 фазы) кВт.'},
    {title:'BS-912B F',category:'Ленточнопильные станки',url:'equipment-saw-bs-912b-f.html',text:'BS-912B — ручной ленточнопильный станок с поворотной рамой: рез под 90° Ø229 мм (178×305), под 45° Ø150 мм, полотно 2655×27×0.9 мм, 1.5 (2 л.с., 1 фаза) кВт.'},
    {title:'BS-912GDR F',category:'Ленточнопильные станки',url:'equipment-saw-bs-912gdr-f.html',text:'BS-912GDR — ручной ленточнопильный станок с поворотной рамой: рез под 90° Ø229 мм (178×305), под 45° Ø150 мм, полотно 2655×27×0.9 мм, 1.1 (1.5 л.с., 3 фазы)…'},
    {title:'BS-916V F',category:'Ленточнопильные станки',url:'equipment-saw-bs-916v-f.html',text:'BS-916V — ручной ленточнопильный станок с поворотной рамой: рез под 90° Ø229 мм (127×405), под 45° Ø150 мм, полотно 3035×27×0.9 мм, 1.5 (2 л.с., 3 фазы) кВт.'},
    {title:'BS280Z F',category:'Ленточнопильные станки',url:'equipment-saw-bs280z-f.html',text:'BS280Z — полуавтоматический двухстоечный (поворотный, для реза под углом) ленточнопильный станок: рез круга Ø280 мм, полотно 3505×27×0.9 мм, двигатель 2.2 кВт.'},
    {title:'BS350Z F',category:'Ленточнопильные станки',url:'equipment-saw-bs350z-f.html',text:'BS350Z — полуавтоматический двухстоечный (поворотный, для реза под углом) ленточнопильный станок: рез круга Ø350 мм, полотно 4115×34×1.1 мм, двигатель 3 кВт.'},
    {title:'BS42100 / BS42130 / BS4220 / BS4220A / BS4228 / BS4235 / BS4240 / BS4250 / BS4270 / BS4280 F',category:'Ленточнопильные станки',url:'equipment-saw-bs42100-bs42130-bs4220-bs4220a-bs4228-bs4235-bs4240-bs4250-bs4270-bs4280-f.html',text:'BS42100/BS42130/BS4220/BS4220A/BS4228/BS4235/BS4240/BS4250/BS4270/BS4280 — полуавтоматические двухстоечные ленточнопильные станки: модельный ряд из 10…'},
    {title:'BS4228S F',category:'Ленточнопильные станки',url:'equipment-saw-bs4228s-f.html',text:'BS4228S — автоматический двухстоечный ленточнопильный станок: рез круга Ø280 мм, полотно 3505×27×0.9 мм, двигатель 2.2 кВт.'},
    {title:'BS4235S F',category:'Ленточнопильные станки',url:'equipment-saw-bs4235s-f.html',text:'BS4235S — автоматический двухстоечный ленточнопильный станок: рез круга Ø350 мм, полотно 4115×34×1.1 мм, двигатель 3 кВт.'},
    {title:'BS712 F',category:'Ленточнопильные станки',url:'equipment-saw-bs712-f.html',text:'BS712 — ручной ленточнопильный станок с поворотной рамой: рез под 90° Ø180 мм (180×300), под 45° Ø110 мм, полотно 2360×19×0.9 мм, 0.75 кВт.'},
    {title:'BS712A F',category:'Ленточнопильные станки',url:'equipment-saw-bs712a-f.html',text:'BS712A — ручной ленточнопильный станок с поворотной рамой: рез под 90° Ø180 мм (180×300), под 45° Ø110 мм, полотно 2360×19×0.9 мм, 0.75 кВт.'},
    {title:'D-O 280 D',category:'Ленточнопильные станки',url:'equipment-saw-d-o-280-d.html',text:'D-O 280 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 280×280 мм, полотно 3660×27×0.9 мм, двигатель 2.2 кВт.'},
    {title:'D-O 350 D',category:'Ленточнопильные станки',url:'equipment-saw-d-o-350-d.html',text:'D-O 350 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 350×350 мм, полотно 4950×34×1.1 мм, двигатель 2.2 кВт.'},
    {title:'D-O 450 D',category:'Ленточнопильные станки',url:'equipment-saw-d-o-450-d.html',text:'D-O 450 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 450×450 мм, полотно 5250×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-O 550 D',category:'Ленточнопильные станки',url:'equipment-saw-d-o-550-d.html',text:'D-O 550 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 550×550 мм, полотно 6180×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-OS 280 D',category:'Ленточнопильные станки',url:'equipment-saw-d-os-280-d.html',text:'D-OS 280 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 280×300 мм, полотно 3660×27×0.9 мм, двигатель 2.2 кВт.'},
    {title:'D-OS 350 D',category:'Ленточнопильные станки',url:'equipment-saw-d-os-350-d.html',text:'D-OS 350 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 350×500 мм, полотно 4950×34×1.1 мм, двигатель 2.2 кВт.'},
    {title:'D-OS 450 D',category:'Ленточнопильные станки',url:'equipment-saw-d-os-450-d.html',text:'D-OS 450 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 450×500 мм, полотно 5250×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-OS 550 D',category:'Ленточнопильные станки',url:'equipment-saw-d-os-550-d.html',text:'D-OS 550 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 550×600 мм, полотно 6180×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-OSD 280 D',category:'Ленточнопильные станки',url:'equipment-saw-d-osd-280-d.html',text:'D-OSD 280 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 280×300 мм, полотно 3660×27×0.9 мм, двигатель 2.2 кВт.'},
    {title:'D-OSD 350 D',category:'Ленточнопильные станки',url:'equipment-saw-d-osd-350-d.html',text:'D-OSD 350 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 350×400 мм, полотно 4950×34×1.1 мм, двигатель 2.2 кВт.'},
    {title:'D-OSD 450 D',category:'Ленточнопильные станки',url:'equipment-saw-d-osd-450-d.html',text:'D-OSD 450 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 450×500 мм, полотно 5250×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-OSD 550 D',category:'Ленточнопильные станки',url:'equipment-saw-d-osd-550-d.html',text:'D-OSD 550 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 550×600 мм, полотно 6180×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-SP 350 D',category:'Ленточнопильные станки',url:'equipment-saw-d-sp-350-d.html',text:'D-SP 350 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 350×500 мм, полотно 4950×34×1.1 мм, двигатель 2.2 кВт.'},
    {title:'D-SP 550 D',category:'Ленточнопильные станки',url:'equipment-saw-d-sp-550-d.html',text:'D-SP 550 — автоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 550×550 мм, полотно 6180×41×1.3 мм, двигатель 5.5 кВт.'},
    {title:'D-Y 1000 D',category:'Ленточнопильные станки',url:'equipment-saw-d-y-1000-d.html',text:'D-Y 1000 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 1000×1000 мм, полотно 9600×54×1.6 мм, двигатель 7.5 кВт.'},
    {title:'D-Y 280 D',category:'Ленточнопильные станки',url:'equipment-saw-d-y-280-d.html',text:'D-Y 280 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 280×300 мм, полотно 3660×27×0.9 мм, двигатель 1.5 кВт.'},
    {title:'D-Y 350 D',category:'Ленточнопильные станки',url:'equipment-saw-d-y-350-d.html',text:'D-Y 350 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 350×440 мм, полотно 4950×34×1.1 мм, двигатель 2.2 кВт.'},
    {title:'D-Y 450 D',category:'Ленточнопильные станки',url:'equipment-saw-d-y-450-d.html',text:'D-Y 450 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 450×450 мм, полотно 5250×41×1.3 мм, двигатель 2.2 кВт.'},
    {title:'D-Y 550 D',category:'Ленточнопильные станки',url:'equipment-saw-d-y-550-d.html',text:'D-Y 550 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 550×650 мм, полотно 6180×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-Y 800 D',category:'Ленточнопильные станки',url:'equipment-saw-d-y-800-d.html',text:'D-Y 800 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 800×900 мм, полотно 7950×41×1.3 мм, двигатель 5.5 кВт.'},
    {title:'D-YD 1000 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yd-1000-d.html',text:'D-YD 1000 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 1020×1050 мм, полотно 9600×54×1.6 мм, двигатель 7.5 кВт.'},
    {title:'D-YD 280 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yd-280-d.html',text:'D-YD 280 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 280×290 мм, полотно 3660×27×0.9 мм, двигатель 2.2 кВт.'},
    {title:'D-YD 350 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yd-350-d.html',text:'D-YD 350 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 350×400 мм, полотно 4950×34×1.1 мм, двигатель 2.2 кВт.'},
    {title:'D-YD 450 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yd-450-d.html',text:'D-YD 450 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 450×460 мм, полотно 5250×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-YD 550 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yd-550-d.html',text:'D-YD 550 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 550×600 мм, полотно 6180×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-YD 800 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yd-800-d.html',text:'D-YD 800 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 800×850 мм, полотно 9600×54×1.6 мм, двигатель 5.5 кВт.'},
    {title:'D-YDS 280 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yds-280-d.html',text:'D-YDS 280 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 280×300 мм, полотно 3660×27×0.9 мм, двигатель 2.2 кВт.'},
    {title:'D-YDS 350 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yds-350-d.html',text:'D-YDS 350 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 350×500 мм, полотно 4950×34×1.1 мм, двигатель 2.2 кВт.'},
    {title:'D-YDS 450 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yds-450-d.html',text:'D-YDS 450 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 450×500 мм, полотно 5250×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-YDS 550 D',category:'Ленточнопильные станки',url:'equipment-saw-d-yds-550-d.html',text:'D-YDS 550 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 550×600 мм, полотно 6180×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-YS 280 D',category:'Ленточнопильные станки',url:'equipment-saw-d-ys-280-d.html',text:'D-YS 280 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 280×310 мм, полотно 3660×27×0.9 мм, двигатель 2.2 кВт.'},
    {title:'D-YS 350 D',category:'Ленточнопильные станки',url:'equipment-saw-d-ys-350-d.html',text:'D-YS 350 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 350×360 мм, полотно 4950×34×1.1 мм, двигатель 2.2 кВт.'},
    {title:'D-YS 450 D',category:'Ленточнопильные станки',url:'equipment-saw-d-ys-450-d.html',text:'D-YS 450 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 450×500 мм, полотно 5250×41×1.3 мм, двигатель 4 кВт.'},
    {title:'D-YS 550 D',category:'Ленточнопильные станки',url:'equipment-saw-d-ys-550-d.html',text:'D-YS 550 — полуавтоматический двухстоечный ленточнопильный станок для резки металла: рез под 90° 550×600 мм, полотно 6180×41×1.3 мм, двигатель 4 кВт.'},
    {title:'M-220 D',category:'Ленточнопильные станки',url:'equipment-saw-m-220-d.html',text:'M-220 — ручной ленточнопильный станок для резки металла: рез под 90° 220×250 мм, полотно 2460×27×0.9 мм, двигатель 1.0/1.3 кВт.'},
    {title:'M-270 D',category:'Ленточнопильные станки',url:'equipment-saw-m-270-d.html',text:'M-270 — ручной ленточнопильный станок для резки металла: рез под 90° 270×350 мм, полотно 3120×27×0.9 мм, двигатель 1.0/1.3 кВт.'},
    {title:'M-270 F',category:'Ленточнопильные станки',url:'equipment-saw-m-270-f.html',text:'M-270 — ручной ленточнопильный станок для резки металла: рез под 90° 270×350 мм, полотно 3120×27×0.9 мм, двигатель 1.0/1.3 кВт.'},
    {title:'MY-220 D',category:'Ленточнопильные станки',url:'equipment-saw-my-220-d.html',text:'MY-220 — полуавтоматический ленточнопильный станок для резки металла: рез под 90° 220×220 мм, полотно 2460×27×0.9 мм, двигатель 1.5 кВт.'},
    {title:'MY-270 D',category:'Ленточнопильные станки',url:'equipment-saw-my-270-d.html',text:'MY-270 — полуавтоматический ленточнопильный станок для резки металла: рез под 90° 270×300 мм, полотно 3120×27×0.9 мм, двигатель 1.3/1.8 кВт.'},
    {title:'EHM F',category:'Листообработка',url:'equipment-sheet-ehm-f.html',text:'EHM — листогибочный пресс (гибочный станок), серия EHM, гибридная. Гибка листового металла, синхронизация по оси Y, ЧПУ-управление.'},
    {title:'Ermax F',category:'Листообработка',url:'equipment-sheet-ermax-f.html',text:'Ermax — листогибочный пресс (гибочный станок), серия Ermax, прямой сервопривод (DDR). Гибка листового металла, синхронизация по оси Y, ЧПУ-управление.'},
    {title:'ES F',category:'Листообработка',url:'equipment-sheet-es-f.html',text:'ES — листогибочный пресс (гибочный станок), серия ES, полностью электрическая (сервопривод). Гибка листового металла, синхронизация по оси Y, ЧПУ-управление.'},
    {title:'HG-CNC F',category:'Листообработка',url:'equipment-sheet-hg-cnc-f.html',text:'HG-CNC — гидравлические гильотинные ножницы: толщина реза 4–16 мм (сталь 450 МПа), длина реза 2000–6000 мм, угол реза 0.5–3°.'},
    {title:'HG-CNC-Front F',category:'Листообработка',url:'equipment-sheet-hg-cnc-front-f.html',text:'HG-CNC-Front — гидравлические гильотинные ножницы: толщина реза 4–16 мм (сталь 450 МПа), длина реза 2000–6000 мм, угол реза 0.5–3°.'},
    {title:'HG-NC F',category:'Листообработка',url:'equipment-sheet-hg-nc-f.html',text:'HG-NC — гидравлические гильотинные ножницы: толщина реза 4–16 мм (сталь 450 МПа), длина реза 2000–6000 мм, угол реза 0.5–3°.'},
    {title:'Panel-Bender F',category:'Листообработка',url:'equipment-sheet-panel-bender-f.html',text:'Panel-Bender — листогибочный пресс (гибочный станок), панелегиб (автоматический). Гибка листового металла, синхронизация по оси Y, ЧПУ-управление.'},
    {title:'PBA F',category:'Листообработка',url:'equipment-sheet-pba-f.html',text:'PBA — листогибочный пресс (гибочный станок), серия PBA, ЧПУ. Гибка листового металла, синхронизация по оси Y, ЧПУ-управление.'},
    {title:'PBE F',category:'Листообработка',url:'equipment-sheet-pbe-f.html',text:'PBE — листогибочный пресс (гибочный станок), серия PBE, NC-управление (эконом). Гибка листового металла, синхронизация по оси Y, ЧПУ-управление.'},
    {title:'PBH F',category:'Листообработка',url:'equipment-sheet-pbh-f.html',text:'PBH — листогибочный пресс (гибочный станок), серия PBH, тяжёлый ЧПУ. Гибка листового металла, синхронизация по оси Y, ЧПУ-управление.'},
    {title:'PBK F',category:'Листообработка',url:'equipment-sheet-pbk-f.html',text:'PBK — листогибочный пресс (гибочный станок), серия PBK, тандем. Гибка листового металла, синхронизация по оси Y, ЧПУ-управление.'},
    {title:'QC11K F',category:'Листообработка',url:'equipment-sheet-qc11k-f.html',text:'QC11K — гидравлические гильотинные ножницы с ЧПУ: толщина реза 4–32 мм, длина реза 2500–6000 мм, угол реза 0.5–3.5°, задний упор до 600 мм.'},
    {title:'Серия G Q',category:'Листообработка',url:'equipment-sheet-seriya-g-q.html',text:'G — оптоволоконный лазерный станок для резки листового металла (средней и малой мощности): мощность 3000–20000 Вт, поле 3048–6000×1524–2500 мм.'},
    {title:'Серия GI Q',category:'Листообработка',url:'equipment-sheet-seriya-gi-q.html',text:'GI — оптоволоконный лазерный станок для резки листового металла (сверхвысокоскоростной): мощность 3000–40000 Вт, поле 3048–12000×1524–2580 мм.'},
    {title:'Серия GY Q',category:'Листообработка',url:'equipment-sheet-seriya-gy-q.html',text:'GY — оптоволоконный лазерный станок для резки листового металла (ультравысокой мощности): мощность 6000–40000 Вт, поле 3048–12000×1524–2500 мм.'},
    {title:'Серия H-БФ Q',category:'Листообработка',url:'equipment-sheet-seriya-h-bf-q.html',text:'H-БФ — оптоволоконный лазерный станок для резки листового металла (большой формат): мощность 6000–40000 Вт, поле 6000–12000×2500 мм.'},
    {title:'Серия H-Pro Q',category:'Листообработка',url:'equipment-sheet-seriya-h-pro-q.html',text:'H-Pro — оптоволоконный лазерный станок для резки листового металла (ультрабольшой формат): мощность 3000–12000 Вт, поле 3000–6000×1500–2000 мм.'},
    {title:'Серия H Q',category:'Листообработка',url:'equipment-sheet-seriya-h-q.html',text:'H — оптоволоконный лазерный станок для резки листового металла (высокоскоростной): мощность 3000–20000 Вт, поле 3000–6000×1500–2000 мм.'},
    {title:'Серия HE Q',category:'Листообработка',url:'equipment-sheet-seriya-he-q.html',text:'HE — оптоволоконный лазерный станок для резки листового металла (полностью закрытый): мощность 3000–6000 Вт, поле 1200–3048×1200–1524 мм.'},
    {title:'Серия HG Q',category:'Листообработка',url:'equipment-sheet-seriya-hg-q.html',text:'HG — оптоволоконный лазерный станок для резки листового металла (сверхбольшого формата): мощность 12000–80000 Вт, поле 15000×3000–4000 мм.'},
    {title:'Серия K Q',category:'Листообработка',url:'equipment-sheet-seriya-k-q.html',text:'K — оптоволоконный лазерный станок для резки труб и профиля (средний, три патрона): мощность 3000–6000 Вт, длина трубы до 7500 мм.'},
    {title:'Серия L+ Q',category:'Листообработка',url:'equipment-sheet-seriya-l-plus-q.html',text:'L+ — оптоволоконный лазерный станок для резки труб и профиля (усиленный (l2+/l3pro+)): мощность 3000–20000 Вт, длина трубы до 9500 мм.'},
    {title:'Серия L Q',category:'Листообработка',url:'equipment-sheet-seriya-l-q.html',text:'L — оптоволоконный лазерный станок для резки труб и профиля (лёгкий, два патрона (l1/l2/l3pro)): мощность 1500–6000 Вт, длина трубы до 6500 мм.'},
    {title:'Серия L-ULTRA Q',category:'Листообработка',url:'equipment-sheet-seriya-l-ultra-q.html',text:'L-ULTRA — оптоволоконный лазерный станок для резки труб и профиля (высокоскоростной): мощность 1500–6000 Вт, длина трубы до 6500 мм.'},
    {title:'Серия P Q',category:'Листообработка',url:'equipment-sheet-seriya-p-q.html',text:'P — оптоволоконный лазерный станок для резки труб и профиля (сверхмощный): мощность 3000–20000 Вт, длина трубы до 12500 мм.'},
    {title:'Серия XM Q',category:'Листообработка',url:'equipment-sheet-seriya-xm-q.html',text:'XM — оптоволоконный лазерный станок для резки листового металла (для h-балки): мощность 12000–30000 Вт, поле 26000×2000–2500 мм.'},
    {title:'TK-Trump50-G1515 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g1515-t.html',text:'TK-Trump50-G1515 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 1500×1500 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G2015 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g2015-t.html',text:'TK-Trump50-G2015 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 2000×1500 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G2020 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g2020-t.html',text:'TK-Trump50-G2020 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 2000×2000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G2030 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g2030-t.html',text:'TK-Trump50-G2030 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 2000×3000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G2040 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g2040-t.html',text:'TK-Trump50-G2040 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 2000×4000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G2515 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g2515-t.html',text:'TK-Trump50-G2515 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 2500×1500 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G2560 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g2560-t.html',text:'TK-Trump50-G2560 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 2500×6000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G3015 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g3015-t.html',text:'TK-Trump50-G3015 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 3000×1500 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G3020 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g3020-t.html',text:'TK-Trump50-G3020 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 3000×2000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G3060 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g3060-t.html',text:'TK-Trump50-G3060 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 3000×6000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G4015 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g4015-t.html',text:'TK-Trump50-G4015 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 4000×1500 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G4020 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g4020-t.html',text:'TK-Trump50-G4020 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 4000×2000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-G4060 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-g4060-t.html',text:'TK-Trump50-G4060 — установка гидроабразивной (гидроабразивной струёй) резки портальной: рабочее поле 4000×6000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S0810 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s0810-t.html',text:'TK-Trump50-S0810 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 800×1000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S1213 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s1213-t.html',text:'TK-Trump50-S1213 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 1200×1300 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S1515 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s1515-t.html',text:'TK-Trump50-S1515 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 1500×1500 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S1520 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s1520-t.html',text:'TK-Trump50-S1520 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 1500×2000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S1525 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s1525-t.html',text:'TK-Trump50-S1525 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 1500×2500 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S1530 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s1530-t.html',text:'TK-Trump50-S1530 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 1500×3000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S1540 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s1540-t.html',text:'TK-Trump50-S1540 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 1500×4000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S1560 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s1560-t.html',text:'TK-Trump50-S1560 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 1500×6000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S2020 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s2020-t.html',text:'TK-Trump50-S2020 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 2000×2000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S2025 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s2025-t.html',text:'TK-Trump50-S2025 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 2000×2500 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S2030 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s2030-t.html',text:'TK-Trump50-S2030 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 2000×3000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'TK-Trump50-S2040 T',category:'Листообработка',url:'equipment-sheet-tk-trump50-s2040-t.html',text:'TK-Trump50-S2040 — установка гидроабразивной (гидроабразивной струёй) резки консольной: рабочее поле 2000×4000 мм, толщина до 200 мм, давление 4200 бар.'},
    {title:'WC67K F',category:'Листообработка',url:'equipment-sheet-wc67k-f.html',text:'WC67K — гидравлический листогибочный пресс с ЧПУ: усилие 30–300 т, длина гиба 1600–6000 мм, контроллер Estun E21/E210, точность до 0,1 мм.'},
    {title:'WC67L F',category:'Листообработка',url:'equipment-sheet-wc67l-f.html',text:'WC67L — гидравлический листогибочный пресс с увеличенной длиной стола: усилие 100–300 т, длина гиба 4000–6000 мм, гидравлическая синхронизация.'},
    {title:'WC67Y F',category:'Листообработка',url:'equipment-sheet-wc67y-f.html',text:'WC67Y — гидравлический листогибочный пресс с NC-управлением: усилие до 125 т, длина гиба 1300–3200 мм, точность гибки до 0,1 мм.'},
    {title:'WE67K F',category:'Листообработка',url:'equipment-sheet-we67k-f.html',text:'WE67K — электрогидравлический листогибочный пресс с ЧПУ Delem DA-58T/DA-69T: усилие 80–200 т, длина гиба 2500–4000 мм, 4+1 управляемых осей.'},
    {title:'Плоскошлифовальный станок Macro Line GS-AHD4080',category:'Станки в наличии',url:'stock-grinding-gs-ahd4080.html',text:'Плоскошлифовальный станок Macro Line GS-AHD4080 в наличии на складе в России. Характеристики, комплектация, поставка, ПНР, гарантия и лизинг от Механит.'},
    {title:'Универсальный токарный станок CS6250Bx1500 (аналог 16к25)',category:'Станки в наличии',url:'stock-turning-cs6250b-1500.html',text:'Универсальный токарный станок CS6250Bx1500 (аналог 16к25) в наличии на складе в России. Характеристики, комплектация, поставка, ПНР, гарантия и лизинг от…'},
    {title:'Универсальный токарный станок Macro Line LB-B500x1500 (аналог 16к25)',category:'Станки в наличии',url:'stock-turning-macroline-lb-b500x1500-2.html',text:'Универсальный токарный станок Macro Line LB-B500x1500 (аналог 16к25) в наличии на складе в России. Характеристики, комплектация, поставка, ПНР, гарантия и…'},
    {title:'Универсальный токарный станок Macro Line LB-B500x1500 (аналог 16к25)',category:'Станки в наличии',url:'stock-turning-macroline-lb-b500x1500.html',text:'Универсальный токарный станок Macro Line LB-B500x1500 (аналог 16к25) в наличии на складе в России. Характеристики, комплектация, поставка, ПНР, гарантия и…'},
    {title:'Универсальный токарный станок Macro Line LB-C660x2000 (аналог 1М63)',category:'Станки в наличии',url:'stock-turning-macroline-lb-c660x2000.html',text:'Универсальный токарный станок Macro Line LB-C660x2000 (аналог 1М63) в наличии на складе в России. Характеристики, комплектация, поставка, ПНР, гарантия и…'}
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
