/* Общее поведение страниц статей Пресс-центра:
   - подсветка активного пункта оглавления при скролле;
   - FAQ-аккордеон (toggleFaq, совместим с faq.html);
   - рендер блока «Похожие материалы» из press-data.js по списку id в relatedArticles. */

function toggleFaq(b){b.parentElement.classList.toggle('open')}

(function(){
  var tocLinks=document.querySelectorAll('.art-toc a[href^="#"]');
  if(!tocLinks.length)return;
  var sections=[];
  tocLinks.forEach(function(a){
    var id=a.getAttribute('href').slice(1);
    var el=document.getElementById(id);
    if(el)sections.push({id:id,el:el,link:a});
  });
  if(!sections.length)return;
  function onScroll(){
    var y=window.scrollY+120;
    var current=sections[0];
    sections.forEach(function(s){if(s.el.offsetTop<=y)current=s});
    tocLinks.forEach(function(a){a.classList.remove('is-active')});
    current.link.classList.add('is-active');
  }
  document.addEventListener('scroll',onScroll,{passive:true});
  onScroll();
})();

(function(){
  var host=document.getElementById('artRelated');
  if(!host)return;
  var ids=(host.dataset.related||'').split(',').map(function(s){return s.trim()}).filter(Boolean);
  if(!ids.length || typeof PRESS_ARTICLES==='undefined'){host.closest('.art-related').style.display='none';return}
  var items=ids.map(function(id){return pressArticleById(id)}).filter(function(a){return a && isPublished(a)});
  if(!items.length){host.closest('.art-related').style.display='none';return}
  host.innerHTML=items.map(function(a){
    return '<a class="art-related-card" href="'+a.contentPath+'"><div class="r-label">'+a.category+'</div><h4>'+a.title+'</h4></a>';
  }).join('');
})();
