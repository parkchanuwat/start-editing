D['first-video']=(root,L)=>{
 const T={th:{h:'เส้นทางทำคลิปแรก: กดแต่ละสถานีเพื่อดูว่าต้องทำอะไร แล้วติ๊กเมื่อเสร็จ',done:'ทำขั้นนี้แล้ว',read:'อ่านวิธีละเอียด',prog:(a,b)=>`ทำแล้ว ${a} จาก ${b} ขั้น`,reset:'เริ่มนับใหม่',cap:'ความคืบหน้าเก็บไว้ในเบราว์เซอร์นี้เท่านั้น',
   S:[['project-media','เตรียมโฟลเดอร์และ import','สร้างโฟลเดอร์โปรเจกต์ ใส่ฟุตเทจและเพลงไว้ในโฟลเดอร์ย่อย แล้ว import เข้า Project panel'],
      ['sequence','สร้าง sequence','ลากคลิปหลักไปที่ไอคอน New Item หรือสร้างจากเมนูให้ตรงกับปลายทาง เช่น แนวตั้ง 1080×1920'],
      ['monitors','คัดฟุตเทจ','เปิดคลิปใน Source Monitor ตั้ง In/Out เลือกช่วงที่ดีที่สุด แล้ว Insert ลง timeline'],
      ['timeline','ตัดต่อบน timeline','เรียงคลิป ตัดส่วนเกินด้วย Razor ปิดช่องว่างด้วย Ripple Delete ปักหมุดจังหวะเพลงด้วย marker'],
      ['mogrt','ใส่ title และกราฟิก','ใช้ template จาก Graphics Templates ใส่ชื่อเรื่องหรือแถบชื่อคน แก้ข้อความใน Properties'],
      ['color-mode','แต่งสี','เข้า Color Mode กด Auto Color แล้วปรับ Contrast, Exposure และ Temperature ทีละคลิป'],
      ['captions','ใส่ซับ','ถอดเสียงด้วย Speech to Text สร้าง captions แล้วตรวจคำผิดและความยาวบรรทัด'],
      ['presets-resolution','Export','เปิดแท็บ Export เลือก H.264 กับ Match Source แล้วเช็กขนาดภาพกับ frame rate']]},
  en:{h:'Your first-video route: open each stop to see what to do, then tick it off',done:'I did this step',read:'Read the full how-to',prog:(a,b)=>`${a} of ${b} steps done`,reset:'Reset progress',cap:'Progress is kept in this browser only.',
   S:[['project-media','Set up folders and import','Make a project folder, put footage and music in subfolders, then import them into the Project panel.'],
      ['sequence','Create a sequence','Drag your main clip onto the New Item icon, or make one from the menu to match the destination, such as vertical 1080×1920.'],
      ['monitors','Pick your takes','Open clips in the Source Monitor, set In/Out on the best parts, then Insert them into the timeline.'],
      ['timeline','Edit in the timeline','Arrange clips, trim with the Razor, close gaps with Ripple Delete, and mark the music\'s beats with markers.'],
      ['mogrt','Add titles and graphics','Use a template from Graphics Templates for a title or name strap, and edit the text in Properties.'],
      ['color-mode','Grade the colour','Open Color Mode, press Auto Color, then adjust Contrast, Exposure and Temperature clip by clip.'],
      ['captions','Add captions','Transcribe with Speech to Text, create captions, then check spelling and line length.'],
      ['presets-resolution','Export','Open the Export tab, choose H.264 and Match Source, and check frame size and frame rate.']]}}[L];
 const KEY='first-video-done';let done=[];try{done=JSON.parse(localStorage.getItem(KEY)||'[]')}catch(_){done=[]}
 let cur=0;
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><ol class="route">${T.S.map((s,i)=>`<li><button type="button" class="stop" data-i="${i}"><b>${i+1}</b><span>${s[1]}</span></button></li>`).join('')}</ol>
 <div class="two"><div class="card"><h4 class="ct"></h4><p class="cd"></p><a class="go btn pri" href="#"></a></div>
 <div class="col"><label class="chk"><input type="checkbox" class="dn"> ${T.done}</label><div class="bar"><b></b></div><p class="pg mlabel"></p><button type="button" class="btn rs">${T.reset}</button></div></div>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const save=()=>{try{localStorage.setItem(KEY,JSON.stringify(done))}catch(_){}};
 const draw=()=>{const s=T.S[cur];$('.ct',root).textContent=`${cur+1}. ${s[1]}`;$('.cd',root).textContent=s[2];const a=$('.go',root);a.href=`#${L}-${s[0]}`;a.textContent=T.read+' →';
  $('.dn',root).checked=done.includes(cur);
  $$('.stop',root).forEach(b=>{const i=+b.dataset.i;b.classList.toggle('ok',done.includes(i));b.setAttribute('aria-pressed',String(i===cur))});
  $('.bar b',root).style.width=done.length/T.S.length*100+'%';$('.pg',root).textContent=T.prog(done.length,T.S.length);};
 $('.route',root).addEventListener('click',e=>{const b=e.target.closest('.stop');if(b){cur=+b.dataset.i;draw()}});
 $('.dn',root).onchange=e=>{done=done.filter(x=>x!==cur);if(e.target.checked){done.push(cur);if(cur<T.S.length-1)setTimeout(()=>{cur++;draw()},350)}save();draw()};
 $('.rs',root).onclick=()=>{done=[];save();cur=0;draw()};
 draw();
};

