btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener('click', function() {
  const nomeCompleto = document.getElementById("nome").value.trim();

  if (!nomeCompleto) {
    alert("Preencha o campo");
    return;
  }

  const partes = nomeCompleto.split(" ");

  if (partes.length < 2) {
    alert("Digite seu nome completo, não apenas o primeiro");
    return;
  }

  const primeiroNome = partes[0];
  const ultimoNome = partes.at(-1);

  localStorage.setItem("primeiroNome", primeiroNome);
  localStorage.setItem("ultimoNome", ultimoNome);
  localStorage.setItem("nomeCompleto", nomeCompleto);

  window.location.href = "menu.html";
});
