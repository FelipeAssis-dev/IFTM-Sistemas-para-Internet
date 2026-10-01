botao = document.getElementById("botao-cadastrar");

function salvarUsuario() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    localStorage.setItem("usuario", usuario);
    localStorage.setItem("senha", senha);
}

botao.addEventListener("click", salvarUsuario);

