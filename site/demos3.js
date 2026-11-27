const capAfter=(root,t)=>{const c=document.createElement('p');c.className='cap';c.textContent=t;root.after(c)};

D['premiere-vs-ae']=(root,L)=>{
 const T={th:{h:'ทายดู: งานนี้ควรทำในโปรแกรมไหน',pr:'Premiere',ae:'After Effects',score:(a,b)=>`ถูก ${a} จาก ${b} ข้อ`,start:'เลือกคำตอบได้เลย มีทั้งหมด 8 ข้อ',again:'เล่นใหม่',ok:'ถูก',no:'ยังไม่ใช่',cap:'คำตอบเป็นแนวทางทั่วไป งานจริงหลายชิ้นใช้ทั้งสองโปรแกรมร่วมกัน',
   Q:[['ตัดคลิปสัมภาษณ์ 20 นาทีให้เหลือ 3 นาที','pr','งานเรียงและตัดคลิปยาว ๆ คืองานหลักของ Premiere'],['ทำโลโก้บินเข้ามาแล้วแตกเป็นอนุภาค','ae','particle และ motion graphics ละเอียด ๆ ทำใน After Effects'],['ใส่ซับให้ vlog ทั้งเรื่อง','pr','Speech to Text และ captions อยู่ใน Premiere'],['ลบป้ายโฆษณาออกจากฉากที่กล้องเคลื่อน','ae','งาน compositing และ tracking ละเอียดทำใน After Effects'],['ปรับเสียงพูดให้ชัดและเพลงเบาลงตอนพูด','pr','Essential Sound และ Enhance Speech อยู่ใน Premiere'],['ทำ template แถบชื่อให้ทีมตัดต่อใช้ซ้ำ','ae','ออกแบบใน After Effects แล้ว export เป็น .mogrt ให้ใช้ใน Premiere'],['ตัดคลิป Reels 15 วินาทีจากฟุตเทจงานอีเวนต์','pr','ตัดต่อและ Auto Reframe เป็นงานของ Premiere'],['ทำตัวหนังสือเด้งทีละตัวอักษรแบบ kinetic typography','ae','text animator ทีละตัวอักษรเป็นจุดแข็งของ After Effects']]},
  en:{h:'Quiz: which app is this job for?',pr:'Premiere',ae:'After Effects',score:(a,b)=>`${a} of ${b} right`,start:'Pick an answer for each one; there are 8',again:'Play again',ok:'Right',no:'Not quite',cap:'Answers are general guidance; many real projects use both apps together.',
   Q:[['Cut a 20-minute interview down to 3 minutes','pr','Arranging and trimming long footage is Premiere\'s core job.'],['A logo flies in and bursts into particles','ae','Particles and detailed motion graphics belong in After Effects.'],['Caption a whole vlog','pr','Speech to Text and captions live in Premiere.'],['Remove a billboard from a moving shot','ae','Detailed compositing and tracking happen in After Effects.'],['Clean up dialogue and dip the music under it','pr','Essential Sound and Enhance Speech are in Premiere.'],['Build a reusable name-strap template for editors','ae','Design it in After Effects and export a .mogrt for Premiere.'],['Cut a 15-second Reel from event footage','pr','Editing and Auto Reframe are Premiere jobs.'],['Kinetic typography that pops letter by letter','ae','Per-character text animators are an After Effects strength.']]}}[L];
 let ans={};
 root.className='stage';
 const draw=()=>{const n=Object.keys(ans).length,ok=Object.entries(ans).filter(([i,a])=>T.Q[i][1]===a).length;
  root.innerHTML=`<h3>${T.h}</h3><ol class="quiz">${T.Q.map((q,i)=>{const a=ans[i];const st=a?(a===q[1]?'ok':'no'):'';return`<li class="${st}"><p>${q[0]}</p><div class="chips"><button type="button" class="chip" data-i="${i}" data-a="pr" aria-pressed="${a==='pr'}">${T.pr}</button><button type="button" class="chip" data-i="${i}" data-a="ae" aria-pressed="${a==='ae'}">${T.ae}</button></div>${a?`<p class="why"><b>${a===q[1]?T.ok:T.no}:</b> ${q[2]}</p>`:''}</li>`}).join('')}</ol><div class="chips"><p class="st" style="flex:1">${n?T.score(ok,n):T.start}</p><button type="button" class="btn rs">${T.again}</button></div>`;};
 root.addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){ans[b.dataset.i]=b.dataset.a;draw();return}if(e.target.closest('.rs')){ans={};draw()}});
 draw();capAfter(root,T.cap);
};

