(function(){
  function setupNav(){
    var nav=document.querySelector('.u-nav');
    var links=nav&&nav.querySelector('.u-links');
    if(!nav||!links||nav.querySelector('.nav-menu-toggle')) return;

    var button=document.createElement('button');
    button.className='nav-menu-toggle';
    button.type='button';
    button.setAttribute('aria-label','Открыть навигацию');
    button.setAttribute('aria-expanded','false');
    button.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>';
    nav.appendChild(button);

    function close(){
      links.classList.remove('is-open');
      button.setAttribute('aria-expanded','false');
      button.setAttribute('aria-label','Открыть навигацию');
    }
    button.addEventListener('click',function(){
      var opened=links.classList.toggle('is-open');
      button.setAttribute('aria-expanded',String(opened));
      button.setAttribute('aria-label',opened?'Закрыть навигацию':'Открыть навигацию');
    });
    links.addEventListener('click',function(event){ if(event.target.closest('a')) close(); });
    document.addEventListener('click',function(event){ if(!nav.contains(event.target)) close(); });
    document.addEventListener('keydown',function(event){ if(event.key==='Escape') close(); });
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',setupNav);
  else setupNav();
})();
