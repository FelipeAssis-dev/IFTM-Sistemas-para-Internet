
window.onload = function () {
    document.getElementById("btnEntrar").onclick = validarAcesso;
    document.getElementById("btnLimpar").onclick = limparCampos;
};
 
function validarAcesso() {
    var login = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmarSenha").value;
 
    if (login === "") {
        alert("O campo Login não foi preenchido. Por favor, informe o login.");
        return;
    }
 
    if (senha !== confirmarSenha) {
        document.getElementById("senha").value = "";
        document.getElementById("confirmarSenha").value = "";
        alert("As informações dos campos Senha e Confirmar Senha não são iguais.");
        return;
    }
 
    alert("Todos os campos foram digitados corretamente.");
}
 
function limparCampos() {
    document.getElementById("login").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmarSenha").value = "";
}
 