new MutationObserver(()=>{for(const c of document.querySelectorAll('.stack td:not([data-l])')){let i=0,p=c;while(p=p.previousElementSibling)i+=p.colSpan;c.dataset.l=c.closest('table').rows[0].cells[i]?.textContent||''}}).observe(document,{childList:true,subtree:true});
{
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>[...r.querySelectorAll(s)];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

const NAV=[
 {g:{th:'เริ่มที่นี่',en:'Start here'},items:[{id:'first-video',th:'ทำคลิปแรกตั้งแต่ต้นจนจบ',en:'Your first video, start to finish'},{id:'project-media',th:'จัดการไฟล์และโปรเจกต์',en:'Managing files and projects'},{id:'premiere-vs-ae',th:'Premiere กับ After Effects ใช้ต่างกันยังไง',en:'Premiere vs After Effects'},{id:'system-requirements',th:'สเปกเครื่องและการติดตั้ง',en:'System requirements and install'},{id:'workspace-tour',th:'รู้จักหน้าจอและพาเนล',en:'Tour of the workspace'}]},
 {g:{th:'พื้นฐาน Premiere',en:'Premiere basics'},items:[{id:'sequence',th:'Sequence และ Sequence Settings',en:'Sequences and Sequence Settings'},{id:'monitors',th:'Source Monitor กับ Program Monitor',en:'Source Monitor vs Program Monitor'},{id:'timeline',th:'ตัดต่อบน Timeline',en:'Editing in the Timeline'},{id:'markers',th:'Marker',en:'Markers'}]},
 {g:{th:'เอฟเฟกต์และกราฟิก',en:'Effects and graphics'},items:[{id:'effects-keyframes',th:'Effects และ Keyframe',en:'Effects and keyframes'},{id:'mogrt',th:'MOGRT (Motion Graphics Template)',en:'MOGRT (Motion Graphics templates)'},{id:'object-mask',th:'Object Mask',en:'Object Mask'}]},
 {g:{th:'สี เสียง และซับไตเติล',en:'Color, audio and captions'},items:[{id:'color-mode',th:'แต่งสีด้วย Color Mode',en:'Color grading with Color Mode'},{id:'captions',th:'ซับไตเติลภาษาเกาหลีและจีนตัวย่อ',en:'Korean and Simplified Chinese captions'},{id:'audio',th:'เสียงและเพลง',en:'Audio and music'}]},
 {g:{th:'ส่งออก',en:'Export'},items:[{id:'presets-resolution',th:'Preset และ Resolution ที่ใช้บ่อย',en:'Common presets and resolutions'},{id:'export',th:'Export วิดีโอ',en:'Exporting video'}]},
 {g:{th:'After Effects',en:'After Effects'},items:[{id:'ae-comp-layers',th:'Composition และ Layer',en:'Compositions and layers'},{id:'ae-keyframes',th:'Keyframe ใน After Effects',en:'Keyframes in After Effects'},{id:'ae-text',th:'ทำตัวหนังสือเคลื่อนไหว',en:'Animating text'},{id:'ae-render',th:'Render และส่งออก',en:'Rendering and export'}]},
 {g:{th:'อ้างอิง',en:'Reference'},items:[{id:'whats-new',th:'มีอะไรใหม่ในเวอร์ชัน 27.0',en:"What's new in 27.0"},{id:'shortcuts',th:'คีย์ลัด',en:'Keyboard shortcuts'},{id:'glossary',th:'อภิธานศัพท์',en:'Glossary'}]}
];
const ORDER=NAV.flatMap(g=>g.items.filter(i=>i.id));
const PAGES=ORDER.map(i=>i.id);
const UI={
 th:{brand:'เริ่มตัดต่อ',tag:'Premiere และ After Effects สำหรับมือใหม่',search:'ค้นหาหัวข้อ',menu:'เมนูทั้งหมด',onpage:'ในหน้านี้',prev:'ก่อนหน้า',next:'ถัดไป',none:'ไม่พบหัวข้อที่ตรงกับคำค้น',soon:'หน้าตัวอย่าง: หัวข้อสีเทายังไม่มีเนื้อหา',navlabel:'สารบัญเว็บ',
  foot:['เจอข้อมูลผิดหรือล้าสมัย แจ้งได้ที่ GitHub Issues ของเว็บนี้','เว็บนี้ไม่ใช่เว็บทางการของ Adobe ส่วน Adobe, Premiere และ After Effects เป็นเครื่องหมายการค้าของ Adobe','หน้าตัวอย่าง: ชื่อเว็บและหัวข้อสีเทาในเมนูเป็นโครงสำหรับดูหน้าตา']},
 en:{brand:'Start Editing',tag:'Premiere and After Effects for beginners',search:'Search topics',menu:'All topics',onpage:'On this page',prev:'Previous',next:'Next',none:'No topics match your search',soon:'Sample site: grey topics have no content yet',navlabel:'Site contents',
  foot:['Spotted something wrong or out of date? Report it in this site\'s GitHub Issues.','This is not an official Adobe site. Adobe, Premiere and After Effects are trademarks of Adobe.','Sample site: the site name and the grey topics in the menu are placeholders.']}
};

/* ---------- demos ---------- */
const D={};

D['color-mode']=(root,L)=>{
 const T={th:{h:'ลองก่อนเปิดโปรแกรม: แก้ 4 คลิปด้วยคอนโทรล 2 มิติ',scene:'ภาพตัวอย่างวิวทะเลสาบ ใช้ดูผลการปรับสี',pad:'คอนโทรล 2 มิติ ใช้ปุ่มลูกศรปรับทีละนิด',grid:'Clip Grid จำลอง',reset:'รีเซ็ตคลิปนี้',cmp:'เทียบก่อน/หลัง',b:'ก่อน',a:'หลัง',ok:'ยืนยันค่าแล้ว เลือกคลิปถัดไปใน Clip Grid ได้เลย',
   M:{EB:['ลากขึ้น สว่างขึ้น / ลากลง มืดลง','ลากขวา ยกส่วนมืดขึ้น / ลากซ้าย ดำแน่นขึ้น'],TN:['ลากขึ้น อุ่นขึ้น / ลากลง เย็นลง','ลากขวา อมม่วงแดง / ลากซ้าย อมเขียว']},
   clips:[['คลิป 1','ภาพจาง','คลิป 1 ภาพจาง ส่วนมืดไม่ดำ: ลองเลือก Exposure / Black แล้วลากไปทางซ้าย'],['คลิป 2','อมส้มเกิน','คลิป 2 อมส้มเกิน: กด Auto Color หรือเลือก Temperature / Tint แล้วลากลง'],['คลิป 3','มืดเกิน','คลิป 3 มืดเกิน: กด Auto Color หรือเลือก Exposure / Black แล้วลากขึ้น'],['คลิป 4','อมเขียว','คลิป 4 อมเขียว: เลือก Temperature / Tint แล้วลากไปทางขวา']],
   auto1:'Auto Color ปรับ Exposure, Temperature และ Tint ให้ แต่ไม่แตะ Black ภาพจางแบบนี้ต้องดึง Black เอง',auto2:'Auto Color ปรับ Exposure, Temperature และ Tint ให้แล้ว ลองเปิดเทียบก่อน/หลังดู',
   cap:'เดโมจำลองหลักการเพื่อให้เข้าใจก่อนลงมือ ไม่ใช่หน้าจอจริงของ Premiere ทิศทางการลากและตัวเลขเป็นของเดโมนี้เท่านั้น'},
  en:{h:'Try it before opening the app: fix 4 clips with a 2D control',scene:'Sample lake view used to show the colour changes',pad:'2D control. Use the arrow keys for fine steps',grid:'Simulated Clip Grid',reset:'Reset this clip',cmp:'Compare before/after',b:'Before',a:'After',ok:'Value accepted. Pick the next clip in the Clip Grid.',
   M:{EB:['Drag up: brighter / down: darker','Drag right: lift shadows / left: deeper blacks'],TN:['Drag up: warmer / down: cooler','Drag right: more magenta / left: more green']},
   clips:[['Clip 1','Flat','Clip 1 looks flat, the blacks are grey: choose Exposure / Black and drag left'],['Clip 2','Too orange','Clip 2 is too orange: press Auto Color, or choose Temperature / Tint and drag down'],['Clip 3','Too dark','Clip 3 is too dark: press Auto Color, or choose Exposure / Black and drag up'],['Clip 4','Green cast','Clip 4 has a green cast: choose Temperature / Tint and drag right']],
   auto1:'Auto Color fixed Exposure, Temperature and Tint, but it leaves Black alone. A flat clip like this needs Black pulled down by hand.',auto2:'Auto Color set Exposure, Temperature and Tint. Turn on before/after to compare.',
   cap:'This demo simulates the idea so it makes sense before you start. It is not the Premiere interface; drag directions and numbers belong to this demo only.'}}[L];
 const base=[{E:0,B:.55,T:0,N:0},{E:.05,B:0,T:.7,N:0},{E:-.75,B:0,T:0,N:0},{E:0,B:0,T:-.1,N:-.65}];
 const U=base.map(()=>({E:0,B:0,T:0,N:0}));
 const M={EB:{v:'E',h:'B',vn:'Exposure',hn:'Black'},TN:{v:'T',h:'N',vn:'Temperature',hn:'Tint'}};
 let cur=0,mode='EB',drag=false;
 root.className='stage cm';
 root.innerHTML=`<h3>${T.h}</h3>
 <div class="mon"><svg viewBox="0 0 640 360" role="img" aria-label="${T.scene}"><use class="mainUse" href="#scene" filter="url(#u0)"/><g class="cmp" style="display:none"><use class="beforeUse" href="#scene" filter="url(#o0)" clip-path="url(#half)"/><line x1="320" y1="0" x2="320" y2="360" stroke="#fff" stroke-width="2"/></g></svg><span class="tag b" hidden>${T.b}</span><span class="tag a" hidden>${T.a}</span></div>
 <div class="ctrl"><div class="seg" role="group"><button type="button" data-m="EB" aria-pressed="true">Exposure / Black</button><button type="button" data-m="TN" aria-pressed="false">Temperature / Tint</button></div>
 <div class="pad" tabindex="0" role="slider" aria-label="${T.pad}" data-mode="EB"><span class="puck"></span></div>
 <div class="read"><div class="row"><b class="vn"></b><code class="vv"></code></div><p class="vhint"></p><div class="row"><b class="hn"></b><code class="hv"></code></div><p class="hhint"></p></div>
 <div class="btns"><button class="btn pri auto" type="button">Auto Color</button><button class="btn reset" type="button">${T.reset}</button></div>
 <label class="chk"><input type="checkbox" class="cmpk"> ${T.cmp}</label></div>
 <div class="strip" role="group" aria-label="${T.grid}">${T.clips.map((c,i)=>`<button class="clip" type="button" data-i="${i}" aria-pressed="${i===0}"><svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#scene" filter="url(#u${i})"/></svg><span>${c[0]}: ${c[1]}</span></button>`).join('')}</div>
 <p class="st" aria-live="polite">${T.clips[0][2]}</p>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const ff=id=>`<filter id="${id}" x="0" y="0" width="1" height="1" color-interpolation-filters="sRGB"><feComponentTransfer>${['R','G','B'].map(k=>`<feFunc${k} id="${id}${k}" type="linear" slope="1" intercept="0"/>`).join('')}</feComponentTransfer></filter>`;
 $('#fx').innerHTML=base.map((c,i)=>ff('u'+i)+ff('o'+i)).join('');
 const cl=x=>Math.max(-1,Math.min(1,x));
 const fmt=x=>(x<-0.004?'−':'+')+Math.abs(x).toFixed(2);
 const tf=p=>{const g=2**(p.E*0.9),l=p.B*0.16,k=1-l;return[[g*(1+0.24*p.T)*k,l],[g*(1-0.2*p.N)*k,l],[g*(1-0.24*p.T)*k,l]]};
 const setF=(id,p)=>tf(p).forEach((v,j)=>{const e=document.getElementById(id+'RGB'[j]);e.setAttribute('slope',v[0].toFixed(3));e.setAttribute('intercept',v[1].toFixed(3))});
 const sum=i=>{const b=base[i],u=U[i];return{E:b.E+u.E,B:b.B+u.B,T:b.T+u.T,N:b.N+u.N}};
 base.forEach((b,i)=>{setF('o'+i,b);setF('u'+i,sum(i))});
 const pad=$('.pad',root),puck=$('.puck',root),st=$('.st',root);
 const draw=()=>{const m=M[mode],u=U[cur];setF('u'+cur,sum(cur));
  $('.mainUse',root).setAttribute('filter',`url(#u${cur})`);$('.beforeUse',root).setAttribute('filter',`url(#o${cur})`);
  puck.style.left=((u[m.h]+1)/2*100)+'%';puck.style.top=((1-u[m.v])/2*100)+'%';
  $('.vn',root).textContent=m.vn;$('.vv',root).textContent=fmt(u[m.v]);$('.vhint',root).textContent=T.M[mode][0];
  $('.hn',root).textContent=m.hn;$('.hv',root).textContent=fmt(u[m.h]);$('.hhint',root).textContent=T.M[mode][1];
  pad.dataset.mode=mode;pad.setAttribute('aria-valuetext',`${m.vn} ${fmt(u[m.v])}, ${m.hn} ${fmt(u[m.h])}`);
  $$('.clip',root).forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.i===cur)));
  $$('.seg button',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.m===mode)));};
 const move=e=>{const r=pad.getBoundingClientRect(),m=M[mode],u=U[cur];u[m.h]=cl((e.clientX-r.left)/r.width*2-1);u[m.v]=cl(1-(e.clientY-r.top)/r.height*2);draw()};
 pad.addEventListener('pointerdown',e=>{drag=true;pad.setPointerCapture(e.pointerId);pad.focus();move(e)});
 pad.addEventListener('pointermove',e=>{if(drag)move(e)});
 pad.addEventListener('pointerup',()=>{drag=false});pad.addEventListener('pointercancel',()=>{drag=false});
 pad.addEventListener('dblclick',()=>{const m=M[mode];U[cur][m.v]=0;U[cur][m.h]=0;draw()});
 pad.addEventListener('keydown',e=>{const m=M[mode],u=U[cur],s=.05;const k={ArrowUp:[m.v,s],ArrowDown:[m.v,-s],ArrowRight:[m.h,s],ArrowLeft:[m.h,-s]}[e.key];
  if(k){e.preventDefault();u[k[0]]=cl(u[k[0]]+k[1]);draw();return}
  if(e.key==='Enter'||e.key==='Escape'){e.preventDefault();pad.blur();st.textContent=T.ok}});
 $('.seg',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){mode=b.dataset.m;draw()}});
 $('.strip',root).addEventListener('click',e=>{const b=e.target.closest('.clip');if(b){cur=+b.dataset.i;st.textContent=T.clips[cur][2];draw()}});
 $('.auto',root).addEventListener('click',()=>{const b=base[cur],u=U[cur];u.E=-b.E;u.T=-b.T;u.N=-b.N;draw();st.textContent=b.B?T.auto1:T.auto2});
 $('.reset',root).addEventListener('click',()=>{U[cur]={E:0,B:0,T:0,N:0};draw();st.textContent=T.clips[cur][2]});
 $('.cmpk',root).addEventListener('change',e=>{const on=e.target.checked;$('.cmp',root).style.display=on?'':'none';$('.tag.b',root).hidden=!on;$('.tag.a',root).hidden=!on});
 draw();
};

