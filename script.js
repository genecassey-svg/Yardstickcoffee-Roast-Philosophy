const nav=document.getElementById('nav');const secs=[...document.querySelectorAll('.chapter')];
CHAPTERS.forEach((t,i)=>{const b=document.createElement('button');b.textContent=(i+1)+'. '+t;b.onclick=()=>show(i);nav.appendChild(b);});
function show(i){secs.forEach((s,n)=>s.style.display=n===i?'block':'none');document.querySelectorAll('nav button').forEach((b,n)=>b.classList.toggle('active',n===i));}
show(0);