// Decorative collage layers: never intercept navigation or media controls.
(() => {
 const sticker=(name,cls)=>`<img class="scrap-charm ${cls}" src="assets/charms/${name}.png" alt="" aria-hidden="true" draggable="false">`;
 const pairs=[['lace-rabbit','heart-charm','triple-hearts'],['lace-leaf','heart-clock','lace-daisy'],['star-player','lace-note','silver-star'],['lace-butterfly','heart-keys','lace-rose'],['moon-chain','star-ring','lace-bird'],['heart-player','wing-heart','silver-star'],['silver-chain','heart-clock','star-ring'],['white-horse','lace-note','lace-leaf'],['lace-daisy','little-envelope','lace-rabbit'],['star-player','heart-keys','lace-butterfly'],['wing-heart','blue-letter','lace-rose']];
 const original=markup;
 markup=function(c){const i=chapters.indexOf(c),p=pairs[i]||pairs[0];const box=document.createElement('div');box.innerHTML=original(c);const leaves=box.querySelectorAll('.leaf');leaves[0].insertAdjacentHTML('beforeend',sticker(p[0],'charm-top'));leaves[1].insertAdjacentHTML('beforeend',sticker(p[1],'charm-bottom')+sticker(p[2],'charm-extra'));return box.innerHTML};
 document.querySelector('.cover-top').insertAdjacentHTML('beforeend',sticker('silver-chain','cover-chain')+sticker('star-player','cover-token'));
 document.querySelector('.cover-scene').insertAdjacentHTML('beforeend','<div class="scrap-note" aria-hidden="true"><span>MY LITTLE ARCHIVE</span><i>music, film<br>& little moments.</i><b>♡ JUNYAO</b></div>'+sticker('blue-letter','cover-letter'));
 update();
})();
