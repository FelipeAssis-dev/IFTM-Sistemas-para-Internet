let precos = [];

function adicionarPrecos(lista, preco){
    lista.push(preco);
}

adicionarPrecos(precos, 12.50);
adicionarPrecos(precos, 30.00);
adicionarPrecos(precos, 5.25);
adicionarPrecos(precos, 40.00);

let totalPreco = precos.reduce(function(acumulador, preco){
    return acumulador + preco
}, 0)

console.log(totalPreco)