let celcius =[];

function adicionarTemp(lista, temp){
    lista.push(temp);
}

adicionarTemp(celcius, 0);

adicionarTemp(celcius, 10);
adicionarTemp(celcius, 20);
adicionarTemp(celcius, 30);

let farenhites = celcius.map(function(converte){
    return (converte * 1.8) + 32;
})

console.log(farenhites)