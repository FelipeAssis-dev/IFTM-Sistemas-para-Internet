const btnSalvar = document.getElementById("cadastrar");

btnSalvar.addEventListener('click', function(){
    let usuario = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

const Pessoa = {
    nome:usuario,
    senha:senha
}

localStorage.setItem(Pessoa, JSON.stringify(Pessoa));

alert("Usuário cadastrado com sucesso!");
})