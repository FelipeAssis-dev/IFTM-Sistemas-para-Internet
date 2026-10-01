let pal = [];

function adicionarPal(lista, palavra){
    lista.push(palavra)
}

adicionarPal(pal, "Sol");
adicionarPal(pal, "mar");
adicionarPal(pal, "computador");
adicionarPal(pal, "LUA");

let maiores = pal.filter(function(p){
    return p.length > 3;
})

console.log(maiores)