D['system-requirements']=(root,L)=>{
 const T={th:{h:'เช็กเครื่องของคุณกับ Premiere และ After Effects 27.0',os:'ระบบปฏิบัติการ',ram:'RAM',gpu:'หน่วยความจำการ์ดจอ (VRAM)',work:'งานหลัก',hd:'HD',k4:'4K ขึ้นไป',res:{no:'ติดตั้ง 27.0 ไม่ได้',low:'ต่ำกว่าสเปกขั้นต่ำ',min:'ใช้ได้ (ขั้นต่ำ)',rec:'ตามสเปกแนะนำ'},why:'เหตุผล',cap:'สรุปจากหน้า Technical requirements ของ Adobe แบบย่อ ควรเช็กหน้าต้นฉบับก่อนซื้อเครื่อง',
   OS:[['w11','Windows 11 v24H2 ขึ้นไป'],['w10','Windows 10 หรือ Windows 11 v23H2'],['mas','Mac ชิป Apple silicon, macOS 15 ขึ้นไป'],['mold','Mac ชิป Apple silicon, macOS 14'],['mi','Mac ชิป Intel']],
   msg:{os:'ระบบปฏิบัติการไม่รองรับ 27.0',intel:'Mac ชิป Intel ใช้ได้ถึงเวอร์ชัน 26.x',ram:n=>`RAM ต่ำกว่าขั้นต่ำ ${n} GB`,ramrec:n=>`แนะนำ RAM ${n} GB สำหรับงานนี้`,gpu:'VRAM ต่ำกว่า 4 GB',gpurec:'แนะนำ VRAM 8 GB',ok:'ผ่านทุกข้อ'}},
  en:{h:'Check your computer against Premiere and After Effects 27.0',os:'Operating system',ram:'RAM',gpu:'GPU memory (VRAM)',work:'Main work',hd:'HD',k4:'4K and up',res:{no:'Can\'t install 27.0',low:'Below minimum',min:'Runs (minimum)',rec:'Meets recommended'},why:'Why',cap:'A simplified summary of Adobe\'s technical requirements pages. Check the originals before buying hardware.',
   OS:[['w11','Windows 11 v24H2 or later'],['w10','Windows 10 or Windows 11 v23H2'],['mas','Apple silicon Mac, macOS 15 or later'],['mold','Apple silicon Mac, macOS 14'],['mi','Intel Mac']],
   msg:{os:'This OS isn\'t supported by 27.0',intel:'Intel Macs stay on version 26.x',ram:n=>`RAM is below the ${n} GB minimum`,ramrec:n=>`${n} GB RAM is recommended for this work`,gpu:'VRAM is below 4 GB',gpurec:'8 GB VRAM is recommended',ok:'Everything checks out'}}}[L];
 let os='w11',ram=16,gpu=8,work='hd';
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="two"><div class="col">
 <p class="mlabel">${T.os}</p><div class="chips oss">${T.OS.map(o=>`<button type="button" class="chip" data-o="${o[0]}">${o[1]}</button>`).join('')}</div>
 <p class="mlabel">${T.ram}</p><div class="chips rams">${[8,16,32,64].map(n=>`<button type="button" class="chip" data-r="${n}">${n} GB</button>`).join('')}</div>
 <div class="gpurow"><p class="mlabel">${T.gpu}</p><div class="chips gpus">${[2,4,8,12].map(n=>`<button type="button" class="chip" data-g="${n}">${n}${n===12?'+':''} GB</button>`).join('')}</div></div>
 <p class="mlabel">${T.work}</p><div class="seg wk" style="max-width:280px"><button type="button" data-w="hd">${T.hd}</button><button type="button" data-w="4k">${T.k4}</button></div></div>
 <div class="col res"></div></div>`;
 const evalApp=app=>{const mac=os[0]==='m';if(os==='w10'||os==='mold')return['no',T.msg.os];if(os==='mi')return['no',T.msg.intel];
  const min=app==='pr'?8:16,rec=work==='4k'?32:16;let lvl='rec',why=[];
  if(ram<min)return['low',T.msg.ram(min)];
  if(!mac&&gpu<4)return['low',T.msg.gpu];
  if(ram<rec){lvl='min';why.push(T.msg.ramrec(rec))}
  if(!mac&&gpu<8){lvl='min';why.push(T.msg.gpurec)}
  return[lvl,why.join(' · ')||T.msg.ok]};
 const draw=()=>{const mac=os[0]==='m';$('.gpurow',root).hidden=mac;
  $('.res',root).innerHTML=[['pr','Premiere 27.0'],['ae','After Effects 27.0']].map(([k,n])=>{const[l,w]=evalApp(k);return`<div class="verdict v-${l}"><b>${n}</b><span>${T.res[l]}</span><small>${esc(w)}</small></div>`}).join('');
  $$('.oss .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.o===os)));$$('.rams .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.r===ram)));
  $$('.gpus .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(+b.dataset.g===gpu)));$$('.wk button',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.w===work)));};
 root.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.o)os=b.dataset.o;else if(b.dataset.r)ram=+b.dataset.r;else if(b.dataset.g)gpu=+b.dataset.g;else if(b.dataset.w)work=b.dataset.w;else return;draw()});
 draw();capAfter(root,T.cap);
};

D['workspace-tour']=(root,L)=>{
 const T={th:{h:'คลิกแต่ละส่วนของหน้าจอเพื่อดูว่ามีไว้ทำอะไร',cap:'แผนผังอย่างง่ายของ workspace แบบ Editing ไม่ใช่ภาพหน้าจอจริง ตำแหน่งพาเนลย้ายได้ตามที่ตั้งไว้',
   P:{hdr:['Header bar','แถบบนสุด มีแท็บสลับโหมด Import, Edit, Color และ Export, ชื่อโปรเจกต์, เมนู Workspaces และปุ่ม Quick Export',''],proj:['Project panel','ที่เก็บไฟล์ทั้งหมดที่ import เข้ามา และ sequence ที่สร้าง จัดเป็น bin (โฟลเดอร์) ได้','Shift+1'],src:['Source Monitor','ดูคลิปดิบทีละคลิป ตั้งจุด In/Out ก่อนวางลง timeline','Shift+2'],prg:['Program Monitor','แสดงผลงานใน sequence ที่เปิดอยู่','Shift+4'],tl:['Timeline','เรียงคลิปภาพและเสียงบน track ที่นี่คือที่ตัดต่อจริง','Shift+3'],tools:['Tools','เครื่องมือ Selection, Razor, Ripple Edit, Type, Pen และกลุ่มเครื่องมือ mask',''],meter:['Audio Meters','แสดงระดับเสียงขณะเล่น ใช้ดูว่าเสียงดังเกินจนแตกหรือเปล่า',''],side:['Effects / Properties','พาเนลด้านข้างที่สลับเป็น Effects, Effect Controls, Properties หรือ Essential Graphics ได้','Shift+7']}},
  en:{h:'Click each part of the screen to see what it is for',cap:'A simplified map of the Editing workspace, not a screenshot. Panels can be rearranged.',
   P:{hdr:['Header bar','The top bar: tabs for the Import, Edit, Color and Export modes, the project name, the Workspaces menu and the Quick Export button.',''],proj:['Project panel','Holds everything you import and the sequences you create, organised into bins (folders).','Shift+1'],src:['Source Monitor','Watch raw clips one at a time and set In/Out before placing them.','Shift+2'],prg:['Program Monitor','Shows the open sequence.','Shift+4'],tl:['Timeline','Picture and sound clips on tracks. This is where the editing happens.','Shift+3'],tools:['Tools','Selection, Razor, Ripple Edit, Type, Pen and the mask tool group.',''],meter:['Audio Meters','Shows audio levels during playback, so you can see if sound is clipping.',''],side:['Effects / Properties','A side area that switches between Effects, Effect Controls, Properties or Essential Graphics.','Shift+7']}}}[L];
 const R={hdr:[0,0,100,8],src:[0,9,40,44],prg:[41,9,40,44],side:[82,9,18,44],proj:[0,54,28,46],tools:[29,54,4,46],tl:[34,54,60,46],meter:[95,54,5,46]};
 let cur='tl';
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="two"><div class="wsmap" role="group">${Object.entries(R).map(([k,r])=>`<button type="button" class="wsp" data-k="${k}" aria-label="${T.P[k][0]}" style="left:${r[0]}%;top:${r[1]}%;width:${r[2]}%;height:${r[3]}%"><span>${k==='tools'?'⌖':k==='meter'?'▮▮':T.P[k][0]}</span></button>`).join('')}</div><div class="card"><h4 class="ct"></h4><p class="cd"></p><p class="ck"></p></div></div>`;
 const draw=()=>{const p=T.P[cur];$('.ct',root).textContent=p[0];$('.cd',root).textContent=p[1];$('.ck',root).innerHTML=p[2]?`<kbd>${p[2]}</kbd>`:'';$$('.wsp',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.k===cur)))};
 $('.wsmap',root).addEventListener('click',e=>{const b=e.target.closest('.wsp');if(b){cur=b.dataset.k;draw()}});
 draw();capAfter(root,T.cap);
};

