// User-approved source material, presented in the original portfolio order.
const entries=Object.entries(MATERIALS);
const readableNames={
 '微信图片_20260923005612_50_3':'《开始推理吧4》节目海报',
 '微信图片_20260923005614_51_3':'诡市场景 · 我的现场记录',
 '微信图片_20260923005618_52_3':'诡市场景 · 街景与置景',
 '微信图片_20260923005621_53_3':'诡市场景 · 夜景氛围',
 '微信图片_20260923005627_54_3':'诡市场景 · 录制现场',
 '微信图片_20260923005631_55_3':'芒果TV · 毕业礼现场合影',
 '微信图片_20260923005635_56_3':'芒果TV · 晚会舞台现场',
 '微信图片_20260923005638_57_3':'芒果TV · 我的实习合影',
 '03bf6357fb019170cd1a0b86631aa88e':'湖南娱乐 · 视频作品01',
 '32c5d98a5cba38f95cef267fa9aa5d46':'湖南娱乐 · 视频作品02',
 '活动拍摄花絮 (2)':'音鹅合影 · 演出现场',
 '活动拍摄花絮':'音鹅合影 · 活动记录',
 'QQ音鹅1':'QQ音鹅 · 视频作品02',
 'QQ音鹅':'QQ音鹅 · 视频作品01'
};
entries.forEach(([,item])=>{item.originalTitle=item.title;item.title=readableNames[item.title]||item.title});
const select=(test)=>entries.filter(([n])=>test(n)).map(([,v])=>v);
const find=(name)=>MATERIALS[name];
const ext=(url,label)=>`<a class="external-link" href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`;
const row=(title,body)=>`<div class="timeline-row"><strong>${title}</strong><p>${body}</p></div>`;
const hero=(item,caption)=>`<button class="image-button material-hero" data-gallery="${caption}"><img class="full-image" src="${item.src}" alt="${caption}"></button><div class="image-caption">${caption} / 点击查看</div>`;
const button=(key,label)=>`<button data-gallery="${key}">${label}<span>↗</span></button>`;
const groups={
 '音鹅合影':[find('活动拍摄花絮 (2).jpg')],
 '海外现场':select(n=>n.startsWith('QQ音乐海外现场')),
 '官方抖音':select(n=>n.startsWith('QQ音乐官方抖音')),
 '官方视频号':select(n=>n.startsWith('QQ音乐官方视频号')),
 '音鹅':select(n=>n.startsWith('QQ音鹅')),
 '艺人宣发':select(n=>n.startsWith('艺人宣发')||n.startsWith('活动拍摄')||n==='TME合影.jpg'),
 '网易合影':[find('网易云音乐/网易云音乐合影.jpg')],
 '法语专区':select(n=>n.includes('法国音乐专区')||n.includes('法语专区歌单')),
 '多品类运营':select(n=>n.includes('kpop音乐')||n.includes('欧美专区')||n.includes('首页广场')),
 '芒果现场':select(n=>n.startsWith('芒果TV/')),
 '湖南娱乐':select(n=>n.startsWith('湖南娱乐/')),
 '诡市现场':select(n=>n.startsWith('开始推理吧4/')),
 '一汽':select(n=>n.includes('三地三摇篮-一汽')||n.includes('一汽拍摄文案')),
 '长影':select(n=>n.includes('三地三摇篮-长影')||n.includes('长影拍摄分镜')||n.includes('新中国电影摇篮')),
 '校园新闻':select(n=>n.includes('新闻稿件')||n.includes('校官方抖音'))
};
Object.values(groups).forEach(items=>items.sort((a,b)=>(a.type==='mp4'?0:a.type==='docx'?2:a.type==='pdf'?3:1)-(b.type==='mp4'?0:b.type==='docx'?2:b.type==='pdf'?3:1)));
const links={
 '官方抖音':ext('https://v.douyin.com/6tsdk2KqRXQ/','QQ音乐官方抖音'),
 '音鹅':ext('https://xhslink.cn/o/aN2h6rKRS1','QQ音鹅小红书'),
 '湖南娱乐':ext('https://v.douyin.com/fLPJLGF-IRA/','湖南娱乐官方抖音'),
 '法语专区':ext('https://mp.music.163.com/643d0e55b915882ee5d7919d?page=b651dd178ad84099b278f964f975e765&app_version=9.1.32','打开法语音乐专区'),
 '校园新闻':ext('https://v.douyin.com/dCiAKERv2Po/','学校官方抖音')+ext('https://mp.weixin.qq.com/s/MpyhPlY9keWO_4gasVQA7A','阅读我的公众号文章')
};
chapters[2].left=`<span class="eyebrow">03 / INTERNSHIP · 2025.10—2026.04</span><h1>腾讯音乐<br>娱乐集团</h1><h3>新媒体运营实习生</h3>${row('QQ音乐海外现场 / 独立运营','独立负责规划、选题、剪辑、发布及复盘；30天播放3416.5万，涨粉7.6万。')}${row('QQ音乐官方账号 / 抖音、视频号','参与官方账号选题与剪辑；视频号30天播放2.7亿、点赞216.7万、分享101.8万；抖音参与制作多条10万+赞视频。')}${row('QQ音鹅 / 小红书 IP','独立打造人格化内容，策划音乐趣味梗、艺人安利与应援混剪，产出千赞、万赞笔记。')}${row('现场拍摄与艺人宣发','参与演出、应援及IP联动拍摄；周杰伦、蔡徐坤等重点项目宣发与粉丝后援会协同。')}<p class="small">账号数据采用简历口径，统计窗口待补充。</p>${folio('TENCENT MUSIC',5)}`;
chapters[2].right=`<span class="eyebrow">MUSIC / CONTENT / COMMUNITY</span>${hero(groups['音鹅合影'][0],'音鹅合影')}<div class="project-links">${button('海外现场','QQ音乐海外现场')}${button('官方抖音','QQ音乐官方抖音号')}${button('官方视频号','QQ音乐官方视频号')}${button('音鹅','QQ音鹅 / 小红书')}${button('艺人宣发','艺人宣发与活动拍摄')}</div>${folio('SELECTED WORK',6)}`;
chapters[3].left=`<span class="eyebrow">04 / INTERNSHIP · 2024.06—2024.10</span><h1>网易云音乐</h1><h3>内容运营实习生</h3>${row('法语音乐专区 / 从0到1','核心成员，主导项目排期、专区框架、歌单矩阵与分发策略；完成选曲、文案、审核及全部封面与Banner设计。')}${row('官方内容推送与广场运营','负责用户端官方内容推送与广场运营，维护歌单和Banner资源位。')}${row('多品类内容维护','维护粤语、经典、K-pop等专区及榜单内容，保障高频更新与合规审核。')}${row('推荐与内容优化','优化歌单标签和推荐逻辑，持续更新歌单与推荐位。')}<button class="text-link" data-gallery="多品类运营">查看运营页面与配置记录 ↗</button>${folio('NETEASE CLOUD MUSIC',7)}`;
chapters[3].right=`<span class="eyebrow">FRENCH MUSIC / FROM ZERO TO ONE</span>${hero(groups['网易合影'][0],'网易合影')}<h2>法语音乐专区</h2><p>从规划、上线到持续更新；核心爆款歌单播放量突破1000万+。</p><div class="project-links">${button('法语专区','专区浏览 / 歌单与视觉')}</div>${links['法语专区']}${folio('CONTENT & DESIGN',8)}`;
chapters[4].left=`<span class="eyebrow">05 / INTERNSHIP · 2023.06—2023.09</span><h1>芒果 TV</h1><h3>总裁办 · 执行统筹实习生</h3>${row('大型晚会策划与落地','协助《马栏山芒果节·不设限毕业礼》，参与创意策划、流程拆解、跨部门对接与现场统筹。')}${row('项目流程优化','优化执行节点和分工，标准化推进工作；简历所述整体执行效率提升30%。')}${row('S级综艺安全合规统筹','参与《披荆斩棘3》《乘风破浪3》审片，负责敏感信息筛查、舆情风险把控，输出内容修改与剪辑优化建议。')}${folio('MANGO TV',9)}`;
chapters[4].right=`<span class="eyebrow">BEHIND THE SCENES</span>${hero(groups['芒果现场'].find(x=>x.originalTitle.includes('57_3')),'芒果现场')}<h2>策划走进现场</h2><div class="project-links">${button('芒果现场','合影 / 晚会现场 / 执行记录')}</div>${folio('LIVE PRODUCTION',10)}`;
chapters[5].left=`<span class="eyebrow">06 / INTERNSHIP · 2022.12—2023.02</span><h1>湖南娱乐</h1><h3>新媒体运营实习生</h3>${row('新媒体运营与内容宣发','官方账号运维、物料剪辑、话题营销与全网宣发。')}<div class="metrics"><div><b>100万+</b><span>单条抖音浏览</span></div><div><b>50万+</b><span>单条抖音点赞</span></div></div>${row('采访统筹与拍摄执行','统筹采访安排、进度与工作复盘，协同导演完成现场调度、取景和宣传片拍摄。')}${row('策划与商务对接','输出策划方案与脚本，对接合作方需求、执行细则和资源落地；累计50+原创策划脚本完成拍摄上线。')}<p class="small">以上成果数据来自简历。</p>${folio('HUNAN ENTERTAINMENT',11)}`;
chapters[5].right=`<span class="eyebrow">VIDEOS / PUBLICITY</span><h2>我的视频作品</h2><div class="inline-video-list">${groups['湖南娱乐'].map((v,i)=>`<button data-gallery="湖南娱乐" data-start="${i}" class="video-entry"><span class="play-disc">▶</span><span>湖南娱乐视频作品 ${i+1}<small>点击站内播放</small></span></button>`).join('')}</div>${links['湖南娱乐']}${folio('WATCH THE WORK',12)}`;
chapters[6].left=`<span class="eyebrow">07 / PROJECT · 2026.05—2026.06</span><h1>开始推理吧<br>第四季</h1><h3>“诡市”场景机美导演 · 现场执行</h3>${row('“诡市”场景 / 机美导演','负责“诡市”场景机美工作，推进美术置景与场景呈现。')}${row('美术置景与搭建统筹','根据推理剧本逻辑规划场景，对接舞美与道具，落实陈设与氛围，兼顾多机位构图。')}${row('录制执行与统筹调度','对接摄像、灯光、艺统等部门，在录制现场协调调度，保障艺人录制流程。')}${folio('GUI SHI / ON SET',13)}`;
chapters[6].right=`<span class="eyebrow">SCENES FROM THE SET</span>${hero(groups['诡市现场'].find(x=>x.originalTitle.includes('50_3')),'诡市现场')}<h2>“诡市”的现场</h2><div class="project-links">${button('诡市现场','场景照片 / 录制与幕后')}</div>${folio('SCENE & EXECUTION',14)}`;
chapters[7].left=`<span class="eyebrow">08 / CAMPUS CREATIONS</span><h1>三地三摇篮</h1><h2>总导演 / 胡军瑶</h2><p>两部在校导演作品：一汽汽车篇、长影篇。</p><div class="film-note"><span>FROM WORDS TO SCREEN</span><p>从拍摄文案与分镜，到最终影像。<br>打开每一部作品，可观看正片并翻阅创作材料。</p></div>${folio('DIRECTOR’S COLLECTION',15)}`;
chapters[7].right=`<span class="eyebrow">TWO FILMS / ONE COLLECTION</span><div class="school-cards"><button class="school-card" data-gallery="一汽"><small>FILM 01 / 总导演</small><strong>一汽汽车篇</strong><span>▶ 观看正片 · 拍摄文案 ↗</span></button><button class="school-card" data-gallery="长影"><small>FILM 02 / 总导演</small><strong>长影篇</strong><span>▶ 观看正片 · 文案 · 分镜 ↗</span></button></div>${folio('FILMS & STORYBOARDS',16)}`;
chapters[8].right=`<span class="eyebrow">CAMPUS NEWS / EDITORIAL</span>${hero(find('学校作品/校官方抖音.png'),'校园新闻')}<div class="project-links">${button('校园新闻','新闻稿件与官方账号记录')}</div>${links['校园新闻']}${folio('REPORT & CREATE',18)}`;
chapters[8].left=chapters[8].left.replace('data-work="学校官方新闻制作" data-role="校融媒体中心部长 / 新闻制作"','data-gallery="校园新闻"');
chapters[10].left=`<h1 class="thanks-only">感谢观看</h1>`;
chapters[10].right=chapters[10].right.replace('保持联系。','期待您的沟通联系').replace('求职意向城市 / 北京','求职意向：北京、上海').replace('<button class="text-link" data-audio>再听一遍 Demo ↗</button>','');
const escapeText=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
let activeGroup='',activeIndex=0;
function showMaterial(key,index=0){
 activeGroup=key;const items=groups[key];activeIndex=Math.max(0,Math.min(index,items.length-1));const item=items[activeIndex];
 document.querySelectorAll('#work-dialog video').forEach(v=>v.pause());
 let media='';
 if(item.type==='mp4'){audio.pause();media=`<video controls playsinline preload="metadata" src="${item.src}"></video>`}
 else if(['jpg','png'].includes(item.type))media=`<img class="gallery-image" src="${item.src}" alt="${item.title}">`;
 else if(item.type==='docx')media=`<article class="document-reading">${item.text.filter(Boolean).map(t=>`<p>${escapeText(t)}</p>`).join('')}</article>`;
 else if(item.type==='pdf')media=`<div class="storyboard-pages">${(item.pages||[]).map((src,i)=>`<figure><figcaption>长影拍摄分镜 · 第 ${i+1} / ${item.pages.length} 页</figcaption><a href="${src}" target="_blank" rel="noopener" title="打开原尺寸分镜图片"><img src="${src}" alt="长影拍摄分镜第${i+1}页" loading="lazy"></a></figure>`).join('')}</div>`;
 $('#work-content').innerHTML=`<span class="eyebrow">WORK COLLECTION / ${activeIndex+1} OF ${items.length}</span><h2>${escapeText(item.title)}</h2><div class="gallery-tabs">${items.map((v,i)=>`<button data-material-index="${i}" class="${i===activeIndex?'selected':''}">${v.type==='mp4'?'▶ ':v.type==='docx'?'文案 / ':v.type==='pdf'?'分镜 / ':''}${escapeText(v.title)}</button>`).join('')}</div><div class="material-view">${media}</div><div class="gallery-actions">${links[key]||''}${ext(item.src,item.type==='docx'?'下载原始文档':item.type==='pdf'?'单独打开分镜 PDF':'单独打开素材')}</div>`;
 if(key==='法语专区')$('#work-content').insertAdjacentHTML('beforeend','<details class="zone-embed"><summary>在本页浏览法语专区</summary><p>若平台限制内嵌显示，可使用上方入口在新窗口打开。</p><iframe loading="lazy" title="网易云音乐法语专区" src="https://mp.music.163.com/643d0e55b915882ee5d7919d?page=b651dd178ad84099b278f964f975e765&app_version=9.1.32"></iframe></details>');
 if(!$('#work-dialog').open)$('#work-dialog').showModal();
}
document.addEventListener('click',e=>{const g=e.target.closest('[data-gallery]');if(g)showMaterial(g.dataset.gallery,+(g.dataset.start||0));const tab=e.target.closest('[data-material-index]');if(tab)showMaterial(activeGroup,+tab.dataset.materialIndex)});
$('#work-dialog').addEventListener('close',()=>{$('#work-content').querySelectorAll('video').forEach(v=>v.pause())});
document.addEventListener('play',e=>{if(e.target.tagName==='VIDEO'){audio.pause();document.querySelectorAll('video').forEach(v=>{if(v!==e.target)v.pause()})}if(e.target===audio)document.querySelectorAll('video').forEach(v=>v.pause())},true);
update();

// Additional original internship planning and summer-school certificate.
groups['舞蹈专区调研']=[1,2].map(n=>({title:'舞蹈歌单专区调研 · '+n,src:'assets/netease-planning/dance-'+n+'.png',type:'png'}));
groups['法语歌单规划']=[1,2,3].map(n=>({title:'法语歌单规划 · '+['年度热播','场景与热点','年代经典'][n-1],src:'assets/netease-planning/french-'+n+'.png',type:'png'}));
groups['延世夏校证书']=[{title:'延世大学夏校结业证书',src:'assets/yonsei-certificate.jpg',type:'jpg'}];
chapters[1].right=hero(groups['延世夏校证书'][0],'延世夏校证书')+chapters[1].right;
chapters[3].right=chapters[3].right.replace('<div class="folio"','<div class="project-links planning-links">'+button('法语歌单规划','法语歌单规划 / 查看矩阵')+button('舞蹈专区调研','舞蹈专区调研 / 查看思路')+'</div><div class="folio"');
if(!chapters[3].right.includes('planning-links'))chapters[3].right+='<div class="project-links planning-links">'+button('法语歌单规划','法语歌单规划 / 查看矩阵')+button('舞蹈专区调研','舞蹈专区调研 / 查看思路')+'</div>';
update();
