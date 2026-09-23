/* Progressive enhancement; desktop keeps its existing book interaction. */
(() => {
 const phone = matchMedia('(max-width:700px)');
 const nav = document.createElement('nav');
 nav.className = 'mobile-nav'; nav.hidden = true;
 nav.setAttribute('aria-label', '手机章节导航');
 nav.innerHTML = '<button type="button" data-prev aria-label="上一章">← 上一章</button><button type="button" class="mobile-chapter" aria-label="打开章节目录"></button><button type="button" data-next aria-label="下一章">下一章 →</button>';
 document.body.append(nav);
 const refresh = () => {
   nav.hidden = !opened;
   nav.querySelector('[data-prev]').disabled = current === 0;
   nav.querySelector('[data-next]').disabled = current === chapters.length - 1;
   nav.querySelector('.mobile-chapter').textContent = chapters[current].name;
   const count = document.createElement('small');
   count.textContent = `${current + 1} / ${chapters.length} · 目录`;
   nav.querySelector('.mobile-chapter').append(count);
 };
 const originalUpdate = update;
 update = function(){originalUpdate();refresh()};
 const originalGo = go;
 go = function(n){
   if(!phone.matches || !opened) return originalGo(n);
   if(n < 0 || n >= chapters.length || busy || n === current) return;
   current = n; update(); window.scrollTo({top:0,behavior:'instant'});
 };
 nav.querySelector('[data-prev]').onclick = () => go(current - 1);
 nav.querySelector('[data-next]').onclick = () => go(current + 1);
 nav.querySelector('.mobile-chapter').onclick = () => document.querySelector('#toc').showModal();
 document.querySelector('#home').addEventListener('click', () => {refresh();if(phone.matches) window.scrollTo(0,0)});
 // Vertical reading on phones; use the explicit chapter controls to avoid accidental turns.
 book.addEventListener('touchend', e => {if(phone.matches)e.stopImmediatePropagation()}, {capture:true,passive:true});
 phone.addEventListener('change', refresh);
 refresh();
})();
