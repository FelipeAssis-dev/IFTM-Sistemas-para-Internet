const primeiroNome = localStorage.getItem("primeiroNome");
const ultimoNome = localStorage.getItem("ultimoNome");
const spanNome = document.getElementById("primeiroNome");

if (spanNome && primeiroNome) {
  spanNome.textContent = `${primeiroNome}`;
}

const numeroCarinhos = document.getElementById("numeroCarinhos");
let qtdCarinhos = 0;

document.getElementById("gato2").addEventListener('click', function(){
        qtdCarinhos++;
        numeroCarinhos.innerText = qtdCarinhos;
})

let gato3 = document.getElementById("gato3");

gato3.addEventListener('mouseenter', function() {
    gato3.src = 'Imagens/gato06.gif';
});
gato3.addEventListener('mouseleave', function() {
    gato3.src = 'Imagens/gato03.gif';
});

let gato4 = document.getElementById("gato4");

gato4.addEventListener('mouseenter', function(){
        const text = document.getElementById("textoGato");
        text.textContent = `Ai, pare de fazer cócegas!`
});
gato4.addEventListener('mouseleave', function(){
        const text = document.getElementById("textoGato");
        text.textContent = `lálálálálá....`
});

document.getElementById("btnGerador").addEventListener('click', function(){
        const num = document.getElementById("numero");
        num.value = Math.floor(Math.random() * 100) + 1;
})


