const MC = {"1": {"sec": "Segurança de Dados", "q": "Firmware desatualizado e senha fraca são exemplos de uma falha ou fraqueza que pode ser explorada. Esse conceito é chamado de:", "ops": ["Ameaça", "Perigo", "Vulnerabilidade", "Risco"], "r": 2, "exp": "Vulnerabilidade é a falha ou fraqueza explorável, como firmware desatualizado ou senha fraca."}, "2": {"sec": "Segurança de Dados", "q": "Malware, phishing e ataques de negação de serviço (DoS) são eventos que podem explorar uma fraqueza dos sistemas. Eles são classificados como:", "ops": ["Ameaças", "Vulnerabilidades", "Perigos", "Controles"], "r": 0, "exp": "Ameaça é o evento que pode explorar uma fraqueza dos sistemas (malware, phishing, DoS)."}, "3": {"sec": "Segurança de Dados", "q": "A probabilidade de um perigo causar dano, combinada com a gravidade da consequência, é chamada de:", "ops": ["Ameaça", "Risco", "Vulnerabilidade", "Perigo"], "r": 1, "exp": "Risco é a probabilidade de o perigo causar dano, combinada com a gravidade da consequência."}, "4": {"sec": "Segurança de Dados", "q": "O pilar da segurança que garante que a informação só seja acessada por pessoas ou sistemas autorizados é a:", "ops": ["Integridade", "Disponibilidade", "Irretratabilidade", "Confidencialidade"], "r": 3, "exp": "Confidencialidade: só quem tem permissão acessa (senhas fortes, MFA, criptografia)."}, "5": {"sec": "Segurança de Dados", "q": "Um técnico usa hashes e checksums para confirmar que um arquivo de backup não foi alterado. Qual pilar da segurança ele está garantindo?", "ops": ["Confidencialidade", "Integridade", "Disponibilidade", "Autenticidade"], "r": 1, "exp": "Integridade: a informação não é alterada ou corrompida de forma não autorizada."}, "6": {"sec": "Segurança de Dados", "q": "Links redundantes, nobreak e proteção contra ataques DoS e DDoS servem para que os sistemas estejam acessíveis quando necessário. Esse é o pilar da:", "ops": ["Disponibilidade", "Confidencialidade", "Autenticidade", "Integridade"], "r": 0, "exp": "Disponibilidade: informações e sistemas acessíveis quando necessário."}, "7": {"sec": "Segurança de Dados", "q": "Logs centralizados (syslog) registram quem alterou cada configuração da rede, de modo que o autor não possa negar a alteração. Esse é o pilar da:", "ops": ["Confidencialidade", "Disponibilidade", "Irretratabilidade", "Integridade"], "r": 2, "exp": "Irretratabilidade: quem fez não pode negar, garantindo rastreabilidade e responsabilidade."}, "8": {"sec": "Segurança de Dados", "q": "Certificados digitais em sites e a biometria (digital ou reconhecimento facial) confirmam que o usuário é quem diz ser. Esse é o pilar da:", "ops": ["Disponibilidade", "Confidencialidade", "Integridade", "Autenticidade"], "r": 3, "exp": "Autenticidade: valida a identidade do usuário e a confiabilidade de dados e sistemas."}, "9": {"sec": "Segurança de Dados", "q": "Um funcionário saiu para almoçar e deixou o computador desbloqueado, com o sistema da empresa aberto. Qual boa prática de segurança ele deixou de seguir?", "ops": ["Não acessar dados sensíveis em Wi-Fi público", "Manter sistemas e softwares atualizados", "Bloquear a tela ao sair do computador (Windows + L)", "Habilitar a autenticação multifator (MFA)"], "r": 2, "exp": "Ao sair do computador, deve-se bloquear a tela (Windows + L) e encerrar a sessão ao final do expediente."}, "10": {"sec": "Vírus e Malware", "q": "De acordo com a aula, os vírus de computador são:", "ops": ["Defeitos de fabricação das peças do computador", "Programas com fins maliciosos, que podem apagar dados, capturar informações ou impedir o funcionamento do sistema", "Falhas da rede elétrica que desligam o computador", "Atualizações automáticas do sistema operacional"], "r": 1, "exp": "Vírus são programas com fins maliciosos que causam transtornos a pessoas, empresas e instituições."}, "11": {"sec": "Vírus e Malware", "q": "Sobre a possibilidade de um vírus danificar diretamente o hardware, é correto afirmar que:", "ops": ["Sempre danifica, pois todo vírus queima peças do computador", "Nunca houve nenhum caso de vírus que afetasse o funcionamento do hardware", "Em geral não danifica, mas há exceções, como o vírus CIH (1998), que apagava a memória da BIOS", "Só danifica o monitor e o teclado"], "r": 2, "exp": "O vírus ataca dados e software; a exceção citada é o CIH, que apagava a BIOS e impedia o computador de ligar."}, "12": {"sec": "Vírus e Malware", "q": "Um tipo de malware se espalhou pela rede de uma empresa e criptografou os servidores, deixando e-mail e compartilhamentos indisponíveis. Esse malware é o:", "ops": ["Ransomware", "Keylogger", "Hijacker", "Firewall"], "r": 0, "exp": "O ransomware pode se espalhar pela rede e criptografar servidores inteiros."}, "13": {"sec": "Vírus e Malware", "q": "Um anexo que parece uma “fatura” ou um “driver de impressora”, mas que, após instalado, permite acesso remoto ao computador, é um exemplo de:", "ops": ["Worm", "Hijacker", "Keylogger", "Cavalo de Troia (Trojan)"], "r": 3, "exp": "O cavalo de Troia se disfarça de programa legítimo e permite acesso remoto após a infecção."}, "14": {"sec": "Vírus e Malware", "q": "O malware que se espalha sozinho, de forma automática, para outros computadores pela internet ou pela rede local é o:", "ops": ["Hijacker", "Worm (verme)", "Keylogger", "Cavalo de Troia"], "r": 1, "exp": "A diferença do worm está na propagação: espalha-se rapidamente e automaticamente."}, "15": {"sec": "Vírus e Malware", "q": "Qual medida ajuda a limitar a propagação de worms em uma rede local?", "ops": ["Usar a mesma senha em todos os equipamentos", "Desligar o antivírus para deixar a rede mais rápida", "Segmentar a rede com VLANs e bloquear pen drives de origem desconhecida", "Deixar todas as portas de rede abertas"], "r": 2, "exp": "Segmentar a rede (VLANs) e bloquear pen drives desconhecidos limita a propagação dos worms."}, "16": {"sec": "Vírus e Malware", "q": "O pequeno aplicativo que registra tudo o que o usuário digita, sendo uma das formas de capturar senhas, é o:", "ops": ["Keylogger", "Hijacker", "Firewall", "Worm"], "r": 0, "exp": "O keylogger registra tudo o que é digitado, inclusive senhas."}, "17": {"sec": "Vírus e Malware", "q": "A página inicial do navegador foi trocada sozinha, o usuário não consegue alterá-la e várias janelas de propaganda se abrem. Esses são sinais de infecção por:", "ops": ["Worm", "Ransomware", "Keylogger", "Hijacker"], "r": 3, "exp": "Hijackers “sequestram” navegadores, alteram a página inicial e abrem janelas de propaganda."}, "18": {"sec": "Vírus e Malware", "q": "Maria recebeu um e-mail dizendo: “Sua conta será bloqueada em 1 hora! Clique no link abaixo para evitar o bloqueio”. Qual é a atitude correta?", "ops": ["Clicar no link rapidamente para não perder a conta", "Desconfiar da urgência exagerada e não clicar em links de fontes desconhecidas", "Responder ao e-mail informando sua senha", "Encaminhar o e-mail para todos os colegas de trabalho"], "r": 1, "exp": "E-mails e mensagens com urgência exagerada são suspeitos; evite links e arquivos de fontes desconhecidas."}, "19": {"sec": "Vírus e Malware", "q": "Um técnico digitou a senha de administração do roteador da empresa em um computador de uma lan house. Dias depois, outra pessoa alterou a configuração da rede usando essa senha. Qual ameaça provavelmente capturou a senha?", "ops": ["Hijacker", "Keylogger", "Worm", "Ransomware"], "r": 1, "exp": "O keylogger registra o que é digitado; nunca digite senhas de administração em computadores públicos ou de terceiros."}, "20": {"sec": "Vírus e Malware", "q": "Um técnico precisa atualizar o firmware de um switch e encontra o arquivo em um site de downloads desconhecido, que promete uma versão “turbinada”. O procedimento correto é:", "ops": ["Baixar do site desconhecido, pois a versão parece melhor", "Pedir o arquivo por e-mail a um contato desconhecido", "Baixar o firmware somente do site oficial do fabricante", "Desligar o antivírus antes de instalar o arquivo"], "r": 2, "exp": "Um arquivo de origem duvidosa pode ser um cavalo de Troia; baixe softwares e firmwares só dos sites oficiais."}, "21": {"sec": "Antivírus, Firewall e Boas Práticas", "q": "Para que o antivírus proteja bem o computador, é essencial que ele:", "ops": ["Seja instalado mais de uma vez na mesma máquina", "Esteja sempre atualizado", "Seja desligado durante o uso da internet", "Seja sempre a versão gratuita"], "r": 1, "exp": "O antivírus só protege bem se estiver atualizado, e não substitui o cuidado do usuário."}, "22": {"sec": "Antivírus, Firewall e Boas Práticas", "q": "Qual antivírus já vem instalado no Windows 10 e 11 e substituiu o Security Essentials?", "ops": ["Microsoft Defender", "Norton", "ESET NOD32", "AVG"], "r": 0, "exp": "O Microsoft Defender já vem no Windows 10 e 11."}, "23": {"sec": "Antivírus, Firewall e Boas Práticas", "q": "Em uma empresa, a solução de antivírus deve ser:", "ops": ["Escolhida e instalada livremente por cada usuário", "Instalada apenas no computador do gerente", "Padronizada e gerenciada de forma centralizada pela equipe de TI", "Substituída pelo cuidado do usuário, sem necessidade de software"], "r": 2, "exp": "Na empresa, o antivírus é padronizado e gerenciado centralmente pela TI; o usuário não instala outro."}, "24": {"sec": "Antivírus, Firewall e Boas Práticas", "q": "Conhecido como “o porteiro da rede”, ele analisa o tráfego com base em regras definidas, bloqueando o tráfego indesejado e liberando os acessos permitidos. Trata-se do:", "ops": ["Keylogger", "Nobreak", "Switch", "Firewall"], "r": 3, "exp": "O firewall bloqueia tráfego indesejado e libera os acessos permitidos, com base em regras."}, "25": {"sec": "Antivírus, Firewall e Boas Práticas", "q": "As regras de um firewall seguem o princípio do menor privilégio. Isso significa que:", "ops": ["Tudo é liberado, exceto o que for explicitamente bloqueado", "Tudo é bloqueado, exceto o que for explicitamente liberado", "Somente o administrador pode navegar na internet", "O firewall só funciona fora do horário de expediente"], "r": 1, "exp": "Menor privilégio: tudo bloqueado, exceto o que for explicitamente liberado."}, "26": {"sec": "Antivírus, Firewall e Boas Práticas", "q": "A autenticação multifator (MFA) aumenta a segurança porque:", "ops": ["Exige duas provas de identidade, como senha + código no celular", "Dispensa o uso de senhas", "Permite usar a senha padrão de fábrica (admin/admin)", "Libera o acesso a qualquer pessoa conectada à rede interna"], "r": 0, "exp": "MFA: senha + código no celular, ou seja, duas provas de identidade."}, "27": {"sec": "Antivírus, Firewall e Boas Práticas", "q": "O modelo Zero Trust (Confiança Zero) é resumido pela frase:", "ops": ["“Confie em quem está dentro da rede”", "“Bloqueie apenas o que vem da internet”", "“Nunca confie, sempre verifique”", "“Quem tem a senha pode acessar tudo”"], "r": 2, "exp": "No Zero Trust, nenhum usuário ou dispositivo é confiável automaticamente, nem dentro da rede."}, "28": {"sec": "Segurança do Trabalho", "q": "Segundo o art. 19 da Lei nº 8.213/91, acidente de trabalho é todo evento que ocorre durante o exercício da atividade profissional e causa:", "ops": ["Apenas a perda de equipamentos da empresa", "Somente atrasos na entrega de um projeto", "Apenas danos ao patrimônio da empresa", "Lesão corporal, problema funcional, redução da capacidade de trabalho ou até a morte"], "r": 3, "exp": "É a definição do art. 19 da Lei nº 8.213/91 apresentada em aula."}, "29": {"sec": "Segurança do Trabalho", "q": "A Norma Regulamentadora que trata da segurança em instalações elétricas (desenergização, bloqueio e sinalização) é a:", "ops": ["NR-10", "NR-35", "NR-6", "NR-5"], "r": 0, "exp": "NR-10: segurança em instalações e serviços em eletricidade."}, "30": {"sec": "Segurança do Trabalho", "q": "Ao instalar cabos em forros, eletrocalhas ou torres, o técnico deve seguir a norma sobre trabalho em altura, que exige proteção contra quedas. Essa norma é a:", "ops": ["NR-6", "NR-10", "NR-5", "NR-35"], "r": 3, "exp": "NR-35: trabalho em altura."}};
const DRAG = {
  D1: { sec: "Segurança de Dados", kind: "bucket",
    q: "Classifique cada item como Ameaça ou Vulnerabilidade.",
    targets: { A: "Ameaça", V: "Vulnerabilidade" },
    chips: [["Malware","A"],["Phishing","A"],["Ataque DoS","A"],["Senha fraca","V"],["Firmware desatualizado","V"],["Serviço desatualizado com porta aberta","V"]],
    exp: "Ameaça é o evento que pode explorar uma fraqueza (malware, phishing, DoS). Vulnerabilidade é a falha ou fraqueza explorável (senha fraca, firmware ou serviço desatualizado)." },
  D2: { sec: "Segurança de Dados", kind: "match",
    q: "Arraste cada pilar da segurança da informação até a sua definição.",
    targets: { c: "Só quem tem permissão acessa a informação", i: "A informação não é alterada indevidamente", d: "A informação está acessível quando for necessária", a: "Confirma que o usuário é quem diz ser", r: "Quem realizou a ação não pode negar que a fez" },
    chips: [["Confidencialidade","c"],["Integridade","i"],["Disponibilidade","d"],["Autenticidade","a"],["Irretratabilidade","r"]],
    exp: "Os cinco pilares: Confidencialidade (acesso só a autorizados), Integridade (sem alteração indevida), Disponibilidade (acessível quando necessário), Autenticidade (identidade validada) e Irretratabilidade (quem fez não pode negar)." },
  D3: { sec: "Vírus e Malware", kind: "match",
    q: "Associe cada tipo de malware ao seu comportamento.",
    targets: { r: "Criptografa servidores e arquivos, deixando sistemas indisponíveis", t: "Disfarça-se de programa legítimo e permite acesso remoto", w: "Espalha-se sozinho pela rede, de forma automática", k: "Registra tudo o que o usuário digita, inclusive senhas", h: "Sequestra o navegador e altera a página inicial" },
    chips: [["Ransomware","r"],["Cavalo de Troia","t"],["Worm","w"],["Keylogger","k"],["Hijacker","h"]],
    exp: "Ransomware criptografa dados; Cavalo de Troia se disfarça de programa legítimo; Worm se propaga sozinho; Keylogger captura o que é digitado; Hijacker sequestra o navegador." },
  D4: { sec: "Antivírus, Firewall e Boas Práticas", kind: "bucket",
    q: "Classifique cada atitude como prática segura ou insegura.",
    targets: { S: "Prática segura", I: "Prática insegura" },
    chips: [["Bloquear a tela com Windows + L ao sair","S"],["Habilitar a autenticação multifator","S"],["Manter sistemas e softwares atualizados","S"],["Manter a senha admin/admin no roteador","I"],["Colar a senha num papel no monitor","I"],["Acessar dados sensíveis em Wi-Fi público","I"]],
    exp: "Bloquear a tela, usar MFA e manter tudo atualizado são boas práticas. Senhas padrão de fábrica, senhas anotadas no monitor e dados sensíveis em Wi-Fi público expõem a rede." },
  D5: { sec: "Segurança do Trabalho", kind: "match",
    q: "Associe cada Norma Regulamentadora ao seu tema.",
    targets: { n6: "Seleção, uso e conservação de EPI (luvas, óculos, capacete, calçado)", n10: "Segurança em instalações elétricas: desenergização, bloqueio e sinalização", n35: "Trabalho em altura: forros, eletrocalhas e torres" },
    chips: [["NR-6","n6"],["NR-10","n10"],["NR-35","n35"]],
    exp: "NR-6 trata de EPI, NR-10 de segurança em instalações elétricas e NR-35 de trabalho em altura." }
};
const ORDER = [1,2,3,"D1",4,6,8,"D2",9, 10,11,12,13,15,16,17,"D3",18,19,20, 21,22,23,24,25,26,27,"D4", 28,"D5"];
const SECTIONS = ["Segurança de Dados","Vírus e Malware","Antivírus, Firewall e Boas Práticas","Segurança do Trabalho"];
const PASS = 70;
const $ = s => document.querySelector(s);
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const fmt = ms => { const t = Math.floor(ms / 1000), h = Math.floor(t / 3600), m = Math.floor(t % 3600 / 60), s = t % 60; return (h ? h + ":" : "") + String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0"); };

let S = null, tick = null, picked = null;

function build() {
  return ORDER.map(k => {
    if (typeof k === "number") {
      const m = MC[k];
      return { type: "mc", sec: m.sec, q: m.q, exp: m.exp, ops: shuffle(m.ops.map((t, i) => ({ t, ok: i === m.r }))) };
    }
    const d = DRAG[k];
    return { type: "drag", kind: d.kind, sec: d.sec, q: d.q, exp: d.exp, targets: d.targets,
      chips: shuffle(d.chips.map(([t, to], i) => ({ id: k + "-" + i, t, to }))) };
  });
}

function start() {
  S = { qs: build(), ans: {}, flags: new Set(), cur: 0, t0: Date.now(), name: $("#nome").value.trim() };
  S.qs.forEach((q, i) => { if (q.type === "drag") S.ans[i] = {}; });
  show("s-exam"); $("#timer").hidden = false;
  clearInterval(tick); tick = setInterval(() => { $("#clock").textContent = fmt(Date.now() - S.t0); }, 500);
  $("#clock").textContent = "00:00";
  render();
}
function show(id) { ["s-start", "s-exam", "s-result"].forEach(s => $("#" + s).hidden = s !== id); window.scrollTo(0, 0); }

function answered(i) {
  const q = S.qs[i], a = S.ans[i];
  if (q.type === "mc") return a !== undefined;
  return q.chips.every(c => a[c.id]);
}
function correct(i) {
  const q = S.qs[i], a = S.ans[i];
  if (q.type === "mc") return a !== undefined && q.ops[a].ok;
  return q.chips.every(c => a[c.id] === c.to);
}

function render() {
  const i = S.cur, q = S.qs[i], n = S.qs.length;
  const card = $("#qcard");
  let body = "";
  if (q.type === "mc") {
    body = `<div class="opts" role="radiogroup">` + q.ops.map((o, k) => `
      <label class="opt ${S.ans[i] === k ? "sel" : ""}">
        <input type="radio" name="q${i}" id="q${i}o${k}" value="${k}" ${S.ans[i] === k ? "checked" : ""}>
        <span class="letter">${"ABCD"[k]}</span><span>${esc(o.t)}</span></label>`).join("") + `</div>`;
  } else {
    const a = S.ans[i];
    const chip = c => `<div class="chip" tabindex="0" data-chip="${c.id}">${esc(c.t)}</div>`;
    const inBank = q.chips.filter(c => !a[c.id]).map(chip).join("");
    const inT = t => q.chips.filter(c => a[c.id] === t).map(chip).join("");
    body = `<p class="hint">Arraste os itens (ou toque no item e depois no destino). Para devolver um item, arraste-o de volta para a área cinza.</p>
      <div class="bank" data-drop="__bank">${inBank}</div>`;
    if (q.kind === "match") {
      body += `<div class="match">` + Object.entries(q.targets).map(([t, label]) =>
        `<div class="mrow"><span>${esc(label)}</span><div class="slot" data-drop="${t}">${inT(t)}</div></div>`).join("") + `</div>`;
    } else {
      body += `<div class="buckets">` + Object.entries(q.targets).map(([t, label]) =>
        `<div class="bucket"><h3>${esc(label)}</h3><div class="slot" data-drop="${t}">${inT(t)}</div></div>`).join("") + `</div>`;
    }
  }
  card.innerHTML = `
    <div class="qhead"><div class="qnum">Questão <b>${i + 1}</b> de ${n}</div>
      <span class="tag ${q.type === "drag" ? "drag" : ""}">${q.type === "drag" ? "Arrastar e soltar" : "Múltipla escolha"} · ${esc(q.sec)}</span></div>
    <p class="stem">${esc(q.q)}</p>${body}
    <div class="nav">
      <button class="btn ghost" id="b-prev" ${i === 0 ? "disabled" : ""}>← Anterior</button>
      <button class="btn ghost flag" id="b-flag" aria-pressed="${S.flags.has(i)}">${S.flags.has(i) ? "Marcada para revisão" : "Marcar para revisão"}</button>
      <span class="grow"></span>
      ${i < n - 1 ? `<button class="btn" id="b-next">Próxima →</button>` : `<button class="btn" id="b-end">Finalizar prova</button>`}
    </div>`;
  card.querySelectorAll("input[type=radio]").forEach(r => r.addEventListener("change", () => { S.ans[i] = +r.value; render(); }));
  $("#b-prev").onclick = () => go(i - 1);
  $("#b-flag").onclick = () => { S.flags.has(i) ? S.flags.delete(i) : S.flags.add(i); render(); };
  if ($("#b-next")) $("#b-next").onclick = () => go(i + 1);
  if ($("#b-end")) $("#b-end").onclick = askFinish;
  if (q.type === "drag") wireDrag(card, i);
  // navigator
  $("#navgrid").innerHTML = S.qs.map((_, k) =>
    `<button class="gbtn ${answered(k) ? "done" : ""} ${k === i ? "cur" : ""} ${S.flags.has(k) ? "flagged" : ""}" data-go="${k}" aria-label="Questão ${k + 1}">${k + 1}</button>`).join("");
  $("#navgrid").querySelectorAll("[data-go]").forEach(b => b.onclick = () => go(+b.dataset.go));
  const done = S.qs.filter((_, k) => answered(k)).length;
  $("#count").textContent = `${done} de ${n} respondidas`;
  $("#prog").style.width = (done / n * 100) + "%";
}
function go(k) { if (k < 0 || k >= S.qs.length) return; S.cur = k; picked = null; render(); $("#qcard").scrollIntoView({ block: "nearest" }); }

function place(i, chipId, target) {
  const a = S.ans[i];
  if (target === "__bank") delete a[chipId];
  else {
    const q = S.qs[i];
    if (q.kind === "match") Object.keys(a).forEach(c => { if (a[c] === target && c !== chipId) delete a[c]; }); // um item por definição
    a[chipId] = target;
  }
  picked = null; render();
}

function wireDrag(card, i) {
  card.querySelectorAll("[data-drop]").forEach(z => z.addEventListener("click", e => {
    if (picked && !e.target.closest(".chip")) place(i, picked, z.dataset.drop);
  }));
  card.querySelectorAll(".chip").forEach(ch => {
    if (ch.dataset.chip === picked) ch.classList.add("picked");
    ch.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); picked = picked === ch.dataset.chip ? null : ch.dataset.chip; render(); } });
    ch.addEventListener("pointerdown", e => {
      if (e.button !== 0) return;
      const sx = e.clientX, sy = e.clientY, r = ch.getBoundingClientRect();
      let ghost = null, over = null;
      ch.setPointerCapture(e.pointerId);
      const move = ev => {
        if (!ghost && Math.hypot(ev.clientX - sx, ev.clientY - sy) < 6) return;
        if (!ghost) {
          ghost = ch.cloneNode(true); ghost.classList.add("drag-ghost"); ghost.style.width = r.width + "px";
          document.body.appendChild(ghost); ch.classList.add("dragging");
        }
        ghost.style.left = (ev.clientX - (sx - r.left)) + "px"; ghost.style.top = (ev.clientY - (sy - r.top)) + "px";
        const z = document.elementFromPoint(ev.clientX, ev.clientY)?.closest("[data-drop]");
        if (z !== over) { over?.classList.remove("over"); over = z; over?.classList.add("over"); }
      };
      const up = ev => {
        ch.removeEventListener("pointermove", move); ch.removeEventListener("pointerup", up); ch.removeEventListener("pointercancel", up);
        if (ghost) {
          ghost.remove(); ch.classList.remove("dragging"); over?.classList.remove("over");
          if (over && ev.type === "pointerup") place(i, ch.dataset.chip, over.dataset.drop); else render();
        } else if (ev.type === "pointerup") {
          picked = picked === ch.dataset.chip ? null : ch.dataset.chip; render();
        }
      };
      ch.addEventListener("pointermove", move); ch.addEventListener("pointerup", up); ch.addEventListener("pointercancel", up);
    });
  });
}