D.audio=(root,L)=>{
 const T={th:{h:'ลองบาลานซ์เสียงพูดกับเพลง',mus:'ระดับเพลง',duck:'Ducking: ลดเพลงลงอัตโนมัติตอนมีเสียงพูด',amt:'ลดลง',t:'เวลา',v:'เสียงพูด',m:'เพลง',meter:'Audio Meter (เสียงรวม)',clip:'เสียงแตก! ระดับเกิน 0 dB',ok:'ระดับปลอดภัย',low:'เพลงกลบเสียงพูด ลองลดเพลงหรือเปิด Ducking',good:'เสียงพูดชัด เพลงอยู่ข้างหลัง',cap:'เดโมจำลองหลักการ ตัวเลขเป็นค่าประมาณ ใน Premiere ใช้ Essential Sound ตั้งประเภทเสียงและสร้าง keyframe ducking ให้'},
  en:{h:'Try balancing dialogue and music',mus:'Music level',duck:'Ducking: lower the music automatically under dialogue',amt:'Reduce by',t:'Time',v:'Dialogue',m:'Music',meter:'Audio Meter (mix)',clip:'Clipping! The level goes over 0 dB',ok:'Safe level',low:'The music buries the dialogue. Lower it or turn on Ducking.',good:'Dialogue is clear with music underneath.',cap:'A simulation of the idea with approximate numbers. In Premiere, Essential Sound tags audio types and generates the ducking keyframes for you.'}}[L];
 const V=[[1,5],[7,12],[14,18]];const END=20;
 let mus=-6,duck=false,amt=12,t=3;
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="two"><div class="col"><div class="atl"><div class="arow"><span>${T.v}</span><div class="alane va">${V.map(([a,b])=>`<i style="left:${a/END*100}%;width:${(b-a)/END*100}%"></i>`).join('')}</div></div><div class="arow"><span>${T.m}</span><div class="alane ma"><svg viewBox="0 0 200 40" preserveAspectRatio="none" aria-hidden="true"><path class="mp" fill="rgba(79,154,70,.55)" stroke="#8fd16a" stroke-width="1" vector-effect="non-scaling-stroke"/></svg></div></div><div class="aph"></div></div>
 <label class="rng"><span>${T.t}<code class="tv"></code></span><input type="range" class="ts" min="0" max="${END}" step="0.1" value="3"></label></div>
 <div class="col"><label class="rng"><span>${T.mus}<code class="mv"></code></span><input type="range" class="ms" min="-30" max="6" step="1" value="-6"></label>
 <label class="chk"><input type="checkbox" class="dk"> ${T.duck}</label><label class="rng"><span>${T.amt}<code class="av"></code></span><input type="range" class="as" min="3" max="24" step="1" value="12"></label>
 <p class="mlabel">${T.meter}</p><div class="meterbar"><b></b><i></i></div><p class="st"></p></div></div>`;
 const inV=tt=>V.some(([a,b])=>tt>=a&&tt<b);
 const near=tt=>{let d=1e9;for(const[a,b]of V){if(tt>=a&&tt<b)return 0;d=Math.min(d,Math.abs(tt-a),Math.abs(tt-b))}return d};
 const musAt=tt=>mus-(duck?amt*Math.max(0,1-near(tt)/0.6):0);
 const sum=(a,b)=>10*Math.log10(10**(a/10)+10**(b/10));
 const draw=()=>{let d='M0 40';for(let i=0;i<=200;i++){const tt=i/200*END;const lv=musAt(tt);const h=Math.max(0,Math.min(40,(lv+36)/42*40));d+=` L${i} ${(40-h).toFixed(1)}`}d+=' L200 40Z';$('.mp',root).setAttribute('d',d);
  $('.aph',root).style.left=`calc(76px + (100% - 86px) * ${t/END})`;
  const voice=inV(t)?-8:-60,m=musAt(t),mix=sum(voice,m);const pct=Math.max(0,Math.min(100,(mix+48)/54*100));
  $('.meterbar b',root).style.width=(100-pct)+'%';$('.meterbar',root).classList.toggle('hot',mix>0);
  $('.as',root).disabled=!duck;$('.tv',root).textContent=t.toFixed(1)+' s';$('.mv',root).textContent=(mus>0?'+':'')+mus+' dB';$('.av',root).textContent='−'+amt+' dB';
  const msg=mix>0?T.clip:(inV(t)&&m>voice-6?T.low:(inV(t)?T.good:T.ok));$('.st',root).textContent=`${mix.toFixed(1)} dB · ${msg}`;};
 $('.ts',root).oninput=e=>{t=+e.target.value;draw()};$('.ms',root).oninput=e=>{mus=+e.target.value;draw()};$('.dk',root).onchange=e=>{duck=e.target.checked;draw()};$('.as',root).oninput=e=>{amt=+e.target.value;draw()};
 draw();capAfter(root,T.cap);
};

D.export=(root,L)=>{
 const T={th:{h:'เลือกปลายทาง แล้วดูว่าควรตั้งค่า export อย่างไร',fmt:'Format',pre:'Preset',rng:'Range',note:'ข้อควรรู้',check:'เช็กก่อนกด Export',cap:'ค่าเป็นจุดเริ่มต้นสำหรับงานทั่วไป ปลายทางแต่ละที่อาจมีสเปกของตัวเอง',
   D:[['yt','YouTube','H.264','Match Source – Adaptive High Bitrate','Entire Source','อัปโหลดด้วย frame rate เดียวกับที่ถ่าย'],['soc','Reels / TikTok / Shorts','H.264','Match Source – Adaptive High Bitrate','Entire Source','sequence ต้องเป็น 1080×1920 ตั้งแต่ต้น'],['rev','ส่งลูกค้าตรวจงาน','H.264','Match Source – Adaptive Medium Bitrate','Source In/Out','ไฟล์เล็ก ส่งง่าย เปิดได้ทุกเครื่อง'],['mas','ไฟล์ต้นฉบับเก็บไว้ (master)','QuickTime (Apple ProRes)','ProRes 422 HQ หรือ Match Source','Entire Source','คุณภาพสูง ไฟล์ใหญ่ ใช้ทำต่อหรือ export ซ้ำได้โดยไม่เสียคุณภาพ'],['aud','เสียงอย่างเดียว','Waveform Audio (WAV) หรือ MP3','Match Source','Entire Source','ปิด Video ไว้ เปิดแค่ Audio']],
   C:['ชื่อไฟล์และที่เก็บไฟล์ถูกต้อง','Range ตรงกับที่ตั้งใจ (Entire Source หรือ In/Out)','Frame Size และ Frame Rate ตรงกับ sequence','Captions: ฝังลงภาพหรือส่งเป็นไฟล์แยก','ดูไฟล์ที่ได้ตั้งแต่ต้นจนจบก่อนส่ง']},
  en:{h:'Pick a destination and see how to set up the export',fmt:'Format',pre:'Preset',rng:'Range',note:'Good to know',check:'Check before you click Export',cap:'Starting points for everyday jobs; each destination may have its own spec.',
   D:[['yt','YouTube','H.264','Match Source – Adaptive High Bitrate','Entire Source','Upload at the frame rate you shot'],['soc','Reels / TikTok / Shorts','H.264','Match Source – Adaptive High Bitrate','Entire Source','The sequence must be 1080×1920 from the start'],['rev','Client review','H.264','Match Source – Adaptive Medium Bitrate','Source In/Out','Small, easy to send, plays anywhere'],['mas','Archive master','QuickTime (Apple ProRes)','ProRes 422 HQ or Match Source','Entire Source','High quality, large files; re-export later without losing quality'],['aud','Audio only','Waveform Audio (WAV) or MP3','Match Source','Entire Source','Turn Video off and leave only Audio on']],
   C:['File name and location are right','Range is what you meant (Entire Source or In/Out)','Frame Size and Frame Rate match the sequence','Captions: burned in or a separate file','Watch the exported file start to finish before sending']}}[L];
 let k='yt',checked=new Set();
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="chips dst">${T.D.map(d=>`<button type="button" class="chip" data-k="${d[0]}">${d[1]}</button>`).join('')}</div><div class="two"><dl class="kv stk ex"></dl><div class="col"><p class="mlabel">${T.check}</p><ul class="cklist">${T.C.map((c,i)=>`<li><label class="chk"><input type="checkbox" data-i="${i}"> ${c}</label></li>`).join('')}</ul><div class="bar"><b></b></div></div></div>`;
 const draw=()=>{const d=T.D.find(x=>x[0]===k);$('.ex',root).innerHTML=`<dt>${T.fmt}</dt><dd>${d[2]}</dd><dt>${T.pre}</dt><dd>${d[3]}</dd><dt>${T.rng}</dt><dd>${d[4]}</dd><dt>${T.note}</dt><dd>${d[5]}</dd>`;
  $$('.dst .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.k===k)));$('.bar b',root).style.width=checked.size/T.C.length*100+'%'};
 $('.dst',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){k=b.dataset.k;draw()}});
 $('.cklist',root).addEventListener('change',e=>{const i=+e.target.dataset.i;e.target.checked?checked.add(i):checked.delete(i);draw()});
 draw();capAfter(root,T.cap);
};

