
const KEY="rocky102LaborV1";
const modules=[...document.querySelectorAll(".module")];
const nameInput=document.getElementById("studentName");
const classInput=document.getElementById("studentClass");

function getState(){
  try{return JSON.parse(localStorage.getItem(KEY)||"{}")}catch(e){return {}}
}
function saveState(){
  const s={
    name:nameInput.value,
    cls:classInput.value,
    modules:modules.map(m=>m.querySelector(".module-check input").checked),
    evidence:[...document.querySelectorAll(".evidence-check input")].map(x=>x.checked)
  };
  localStorage.setItem(KEY,JSON.stringify(s)); updateProgress();
}
function updateProgress(){
  const done=modules.filter(m=>m.querySelector(".module-check input").checked).length;
  const pct=Math.round(done/modules.length*100);
  document.getElementById("progressBar").style.width=pct+"%";
  document.getElementById("progressLabel").textContent=pct+"%";
  document.getElementById("moduleCount").textContent=`${done} / ${modules.length} kész`;
}
function applyState(){
  const s=getState(); nameInput.value=s.name||""; classInput.value=s.cls||"";
  modules.forEach((m,i)=>{
    const cb=m.querySelector(".module-check input");
    cb.checked=!!(s.modules&&s.modules[i]); m.classList.toggle("completed",cb.checked);
  });
  document.querySelectorAll(".evidence-check input").forEach((cb,i)=>cb.checked=!!(s.evidence&&s.evidence[i]));
  updateProgress();
}

const evidence=document.getElementById("evidenceChecklist");
for(let i=1;i<=30;i++){
  const l=document.createElement("label");l.className="evidence-check";
  const c=document.createElement("input");c.type="checkbox";c.addEventListener("change",saveState);
  const s=document.createElement("span");s.textContent=`K${String(i).padStart(2,"0")} elkészült és bekerült a dokumentációba`;
  l.append(c,s);evidence.append(l);
}

nameInput.addEventListener("input",saveState);classInput.addEventListener("input",saveState);
modules.forEach(m=>m.querySelector(".module-check input").addEventListener("change",e=>{m.classList.toggle("completed",e.target.checked);saveState()}));
document.getElementById("resetProgress").onclick=()=>{if(confirm("Biztosan törlöd a helyben mentett haladást?")){localStorage.removeItem(KEY);location.reload()}};
document.getElementById("printBtn").onclick=()=>window.print();

document.querySelectorAll("[data-copy]").forEach(box=>{
 const b=box.querySelector("button");
 b.onclick=async()=>{
   const t=box.querySelector("code").innerText;
   try{await navigator.clipboard.writeText(t)}catch(e){const ta=document.createElement("textarea");ta.value=t;document.body.append(ta);ta.select();document.execCommand("copy");ta.remove()}
   const old=b.textContent;b.textContent="Másolva";setTimeout(()=>b.textContent=old,900);
 };
});

