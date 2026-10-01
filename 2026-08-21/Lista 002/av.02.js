paragrafo = prompt("Digite um texto");

antiga = prompt("Digite a letra que quer substituir");
substituir = prompt("Digite a letra que ira entrar no lugar da antiga");

paragrafo = paragrafo.toUpperCase();
antiga = antiga.toUpperCase();
substituir = substituir.toUpperCase();


palavras = paragrafo.split(" ");

for (i = 0; i < palavras.length; i++) {
    palavraAtual = palavras[i];
    palavraNova = "";

    for (j = 0; j < palavraAtual.length; j++) {
        if (j === 0 && palavraAtual.charAt(j) === antiga) {
            palavraNova += substituir;
        } else {
            palavraNova += palavraAtual.charAt(j);
        }
    }

    palavras[i] = palavraNova;
}

paragrafoNovo = palavras.join(" ");

alert(paragrafoNovo);