D['ae-comp-layers']=(root,L)=>{
 const T={th:{h:'ลำดับ layer: อันบนสุดบังอันล่าง ลองสลับลำดับและเปิดปิดดู',up:'ขึ้น',down:'ลง',eye:'เปิด/ปิด',cap:'After Effects วาดภาพจาก layer ล่างสุดขึ้นไปหาบนสุด layer ที่อยู่บนจึงบัง layer ที่อยู่ล่าง',
   N:{txt:'Text: ชื่อเรื่อง',shp:'Shape: วงกลม',vid:'Footage: วิว',sol:'Solid: พื้นสีม่วง'}},
  en:{h:'Layer order: the top layer covers the ones below. Reorder and toggle them',up:'Up',down:'Down',eye:'Show/hide',cap:'After Effects draws from the bottom layer up, so higher layers cover lower ones.',
   N:{txt:'Text: title',shp:'Shape: circle',vid:'Footage: landscape',sol:'Solid: purple background'}}}[L];
 let order=['txt','shp','vid','sol'],vis={txt:true,shp:true,vid:true,sol:true};
 const ART={txt:'<text x="320" y="110" text-anchor="middle" font-family="Anuphan,sans-serif" font-weight="700" font-size="56" fill="#fff" stroke="#111" stroke-width="3" paint-order="stroke">TITLE</text>',shp:'<circle cx="430" cy="210" r="90" fill="#ff7a45"/>',vid:'<svg x="80" y="60" width="400" height="225" viewBox="0 0 640 360" preserveAspectRatio="xMidYMid slice"><use href="#scene"/></svg>',sol:'<rect width="640" height="360" fill="#6b4fb5"/>'};
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="two even"><div class="mon"><svg class="comp" viewBox="0 0 640 360" aria-hidden="true"></svg></div><ol class="layers"></ol></div>`;
 const draw=()=>{$('.comp',root).innerHTML='<rect width="640" height="360" fill="#000"/>'+[...order].reverse().filter(k=>vis[k]).map(k=>ART[k]).join('');
  $('.layers',root).innerHTML=order.map((k,i)=>`<li class="${vis[k]?'':'off'}"><b>${i+1}</b><span>${T.N[k]}</span><button type="button" class="btn sm" data-a="eye" data-k="${k}" aria-pressed="${vis[k]}" aria-label="${T.eye}">${vis[k]?'●':'○'}</button><button type="button" class="btn sm" data-a="up" data-k="${k}" ${i===0?'disabled':''}>${T.up}</button><button type="button" class="btn sm" data-a="down" data-k="${k}" ${i===order.length-1?'disabled':''}>${T.down}</button></li>`).join('')};
 $('.layers',root).addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const k=b.dataset.k,i=order.indexOf(k);
  if(b.dataset.a==='eye')vis[k]=!vis[k];else{const j=b.dataset.a==='up'?i-1:i+1;if(j<0||j>=order.length)return;[order[i],order[j]]=[order[j],order[i]]}draw()});
 draw();capAfter(root,T.cap);
};

D['ae-keyframes']=(root,L)=>{
 const T={th:{h:'ลอง Easy Ease และ Graph Editor: ดูกราฟค่ากับกราฟความเร็ว',lin:'Linear',ease:'Easy Ease (F9)',val:'Value Graph',spd:'Speed Graph',inf:'Influence',play:'เล่น',t:'เวลา',cap:'เดโมจำลองหลักการ ค่า Influence 33.33% คือค่าที่ Easy Ease ใช้เป็นค่าเริ่มต้น'},
  en:{h:'Try Easy Ease and the Graph Editor: value graph vs speed graph',lin:'Linear',ease:'Easy Ease (F9)',val:'Value Graph',spd:'Speed Graph',inf:'Influence',play:'Play',t:'Time',cap:'A simulation of the idea. 33.33% influence is the Easy Ease default.'}}[L];
 let ease=false,graph='val',inf=33.33,t=0,raf=0;const DUR=2;
 const bez=(p,a)=>{const x1=a/100,x2=1-a/100;let lo=0,hi=1;for(let i=0;i<30;i++){const m=(lo+hi)/2;const x=3*(1-m)**2*m*x1+3*(1-m)*m*m*x2+m**3;if(x<p)lo=m;else hi=m}const s=(lo+hi)/2;return 3*(1-s)**2*s*0+3*(1-s)*s*s*1+s**3};
 const f=p=>ease?bez(p,inf):p;
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="two"><div class="col"><div class="mon"><svg viewBox="0 0 640 360" aria-hidden="true"><rect width="640" height="360" fill="#151517"/><line x1="80" y1="180" x2="560" y2="180" stroke="#3a3a3f" stroke-dasharray="6 6"/><circle class="dot" cy="180" r="28" fill="#ff7a45"/></svg></div><div class="graph"><svg viewBox="0 0 300 110" preserveAspectRatio="none" aria-hidden="true"></svg></div></div>
 <div class="col"><div class="seg ez"><button type="button" data-e="0">${T.lin}</button><button type="button" data-e="1">${T.ease}</button></div><div class="seg gr"><button type="button" data-g="val">${T.val}</button><button type="button" data-g="spd">${T.spd}</button></div>
 <label class="rng"><span>${T.inf}<code class="iv"></code></span><input type="range" class="is" min="5" max="90" step="1" value="33"></label><label class="rng"><span>${T.t}<code class="tv"></code></span><input type="range" class="ts" min="0" max="2" step="0.01" value="0"></label><button type="button" class="btn pri pl">▶ ${T.play}</button></div></div>`;
 const draw=()=>{const p=f(t/DUR);$('.dot',root).setAttribute('cx',80+p*480);
  let d='';const N=80;for(let i=0;i<=N;i++){const q=i/N;let y;if(graph==='val')y=f(q);else{const h=0.002;y=(f(Math.min(1,q+h))-f(Math.max(0,q-h)))/(Math.min(1,q+h)-Math.max(0,q-h))/2.2}d+=(i?'L':'M')+(q*300).toFixed(1)+' '+(104-Math.min(1,y)*96).toFixed(1)}
  $('.graph svg',root).innerHTML=`<path d="${d}" fill="none" stroke="#ff7a45" stroke-width="2.5" vector-effect="non-scaling-stroke"/><line x1="${t/DUR*300}" x2="${t/DUR*300}" y1="0" y2="110" stroke="#fff" stroke-opacity=".5" vector-effect="non-scaling-stroke"/>`;
  $('.iv',root).textContent=ease?inf.toFixed(2)+'%':'—';$('.is',root).disabled=!ease;$('.tv',root).textContent=t.toFixed(2)+' s';$('.ts',root).value=t;
  $$('.ez button',root).forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.e==='1')===ease)));$$('.gr button',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.g===graph)))};
 $('.ez',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){ease=b.dataset.e==='1';draw()}});
 $('.gr',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){graph=b.dataset.g;draw()}});
 $('.is',root).oninput=e=>{inf=+e.target.value;draw()};$('.ts',root).oninput=e=>{cancelAnimationFrame(raf);t=+e.target.value;draw()};
 $('.pl',root).onclick=()=>{cancelAnimationFrame(raf);if(reduce){t=DUR;draw();return}const t0=performance.now();const st=n=>{if(!root.isConnected)return;t=Math.min(DUR,(n-t0)/1000);draw();if(t<DUR)raf=requestAnimationFrame(st)};raf=requestAnimationFrame(st)};
 draw();capAfter(root,T.cap);
};