D['project-media']=(root,L)=>{
 const T={th:{h:'ลองทำให้ไฟล์หาย แล้วดูว่า Premiere ตามเจอไหม',disk:'ไฟล์บนดิสก์',proj:'Project panel',prg:'Program Monitor',off:'Media Offline',
   act:{mv:'ย้ายโฟลเดอร์ Footage ไปไดรฟ์อื่น',rn:'เปลี่ยนชื่อไฟล์ A002.mp4',all:'ย้ายทั้งโฟลเดอร์โปรเจกต์',link:'Link Media',reset:'เริ่มใหม่'},
   msg:{start:'ตอนนี้ทุกไฟล์อยู่ในโฟลเดอร์โปรเจกต์ คลิปทั้งหมด online',mv:'ฟุตเทจออกไปอยู่นอกโฟลเดอร์โปรเจกต์ Premiere ค้นในโฟลเดอร์โปรเจกต์และโฟลเดอร์แม่แล้วไม่เจอ คลิปจึง offline และหน้าต่าง Link Media จะเด้งขึ้น',rn:'ชื่อไฟล์เปลี่ยน Premiere จับคู่ไม่ได้ต้อง relink เอง คลิปอื่นยังปกติ',all:'ย้ายทั้งโฟลเดอร์โดยโครงสร้างข้างในเหมือนเดิม Premiere ค้นจากที่อยู่ของไฟล์โปรเจกต์แล้วเจอเอง คลิปยัง online',link:'ใช้ Link Media ชี้ไปที่ไฟล์ใหม่ คลิปกลับมา online'},
   moved:'(ย้ายไปแล้ว)',ext:'ไดรฟ์ภายนอก',cap:'เดโมจำลองหลักการค้นหาไฟล์ตามคู่มือ Adobe ไม่ใช่หน้าจอจริงของ Premiere'},
  en:{h:'Break the links on purpose and see whether Premiere finds the files',disk:'Files on disk',proj:'Project panel',prg:'Program Monitor',off:'Media Offline',
   act:{mv:'Move the Footage folder to another drive',rn:'Rename A002.mp4',all:'Move the whole project folder',link:'Link Media',reset:'Start over'},
   msg:{start:'Everything is inside the project folder, so all clips are online.',mv:'The footage is now outside the project folder. Premiere searched the project folder and its parent and found nothing, so the clips go offline and the Link Media dialog opens.',rn:'The file name changed, so Premiere can\'t match it; you have to relink it yourself. Other clips are fine.',all:'The whole folder moved with its structure intact. Premiere searches from the project file\'s location and finds everything; the clips stay online.',link:'Link Media pointed Premiere at the new files, so the clips are back online.'},
   moved:'(moved)',ext:'External drive',cap:'A simulation of the search logic described by Adobe. It is not the Premiere interface.'}}[L];
 let st={out:false,ren:false,allMoved:false,linked:false},msg=T.msg.start;
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="pm3"><div><p class="mlabel">${T.disk}</p><pre class="tree"></pre></div><div><p class="mlabel">${T.proj}</p><ul class="plist"></ul></div><div><p class="mlabel">${T.prg}</p><div class="mon pmon"><svg viewBox="0 0 640 360" aria-hidden="true"><use href="#scene"/></svg><div class="offl" hidden>${T.off}</div></div></div></div>
 <div class="chips">${Object.keys(T.act).map(k=>`<button type="button" class="btn${k==='link'?' pri':''}" data-a="${k}">${T.act[k]}</button>`).join('')}</div><p class="st" aria-live="polite"></p>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const offA=()=>st.out&&!st.linked, offB=()=>(st.out||st.ren)&&!st.linked;
 const draw=()=>{const root0=st.allMoved?'D:/Archive/MyVlog/':'C:/Projects/MyVlog/';const nm=st.ren?'A002_final.mp4':'A002.mp4';
  const fold=st.out?'':`  Footage/\n    A001.mp4\n    ${nm}\n`;
  $('.tree',root).textContent=`${root0}\n  MyVlog.prproj\n${fold}  Music/\n    song.wav\n`+(st.out?`\n${T.ext} E:/\n  Footage/\n    A001.mp4\n    ${nm}`:'');
  const items=[['A001.mp4',offA()],['A002.mp4',offB()],['song.wav',false]];
  $('.plist',root).innerHTML=items.map(([n,o])=>`<li class="${o?'off':''}"><span class="dot"></span>${n}<em>${o?'Offline':'Online'}</em></li>`).join('');
  $('.offl',root).hidden=!offA();$('.st',root).textContent=msg;};
 $('.chips',root).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const a=b.dataset.a;
  if(a==='reset'){st={out:false,ren:false,allMoved:false,linked:false};msg=T.msg.start}
  else if(a==='mv'){st.out=true;st.linked=false;msg=T.msg.mv}
  else if(a==='rn'){st.ren=true;st.linked=false;msg=T.msg.rn}
  else if(a==='all'){st.allMoved=true;msg=(st.out||st.ren)&&!st.linked?msg:T.msg.all}
  else if(a==='link'){if(st.out||st.ren){st.linked=true;msg=T.msg.link}}
  draw()});
 draw();
};

