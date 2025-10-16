
(function(){
  const content = document.getElementById('content');
  const tocList = document.getElementById('tocList');
  if(content && tocList){
    const heads = content.querySelectorAll('h1, h2, h3');
    heads.forEach(h => {
      if(!h.id){
        h.id = (h.textContent || '').toLowerCase().replace(/[^a-z0-9\- ]/g,'').trim().replace(/\s+/g,'-');
      }
      const li = document.createElement('li');
      li.className = 'lvl-' + h.tagName.toLowerCase();
      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  const backTop = document.getElementById('backTop');
  if(backTop){
    backTop.addEventListener('click', (e)=>{
      e.preventDefault();
      window.scrollTo({top:0, behavior:'smooth'});
    });
  }

  const toggle = document.getElementById('themeToggle');
  if(toggle){
    toggle.addEventListener('click', ()=>{
      const dark = document.documentElement.dataset.theme === 'dark';
      document.documentElement.dataset.theme = dark ? 'light' : 'dark';
      if(!dark){
        document.documentElement.style.setProperty('--bg','#0F1112');
        document.documentElement.style.setProperty('--fg','#E8DDC9');
        document.documentElement.style.setProperty('--muted','#BBB');
      }else{
        document.documentElement.style.setProperty('--bg','#ffffff');
        document.documentElement.style.setProperty('--fg','#0F1112');
        document.documentElement.style.setProperty('--muted','#444');
      }
    });
  }
})();