function askFinish() {
  const n = S.qs.length, done = S.qs.filter((_, k) => answered(k)).length;
  $("#mtext").textContent = done < n
    ? `Você respondeu ${done} de ${n} questões. As ${n - done} em branco serão contadas como erradas.`
    : `Você respondeu todas as ${n} questões${S.flags.size ? ` e marcou ${S.flags.size} para revisão` : ""}.`;
  $("#modal").hidden = false; $("#m-no").focus();
}
$("#m-no").onclick = () => $("#modal").hidden = true;
$("#m-yes").onclick = () => { $("#modal").hidden = true; finish(); };
$("#b-finish").onclick = askFinish;
$("#b-start").onclick = start;

function finish() {
  clearInterval(tick);
  const elapsed = Date.now() - S.t0, n = S.qs.length;
  const ok = S.qs.map((_, k) => correct(k));
  const hits = ok.filter(Boolean).length, pct = Math.round(hits / n * 100), pass = pct >= PASS;
  $("#timer").hidden = true; $("#prog").style.width = "100%";
  const C = 2 * Math.PI * 62;
  const secs = SECTIONS.map(s => {
    const idx = S.qs.map((q, k) => q.sec === s ? k : -1).filter(k => k >= 0);
    const h = idx.filter(k => ok[k]).length;
    return `<div class="sec"><span>${esc(s)}</span><b>${h}/${idx.length}</b><div class="bar2"><i style="width:${h / idx.length * 100}%"></i></div></div>`;
  }).join("");
  const wrong = S.qs.map((q, k) => ({ q, k })).filter(({ k }) => !ok[k]);
  const rv = wrong.map(({ q, k }) => {
    let detail;
    if (q.type === "mc") {
      const a = S.ans[k], right = q.ops.find(o => o.ok);
      detail = `<div class="yours">Sua resposta: ${a === undefined ? "<em>em branco</em>" : "ABCD"[a] + ") " + esc(q.ops[a].t)}</div>
        <div class="right">Resposta correta: ${"ABCD"[q.ops.indexOf(right)]}) ${esc(right.t)}</div>`;
    } else {
      const a = S.ans[k];
      detail = `<ul>` + q.chips.map(c => {
        const good = a[c.id] === c.to;
        return `<li class="${good ? "ok" : "no"}">${good ? "✓" : "✗"} <b>${esc(c.t)}</b> → ${esc(q.targets[c.to])}${good ? "" : ` <span style="color:var(--muted)">(você colocou: ${a[c.id] ? esc(q.targets[a[c.id]]) : "não posicionado"})</span>`}</li>`;
      }).join("") + `</ul>`;
    }
    return `<div class="rv"><div class="qnum">Questão <b>${k + 1}</b> · ${esc(q.sec)}</div><p class="stem">${esc(q.q)}</p>${detail}<div class="why"><b>Explicação:</b> ${esc(q.exp)}</div></div>`;
  }).join("");
  $("#s-result").innerHTML = `
    <div class="card">
      <div class="res-top">
        <svg class="ring" viewBox="0 0 150 150" role="img" aria-label="${pct}% de acertos">
          <circle cx="75" cy="75" r="62" fill="none" stroke="var(--surface)" stroke-width="14"/>
          <circle cx="75" cy="75" r="62" fill="none" stroke="${pass ? "var(--ok)" : "var(--bad)"}" stroke-width="14" stroke-linecap="${pct ? "round" : "butt"}"
            stroke-dasharray="${C * pct / 100} ${C}" transform="rotate(-90 75 75)"/>
          <text x="75" y="84" text-anchor="middle" font-size="34">${pct}%</text>
        </svg>
        <div>
          <div class="eyebrow">${S.name ? esc(S.name) + " · " : ""}Resultado do simulado</div>
          <div class="verdict ${pass ? "ok" : "bad"}">${pass ? "Aprovado" : "Não aprovado"}</div>
          <div style="color:var(--muted);font-size:14px">Mínimo para aprovação: ${PASS}%</div>
          <div class="stats">
            <div><b>${hits}/${n}</b><span>acertos</span></div>
            <div><b>${n - hits}</b><span>erros</span></div>
            <div><b>${fmt(elapsed)}</b><span>tempo de prova</span></div>
          </div>
        </div>
      </div>
      <div class="secs">${secs}</div>
      <div class="actions">
        <button class="btn" id="b-again">Refazer o simulado</button>
        <button class="btn ghost" id="b-home">Voltar ao início</button>
      </div>
    </div>
    <div class="review">
      <h2>${wrong.length ? `Questões erradas (${wrong.length})` : "Revisão"}</h2>
      ${wrong.length ? rv : `<div class="allright">Parabéns! Você acertou todas as questões.</div>`}
    </div>`;
  show("s-result");
  $("#b-again").onclick = start;
  $("#b-home").onclick = () => { $("#timer").hidden = true; $("#prog").style.width = "0"; show("s-start"); };
}