D.sequence=(root,L)=>{
 const T={th:{h:'เลือกงาน แล้วดูว่าเฟรมของ sequence ควรมีหน้าตาแบบไหน',fs:'Frame Size',tb:'Timebase (เฟรมเรต)',ar:'อัตราส่วน',same:'ตามกล้องที่ถ่าย',cap:'กรอบในเดโมวาดตามสัดส่วนจริงของแต่ละงาน ตัวเลขละเอียดและเหตุผลอยู่ในตารางด้านล่าง',
   jobs:[['yt','YouTube แนวนอน'],['vt','Shorts / Reels / TikTok'],['ig','Instagram feed'],['ev','อีเวนต์ (ไฟ 50Hz)'],['tv','ส่งสถานีทีวี'],['fl','หนังสั้น']],fps:{ev:'25 หรือ 50',tv:'ตามสเปกสถานี',fl:'24 หรือ 23.976'},alt:{yt:'หรือ 3840 × 2160',fl:'หรือ 4096 × 2160'}},
  en:{h:'Pick a job and see what the sequence frame should look like',fs:'Frame Size',tb:'Timebase (frame rate)',ar:'Aspect ratio',same:'Match your camera',cap:'Each frame is drawn at its true proportions. Full values and the reasons are in the table below.',
   jobs:[['yt','YouTube (landscape)'],['vt','Shorts / Reels / TikTok'],['ig','Instagram feed'],['ev','Events (50 Hz power)'],['tv','TV delivery'],['fl','Short film']],fps:{ev:'25 or 50',tv:'Per broadcaster spec',fl:'24 or 23.976'},alt:{yt:'or 3840 × 2160',fl:'or 4096 × 2160'}}}[L];
 const S={yt:[1920,1080,'16:9'],vt:[1080,1920,'9:16'],ig:[1080,1350,'4:5'],ev:[1920,1080,'16:9'],tv:[1920,1080,'16:9'],fl:[1920,1080,'16:9']};
 let k='yt';
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="chips" role="group">${T.jobs.map(j=>`<button class="chip" type="button" data-k="${j[0]}">${j[1]}</button>`).join('')}</div>
 <div class="two"><div class="seqbox"><svg viewBox="0 0 600 340" aria-hidden="true"></svg></div>
 <dl class="kv stk"><dt>${T.fs}</dt><dd class="fs"></dd><dt>${T.ar}</dt><dd class="ar"></dd><dt>${T.tb}</dt><dd class="tb"></dd><dt>Pixel Aspect Ratio</dt><dd>Square Pixels (1.0)</dd><dt>Fields</dt><dd>No Fields (Progressive Scan)</dd></dl></div>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const svg=$('svg',root);
 const draw=()=>{const [w,h,ar]=S[k];const sc=Math.min(560/w,320/h),fw=w*sc,fh=h*sc,x=(600-fw)/2,y=(340-fh)/2;
  svg.innerHTML=`<svg x="${x}" y="${y}" width="${fw}" height="${fh}" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice"><use href="#scene"/></svg><rect x="${x}" y="${y}" width="${fw}" height="${fh}" fill="none" stroke="#fff" stroke-width="2"/>`;
  $('.fs',root).innerHTML=`${w} × ${h}`+(T.alt[k]?`<small>${T.alt[k]}</small>`:'');$('.ar',root).textContent=ar;$('.tb',root).textContent=T.fps[k]||T.same;
  $$('.chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.k===k)));};
 $('.chips',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){k=b.dataset.k;draw()}});
 draw();
};

