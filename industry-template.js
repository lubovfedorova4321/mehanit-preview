/* ===== Универсальный шаблон отраслевой страницы решений =====
   Один рендерер + разные данные industry{} на 9 страниц (без дублирования разметки).
   Использование на странице: <div id="industryRoot"></div> + <script>var INDUSTRY_DATA={...}</script> + этот файл. */
(function(){
  function deviceType(){return window.innerWidth<=900?'mobile':'desktop'}
  function track(event,params){if(typeof window.trackEvent==='function'){window.trackEvent(event,params)}}

  var OP_ICONS={
    turning:'<circle cx="12" cy="12" r="7"></circle><path d="M5 12h14"></path>',
    drilling:'<path d="M12 3v10"></path><path d="M8 13h8l-4 6z"></path>',
    milling:'<rect x="9" y="3" width="6" height="11" rx="1"></rect><path d="M9 8.5h6M9 11.5h6"></path><path d="M10 14l2 6 2-6"></path>',
    boring:'<circle cx="11" cy="12" r="8"></circle><circle cx="13.5" cy="12" r="3"></circle>',
    threading:'<path d="M6 5l12 3.5M6 11l12 3.5M6 17l12 3.5"></path>',
    grinding:'<circle cx="12" cy="12" r="8"></circle><path d="M12 7v5l3.2 2"></path>',
    'quality-control':'<circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m20 20-4.7-4.7"></path>'
  };
  var OP_TOOLTIPS={
    turning:'Токарная обработка тел вращения на токарных станках и центрах с ЧПУ.',
    drilling:'Получение точных отверстий на сверлильных станках.',
    milling:'Обработка плоскостей, карманов и контуров на фрезерных обрабатывающих центрах.',
    boring:'Растачивание точных отверстий на горизонтально-расточных станках.',
    threading:'Нарезание резьбы на токарных или резьбонарезных станках.',
    grinding:'Финишное шлифование на кругло- или плоскошлифовальных станках.',
    'quality-control':'Контроль геометрии на КИМ и измерительном оборудовании.'
  };
  var ADV_ICONS=[
    '<path d="M12 3v18M4.8 6l14.4 12M19.2 6 4.8 18"></path>',
    '<circle cx="12" cy="12" r="9"></circle><circle cx="12" cy="12" r="5"></circle><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"></circle>',
    '<circle cx="12" cy="12" r="9"></circle><path d="M12 7v5l3.5 2"></path>',
    '<path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8Z"></path>'
  ];
  var DEFAULT_ADVANTAGES=[
    {title:'Технологии под задачу',text:'Разрабатываем маршрут обработки и подбираем оборудование под требования детали.'},
    {title:'Стабильное качество',text:'Гарантируем точность, повторяемость и соответствие стандартам отрасли.'},
    {title:'Полный цикл поддержки',text:'От подбора оборудования до ПНР, наладки и сервисного сопровождения.'},
    {title:'Экономическая эффективность',text:'Оптимизируем цикл обработки и снижаем себестоимость детали.'}
  ];

  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

  function renderOps(part){
    var ops=part.operations||[];
    var html='';
    ops.forEach(function(op){
      var icon=OP_ICONS[op.slug]||OP_ICONS['quality-control'];
      var tip=OP_TOOLTIPS[op.slug]||'';
      html+='<span class="ind-op" tabindex="0" data-op="'+esc(op.slug)+'"><svg viewBox="0 0 24 24" aria-hidden="true">'+icon+'</svg>'+esc(op.name)+
            (tip?'<span class="ind-op-tooltip" role="tooltip">'+esc(tip)+'</span>':'')+'</span>';
    });
    return html;
  }

  function renderCard(industry,part,index){
    var hasSolution=!!part.solutionUrl;
    var titleHtml=hasSolution
      ?'<a class="ind-card-title-link" href="'+esc(part.solutionUrl)+'" data-role="solution">'+esc(part.title)+'</a>'
      :esc(part.title);
    var solutionBtnHtml=hasSolution
      ?'<a class="btn ind-btn-solution" href="'+esc(part.solutionUrl)+'" data-role="solution">Технологическое решение →</a>'
      :'<button class="btn ind-btn-solution" type="button" disabled aria-disabled="true" title="Страница технологического решения готовится">Страница готовится</button>';
    var equipmentBtnHtml=part.equipmentUrl
      ?'<a class="btn ind-btn-equipment" href="'+esc(part.equipmentUrl)+'" data-role="equipment">Смотреть оборудование →</a>'
      :'';
    return (
      '<article class="ind-card" id="'+esc(part.id)+'">'+
        '<div class="ind-card-media2"><img src="'+esc(part.image)+'" alt="'+esc(part.title)+'" loading="lazy"></div>'+
        '<div class="ind-card-panel">'+
          '<h3 class="ind-card-title2">'+titleHtml+'</h3>'+
          '<div class="ind-card-task"><span class="ind-card-label ind-card-label--task">Технологическая задача</span><p>'+esc(part.task)+'</p></div>'+
          '<div class="ind-card-route"><span class="ind-card-label ind-card-label--route">Маршрут обработки</span><div class="ind-ops">'+renderOps(part)+'</div></div>'+
          '<div class="ind-card-actions">'+solutionBtnHtml+equipmentBtnHtml+'</div>'+
        '</div>'+
      '</article>'
    );
  }

  function renderAdvantages(list){
    return list.map(function(item,i){
      return '<div class="ind-adv-item"><div class="ind-adv-icon"><svg viewBox="0 0 24 24">'+ADV_ICONS[i%ADV_ICONS.length]+'</svg></div><h4>'+esc(item.title)+'</h4><p>'+esc(item.text)+'</p></div>';
    }).join('');
  }

  function renderCrumbs(industry){
    return (
      '<nav class="ind-crumbs" aria-label="Хлебные крошки"><div class="wrap"><ol>'+
        '<li><a href="index.html">Главная</a></li>'+
        '<li><a href="solutions.html">Отраслевые решения</a></li>'+
        '<li aria-current="page">'+esc(industry.title)+'</li>'+
      '</ol></div></nav>'
    );
  }

  function renderHero(industry){
    return (
      '<section class="ind-hero">'+
        '<div class="wrap">'+
          '<div class="ind-eyebrow">'+esc(industry.eyebrow||'Решение по отрасли')+'</div>'+
          '<h1 class="ind-title">'+esc(industry.title)+'</h1>'+
          '<p class="ind-intro">'+esc(industry.intro)+'</p>'+
        '</div>'+
      '</section>'
    );
  }

  function renderIndustryPage(industry){
    var root=document.getElementById('industryRoot');
    if(!root)return;
    var advantages=industry.advantages||DEFAULT_ADVANTAGES;
    root.innerHTML=
      renderCrumbs(industry)+
      renderHero(industry)+
      '<section class="ind-grid-section"><div class="wrap"><div class="ind-grid">'+
        industry.parts.map(function(part,i){return renderCard(industry,part,i)}).join('')+
      '</div></div></section>'+
      '<section class="ind-advantages"><div class="ind-adv-grid">'+renderAdvantages(advantages)+'</div></section>';

    root.addEventListener('click',function(e){
      var solutionLink=e.target.closest&&e.target.closest('[data-role="solution"]');
      var equipmentLink=e.target.closest&&e.target.closest('[data-role="equipment"]');
      var card=e.target.closest&&e.target.closest('.ind-card');
      var partId=card?card.id:null;
      if(solutionLink){
        track('industry_part_solution_click',{industry:industry.slug,part:partId,page_path:location.pathname,device_type:deviceType()});
      }else if(equipmentLink){
        track('industry_part_equipment_click',{industry:industry.slug,part:partId,page_path:location.pathname,device_type:deviceType()});
      }
    });
    root.querySelectorAll('.ind-op[data-op]').forEach(function(el){
      el.addEventListener('click',function(){
        var card=el.closest('.ind-card');
        track('industry_operation_click',{industry:industry.slug,part:card?card.id:null,operation:el.getAttribute('data-op'),page_path:location.pathname,device_type:deviceType()});
      });
    });
  }

  window.renderIndustryPage=renderIndustryPage;
})();
