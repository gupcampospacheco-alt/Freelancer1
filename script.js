document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector("nav ul").classList.toggle("active");
});

document.getElementById("formContato").addEventListener("submit", function(e){
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");

    function mostrarMensagem(texto, tipo) {
  const alerta = document.getElementById("mensagem");
  const textoMsg = document.getElementById("mensagem-texto");
  const icone = document.getElementById("alerta-icone");

  alerta.classList.remove("oculto", "erro", "sucesso");
  alerta.classList.add(tipo);

  textoMsg.innerText = texto;

  if (tipo === "erro") {
    icone.innerText = "!";
  } else if (tipo === "sucesso") {
    icone.innerText = "✓";
  }

  // some sozinho depois de 4s
  setTimeout(() => {
    alerta.classList.add("oculto");
  }, 4000);
}

window.fecharMensagem = function () {
  document.getElementById("mensagem").classList.add("oculto");
};
});
status: "nova"
data: new Date()

// ===== JAVASCRIPT PARA PAINEL DE MENSAGENS =====

// Mensagens de exemplo
let mensagens = [
  {id: 1, autor: "Chefe", texto: "Olá, precisamos discutir o relatório.", lida: false},
  {id: 2, autor: "Colega", texto: "Você pode revisar meu trabalho?", lida: true},
  {id: 3, autor: "RH", texto: "Lembrete: reunião amanhã 10h.", lida: false}
];

const mensagensLista = document.getElementById('mensagensLista');

// Função para renderizar todas as mensagens
function renderMensagens() {
  mensagensLista.innerHTML = '';
  mensagens.forEach(msg => {
    const div = document.createElement('div');
    div.className = 'card-mensagem' + (msg.lida ? ' lida' : '') + ' nova';
    div.innerHTML = `
      <div class="conteudo-mensagem">
        <p><strong>${msg.autor}:</strong> ${msg.texto}</p>
        <small>${msg.lida ? 'Lida' : 'Não lida'}</small>
        <div class="resposta-container">
          <input type="text" placeholder="Responder..." id="resposta-${msg.id}">
          <button onclick="responderMensagem(${msg.id})">Enviar</button>
        </div>
      </div>
      <div class="acoes">
        <button onclick="marcarLida(${msg.id})">${msg.lida ? 'Desmarcar' : 'Marcar como lida'}</button>
        <button class="apagar" onclick="apagarMensagem(${msg.id})">Apagar</button>
      </div>
    `;
    mensagensLista.appendChild(div);

    // Remove a classe "nova" após 0.5s para animação
    setTimeout(() => div.classList.remove('nova'), 500);
  });
}

// Função para marcar/desmarcar como lida
function marcarLida(id) {
  const msg = mensagens.find(m => m.id === id);
  msg.lida = !msg.lida;
  renderMensagens();
}

// Função para apagar mensagem
function apagarMensagem(id) {
  if(confirm('Tem certeza que quer apagar esta mensagem?')) {
    mensagens = mensagens.filter(m => m.id !== id);
    renderMensagens();
  }
}

// Função para responder mensagem
function responderMensagem(id) {
  const input = document.getElementById(`resposta-${id}`);
  const resposta = input.value.trim();
  if(resposta === '') {
    alert('Digite uma resposta antes de enviar!');
    return;
  }
  // Aqui você poderia enviar para servidor ou API
  alert(`Resposta enviada para ${mensagens.find(m=>m.id===id).autor}: ${resposta}`);
  input.value = '';
  
  // Marcar a mensagem como lida automaticamente
  const msg = mensagens.find(m => m.id === id);
  msg.lida = true;
  renderMensagens();
}

// Renderiza as mensagens quando a página carrega
renderMensagens();