D.monitors=(root,L)=>{
 const T={th:{h:'ลอง Insert กับ Overwrite: เลือกช่วงใน Source แล้ววางลง timeline',src:'Source Monitor: คลิปดิบ C',prg:'Program Monitor: ผลลัพธ์ของ sequence',inn:'จุด In',out:'จุด Out',clip:'คลิป',empty:'ว่าง',ins:'Insert ( , )',ow:'Overwrite ( . )',reset:'เริ่มใหม่',tl:'Timeline (คลิกเพื่อย้าย playhead)',
   start:'วาง playhead ใน timeline แล้วกด Insert หรือ Overwrite',did:{i:(n,l)=>`Insert: แทรกช่วง ${n} วินาทีของคลิป C ตรง playhead คลิปเดิมถูกดันไปทางขวา sequence ยาวขึ้นเป็น ${l} วินาที`,o:(n,l)=>`Overwrite: วางช่วง ${n} วินาทีของคลิป C ทับของเดิม ความยาว sequence เป็น ${l} วินาที`},cap:'เดโมจำลองหลักการ หน่วยเป็นวินาที ปุ่ม , และ . ใช้ได้เมื่อโฟกัสอยู่ในกล่องนี้'},
  en:{h:'Try Insert and Overwrite: pick a range in Source, then place it in the timeline',src:'Source Monitor: raw clip C',prg:'Program Monitor: what the sequence shows',inn:'In point',out:'Out point',clip:'Clip',empty:'Empty',ins:'Insert ( , )',ow:'Overwrite ( . )',reset:'Start over',tl:'Timeline (click to move the playhead)',
   start:'Place the playhead in the timeline, then press Insert or Overwrite',did:{i:(n,l)=>`Insert: added ${n} s of clip C at the playhead and pushed the later clips right. The sequence is now ${l} s long.`,o:(n,l)=>`Overwrite: laid ${n} s of clip C over what was there. The sequence is ${l} s long.`},cap:'A simulation of the idea, measured in seconds. The , and . keys work while focus is inside this box.'}}[L];
 const COL={A:'#3f6fb5',B:'#b5653f',C:'#4f9a46'};
 const init=()=>[{n:'A',len:6},{n:'B',len:6}];
 let seq=init(),ph=6,inP=2,outP=6;
 root.className='stage';root.tabIndex=-1;
 root.innerHTML=`<h3>${T.h}</h3>
 <div class="mons"><div><p class="mlabel">${T.src}</p><div class="scr" style="background:${COL.C}">C<small class="si"></small></div></div>
 <div><p class="mlabel">${T.prg}</p><div class="scr pscr"></div></div></div>
 <div><div class="srcbar"><b></b></div><div class="rngs"><label class="rng"><span>${T.inn}<code class="iv"></code></span><input type="range" class="ri" min="0" max="10" step="1" value="2"></label>
  <label class="rng"><span>${T.out}<code class="ov"></code></span><input type="range" class="ro" min="0" max="10" step="1" value="6"></label></div></div>
 <div><p class="mlabel">${T.tl}</p><div class="tl"><div class="ruler"></div><div class="trk"></div><div class="ph"></div></div></div>
 <div class="chips"><button class="btn pri bi" type="button">${T.ins}</button><button class="btn bo" type="button">${T.ow}</button><button class="btn br" type="button">${T.reset}</button></div>
 <p class="st" aria-live="polite">${T.start}</p>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const tot=()=>seq.reduce((a,s)=>a+s.len,0);
 const scale=()=>Math.max(24,tot());
 const tl=$('.tl',root),trk=$('.trk',root);
 const split=(arr,t)=>{const a=[],b=[];let x=0;for(const s of arr){if(x+s.len<=t)a.push({...s});else if(x>=t)b.push({...s});else{a.push({...s,len:t-x});b.push({...s,len:x+s.len-t})}x+=s.len}return[a,b]};
 const merge=arr=>arr.filter(s=>s.len>0).reduce((o,s)=>{const l=o[o.length-1];if(l&&l.n===s.n&&l.cont&&s.cont)l.len+=s.len;else o.push({...s});return o},[]);
 const at=t=>{let x=0;for(const s of seq){if(t<x+s.len)return s.n;x+=s.len}return null};
 const draw=()=>{const sc=scale();let x=0;
  trk.innerHTML=seq.map(s=>{const h=`<div class="seg2" style="left:${x/sc*100}%;width:${s.len/sc*100}%;background:${COL[s.n]}">${s.n}</div>`;x+=s.len;return h}).join('');
  $('.ruler',root).innerHTML=Array.from({length:Math.floor(sc/4)+1},(_,i)=>`<i style="left:${i*4/sc*100}%">${i*4}s</i>`).join('');
  $('.ph',root).style.left=`calc(8px + (100% - 16px) * ${ph/sc})`;
  const n=at(ph),p=$('.pscr',root);p.style.background=n?COL[n]:'#000';p.innerHTML=`${n||''}<small>${n?T.clip+' '+n:T.empty} · ${ph}s</small>`;
  $('.iv',root).textContent=inP+'s';$('.ov',root).textContent=outP+'s';$('.si',root).textContent=`${outP-inP}s`;
  const b=$('.srcbar b',root);b.style.left=inP*10+'%';b.style.width=Math.max(0,outP-inP)*10+'%';
  $('.bi',root).disabled=$('.bo',root).disabled=outP<=inP;};
 const setPh=e=>{const r=trk.getBoundingClientRect();ph=Math.max(0,Math.min(tot(),Math.round((e.clientX-r.left)/r.width*scale())));draw()};
 let dr=false;tl.addEventListener('pointerdown',e=>{dr=true;tl.setPointerCapture(e.pointerId);setPh(e)});tl.addEventListener('pointermove',e=>{if(dr)setPh(e)});tl.addEventListener('pointerup',()=>{dr=false});
 const insert=()=>{const len=outP-inP;if(len<=0)return;const[a,b]=split(seq,ph);seq=merge([...a,{n:'C',len},...b]);ph+=len;$('.st',root).textContent=T.did.i(len,tot());draw()};
 const over=()=>{const len=outP-inP;if(len<=0)return;const[a]=split(seq,ph);const[,b]=split(seq,ph+len);seq=merge([...a,{n:'C',len},...b]);ph+=len;$('.st',root).textContent=T.did.o(len,tot());draw()};
 $('.bi',root).onclick=insert;$('.bo',root).onclick=over;
 $('.br',root).onclick=()=>{seq=init();ph=6;$('.st',root).textContent=T.start;draw()};
 $('.ri',root).oninput=e=>{inP=+e.target.value;if(inP>=outP){outP=Math.min(10,inP+1);$('.ro',root).value=outP}draw()};
 $('.ro',root).oninput=e=>{outP=+e.target.value;if(outP<=inP){inP=Math.max(0,outP-1);$('.ri',root).value=inP}draw()};
 root.addEventListener('keydown',e=>{if(e.target.matches('input[type=text]'))return;if(e.key===','){e.preventDefault();insert()}else if(e.key==='.'){e.preventDefault();over()}});
 draw();
};

D['effects-keyframes']=(root,L)=>{
 const T={th:{h:'ลอง keyframe: ตัวหนังสือเลื่อนเข้าและค่อย ๆ ชัด ใน 2 วินาที',word:'สวัสดี',play:'เล่น',it:'Interpolation',lin:'Linear',ease:'Ease In / Out',hold:'Hold',pos:'Position',op:'Opacity',t:'เวลา',g:'กราฟตำแหน่งตามเวลา (keyframe ที่ 0 และ 2 วินาที)',cap:'เดโมจำลองหลักการ เพชรสีขาวคือ keyframe เส้นสีส้มคือ playhead'},
  en:{h:'Try keyframes: a title slides in and fades up over 2 seconds',word:'Hello',play:'Play',it:'Interpolation',lin:'Linear',ease:'Ease In / Out',hold:'Hold',pos:'Position',op:'Opacity',t:'Time',g:'Position over time (keyframes at 0 and 2 seconds)',cap:'A simulation of the idea. White diamonds are keyframes; the orange line is the playhead.'}}[L];
 const D2=2,END=3;let t=0,mode='lin',raf=0;
 const ease={lin:p=>p,ease:p=>p*p*(3-2*p),hold:p=>p<1?0:1};
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3>
 <div class="two"><div class="kfmon"><svg viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><use href="#scene"/></svg><div class="ttl">${T.word}</div></div>
 <div class="col"><p class="mlabel">${T.it}</p><div class="chips" role="group"><button class="chip" type="button" data-m="lin">${T.lin}</button><button class="chip" type="button" data-m="ease">${T.ease}</button><button class="chip" type="button" data-m="hold">${T.hold}</button></div>
 <dl class="kv"><dt>${T.pos} X</dt><dd><code class="px"></code></dd><dt>${T.op}</dt><dd><code class="po"></code></dd><dt>${T.t}</dt><dd><code class="pt"></code></dd></dl>
 <button class="btn pri play" type="button">▶ ${T.play}</button></div></div>
 <div class="kftl"><span>${T.pos}</span><div class="lane"><i style="left:0%"></i><i style="left:${D2/END*100}%"></i><b class="p"></b></div><span>${T.op}</span><div class="lane"><i style="left:0%"></i><i style="left:${D2/END*100}%"></i><b class="p"></b></div><span>${T.t}</span><input type="range" class="scrub" min="0" max="${END}" step="0.01" value="0" aria-label="${T.t}"></div>
 <div class="graph"><svg viewBox="0 0 300 110" preserveAspectRatio="none" role="img" aria-label="${T.g}"></svg></div>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const ttl=$('.ttl',root),g=$('.graph svg',root);
 const val=tt=>ease[mode](Math.min(1,tt/D2));
 const draw=()=>{const p=val(t);ttl.style.left=(8+p*48)+'%';ttl.style.opacity=(0.05+p*0.95).toFixed(2);
  $('.px',root).textContent=Math.round(154+p*922)+' px';$('.po',root).textContent=Math.round(p*100)+'%';$('.pt',root).textContent=t.toFixed(2)+' s';
  $$('.lane .p',root).forEach(b=>b.style.left=t/END*100+'%');$('.scrub',root).value=t;
  let d='';for(let i=0;i<=60;i++){const tt=i/60*END,v=val(tt);d+=(i?'L':'M')+(tt/END*300).toFixed(1)+' '+(100-v*90).toFixed(1)}
  g.innerHTML=`<path d="${d}" fill="none" stroke="#ff7a45" stroke-width="2.5" vector-effect="non-scaling-stroke"/><line x1="${t/END*300}" x2="${t/END*300}" y1="0" y2="110" stroke="#fff" stroke-opacity=".5" vector-effect="non-scaling-stroke"/><line x1="${D2/END*300}" x2="${D2/END*300}" y1="0" y2="110" stroke="#fff" stroke-opacity=".18" stroke-dasharray="3 3" vector-effect="non-scaling-stroke"/>`;
  $$('.chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.m===mode)));};
 $('.chips',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){mode=b.dataset.m;draw()}});
 $('.scrub',root).addEventListener('input',e=>{cancelAnimationFrame(raf);t=+e.target.value;draw()});
 $('.play',root).addEventListener('click',()=>{cancelAnimationFrame(raf);if(reduce){t=END;draw();return}const t0=performance.now();t=0;
  const step=now=>{if(!root.isConnected)return;t=Math.min(END,(now-t0)/1000);draw();if(t<END)raf=requestAnimationFrame(step)};raf=requestAnimationFrame(step)});
 draw();
};

D.mogrt=(root,L)=>{
 const T={th:{h:'ลองแก้ template: ช่องที่แก้ได้คือช่องที่คนออกแบบเปิดไว้ให้',name:'ชื่อ',role:'ตำแหน่ง / คำอธิบาย',color:'สีหลัก',acc:'แถบสีด้านซ้าย',play:'เล่นแอนิเมชันเข้า',panel:'Properties (ของ template นี้)',lock:'ฟอนต์ ระยะห่าง และจังหวะแอนิเมชันถูกล็อกไว้โดยผู้ออกแบบ',n0:'คุณสมใจ ใจดี',r0:'ช่างภาพงานแต่ง',file:'lower-third-basic.mogrt',cap:'เดโมจำลองหลักการ ใน Premiere จริงจะแก้ค่าเหล่านี้ใน Properties panel'},
  en:{h:'Try editing a template: you can change only what the designer exposed',name:'Name',role:'Title / description',color:'Main colour',acc:'Left accent bar',play:'Play the intro animation',panel:'Properties (for this template)',lock:'Font, spacing and animation timing are locked by the designer',n0:'Somjai Jaidee',r0:'Wedding photographer',file:'lower-third-basic.mogrt',cap:'A simulation of the idea. In Premiere you edit these values in the Properties panel.'}}[L];
 const cols=['#ff5a1f','#1f6fff','#14966b'];
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="two"><div><div class="mon"><svg viewBox="0 0 640 360" aria-hidden="true"><use href="#scene"/></svg><div class="lt in"><span class="bar"></span><span class="sub"></span></div></div><p class="mlabel" style="margin-top:6px"><code>${T.file}</code></p></div>
 <div class="col"><p class="mlabel">${T.panel}</p><label class="f">${T.name}<input type="text" class="tn" maxlength="40"></label><label class="f">${T.role}<input type="text" class="tr" maxlength="40"></label>
 <div class="f" style="font-size:14px;color:var(--stmute)">${T.color}<div class="sw" role="group" aria-label="${T.color}">${cols.map((c,i)=>`<button type="button" data-c="${c}" aria-pressed="${i===0}" aria-label="${c}" style="background:${c}"></button>`).join('')}</div></div>
 <label class="chk"><input type="checkbox" class="ta" checked> ${T.acc}</label><button class="btn pri pl" type="button">${T.play}</button><p class="lock">${T.lock}</p></div></div>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const lt=$('.lt',root);$('.tn',root).value=T.n0;$('.tr',root).value=T.r0;
 const draw=()=>{$('.bar',lt).textContent=$('.tn',root).value||' ';$('.sub',lt).textContent=$('.tr',root).value||' ';lt.classList.toggle('noacc',!$('.ta',root).checked)};
 $('.tn',root).oninput=draw;$('.tr',root).oninput=draw;$('.ta',root).onchange=draw;
 $('.sw',root).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;lt.style.setProperty('--ltc',b.dataset.c);$$('.sw button',root).forEach(x=>x.setAttribute('aria-pressed',String(x===b)))});
 $('.pl',root).onclick=()=>{lt.classList.remove('in');void lt.offsetWidth;lt.classList.add('in')};
 draw();
};

D.markers=(root,L)=>{
 const T={th:{h:'ลองปัก marker: วาง playhead แล้วกด M',type:'ประเภท',name:'ชื่อ marker',add:'Add Marker ( M )',next:'ถัดไป',prev:'ก่อนหน้า',list:'Markers panel (จำลอง)',yt:'ข้อความ chapter สำหรับคำอธิบาย YouTube (ดึงจาก Chapter marker)',copy:'คัดลอก',copied:'คัดลอกแล้ว',nocopy:'คัดลอกไม่ได้ในหน้านี้ ให้เลือกข้อความเอง',del:'ลบ',def:'marker ใหม่',
   types:{comment:'Comment',chapter:'Chapter',segment:'Segmentation'},init:[[0,'chapter','เปิดเรื่อง'],[42,'comment','ตัดเสียงไอออก'],[75,'chapter','วิธีทำ'],[105,'segment','ช่วงโฆษณา']],cap:'เดโมจำลองหลักการ สีของแต่ละประเภทเป็นของเดโมนี้ ปุ่ม M ใช้ได้เมื่อโฟกัสอยู่ในกล่องนี้'},
  en:{h:'Try adding markers: place the playhead and press M',type:'Type',name:'Marker name',add:'Add Marker ( M )',next:'Next',prev:'Previous',list:'Markers panel (simulated)',yt:'Chapter text for a YouTube description (from Chapter markers)',copy:'Copy',copied:'Copied',nocopy:'Copy is blocked here; select the text instead',del:'Delete',def:'New marker',
   types:{comment:'Comment',chapter:'Chapter',segment:'Segmentation'},init:[[0,'chapter','Intro'],[42,'comment','Cut the cough'],[75,'chapter','How it works'],[105,'segment','Ad break']],cap:'A simulation of the idea. Type colours belong to this demo. The M key works while focus is inside this box.'}}[L];
 const C={comment:'#3fb56b',chapter:'#e0473a',segment:'#9b6cf0'};const END=120;
 let mk=T.init.map(([t,type,name])=>({t,type,name})),ph=30,type='comment';
 root.className='stage';root.tabIndex=-1;
 root.innerHTML=`<h3>${T.h}</h3><div class="mk"><div class="ruler"></div><div class="lanebox"><div class="clipbar"></div></div><div class="ph"></div><div class="mks" style="position:absolute;left:12px;right:12px;top:26px;height:20px"></div></div>
 <div class="two"><div class="col"><p class="mlabel">${T.list}</p><ul class="mlist"></ul><p class="mlabel">${T.yt}</p><pre class="yt"></pre><div class="chips"><button class="btn cp" type="button">${T.copy}</button></div></div>
 <div class="col"><p class="mlabel">${T.type}</p><div class="chips ty" role="group">${Object.keys(C).map(k=>`<button class="chip" type="button" data-t="${k}">${T.types[k]}</button>`).join('')}</div>
 <label class="f">${T.name}<input type="text" class="nm" maxlength="30"></label><button class="btn pri ad" type="button">${T.add}</button><div class="btns"><button class="btn pv" type="button">${T.prev}</button><button class="btn nx" type="button">${T.next}</button></div></div></div>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const tc=s=>`${String(Math.floor(s/60)).padStart(2,'0')}:${String(Math.round(s%60)).padStart(2,'0')}`;
 const bar=$('.mk',root);
 const draw=()=>{mk.sort((a,b)=>a.t-b.t);
  $('.ruler',root).innerHTML=[0,30,60,90,120].map(s=>`<i style="left:${s/END*100}%">${tc(s)}</i>`).join('');
  $('.mks',root).innerHTML=mk.map((m,i)=>`<span class="m" data-i="${i}" title="${esc(m.name)}" style="left:${m.t/END*100}%;background:${C[m.type]}"></span>`).join('');
  $('.ph',root).style.left=`calc(12px + (100% - 24px) * ${ph/END})`;
  $('.mlist',root).innerHTML=mk.map((m,i)=>`<li class="${m.t===ph?'cur':''}"><span class="dot" style="background:${C[m.type]}"></span><code>${tc(m.t)}</code><button type="button" class="go" data-i="${i}">${esc(m.name)} · ${T.types[m.type]}</button><button type="button" class="x" data-i="${i}" aria-label="${T.del}">✕</button></li>`).join('');
  $('.yt',root).textContent=mk.filter(m=>m.type==='chapter').map(m=>`${tc(m.t)} ${m.name}`).join('\n');
  $$('.ty .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.t===type)));};
 const setPh=e=>{const r=$('.mks',root).getBoundingClientRect();ph=Math.max(0,Math.min(END,Math.round((e.clientX-r.left)/r.width*END)));draw()};
 let dr=false;bar.addEventListener('pointerdown',e=>{const m=e.target.closest('.m');if(m){ph=mk[+m.dataset.i].t;draw();return}dr=true;bar.setPointerCapture(e.pointerId);setPh(e)});
 bar.addEventListener('pointermove',e=>{if(dr)setPh(e)});bar.addEventListener('pointerup',()=>{dr=false});
 const add=()=>{const name=$('.nm',root).value.trim()||T.def;mk=mk.filter(m=>m.t!==ph);mk.push({t:ph,type,name});$('.nm',root).value='';draw()};
 const jump=d=>{const s=mk.map(m=>m.t);const n=d>0?s.find(x=>x>ph):[...s].reverse().find(x=>x<ph);if(n!==undefined){ph=n;draw()}};
 $('.ad',root).onclick=add;$('.nx',root).onclick=()=>jump(1);$('.pv',root).onclick=()=>jump(-1);
 $('.ty',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){type=b.dataset.t;draw()}});
 $('.mlist',root).addEventListener('click',e=>{const g=e.target.closest('.go'),x=e.target.closest('.x');if(g){ph=mk[+g.dataset.i].t;draw()}if(x){mk.splice(+x.dataset.i,1);draw()}});
 $('.cp',root).onclick=async e=>{const b=e.currentTarget;try{await navigator.clipboard.writeText($('.yt',root).textContent);b.textContent=T.copied}catch(_){b.textContent=T.nocopy}setTimeout(()=>{if(b.isConnected)b.textContent=T.copy},2200)};
 root.addEventListener('keydown',e=>{if(e.target.matches('input[type=text]'))return;if(e.key==='m'||e.key==='M'){e.preventDefault();e.shiftKey?jump(1):add()}});
 draw();
};

