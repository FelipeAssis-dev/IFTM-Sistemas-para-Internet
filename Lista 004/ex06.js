 const listaUsuarios = [
      { usuario: 'felipe', senha: '123' },
      { usuario: 'maria', senha: '456' },
      { usuario: 'joao', senha: '789' }
];
localStorage.setItem('usuarios', JSON.stringify(listaUsuarios));

const usuariosSalvos = JSON.parse(localStorage.getItem('usuarios')) || [];

const ul = document.getElementById('listaUsuarios');


let conteudoHTML = '';


for (let i = 0; i < usuariosSalvos.length; i++) {
      const item = usuariosSalvos[i];
      conteudoHTML += `<li>Usuário: ${item.usuario} | Senha: ${item.senha}</li>`;
}

    ul.innerHTML = conteudoHTML;