// A personal moving-image note beside the introduction, using the existing gallery.
(() => {
 groups['个人Vlog']=[{title:'我的日常影像 / Personal Vlog',src:'assets/personal-vlog.mp4',type:'mp4'}];
 const card='<button class="vlog-note" data-gallery="个人Vlog" aria-label="播放我的个人 Vlog"><img src="assets/personal-vlog.jpg" alt="个人 Vlog 画面" loading="lazy"><span><small>A LITTLE FILM OF MY LIFE</small><strong>我的日常影像</strong><em>▶ 点击播放个人 Vlog ↗</em></span></button>';
 const marker='<div class="folio"';
 const i=chapters[0].right.indexOf(marker);
 chapters[0].right=i<0?chapters[0].right+card:chapters[0].right.slice(0,i)+card+chapters[0].right.slice(i);
 update();
})();