D['object-mask']=(root,L)=>{
 const T={th:{h:'ลอง Object Mask: เลือกคนในภาพ, track แล้วใส่เอฟเฟกต์',t:'เลื่อนเวลาในคลิป',pick:'① เลือกคนในภาพ',picked:'① สร้าง mask แล้ว ✓',track:'② Track mask',tracked:'② Track แล้ว ✓',fx:'③ เอฟเฟกต์ที่ผูกกับ mask',fxs:{none:'ไม่มี',blur:'Gaussian Blur',bw:'Black & White',bright:'Brightness'},inv:'Inverted (ใช้เอฟเฟกต์นอก mask)',fe:'Feather',ex:'Expansion',desel:'④ ยกเลิกการเลือก mask เพื่อดูผล',reset:'เริ่มใหม่',
   s0:'กดปุ่ม ① หรือคลิกที่ตัวคนในภาพ (เส้นประสีฟ้า) เพื่อสร้าง mask',s1:'ได้ mask แล้ว (สีแดงคือ mask ที่ถูกเลือก) ลองเลื่อนเวลาดู: mask ยังไม่วิ่งตามคนเพราะยังไม่ได้ track กด ②',s2:'Track แล้ว mask วิ่งตามคนตลอดคลิป ต่อไปเลือกเอฟเฟกต์ที่ ③ เช่น Gaussian Blur แล้วติ๊ก Inverted เพื่อเบลอพื้นหลัง',s3:'ระหว่างที่ mask ถูกเลือก Premiere จะแสดงสีแดงทับ กด ④ เพื่อยกเลิกการเลือกแล้วดูผลจริง',s4:'นี่คือผลจริง ลองเลื่อนเวลา เปลี่ยนเอฟเฟกต์ หรือปรับ Feather และ Expansion ดู คลิกที่คนอีกครั้งเพื่อเลือก mask กลับ',cap:'เดโมจำลองหลักการ ใน Premiere เครื่องมือนี้อยู่ในแถบเครื่องมือ และค่าต่าง ๆ อยู่ใน Effect Controls'},
  en:{h:'Try Object Mask: select the person, track, then add an effect',t:'Move through the clip',pick:'① Select the person',picked:'① Mask created ✓',track:'② Track mask',tracked:'② Tracked ✓',fx:'③ Effect the mask is attached to',fxs:{none:'None',blur:'Gaussian Blur',bw:'Black & White',bright:'Brightness'},inv:'Inverted (apply the effect outside the mask)',fe:'Feather',ex:'Expansion',desel:'④ Deselect the mask to see the result',reset:'Start over',
   s0:'Press ① or click the person in the picture (blue dashed outline) to create a mask',s1:'Mask created (red shows the selected mask). Move through the clip: it does not follow the person yet because it has not been tracked. Press ②.',s2:'Tracked: the mask now follows the person through the clip. Next pick an effect in ③, such as Gaussian Blur, and tick Inverted to blur the background.',s3:'While a mask is selected, Premiere shows a red overlay. Press ④ to deselect it and see the real result.',s4:'This is the real result. Move through the clip, change the effect, or adjust Feather and Expansion. Click the person again to reselect the mask.',cap:'A simulation of the idea. In Premiere the tool is in the toolbar and these values are in Effect Controls.'}}[L];
 let t=0,hasMask=false,tracked=false,maskT=0,fx='none',inv=false,fe=4,ex=4,sel=false,hover=false;
 const px=tt=>200+tt*200;
 const SHAPE='<circle cx="0" cy="130" r="25"/><path d="M-9 146 L9 146 L9 160 L16 160 Q30 162 30 176 L42 248 L34 256 L18 340 L-18 340 L-34 256 L-42 248 L-30 176 Q-30 162 -16 160 L-9 160Z"/>';
 root.className='stage om';
 root.innerHTML=`<h3>${T.h}</h3><div class="two"><div class="col"><div class="mon"><svg viewBox="0 0 640 360" role="img" aria-label="${T.h}">
 <defs><filter id="omBlur" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="7"/></filter><filter id="omBW"><feColorMatrix type="saturate" values="0"/></filter><filter id="omBr" color-interpolation-filters="sRGB"><feComponentTransfer><feFuncR type="linear" slope="1.35" intercept=".04"/><feFuncG type="linear" slope="1.35" intercept=".04"/><feFuncB type="linear" slope="1.35" intercept=".04"/></feComponentTransfer></filter><filter id="omFe" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur class="feb" stdDeviation="4"/></filter>
 <mask id="omM" maskUnits="userSpaceOnUse" x="0" y="0" width="640" height="360"><rect class="mbg" width="640" height="360" fill="black"/><g filter="url(#omFe)"><g class="mshape" fill="white" stroke="white" stroke-width="8" stroke-linejoin="round">${SHAPE}</g></g></mask></defs>
 <g class="base"><use href="#omBg"/><use class="pers" href="#omPerson"/></g>
 <g class="fxl" mask="url(#omM)"><use href="#omBg"/><use class="pers2" href="#omPerson"/></g>
 <g class="red" fill="#ff2a2a" fill-opacity=".38" stroke="#ff2a2a" stroke-width="2" style="display:none">${SHAPE}</g>
 <g class="hl" fill="none" stroke="#5fd0ff" stroke-width="3" stroke-dasharray="7 5" style="display:none">${SHAPE}</g></svg></div><p class="st" aria-live="polite">${T.s0}</p></div>
 <div class="col"><label class="rng"><span>${T.t}<code class="tv"></code></span><input type="range" class="sc" min="0" max="1" step="0.01" value="0"></label>
 <button class="btn pri pick" type="button">${T.pick}</button>
 <button class="btn trk" type="button" disabled>${T.track}</button>
 <p class="mlabel">${T.fx}</p><div class="chips fxc" role="group">${Object.keys(T.fxs).map(k=>`<button class="chip" type="button" data-f="${k}">${T.fxs[k]}</button>`).join('')}</div>
 <label class="chk"><input type="checkbox" class="inv"> ${T.inv}</label>
 <label class="rng"><span>${T.fe}<code class="fv"></code></span><input type="range" class="fe" min="0" max="14" step="1" value="4"></label>
 <label class="rng"><span>${T.ex}<code class="xv"></code></span><input type="range" class="ex" min="-6" max="16" step="1" value="4"></label>
 <button class="btn ds" type="button" disabled>${T.desel}</button>
 <button class="btn rs" type="button">${T.reset}</button></div></div>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const svg=$('svg',root),st=$('.st',root);
 const FX={none:'',blur:'url(#omBlur)',bw:'url(#omBW)',bright:'url(#omBr)'};
 const draw=()=>{const x=px(t),mx=px(tracked?t:maskT);
  $('.pers',root).setAttribute('transform',`translate(${x} 0)`);$('.pers2',root).setAttribute('transform',`translate(${x} 0)`);
  const m=$('.mshape',root);m.setAttribute('transform',`translate(${mx} 0)`);
  m.setAttribute('stroke-width',Math.abs(ex)*2);
  $('.mbg',root).setAttribute('fill',inv?'white':'black');m.setAttribute('fill',inv?'black':'white');m.setAttribute('stroke',(ex<0)!==inv?'black':'white');
  $('.feb',root).setAttribute('stdDeviation',fe);
  const fl=$('.fxl',root);fl.style.display=hasMask&&fx!=='none'?'':'none';if(FX[fx])fl.setAttribute('filter',FX[fx]);else fl.removeAttribute('filter');
  $('.red',root).style.display=hasMask&&sel?'':'none';$('.red',root).setAttribute('transform',`translate(${mx} 0)`);
  const hl=$('.hl',root);hl.style.display=!hasMask?'':'none';hl.setAttribute('transform',`translate(${x} 0)`);hl.classList.toggle('on',hover);
  $('.tv',root).textContent=(t*5).toFixed(1)+' s';$('.fv',root).textContent=fe;$('.xv',root).textContent=ex;
  const pk=$('.pick',root);pk.disabled=hasMask;pk.textContent=hasMask?T.picked:T.pick;pk.classList.toggle('pri',!hasMask);
  const tk=$('.trk',root);tk.disabled=!hasMask||tracked;tk.textContent=tracked?T.tracked:T.track;tk.classList.toggle('pri',hasMask&&!tracked);
  $('.ds',root).disabled=!sel;$('.ds',root).classList.toggle('pri',sel&&tracked&&fx!=='none');
  for(const c of ['.inv','.fe','.ex'])$(c,root).disabled=!hasMask;
  $$('.fxc .chip',root).forEach(b=>{b.setAttribute('aria-pressed',String(b.dataset.f===fx));b.disabled=!hasMask});};
 const pt=e=>{const r=svg.getBoundingClientRect();return{x:(e.clientX-r.left)/r.width*640,y:(e.clientY-r.top)/r.height*360}};
 const onP=p=>p.x>px(t)-55&&p.x<px(t)+55&&p.y>95&&p.y<350;
 const make=()=>{hasMask=true;sel=true;maskT=t;st.textContent=T.s1;draw()};
 svg.addEventListener('pointermove',e=>{const h=onP(pt(e));if(h!==hover){hover=h;draw()}});
 svg.addEventListener('pointerleave',()=>{hover=false;draw()});
 svg.addEventListener('click',e=>{if(!onP(pt(e)))return;if(!hasMask)make();else if(!sel){sel=true;st.textContent=fx!=='none'?T.s3:(tracked?T.s2:T.s1);draw()}});
 $('.pick',root).onclick=make;
 $('.sc',root).oninput=e=>{t=+e.target.value;draw()};
 $('.trk',root).onclick=()=>{tracked=true;st.textContent=T.s2;draw()};
 $('.fxc',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b&&hasMask){fx=b.dataset.f;st.textContent=sel?T.s3:T.s4;draw()}});
 $('.inv',root).onchange=e=>{inv=e.target.checked;draw()};
 $('.fe',root).oninput=e=>{fe=+e.target.value;draw()};$('.ex',root).oninput=e=>{ex=+e.target.value;draw()};
 $('.ds',root).onclick=()=>{sel=false;st.textContent=T.s4;draw()};
 $('.rs',root).onclick=()=>{t=0;hasMask=tracked=sel=inv=false;maskT=0;fx='none';fe=4;ex=4;$('.sc',root).value=0;$('.inv',root).checked=false;$('.fe',root).value=4;$('.ex',root).value=4;st.textContent=T.s0;draw()};
 draw();
};

D['presets-resolution']=(root,L)=>{
 const T={th:{h:'เทียบขนาดภาพตามสัดส่วนจริง: กดเลือกเพื่อดูรายละเอียด',land:'แนวนอน',soc:'แนวตั้งและโซเชียล',px:'จำนวนพิกเซล',ar:'อัตราส่วน',vs:'เทียบ 1080p',use:'ใช้กับ',mp:'ล้านพิกเซล',x:'เท่า',
   U:{hd:'งานเว็บเบา ๆ ขั้นต่ำที่ YouTube แนะนำสำหรับ 16:9',fhd:'มาตรฐานงานทั่วไป YouTube และโซเชียล',qhd:'YouTube ที่อยากได้ภาพคมกว่า 1080p',uhd:'ทีวี 4K และ YouTube 4K',dci:'มาตรฐาน 4K ของโรงภาพยนตร์',vt:'Shorts / Reels / TikTok',p45:'Instagram feed',sq:'โพสต์สี่เหลี่ยมจัตุรัส',fh:'วิดีโอแนวนอนทั่วไป'},cap:'กรอบทุกอันวาดด้วยมาตราส่วนเดียวกัน มุมซ้ายล่างตรงกัน'},
  en:{h:'Compare frame sizes at true scale: pick one to see the details',land:'Landscape',soc:'Vertical and social',px:'Pixels',ar:'Aspect ratio',vs:'Compared with 1080p',use:'Use it for',mp:'megapixels',x:'×',
   U:{hd:'Light web video; YouTube\'s recommended minimum for 16:9',fhd:'The everyday standard for YouTube and social',qhd:'YouTube when you want sharper than 1080p',uhd:'4K TVs and YouTube 4K',dci:'The cinema 4K standard',vt:'Shorts / Reels / TikTok',p45:'Instagram feed',sq:'Square posts',fh:'Ordinary landscape video'},cap:'Every frame is drawn at the same scale, aligned at the bottom-left corner.'}}[L];
 const SETS={land:[['hd','HD 720p',1280,720,'16:9'],['fhd','Full HD 1080p',1920,1080,'16:9'],['qhd','QHD 1440p',2560,1440,'16:9'],['uhd','UHD 4K',3840,2160,'16:9'],['dci','DCI 4K',4096,2160,'≈1.9:1']],
  soc:[['vt','9:16',1080,1920,'9:16'],['p45','4:5',1080,1350,'4:5'],['sq','1:1',1080,1080,'1:1'],['fh','16:9',1920,1080,'16:9']]};
 let set='land',k='fhd';
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="seg" role="group" style="max-width:420px"><button type="button" data-s="land">${T.land}</button><button type="button" data-s="soc">${T.soc}</button></div>
 <div class="reslist" role="group"></div><div class="two"><div class="resfig"><svg aria-hidden="true"></svg></div><dl class="kv stk"><dt>${T.px}</dt><dd class="dp"></dd><dt>${T.ar}</dt><dd class="da"></dd><dt>${T.vs}</dt><dd class="dv"></dd><dt>${T.use}</dt><dd class="du"></dd></dl></div>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const svg=$('svg',root);
 const draw=()=>{const S=SETS[set];if(!S.some(s=>s[0]===k))k=S[set==='land'?1:0][0];
  const W=Math.max(...S.map(s=>s[2])),H=Math.max(...S.map(s=>s[3])),pad=W*0.02;
  svg.setAttribute('viewBox',`${-pad} ${-pad} ${W+pad*2} ${H+pad*2}`);
  const sorted=[...S].sort((a,b)=>b[2]*b[3]-a[2]*a[3]);
  svg.innerHTML=sorted.map(s=>{const on=s[0]===k;return`<rect x="0" y="${H-s[3]}" width="${s[2]}" height="${s[3]}" fill="${on?'rgba(255,122,69,.28)':'rgba(255,255,255,.04)'}" stroke="${on?'#ff7a45':'#8a8a92'}" stroke-width="${on?3:1.5}" vector-effect="non-scaling-stroke"/>`}).join('');
  $('.reslist',root).innerHTML=S.map(s=>`<button type="button" data-k="${s[0]}" aria-pressed="${s[0]===k}"><span>${s[1]}</span><code>${s[2]} × ${s[3]}</code></button>`).join('');
  const s=S.find(s=>s[0]===k),p=s[2]*s[3];
  $('.dp',root).textContent=`${p.toLocaleString(L==='th'?'th-TH':'en-US')} (${(p/1e6).toFixed(1)} ${T.mp})`;$('.da',root).textContent=s[4];
  $('.dv',root).textContent=`${(p/(1920*1080)).toFixed(2)} ${T.x}`;$('.du',root).textContent=T.U[s[0]];
  $$('.seg button',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.s===set)));};
 $('.seg',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){set=b.dataset.s;draw()}});
 $('.reslist',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){k=b.dataset.k;draw()}});
 draw();
};

/* ---------- shell ---------- */
const art=$('article'),side=$('.side'),toc=$('.toc'),q=$('#q'),navd=$('#navd');
let curKey='';
const renderNav=(lang,id)=>{const u=UI[lang];
 side.setAttribute('aria-label',u.navlabel);
 side.innerHTML=NAV.map(g=>`<p class="grp">${esc(g.g[lang])}</p><ul>${g.items.map(i=>i.id?`<li><a href="#${lang}-${i.id}"${i.id===id?' aria-current="page"':''}>${esc(i[lang])}</a></li>`:`<li><span>${esc(i[lang])}</span></li>`).join('')}</ul>`).join('')+`<p class="hint none" hidden>${u.none}</p>`;
 $('.brand b').textContent=u.brand;$('.brand small').textContent=u.tag;q.placeholder=u.search;$('#ql').textContent=u.search;$('summary',navd).textContent=u.menu;
 $$('.lang a').forEach(a=>{a.href=`#${a.dataset.l}-${id}`;if(a.dataset.l===lang)a.setAttribute('aria-current','true');else a.removeAttribute('aria-current')});
 q.value='';};
