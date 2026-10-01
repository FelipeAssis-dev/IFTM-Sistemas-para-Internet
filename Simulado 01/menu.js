const primeiroNome = localStorage.getItem("primeiroNome");
const ultimoNome = localStorage.getItem("ultimoNome");
const spanNome = document.getElementById("primeiroNome");

if (spanNome && primeiroNome) {
  spanNome.textContent = `${primeiroNome} ${ultimoNome || ""}`;
}

document.getElementById("btnEntrar").addEventListener('click', function(){
          window.location.href = "felino.html";
})


