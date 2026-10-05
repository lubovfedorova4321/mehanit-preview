/* Живые цифры сайта (пилот). Считает из поискового индекса search-index.json,
   который пересобирается tools/build-search-index.py при добавлении страниц.
   При переносе в CMS заменить на данные из базы — см. docs/dynamic-numbers-spec.md.
   Разметка: <b data-count="models|stock|brands|press|press:<slug>">…</b>,
             <span class="sol-tile-count" data-cat="turning[,sheet,…]">…</span> */
(function(){
  function pl(n,f){var w=f.split('|'),m=n%10,h=n%100;return (h>=11&&h<=14)?w[2]:(m===1?w[0]:(m>=2&&m<=4?w[1]:w[2]))}
  function apply(items){
    if(!items||!items.length)return;
    var by={},stockBy={},partsBy={},stock=0,models=0,brands=0,industries=0,parts=0;
    items.forEach(function(it){var u=String(it.url||'');var m=u.match(/^equipment-([a-z]+)-.+\.html$/);
      /* станки гидроабразивной резки хранятся в equipment-sheet-*, но в каталоге это своя категория */
      if(m){var c=m[1];if(c==='sheet'&&/гидроабразивной резки/i.test(it.title||''))c='waterjet';by[c]=(by[c]||0)+1;models++}
      else if(/^stock-.+\.html$/.test(u)){
        /* проданные позиции не считаем — страница склада показывает их с меткой «Продано» */
        if(!/продано/i.test(it.keywords||'')){stock++;var sm=u.match(/^stock-([a-z0-9]+)-/);if(sm)stockBy[sm[1]]=(stockBy[sm[1]]||0)+1}}
      else if(/^brand-.+\.html$/.test(u)){brands++}
      else if(/^solution-[a-z]+\.html$/.test(u)){industries++}
      else if(/^solution-[a-z]+-.+\.html$/.test(u)){parts++;var pm=u.match(/^solution-([a-z]+)-/);if(pm)partsBy[pm[1]]=(partsBy[pm[1]]||0)+1}});
    var press=null,pressBy={};
    if(window.PRESS_ARTICLES){press=window.PRESS_ARTICLES.filter(function(a){return a.status==='approved'});press.forEach(function(a){pressBy[a.categorySlug]=(pressBy[a.categorySlug]||0)+1})}
    document.querySelectorAll('[data-count]').forEach(function(el){
      var k=el.getAttribute('data-count'),v=null;
      if(k==='models')v=models;else if(k==='stock')v=stock;else if(k==='brands')v=brands;
      else if(k==='cats'){v=0;document.querySelectorAll('.sol-grid .sol-tile').forEach(function(t){
        v+=parseInt(t.getAttribute('data-types')||'1',10)||1})}  /* плитка может объединять несколько видов обработки */
      else if(k==='industries')v=industries;else if(k==='parts')v=parts;
      else if(k.indexOf('parts:')===0)v=partsBy[k.slice(6)]||0;
      else if(k.indexOf('stock:')===0){v=0;k.slice(6).split(',').forEach(function(c){v+=stockBy[c]||0})}
      else if(k==='subtypes'){var tabs={};document.querySelectorAll('[data-milling-tab]').forEach(function(e){tabs[e.getAttribute('data-milling-tab')]=1});v=Object.keys(tabs).length}
      else if(k==='cards')v=document.querySelectorAll('.ind-card').length;
      else if(k.indexOf('cat:')===0){v=0;k.slice(4).split(',').forEach(function(c){v+=by[c]||0})}
      else if(k==='press'&&press)v=press.length;else if(k.indexOf('press:')===0&&press)v=pressBy[k.slice(6)]||0;
      if(v===null)return; el.textContent=v;
      var f=el.getAttribute('data-plural');if(f){var t=el.getAttribute('data-tail')||'';el.textContent=v+' '+pl(v,f)+t}
    });
    document.querySelectorAll('.sol-tile-count[data-cat]').forEach(function(el){var n=0;el.getAttribute('data-cat').split(',').forEach(function(c){n+=by[c]||0});el.textContent=n+' '+pl(n,'модель|модели|моделей')});
  }
  function fromScript(){var t=document.createElement('script');t.src='search-index.js';t.onload=function(){apply(window.MEHANIT_SEARCH_INDEX_DATA)};document.head.appendChild(t)}
  function run(){
    if(window.MEHANIT_SEARCH_INDEX_DATA){apply(window.MEHANIT_SEARCH_INDEX_DATA);return}
    if(location.protocol==='file:'||!window.fetch){fromScript();return}
    fetch('search-index.json',{cache:'no-cache'}).then(function(r){return r.json()}).then(apply).catch(fromScript);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