D.timeline=(root,L)=>{
 const T={th:{h:'ลองเครื่องมือหลัก: ตัด ลบ และ ripple',tools:{sel:'Selection ( V )',raz:'Razor ( C )'},del:'Delete',rip:'Ripple Delete',link:'Link ภาพกับเสียง',undo:'ย้อนกลับ',
   v:'V1 ภาพ',a:'A1 เสียง',hint:{sel:'คลิกเลือกคลิป หรือคลิกช่องว่างเพื่อเลือกช่องว่าง',raz:'คลิกบนคลิปตรงจุดที่จะตัด'},
   m:{cut:t=>`ตัดคลิปที่ ${t}s`,del:'Delete: ลบแล้วเหลือช่องว่าง คลิปอื่นไม่ขยับ',rip:'Ripple Delete: ลบแล้วเลื่อนคลิปถัดไปมาปิดช่องว่าง',gap:'เลือกช่องว่างแล้ว กด Ripple Delete เพื่อปิด',nosel:'ยังไม่ได้เลือกอะไร',block:'ทำ Ripple Delete ไม่ได้: อีก track ยังมีคลิปอยู่ในช่วงเวลาเดียวกัน ถ้าเลื่อนภาพกับเสียงจะไม่ตรงกัน',unl:'ยกเลิก link แล้ว คลิกเลือกได้ทีละ track',lnk:'link แล้ว ภาพกับเสียงถูกเลือกและตัดไปด้วยกัน',sync:'ภาพกับเสียงของคลิปเดียวกันไม่ตรงเวลากันแล้ว'},cap:'เดโมจำลองหลักการ ใน Premiere ผลของ Ripple Delete ขึ้นกับ Sync Lock และ track targeting ด้วย'},
  en:{h:'Try the core tools: cut, delete and ripple',tools:{sel:'Selection ( V )',raz:'Razor ( C )'},del:'Delete',rip:'Ripple Delete',link:'Link video and audio',undo:'Undo',
   v:'V1 video',a:'A1 audio',hint:{sel:'Click a clip to select it, or click empty space to select a gap',raz:'Click on a clip where you want to cut'},
   m:{cut:t=>`Cut the clip at ${t}s`,del:'Delete: removed, leaving a gap. Nothing else moved.',rip:'Ripple Delete: removed, and the later clips slid left to close the gap.',gap:'Gap selected. Press Ripple Delete to close it.',nosel:'Nothing is selected.',block:'Ripple Delete is blocked: the other track still has a clip in that time range, and shifting would knock picture and sound out of sync.',unl:'Unlinked. You can now select one track at a time.',lnk:'Linked. Video and audio are selected and cut together.',sync:'This clip\'s picture and sound are no longer lined up.'},cap:'A simulation of the idea. In Premiere, Ripple Delete also depends on Sync Lock and track targeting.'}}[L];
 const COL={A:'#3f6fb5',B:'#b5653f',C:'#4f9a46'};
 const init=()=>({V:[{n:'A',s:0,l:5,o:0},{n:'B',s:5,l:6,o:0},{n:'C',s:11,l:5,o:0}],A:[{n:'A',s:0,l:5,o:0},{n:'B',s:5,l:6,o:0},{n:'C',s:11,l:5,o:0}]});
 let tr=init(),tool='sel',linked=true,sel=null,hist=[],msg=T.hint.sel;const W=24;
 root.className='stage';root.tabIndex=-1;
 root.innerHTML=`<h3>${T.h}</h3><div class="chips tlt">${Object.keys(T.tools).map(k=>`<button type="button" class="chip" data-t="${k}">${T.tools[k]}</button>`).join('')}<label class="chk" style="margin-left:6px"><input type="checkbox" class="lk" checked> ${T.link}</label></div>
 <div class="tl2"><div class="ruler"></div><div class="row"><span>${T.v}</span><div class="lane2" data-k="V"></div></div><div class="row"><span>${T.a}</span><div class="lane2" data-k="A"></div></div></div>
 <div class="chips"><button type="button" class="btn bd">${T.del}</button><button type="button" class="btn pri br">${T.rip}</button><button type="button" class="btn bu">${T.undo}</button></div><p class="st" aria-live="polite"></p>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const clone=o=>JSON.parse(JSON.stringify(o));
 const push=()=>{hist.push(clone(tr));if(hist.length>30)hist.shift()};
 const other=k=>k==='V'?'A':'V';
 const draw=()=>{
  $('.ruler',root).innerHTML=Array.from({length:W/4+1},(_,i)=>`<i style="left:${i*4/W*100}%">${i*4}s</i>`).join('');
  for(const k of['V','A']){const lane=$(`.lane2[data-k=${k}]`,root);
   let h=tr[k].map((c,i)=>{const on=sel&&sel.type==='clip'&&sel.items.some(x=>x.k===k&&x.i===i);const off=k==='A'&&c.o?` <small>${c.o>0?'+':''}${c.o}s</small>`:'';return`<div class="cl${on?' on':''}" data-k="${k}" data-i="${i}" style="left:${c.s/W*100}%;width:${c.l/W*100}%;background:${COL[c.n]}">${c.n}${off}</div>`}).join('');
   if(sel&&sel.type==='gap'&&sel.k===k)h+=`<div class="gapsel" style="left:${sel.s/W*100}%;width:${(sel.e-sel.s)/W*100}%"></div>`;
   lane.innerHTML=h;}
  $$('.tlt .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.t===tool)));
  $('.st',root).textContent=msg;$('.bu',root).disabled=!hist.length;root.querySelector('.tl2').dataset.tool=tool;};
 const pos=(e,lane)=>{const r=lane.getBoundingClientRect();return Math.round((e.clientX-r.left)/r.width*W*2)/2};
 const pairOf=(k,i)=>{const c=tr[k][i];const j=tr[other(k)].findIndex(x=>x.n===c.n&&Math.abs(x.s-c.s)<0.01&&Math.abs(x.l-c.l)<0.01);return j};
 root.querySelector('.tl2').addEventListener('click',e=>{const lane=e.target.closest('.lane2');if(!lane)return;const k=lane.dataset.k;const t=pos(e,lane);const cl=e.target.closest('.cl');
  if(tool==='raz'){if(!cl)return;const i=+cl.dataset.i;const c=tr[k][i];if(t<=c.s||t>=c.s+c.l)return;push();
   const cut=(kk,ii)=>{const cc=tr[kk][ii];const a={...cc,l:t-cc.s},b={...cc,s:t,l:cc.s+cc.l-t};tr[kk].splice(ii,1,a,b)};
   const j=linked?pairOf(k,i):-1;cut(k,i);if(j>=0)cut(other(k),j);sel=null;msg=T.m.cut(t);draw();return}
  if(cl){const i=+cl.dataset.i;const items=[{k,i}];if(linked){const j=pairOf(k,i);if(j>=0)items.push({k:other(k),i:j})}sel={type:'clip',items};msg=T.hint.sel;draw();return}
  const lst=tr[k].filter(c=>c.s+c.l<=t).map(c=>c.s+c.l),nxt=tr[k].filter(c=>c.s>=t).map(c=>c.s);const s=lst.length?Math.max(...lst):0,en=nxt.length?Math.min(...nxt):null;
  if(en!==null&&en>s){sel={type:'gap',k,s,e:en};msg=T.m.gap}else{sel=null;msg=T.m.nosel}draw()});
 const del=ripple=>{if(!sel){msg=T.m.nosel;draw();return}
  if(sel.type==='gap'){if(!ripple){return}const {k,s,e}=sel,d=e-s;const ok=tr[other(k)].every(c=>c.s>=e||c.s+c.l<=s);
   if(!ok){msg=T.m.block;draw();return}push();for(const kk of['V','A'])tr[kk].forEach(c=>{if(c.s>=e-0.001)c.s-=d});sel=null;msg=T.m.rip;draw();return}
  const items=sel.items;const ranges=items.map(x=>({k:x.k,s:tr[x.k][x.i].s,e:tr[x.k][x.i].s+tr[x.k][x.i].l}));
  if(ripple){const s=Math.min(...ranges.map(r=>r.s)),e=Math.max(...ranges.map(r=>r.e));const ks=new Set(items.map(x=>x.k));
   for(const kk of['V','A'])if(!ks.has(kk)&&!tr[kk].every(c=>c.s>=e||c.s+c.l<=s)){msg=T.m.block;draw();return}}
  push();const s=Math.min(...ranges.map(r=>r.s)),e=Math.max(...ranges.map(r=>r.e));
  [...items].sort((a,b)=>b.i-a.i).forEach(x=>tr[x.k].splice(x.i,1));
  if(ripple)for(const kk of['V','A'])tr[kk].forEach(c=>{if(c.s>=e-0.001)c.s-=e-s});
  sel=null;msg=ripple?T.m.rip:T.m.del;draw()};
 $('.bd',root).onclick=()=>del(false);$('.br',root).onclick=()=>del(true);
 $('.bu',root).onclick=()=>{if(hist.length){tr=hist.pop();sel=null;msg=T.hint[tool];draw()}};
 $('.tlt',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){tool=b.dataset.t;msg=T.hint[tool];draw()}});
 $('.lk',root).onchange=e=>{linked=e.target.checked;sel=null;msg=linked?T.m.lnk:T.m.unl;draw()};
 root.addEventListener('keydown',e=>{if(e.target.matches('input'))return;const k=e.key.toLowerCase();if(k==='v'){tool='sel';msg=T.hint.sel;draw()}else if(k==='c'){tool='raz';msg=T.hint.raz;draw()}else if(e.key==='Delete'||e.key==='Backspace'){e.preventDefault();del(e.shiftKey)}});
 draw();
};

D.captions=(root,L)=>{
 const T={th:{h:'ลองตรวจซับ: พิมพ์หรือแก้ข้อความ แล้วดูจำนวนตัวอักษรต่อบรรทัดและความเร็วในการอ่าน',lang:'ภาษา',font:'ฟอนต์',fok:'ฟอนต์ที่รองรับ CJK',fbad:'ฟอนต์ละตินอย่างเดียว',text:'ข้อความซับ (ขึ้นบรรทัดใหม่ได้ ไม่เกิน 2 บรรทัด)',dur:'ระยะเวลาที่ซับอยู่บนจอ',line:n=>`บรรทัด ${n}`,cps:'ความเร็วในการอ่าน',lim:'ขีดจำกัด',chars:'ตัวอักษร',none:'ไม่ได้กำหนดในเดโมนี้',lines2:'เกิน 2 บรรทัด',tofu:'ฟอนต์นี้ไม่มีตัวอักษรภาษานี้ จึงขึ้นเป็นกล่องสี่เหลี่ยม',cap:'ขีดจำกัดตาม Timed Text Style Guide ของ Netflix (รายการสำหรับผู้ใหญ่) เกาหลีนับอักษรละติน เว้นวรรค และเครื่องหมายวรรคตอนเป็น 0.5 ตัว ภาษาอื่นในเดโมนับตัวละ 1'},
  en:{h:'Try checking captions: type or edit the text, then watch characters per line and reading speed',lang:'Language',font:'Font',fok:'Font with CJK support',fbad:'Latin-only font',text:'Caption text (line breaks allowed, 2 lines max)',dur:'Time on screen',line:n=>`Line ${n}`,cps:'Reading speed',lim:'limit',chars:'characters',none:'not set in this demo',lines2:'More than 2 lines',tofu:'This font has no glyphs for this language, so they show as boxes',cap:'Limits follow Netflix\'s Timed Text Style Guides (adult programmes). Korean counts Latin letters, spaces and punctuation as 0.5; the other languages in this demo count every character as 1.'}}[L];
 const LG={ko:{name:'한국어',cpl:16,cps:12,half:true,text:'오늘은 프리미어에서\n자막을 만드는 방법을 알아볼게요'},zh:{name:'简体中文',cpl:16,cps:9,half:false,text:'今天我们来学习\n怎样在Premiere里做字幕'},en:{name:'English',cpl:42,cps:null,half:false,text:'Today we will learn how to make captions\nin Premiere, step by step.'}};
 let lg='ko',good=true,dur=3;const texts={ko:LG.ko.text,zh:LG.zh.text,en:LG.en.text};
 const CJK=/[\u1100-\u11FF\u3000-\u303F\u3130-\u318F\u3400-\u4DBF\u4E00-\u9FFF\uAC00-\uD7A3\uFF00-\uFFEF]/g;
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="chips"><span class="mlabel" style="align-self:center;margin:0 4px 0 0">${T.lang}</span>${Object.keys(LG).map(k=>`<button type="button" class="chip" data-l="${k}" lang="${k==='zh'?'zh-CN':k}">${LG[k].name}</button>`).join('')}</div>
 <div class="two"><div class="col"><div class="mon cmon"><svg viewBox="0 0 640 360" aria-hidden="true"><use href="#scene"/></svg><div class="sub"></div></div><p class="mlabel tofu" hidden>${T.tofu}</p></div>
 <div class="col"><label class="f">${T.text}<textarea class="tx" rows="3" maxlength="160"></textarea></label>
 <label class="rng"><span>${T.dur}<code class="dv"></code></span><input type="range" class="du" min="1" max="7" step="0.5" value="3"></label>
 <p class="mlabel" style="margin:0">${T.font}</p><div class="seg fs"><button type="button" data-f="1">${T.fok}</button><button type="button" data-f="0">${T.fbad}</button></div></div></div>
 <dl class="kv meter"></dl>`;
 const cap=document.createElement('p');cap.className='cap';cap.textContent=T.cap;root.after(cap);
 const count=(s,half)=>[...s].reduce((a,ch)=>a+(half&&!/[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F\u4E00-\u9FFF]/.test(ch)?0.5:1),0);
 const fmt=n=>Number.isInteger(n)?String(n):n.toFixed(1);
 const draw=()=>{const g=LG[lg],t=texts[lg],lines=t.split('\n');
  const sub=$('.sub',root);sub.setAttribute('lang',lg==='zh'?'zh-CN':lg);sub.replaceChildren(...lines.slice(0,3).map(l=>{const d=document.createElement('span');d.textContent=good?l:l.replace(CJK,'□');return d}));
  $('.tofu',root).hidden=good||!CJK.test(t);CJK.lastIndex=0;
  const per=lines.map(l=>count(l,g.half)),total=per.reduce((a,b)=>a+b,0),cps=total/dur;
  let h=per.map((n,i)=>`<dt>${T.line(i+1)}</dt><dd class="${n>g.cpl?'bad':'okk'}">${fmt(n)} / ${g.cpl} ${T.chars}</dd>`).join('');
  if(lines.length>2)h+=`<dt></dt><dd class="bad">${T.lines2}</dd>`;
  h+=`<dt>${T.cps}</dt><dd class="${g.cps&&cps>g.cps?'bad':'okk'}">${cps.toFixed(1)} ${T.chars}/s · ${T.lim} ${g.cps?g.cps:T.none}</dd>`;
  $('.meter',root).innerHTML=h;$('.dv',root).textContent=dur+' s';
  $$('.chips .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.l===lg)));$$('.fs button',root).forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.f==='1')===good)));};
 $('.tx',root).value=texts[lg];
 $('.tx',root).oninput=e=>{texts[lg]=e.target.value;draw()};
 $('.du',root).oninput=e=>{dur=+e.target.value;draw()};
 $('.chips',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){lg=b.dataset.l;$('.tx',root).value=texts[lg];$('.tx',root).setAttribute('lang',lg==='zh'?'zh-CN':lg);draw()}});
 $('.fs',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){good=b.dataset.f==='1';draw()}});
 draw();
};