D['ae-text']=(root,L)=>{
 const T={th:{h:'ลอง Range Selector: เลื่อน Start แล้วดูตัวอักษรค่อย ๆ ปรากฏ',start:'Range Selector › Start',based:'Based On',ch:'Characters',wd:'Words',play:'เล่น',txt:'Text',cap:'เดโมจำลองหลักการ ใน After Effects ตัวอักษรที่อยู่ในช่วง Range Selector จะได้ค่าของ animator (ที่นี่คือ Opacity 0% และเลื่อนลง 30 px)'},
  en:{h:'Try the Range Selector: move Start and watch the text appear',start:'Range Selector › Start',based:'Based On',ch:'Characters',wd:'Words',play:'Play',txt:'Text',cap:'A simulation of the idea. In After Effects, characters inside the Range Selector get the animator\'s values (here Opacity 0% and a 30 px drop).'}}[L];
 const SAMPLE={th:'Make it move!',en:'Make it move!'}[L];
 let st=40,by='ch',txt=SAMPLE,raf=0;
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="two"><div class="mon atx"><div class="line" aria-live="off"></div></div><div class="col"><label class="f">${T.txt}<input type="text" class="tt" maxlength="40"></label><label class="rng"><span>${T.start}<code class="sv"></code></span><input type="range" class="ss" min="0" max="100" step="1" value="40"></label><p class="mlabel">${T.based}</p><div class="seg bo"><button type="button" data-b="ch">${T.ch}</button><button type="button" data-b="wd">${T.wd}</button></div><button type="button" class="btn pri pl">▶ ${T.play}</button></div></div>`;
 $('.tt',root).value=txt;
 const draw=()=>{const units=by==='ch'?[...txt]:txt.split(/(\s+)/);const n=units.filter(u=>!/^\s+$/.test(u)).length||1;let k=0;
  const line=$('.line',root);line.replaceChildren(...units.map(u=>{const s=document.createElement('span');s.textContent=u;if(/^\s+$/.test(u)){s.className='sp';return s}const pos=(k+0.5)/n*100;k++;const inRange=pos>=st;s.style.opacity=inRange?0:1;s.style.transform=inRange?'translateY(30px)':'none';return s}));
  $('.sv',root).textContent=st+'%';$('.ss',root).value=st;$$('.bo button',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.b===by)))};
 $('.ss',root).oninput=e=>{cancelAnimationFrame(raf);st=+e.target.value;draw()};$('.tt',root).oninput=e=>{txt=e.target.value||' ';draw()};
 $('.bo',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){by=b.dataset.b;draw()}});
 $('.pl',root).onclick=()=>{cancelAnimationFrame(raf);if(reduce){st=100;draw();return}st=0;const t0=performance.now();const s2=n=>{if(!root.isConnected)return;st=Math.min(100,Math.round((n-t0)/1500*100));draw();if(st<100)raf=requestAnimationFrame(s2)};raf=requestAnimationFrame(s2)};
 draw();capAfter(root,T.cap);
};

D['ae-render']=(root,L)=>{
 const T={th:{h:'อยากได้ไฟล์แบบไหน ดูว่าต้องตั้ง Render Queue อย่างไร',how:'วิธี',fmt:'Format / Output Module',ch:'Channels',note:'ข้อควรรู้',cap:'ชื่อตัวเลือกอ้างอิงจากคู่มือ After Effects ควรเช็กในโปรแกรมเวอร์ชันที่ใช้',
   N:[['mp4','MP4 สำหรับเว็บหรือโซเชียล','Render Queue','H.264 (preset 5, 15 หรือ 40 Mbps)','RGB','preset ค่าเริ่มต้นคือ H.264 – Match Render Settings – 15 Mbps'],['alpha','วิดีโอพื้นหลังใส ไปวางทับใน Premiere','Render Queue','QuickTime, codec Apple ProRes 4444','RGB + Alpha','ไฟล์ MP4/H.264 เก็บความโปร่งใสไม่ได้'],['seq','ภาพนิ่งเรียงเฟรม (image sequence)','Render Queue','PNG Sequence','RGB หรือ RGB + Alpha','27.0 มีแถบปรับระดับการบีบอัด PNG ที่ยังคงไม่สูญเสียคุณภาพ'],['many','หลายไฟล์หลายสเปกพร้อมกัน','Add to Adobe Media Encoder Queue','เลือก preset ใน Media Encoder','ตาม preset','ปล่อยให้ Media Encoder render ระหว่างที่ทำงานต่อใน After Effects ได้'],['pr','ส่งต่อให้ Premiere โดยไม่ render','Dynamic Link','ไม่ต้อง render','—','ใน Premiere ใช้ Replace With After Effects Composition หรือ import composition โดยตรง แก้ใน AE แล้วอัปเดตเอง']]},
  en:{h:'What file do you need? See how to set up the Render Queue',how:'Route',fmt:'Format / Output Module',ch:'Channels',note:'Good to know',cap:'Option names follow the After Effects documentation; check them in your version.',
   N:[['mp4','MP4 for web or social','Render Queue','H.264 (5, 15 or 40 Mbps preset)','RGB','The default preset is H.264 – Match Render Settings – 15 Mbps'],['alpha','Transparent video to overlay in Premiere','Render Queue','QuickTime, Apple ProRes 4444 codec','RGB + Alpha','MP4/H.264 can\'t store transparency'],['seq','Image sequence','Render Queue','PNG Sequence','RGB or RGB + Alpha','27.0 adds a PNG compression slider that stays lossless'],['many','Several files and specs at once','Add to Adobe Media Encoder Queue','Pick presets in Media Encoder','Per preset','Media Encoder renders while you keep working in After Effects'],['pr','Hand to Premiere without rendering','Dynamic Link','No render needed','—','In Premiere use Replace With After Effects Composition or import the comp directly; changes in AE update automatically']]}}[L];
 let k='mp4';
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="chips nd">${T.N.map(n=>`<button type="button" class="chip" data-k="${n[0]}">${n[1]}</button>`).join('')}</div><dl class="kv stk rq"></dl>`;
 const draw=()=>{const n=T.N.find(x=>x[0]===k);$('.rq',root).innerHTML=`<dt>${T.how}</dt><dd>${n[2]}</dd><dt>${T.fmt}</dt><dd>${n[3]}</dd><dt>${T.ch}</dt><dd>${n[4]}</dd><dt>${T.note}</dt><dd>${n[5]}</dd>`;$$('.nd .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.k===k)))};
 $('.nd',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){k=b.dataset.k;draw()}});
 draw();capAfter(root,T.cap);
};