const QUIZZES={"q1": [["Mi a VirtualBox NAT adapter fő szerepe ebben a laborban?", ["A Windows kliens és a Rocky összekötése", "Internetelérés biztosítása a Rocky szervernek", "DNS-nevek létrehozása"], 1], ["Mit ad az Internal Network?", ["Izolált virtuális hálózatot a VM-ek között", "Automatikus internetet", "Fizikai Wi-Fi kapcsolatot"], 0], ["Melyik parancs mutatja tömören az IP-címeket?", ["ip -br address", "useradd", "systemctl"], 0]], "q2": [["Miért statikus a Rocky belső IP-címe?", ["Mert a szerver szolgáltatásait állandó címen kell elérni", "Mert DHCP nem működik Linuxon", "Mert NAT ezt megköveteli"], 0], ["Melyik portot használja alapból az SSH?", ["21", "22", "80"], 1], ["Miért nincs gateway a LABNET interfészen?", ["Mert a default route a NAT interfészen marad", "Mert a Linux nem használ gatewayt", "Mert a Windows adja a gatewayt"], 0]], "q3": [["Mit jelent könyvtárnál az x jog?", ["Törlés", "Belépés/útvonalon áthaladás", "Titkosítás"], 1], ["Mit jelent a 2770 elején a 2?", ["sticky bit", "setuid", "setgid"], 2], ["Ki tud írni a 2770 root:projekt könyvtárba?", ["Csak root", "A projekt csoport tagjai és root", "Mindenki"], 1], ["Miért kap vendeg Permission denied hibát?", ["Nem tagja a projekt csoportnak", "Nincs IP-címe", "A DNS hibás"], 0]], "q4": [["Melyik DHCP szervert használjuk Rocky 10-ben?", ["ISC dhcpd", "Kea", "dnsmasq kötelezően"], 1], ["Mit jelent a DHCP pool?", ["Kiosztható IP-címtartomány", "DNS zóna", "FTP mappa"], 0], ["Mit jelez Windows alatt a 169.254.x.x cím?", ["Sikeres DHCP", "APIPA, nem kapott DHCP-címet", "DNS válasz"], 1]], "q5": [["Melyik rekord ad név → IPv4 feloldást?", ["A", "PTR", "MX"], 0], ["Melyik rekord kell reverse lookuphoz?", ["CNAME", "PTR", "TXT"], 1], ["Mi a labor DNS-zónája?", ["lab.test", "localhost", "rocky.com"], 0], ["Melyik parancs ellenőrzi a zónafájlt?", ["named-checkzone", "chmod", "ftp"], 0]], "q6": [["Miért jobb az SFTP éles környezetben?", ["Titkosított SSH-csatornát használ", "Gyorsabb DHCP-t ad", "Nem használ felhasználót"], 0], ["Melyik mappába írhat anna és bela közösen?", ["/srv/ftp/kozos", "/srv/ftp/vendeg", "/root"], 0], ["Miért látja anna a fájljait FTP-n keresztül is?", ["A vsftpd helyi Linux felhasználókat hitelesít", "A DNS másolja a fájlokat", "A DHCP kezeli a jogokat"], 0], ["Melyik port az FTP vezérlőkapcsolat alapportja?", ["21", "22", "53"], 0]], "q7": [["Melyik szolgáltatás az Apache daemon neve Rocky Linuxon?", ["httpd", "apache2", "webd"], 0], ["Melyik porton érjük el alapból a HTTP-t?", ["22", "53", "80"], 2], ["Miért működik a www.lab.test név?", ["BIND A rekord 192.168.50.1-re mutat", "A DHCP weboldalt tárol", "PuTTY átírja"], 0]], "q8": [["Mi történik, ha a daemon fut, de a tűzfal tiltja a portot?", ["A kliens nem éri el", "A daemon automatikusan leáll", "A DNS törlődik"], 0], ["Melyik parancs mutatja a hallgató portokat?", ["ss -lntup", "passwd", "chmod"], 0], ["Melyik a jó hibakeresési sorrend kezdete?", ["Újratelepítés", "IP-cím és kapcsolat ellenőrzése", "Felhasználók törlése"], 1]]};
document.querySelectorAll(".mini-quiz").forEach(box=>{
  const id=box.dataset.quiz, data=QUIZZES[id];
  let html="<h4>Gyors önellenőrzés</h4>";
  data.forEach((q,qi)=>{
    html+=`<div class="quiz-q" data-answer="${q[2]}"><p>${qi+1}. ${q[0]}</p>`;
    q[1].forEach((a,ai)=>html+=`<label><input type="radio" name="${id}_${qi}" value="${ai}"> ${a}</label>`);
    html+="</div>";
  });
  html+=`<div class="quiz-actions"><button class="quiz-check">Ellenőrzés</button><span class="quiz-result"></span></div>`;
  box.innerHTML=html;
  box.querySelector(".quiz-check").onclick=()=>{
    let score=0;
    box.querySelectorAll(".quiz-q").forEach(q=>{
      q.classList.remove("correct-answer","wrong-answer");
      const p=q.querySelector("input:checked");
      if(p && Number(p.value)===Number(q.dataset.answer)){score++;q.classList.add("correct-answer")}
      else q.classList.add("wrong-answer");
    });
    box.querySelector(".quiz-result").textContent=`${score} / ${data.length} helyes`;
  };
});

applyState();
