const btnCadastrar =  document.getElementById("cadastrar");

btnCadastrar.addEventListener('click', function(){
    const usuarioInput = document.getElementById("nome").value;
    const senhaInput = document.getElementById("senha").value;
    if(!usuarioInput || !senhaInput){
        alert("Preencha todos os campos")
        return;
    }
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];

    const novoUsuario = {
        usario:usuarioInput,
        senha:senhaInput
    }
    usuariosSalvos.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuariosSalvos));

    alert('Usuário cadastrado com sucesso!');

    document.getElementById('usuario').value = '';
    document.getElementById('senha').value = '';
})