D['whats-new']=(root,L)=>{
 const T={th:{h:'ไล่ดูการอัปเดตปี 2569 ทีละเวอร์ชัน',pr:'Premiere',ae:'After Effects',cap:'สรุปเฉพาะไฮไลต์จากหน้า What\'s new ของ Adobe ไม่ใช่รายการทั้งหมด',
   R:{pr:[['26.0','ม.ค.',['เปลี่ยนชื่อเป็น Adobe Premiere (ไม่มีคำว่า Pro)','Object Mask: เลือกวัตถุด้วย AI แล้ว track','Adobe Stock อยู่ในโปรแกรม','รองรับ MKV (H.264/AAC) ดีขึ้น']],['26.2','เม.ย.',['เอฟเฟกต์และทรานซิชันชุดใหม่','ใส่ Content Credentials ตอน export','Color Mode เปิดให้ลองในแอป beta']],['26.3','มิ.ย.',['เอฟเฟกต์ ทรานซิชัน และแอนิเมชันใหม่กว่า 90 ตัว','สร้าง sequence จาก Firefly Boards','ตั้งได้ว่าจะให้สร้าง track อัตโนมัติไหม']],['26.5','ก.ย.',['Generative Media Tool','Object Mask ตรวจจับวัตถุได้มากขึ้น']],['27.0','พ.ย.',['Color Mode แทน Lumetri Color panel','AI Assistant panel','สร้างเพลง เสียงเอฟเฟกต์ และ soundscape','Generative Extend เติมเฟรมให้ทรานซิชัน','เอฟเฟกต์ใหม่ 8 ตัว','ต้องใช้ Windows 11 24H2 หรือ Mac Apple silicon']]],
      ae:[['26.0','ม.ค.',['Substance 3D Materials','animate variable fonts ได้','เอฟเฟกต์เสียง Distortion, Compressor, Gate']],['26.2','เม.ย.',['Object Matte: เลือกวัตถุด้วย AI']],['26.3','มิ.ย.',['Depth of Field ใน Advanced 3D','วาง SVG/Illustrator เป็น shape layer','Mask Tracker เร็วขึ้นสูงสุด 5 เท่า','Curl Noise']],['26.5','ก.ย.',['Guides แบบใหม่','Effect Controls ออกแบบใหม่','รองรับ ACES 2.0']],['27.0','พ.ย.',['AI Assistant','Auto-Save กู้งานง่ายขึ้น','Adobe Stock panel','ข้อความ Illustrator แก้ต่อได้','เอฟเฟกต์ Contour Paint และ De-esser']]]}},
  en:{h:'Step through the 2026 updates version by version',pr:'Premiere',ae:'After Effects',cap:'Highlights from Adobe\'s What\'s new pages, not complete lists.',
   R:{pr:[['26.0','Jan',['Renamed Adobe Premiere (no "Pro")','Object Mask: AI selection and tracking','Adobe Stock built in','Better MKV (H.264/AAC) support']],['26.2','Apr',['New effects and transitions','Content Credentials at export','Color Mode public beta in the beta app']],['26.3','Jun',['90+ modern effects, transitions and animations','Sequences from Firefly Boards','Control automatic track creation']],['26.5','Sep',['Generative Media Tool','Object Mask detects more objects']],['27.0','Nov',['Color Mode replaces the Lumetri Color panel','AI Assistant panel','Generate music, sound effects and soundscapes','Generative Extend fills frames for transitions','Eight new effects','Requires Windows 11 24H2 or an Apple silicon Mac']]],
      ae:[['26.0','Jan',['Substance 3D Materials','Animate variable fonts','Distortion, Compressor and Gate audio effects']],['26.2','Apr',['Object Matte: AI selection']],['26.3','Jun',['Depth of Field in Advanced 3D','Paste SVG/Illustrator as shape layers','Mask Tracker up to 5x faster','Curl Noise']],['26.5','Sep',['New guides','Redesigned Effect Controls','ACES 2.0 support']],['27.0','Nov',['AI Assistant','Better Auto-Save recovery','Adobe Stock panel','Editable Illustrator text','Contour Paint and De-esser effects']]]}}}[L];
 let app='pr',sel=4;
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="seg ap" style="max-width:360px"><button type="button" data-a="pr">${T.pr}</button><button type="button" data-a="ae">${T.ae}</button></div><ol class="rel"></ol><div class="card"><h4 class="ct"></h4><ul class="cl2"></ul></div>`;
 const draw=()=>{const R=T.R[app];$('.rel',root).innerHTML=R.map((r,i)=>`<li><button type="button" data-i="${i}" aria-pressed="${i===sel}"><b>${r[0]}</b><span>${r[1]}</span></button></li>`).join('');
  const r=R[sel];$('.ct',root).textContent=`${T[app]} ${r[0]} · ${r[1]}`;$('.cl2',root).innerHTML=r[2].map(x=>`<li>${x}</li>`).join('');$$('.ap button',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.a===app)))};
 $('.ap',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){app=b.dataset.a;sel=4;draw()}});
 $('.rel',root).addEventListener('click',e=>{const b=e.target.closest('button');if(b){sel=+b.dataset.i;draw()}});
 draw();capAfter(root,T.cap);
};

D.shortcuts=(root,L)=>{
 const T={th:{h:'คลิกปุ่มบนคีย์บอร์ดเพื่อดูว่าทำอะไรใน Premiere และ After Effects',pr:'Premiere',ae:'After Effects',none:'ไม่มีคีย์ลัดเดี่ยวที่ใช้บ่อย',cap:'แสดงเฉพาะปุ่มเดี่ยวที่ใช้บ่อยตามชุดคีย์ลัดเริ่มต้น ถ้าเปลี่ยนชุดคีย์ลัดไว้ผลจะต่างจากนี้',
   K:{V:['Selection tool','Selection tool'],C:['Razor tool','Camera tool'],B:['Ripple Edit tool','ตั้งจุดเริ่ม work area'],N:['Rolling Edit tool','ตั้งจุดจบ work area'],R:['Rate Stretch tool','แสดง Rotation ของ layer'],A:['Track Select Forward tool','แสดง Anchor Point'],P:['Pen tool','แสดง Position'],S:['เปิดปิด Snap','แสดง Scale'],T:['Type tool','แสดง Opacity'],Y:['Slip tool','Pan Behind (Anchor Point) tool'],U:['Slide tool','แสดง property ที่มี keyframe'],E:['ขยายจุดตัดที่เลือกมาถึง playhead','แสดงเอฟเฟกต์ของ layer'],G:['Audio Gain','Pen tool'],W:['Ripple Trim ส่วนหลัง playhead','Rotation tool'],Q:['Ripple Trim ส่วนหน้า playhead','Shape tools'],I:['ตั้งจุด In','ไปที่จุดเริ่ม layer'],O:['ตั้งจุด Out','ไปที่จุดจบ layer'],M:['เพิ่ม marker','แสดง Mask Path'],F:['Match Frame','แสดง Mask Feather'],J:['เล่นถอยหลัง','ไป keyframe หรือ marker ก่อนหน้า'],K:['หยุด','ไป keyframe หรือ marker ถัดไป'],L:['เล่นไปข้างหน้า','แสดง Audio Levels'],H:['Hand tool','Hand tool'],Z:['Zoom tool','Zoom tool'],Space:['เล่น / หยุด','เล่น preview / หยุด']}},
  en:{h:'Click a key to see what it does in Premiere and After Effects',pr:'Premiere',ae:'After Effects',none:'No common single-key shortcut',cap:'Only common single keys from the default shortcut sets. Custom shortcut sets will differ.',
   K:{V:['Selection tool','Selection tool'],C:['Razor tool','Camera tool'],B:['Ripple Edit tool','Set work area start'],N:['Rolling Edit tool','Set work area end'],R:['Rate Stretch tool','Reveal layer Rotation'],A:['Track Select Forward tool','Reveal Anchor Point'],P:['Pen tool','Reveal Position'],S:['Toggle snapping','Reveal Scale'],T:['Type tool','Reveal Opacity'],Y:['Slip tool','Pan Behind (Anchor Point) tool'],U:['Slide tool','Reveal keyframed properties'],E:['Extend selected edit to playhead','Reveal layer effects'],G:['Audio Gain','Pen tool'],W:['Ripple Trim next edit to playhead','Rotation tool'],Q:['Ripple Trim previous edit to playhead','Shape tools'],I:['Mark In','Go to layer In point'],O:['Mark Out','Go to layer Out point'],M:['Add marker','Reveal Mask Path'],F:['Match Frame','Reveal Mask Feather'],J:['Play backwards','Go to previous keyframe or marker'],K:['Stop','Go to next keyframe or marker'],L:['Play forwards','Reveal Audio Levels'],H:['Hand tool','Hand tool'],Z:['Zoom tool','Zoom tool'],Space:['Play / stop','Play preview / stop']}}}[L];
 const ROWS=[['Q','W','E','R','T','Y','U','I','O','P'],['A','S','D','F','G','H','J','K','L'],['Z','X','C','V','B','N','M'],['Space']];
 let cur='C';
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><div class="kb">${ROWS.map(r=>`<div class="kr">${r.map(k=>`<button type="button" class="key${T.K[k]?' has':''}${k==='Space'?' space':''}" data-k="${k}">${k}</button>`).join('')}</div>`).join('')}</div><div class="two even"><div class="card"><h4>${T.pr}</h4><p class="kp"></p></div><div class="card"><h4>${T.ae}</h4><p class="ka"></p></div></div>`;
 const draw=()=>{const v=T.K[cur]||['—','—'];$('.kp',root).textContent=v[0]==='—'?T.none:v[0];$('.ka',root).textContent=v[1]==='—'?T.none:v[1];$$('.key',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.k===cur)))};
 $('.kb',root).addEventListener('click',e=>{const b=e.target.closest('.key');if(b){cur=b.dataset.k;draw()}});
 draw();capAfter(root,T.cap);
};