const route=()=>{
 const m=/^(th|en)-([a-z-]+)$/.exec(location.hash.slice(1));
 const lang=m?m[1]:'th',id=m&&PAGES.includes(m[2])?m[2]:PAGES[0],key=lang+'-'+id;
 if(key===curKey)return;
 const tpl=document.getElementById('t-'+key);if(!tpl)return;
 curKey=key;document.documentElement.lang=lang;
 art.replaceChildren(tpl.content.cloneNode(true));
 const u=UI[lang],i=PAGES.indexOf(id),P=ORDER[i-1],N=ORDER[i+1];
 const hs=$$('h2[id]',art);
 const links=hs.map(h=>`<a href="#${h.id}">${esc(h.textContent)}</a>`).join('');
 toc.innerHTML=`<p>${u.onpage}</p>${links}`;
 const op=document.createElement('nav');op.className='onpage';op.setAttribute('aria-label',u.onpage);op.innerHTML=links;
 const anchor=$('.demo',art)||$('h2',art);anchor.before(op);
 const pn=document.createElement('div');pn.className='pn';
 pn.innerHTML=(P?`<a href="#${lang}-${P.id}">${u.prev}<b>${esc(P[lang])}</b></a>`:'<span></span>')+(N?`<a href="#${lang}-${N.id}">${u.next}<b>${esc(N[lang])}</b></a>`:'<span></span>');
 const ft=document.createElement('footer');ft.innerHTML=u.foot.map(t=>`<p>${esc(t)}</p>`).join('');
 art.append(pn,ft);
 document.title=($('h1',art)?.textContent||'')+' · '+u.brand;
 renderNav(lang,id);
 $$('.demo[data-demo]',art).forEach(el=>{try{D[el.dataset.demo]?.(el,lang)}catch(err){console.error(err)}});
 if(!wide.matches)navd.open=false;
 window.scrollTo(0,0);
};
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const h=a.getAttribute('href').slice(1);if(/^(th|en)-/.test(h))return;const t=document.getElementById(h);if(t){e.preventDefault();t.scrollIntoView({behavior:reduce?'auto':'smooth',block:'start'})}});
q.addEventListener('input',()=>{const s=q.value.trim().toLowerCase();let n=0;
 $$('.side li').forEach(li=>{const ok=!s||li.textContent.toLowerCase().includes(s);li.hidden=!ok;if(ok)n++});
 $$('.side .grp').forEach(g=>{g.hidden=![...g.nextElementSibling.children].some(li=>!li.hidden)});
 $('.side .none').hidden=n>0;if(s)navd.open=true;});
const wide=matchMedia('(min-width:900px)');
const syncNav=()=>{navd.open=wide.matches};syncNav();wide.addEventListener('change',syncNav);
addEventListener('hashchange',route);
route();
}
