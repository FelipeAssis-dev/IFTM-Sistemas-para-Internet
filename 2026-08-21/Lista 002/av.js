nome = prompt("Digite seu nome completo:")
vetor = nome.split(" ");

iniciais= []

for(i = 0 ; i < vetor.length; i++ ){
  if(vetor[i].length > 2)  
    iniciais [i] = vetor[i].charAt(0);
}
alert(iniciais.join(" "));