D.glossary=(root,L)=>{
 const T={th:{h:'ค้นหาศัพท์',ph:'พิมพ์คำที่อยากรู้ เช่น codec, ripple',all:'ทั้งหมด',n:n=>`${n} คำ`,none:'ไม่พบคำนี้',C:{ed:'ตัดต่อ',vid:'วิดีโอและไฟล์',col:'สีและเสียง',ae:'After Effects'}},
  en:{h:'Search the glossary',ph:'Type a term, e.g. codec, ripple',all:'All',n:n=>`${n} terms`,none:'No matching term',C:{ed:'Editing',vid:'Video and files',col:'Colour and audio',ae:'After Effects'}}}[L];
 const G=[
 ['Project','ed','ไฟล์งาน (.prproj) ที่เก็บการตัดต่อและลิงก์ไปยังไฟล์สื่อ ไม่ได้เก็บวิดีโอไว้ในตัว','The work file (.prproj) that stores your edit and links to media; it doesn\'t contain the video itself.'],
 ['Bin','ed','โฟลเดอร์ใน Project panel สำหรับจัดกลุ่มคลิป','A folder in the Project panel for grouping clips.'],
 ['Sequence','ed','ไทม์ไลน์ของงานหนึ่งชิ้น มีขนาดภาพและ frame rate ของตัวเอง','The timeline for one piece of work, with its own frame size and frame rate.'],
 ['Track','ed','แถวบน timeline ที่วางคลิป เช่น V1 สำหรับภาพ A1 สำหรับเสียง','A row in the timeline that holds clips, such as V1 for video or A1 for audio.'],
 ['Clip','ed','ชิ้นสื่อหนึ่งชิ้นใน project หรือบน timeline','One piece of media in the project or timeline.'],
 ['Playhead','ed','เส้นที่บอกเวลาปัจจุบันบน timeline หรือในจอ','The line marking the current time in the timeline or a monitor.'],
 ['In / Out point','ed','จุดเริ่มและจุดจบของช่วงที่เลือก','The start and end of a selected range.'],
 ['Insert / Overwrite','ed','วางคลิปแบบดันของเดิมไปข้างหลัง / วางทับของเดิม','Place a clip pushing later material along / place it over existing material.'],
 ['Ripple','ed','การแก้ไขที่ทำให้คลิปถัดไปเลื่อนตามเพื่อไม่ให้เกิดช่องว่าง','An edit that moves later clips so no gap is left.'],
 ['Razor','ed','เครื่องมือตัดคลิปเป็นสองท่อน','The tool that cuts a clip in two.'],
 ['Link / Unlink','ed','ผูกหรือแยกภาพกับเสียงของคลิปเดียวกัน','Tie or separate a clip\'s picture and sound.'],
 ['J-cut / L-cut','ed','เสียงช็อตถัดไปเริ่มก่อนภาพ / เสียงช็อตเดิมยังต่อไปหลังตัดภาพ','The next shot\'s sound starts early / the current shot\'s sound carries over the cut.'],
 ['Nest','ed','รวมหลายคลิปเป็น sequence ย่อยหนึ่งก้อนบน timeline','Group several clips into one sub-sequence on the timeline.'],
 ['Marker','ed','หมุดบนเวลา ใช้จดโน้ตหรือแบ่งตอน','A pin on the timeline for notes or chapters.'],
 ['Keyframe','ed','จุดที่บันทึกค่าของ property ณ เวลาหนึ่ง ใช้สร้างการเคลื่อนไหว','A point storing a property\'s value at a time, used to animate.'],
 ['Interpolation','ed','วิธีที่โปรแกรมเติมค่าระหว่าง keyframe เช่น Linear, Bezier, Hold','How values are filled in between keyframes, such as Linear, Bezier or Hold.'],
 ['Transition','ed','เอฟเฟกต์ที่ใช้ตรงรอยต่อระหว่างสองคลิป เช่น Cross Dissolve','An effect at the join between two clips, such as Cross Dissolve.'],
 ['Adjustment layer','ed','layer ว่างที่ใส่เอฟเฟกต์ไว้ ให้มีผลกับทุกอย่างที่อยู่ข้างล่าง','An empty layer whose effects apply to everything beneath it.'],
 ['MOGRT','ed','ไฟล์ Motion Graphics Template ที่แก้ได้เฉพาะช่องที่ผู้ออกแบบเปิดไว้','A Motion Graphics template file with designer-chosen editable fields.'],
 ['Mask','ed','พื้นที่ที่เลือกไว้เพื่อให้เอฟเฟกต์มีผลแค่ในหรือนอกพื้นที่นั้น','A selected area that limits an effect to inside or outside it.'],
 ['Frame rate (fps)','vid','จำนวนภาพต่อวินาที เช่น 24, 25, 30, 60','Images per second, such as 24, 25, 30 or 60.'],
 ['Resolution / Frame size','vid','ขนาดภาพเป็นพิกเซล เช่น 1920×1080','Image size in pixels, such as 1920×1080.'],
 ['Aspect ratio','vid','สัดส่วนกว้างต่อสูง เช่น 16:9, 9:16','Width-to-height proportion, such as 16:9 or 9:16.'],
 ['Pixel aspect ratio','vid','รูปทรงของพิกเซลแต่ละจุด งานปัจจุบันใช้ Square Pixels (1.0)','The shape of each pixel; modern work uses Square Pixels (1.0).'],
 ['Timecode','vid','เวลาแบบ ชั่วโมง:นาที:วินาที:เฟรม','Time written as hours:minutes:seconds:frames.'],
 ['Codec','vid','วิธีบีบอัดภาพและเสียง เช่น H.264, HEVC, ProRes','How picture and sound are compressed, such as H.264, HEVC or ProRes.'],
 ['Container','vid','ชนิดไฟล์ที่ห่อภาพและเสียงไว้ด้วยกัน เช่น .mp4, .mov','The file type wrapping picture and sound, such as .mp4 or .mov.'],
 ['Bitrate','vid','ปริมาณข้อมูลต่อวินาที ยิ่งสูงยิ่งคมแต่ไฟล์ใหญ่','Data per second; higher is sharper but larger.'],
 ['Proxy','vid','ไฟล์ความละเอียดต่ำสำหรับตัดต่อให้ลื่น แล้ว export จากไฟล์จริง','A low-resolution copy for smooth editing; export uses the originals.'],
 ['Render','vid','การประมวลผลเอฟเฟกต์ให้เล่นลื่นในโปรแกรม หรือสร้างไฟล์ผลลัพธ์','Processing effects for smooth playback, or producing an output file.'],
 ['Export','vid','การสร้างไฟล์วิดีโอสุดท้ายจาก sequence','Creating the final video file from a sequence.'],
 ['Media Offline','vid','สถานะที่ Premiere หาไฟล์ต้นฉบับไม่เจอ','When Premiere can\'t find a clip\'s source file.'],
 ['Media cache','vid','ไฟล์ช่วยเล่นที่โปรแกรมสร้างไว้ ลบได้ สร้างใหม่ได้','Helper files the apps create; safe to delete and rebuild.'],
 ['Color Management','col','การตั้งค่าว่า sequence ทำงานใน color space ไหน เช่น Rec. 709','Which colour space a sequence works in, such as Rec. 709.'],
 ['Rec. 709','col','มาตรฐานสีของวิดีโอ HD แบบ SDR ทั่วไป','The standard colour space for ordinary SDR HD video.'],
 ['HDR','col','วิดีโอช่วงความสว่างกว้าง ต้องใช้จอและการตั้งค่าที่รองรับ','High dynamic range video; needs supporting displays and settings.'],
 ['LUT','col','ตารางแปลงสีสำเร็จรูป ใช้เปลี่ยนลุคหรือแปลงฟุตเทจ Log','A ready-made colour transform for looks or converting Log footage.'],
 ['Log footage','col','ฟุตเทจที่ถ่ายแบบเก็บช่วงแสงกว้าง ภาพดูซีดก่อนแต่งสี','Footage recorded flat to keep dynamic range; looks washed out until graded.'],
 ['dB / Clipping','col','หน่วยระดับเสียง ถ้าเกิน 0 dB เสียงจะแตก (clipping)','The unit of audio level; above 0 dB the sound clips.'],
 ['Ducking','col','การลดเสียงเพลงลงอัตโนมัติตอนมีเสียงพูด','Automatically lowering music under dialogue.'],
 ['Composition','ae','งานหนึ่งชิ้นใน After Effects มีขนาด ความยาว และ layer ของตัวเอง','One piece of work in After Effects with its own size, duration and layers.'],
 ['Precompose','ae','รวมหลาย layer เป็น composition ย่อย','Group several layers into a nested composition.'],
 ['Solid','ae','layer สีพื้นเรียบ ใช้เป็นพื้นหลังหรือที่ใส่เอฟเฟกต์','A flat colour layer for backgrounds or effects.'],
 ['Null Object','ae','layer ที่มองไม่เห็น ใช้เป็นตัวคุมการเคลื่อนไหวของ layer อื่น','An invisible layer used to drive other layers\' motion.'],
 ['Track matte','ae','ใช้ความโปร่งใสหรือความสว่างของ layer หนึ่งเป็น mask ให้อีก layer','Using one layer\'s alpha or luminance as a mask for another.'],
 ['Easy Ease','ae','ทำให้การเคลื่อนไหวค่อย ๆ เร่งและค่อย ๆ ช้าลงรอบ keyframe (F9)','Eases motion in and out around keyframes (F9).'],
 ['Graph Editor','ae','มุมมองกราฟค่าและความเร็วของ keyframe สำหรับปรับจังหวะละเอียด','A value and speed graph view for fine-tuning keyframe timing.'],
 ['Render Queue','ae','คิวสำหรับ render composition ออกเป็นไฟล์','The queue that renders compositions to files.'],
 ['Dynamic Link','ae','การเชื่อม composition ของ After Effects เข้า Premiere โดยไม่ต้อง render','Linking After Effects compositions into Premiere without rendering.']];
 let q='',cat='all';
 root.className='stage';
 root.innerHTML=`<h3>${T.h}</h3><label class="f"><span class="vh">${T.h}</span><input type="text" class="gq" placeholder="${T.ph}"></label><div class="chips gc"><button type="button" class="chip" data-c="all">${T.all}</button>${Object.keys(T.C).map(c=>`<button type="button" class="chip" data-c="${c}">${T.C[c]}</button>`).join('')}</div><p class="mlabel gn"></p><dl class="gl"></dl>`;
 const draw=()=>{const s=q.trim().toLowerCase();const rows=G.filter(g=>(cat==='all'||g[1]===cat)&&(!s||g[0].toLowerCase().includes(s)||g[2].toLowerCase().includes(s)||g[3].toLowerCase().includes(s)));
  $('.gl',root).innerHTML=rows.length?rows.map(g=>`<div><dt>${esc(g[0])}</dt><dd>${esc(L==='th'?g[2]:g[3])}</dd></div>`).join(''):`<div><dd>${T.none}</dd></div>`;
  $('.gn',root).textContent=T.n(rows.length);$$('.gc .chip',root).forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.c===cat)))};
 $('.gq',root).oninput=e=>{q=e.target.value;draw()};
 $('.gc',root).addEventListener('click',e=>{const b=e.target.closest('.chip');if(b){cat=b.dataset.c;draw()}});
 draw();
};
