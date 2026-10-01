let nomes = [];

function adicionarNomes(lista, novoNome){
    lista.push(novoNome);
}

adicionarNomes(nomes, "Felipe");
adicionarNomes(nomes, "Luanny");
adicionarNomes(nomes, "Luiz");
adicionarNomes(nomes, "Fefo");
adicionarNomes(nomes, "Iara");
adicionarNomes(nomes, "Oliver");

nomes.forEach(function (nome){
    console.log(`Olá, ${nome}`)
})



