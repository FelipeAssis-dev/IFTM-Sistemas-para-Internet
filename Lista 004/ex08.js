const btnCadastrar =  document.getElementById("cadastrar");

btnCadastrar.addEventListener('click', function(){
    const usuarioInput = document.getElementById("nome").value;
    const senhaInput = document.getElementById("senha").value;
    if(!usuarioInput || !senhaInput){
        alert("Preencha todos os campos")
        return;
    }
    const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    // FAZ a mesma coisa usando laço FOR
//     let usuarioExiste = false;

//     for (let i = 0; i < usuariosSalvos.length; i++) {
//   if (usuariosSalvos[i].usuario === usuarioInput) {
//     usuarioExiste = true;
//     break; // Para o laço assim que encontra
//   }
// }
    const usuarioExiste = usuariosSalvos.some(function(item) {
        return item.usuario === usuarioInput;
      });

      
      if (usuarioExiste == true) {
        alert("Erro: Este nome de usuário já está cadastrado!");
        return; 
      }
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