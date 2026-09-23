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
 // Replace the original book gesture on phones, so each swipe turns only once.
 book.addEventListener('touchend', e => {if(phone.matches)e.stopImmediatePropagation()}, {capture:true,passive:true});
 const interactive = 'button,a,input,textarea,select,video,audio,iframe,img,summary,[role="button"],.audio-panel,dialog,.mobile-nav';
 const canTurn = target => phone.matches && opened && !document.querySelector('dialog[open]') &&
   target instanceof Element && !!target.closest('#stage') && !target.closest(interactive);
 let gesture = null, suppressClickUntil = 0;
 document.addEventListener('touchstart', e => {
   gesture = null;
   if(e.touches.length !== 1 || !canTurn(e.target)) return;
   const t = e.touches[0];
   gesture = {x:t.clientX,y:t.clientY,maxY:0,time:Date.now()};
 }, {capture:true,passive:true});
 document.addEventListener('touchmove', e => {
   if(!gesture) return;
   if(e.touches.length !== 1){gesture=null;return}
   gesture.maxY = Math.max(gesture.maxY,Math.abs(e.touches[0].clientY-gesture.y));
 }, {capture:true,passive:true});
 document.addEventListener('touchcancel', () => {gesture=null}, {capture:true,passive:true});
 document.addEventListener('touchend', e => {
   const start = gesture; gesture = null;
   if(!start || !canTurn(e.target) || e.touches.length) return;
   const dx = e.changedTouches[0].clientX-start.x;
   const dy = Math.max(start.maxY,Math.abs(e.changedTouches[0].clientY-start.y));
   if(Math.abs(dx)>12 || dy>12) suppressClickUntil=Date.now()+500;
   if(Math.abs(dx)>=65 && Math.abs(dx)>dy*2 && dy<55 && Date.now()-start.time<1200){
     go(current+(dx<0?1:-1));
   }
 }, {capture:true,passive:true});
 document.addEventListener('click', e => {
   if(Date.now()<suppressClickUntil || !canTurn(e.target)) return;
   // Only the narrow empty paper/background margins respond, never the content.
   const edge = Math.min(32,innerWidth*.08);
   if(e.clientX<=edge) go(current-1);
   else if(e.clientX>=innerWidth-edge) go(current+1);
 });
 phone.addEventListener('change', refresh);
 refresh();
})();
