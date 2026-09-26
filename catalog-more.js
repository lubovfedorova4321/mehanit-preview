/* Постраничный показ карточек моделей: первые N, далее «Показать ещё». Работает поверх фильтра (.is-hidden). */
(function(){
  'use strict';
  var STEP=function(){return window.innerWidth<=640?6:12;};
  function plural(n,f){var a=n%10,b=n%100;return f[(b>=11&&b<=14)?2:(a===1?0:(a>=2&&a<=4?1:2))];}
  function init(grid){
    if(grid.dataset.moreInit) return; grid.dataset.moreInit='1';
    var btn=document.createElement('button');
    btn.type='button'; btn.className='btn btn-ghost vmc-more-btn';
    var wrap=document.createElement('div'); wrap.className='vmc-more-row'; wrap.appendChild(btn);
    grid.parentNode.insertBefore(wrap,grid.nextSibling);
    var shown=STEP(); var busy=false;
    function apply(){
      busy=true;
      var cards=[].slice.call(grid.querySelectorAll('.vmc-card')).filter(function(c){return !c.classList.contains('is-hidden');});
      var rest=0;
      cards.forEach(function(c,i){var hide=i>=shown; c.classList.toggle('is-more-hidden',hide); if(hide) rest++;});
      grid.querySelectorAll('.vmc-card.is-hidden').forEach(function(c){c.classList.remove('is-more-hidden');});
      if(rest>0){var n=Math.min(rest,STEP()); btn.textContent='Показать ещё '+n+' '+plural(n,['модель','модели','моделей'])+' (осталось '+rest+')'; wrap.style.display='';}
      else{wrap.style.display='none';}
      busy=false;
    }
    btn.addEventListener('click',function(){shown+=STEP(); apply();});
    var mo=new MutationObserver(function(muts){
      if(busy) return;
      var relevant=muts.some(function(m){
        if(m.type==='childList') return true;
        if(m.type!=='attributes'||!m.target.classList||!m.target.classList.contains('vmc-card')) return false;
        var was=(m.oldValue||'').split(/\s+/).indexOf('is-hidden')>=0, now=m.target.classList.contains('is-hidden');
        return was!==now;
      });
      if(relevant){shown=STEP(); apply();}
    });
    mo.observe(grid,{attributes:true,attributeFilter:['class'],attributeOldValue:true,subtree:true,childList:true});
    apply();
  }
  function boot(){document.querySelectorAll('.vmc-grid').forEach(init);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
})();
