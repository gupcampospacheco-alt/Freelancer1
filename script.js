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

