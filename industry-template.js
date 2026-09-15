/* ===== Отраслевая страница решений: интерактив =====
   Разметку девяти страниц собирает tools/build-industries.mjs прямо в HTML — контент и ссылки
   видны без JavaScript. Этот файл ничего не перерисовывает, только навешивает аналитику
   на готовую разметку: renderIndustryPage(data) вызывается на странице после неё. */
(function(){
  function deviceType(){return window.innerWidth<=900?'mobile':'desktop'}
  function track(event,params){if(typeof window.trackEvent==='function'){window.trackEvent(event,params)}}

  /* Разметку страницы собирает tools/build-industries.mjs — она уже есть в HTML.
     Здесь только интерактив: аналитика кликов по деталям и оборудованию. */
  function renderIndustryPage(industry){
    var root=document.getElementById('industryRoot');
    if(!root||root.dataset.wired)return;
    root.dataset.wired='1';

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
  }

  window.renderIndustryPage=renderIndustryPage;
})();
