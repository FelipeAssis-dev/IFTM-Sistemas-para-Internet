nome = prompt("Digite seu nome completo");
idade = parseInt(prompt("Digite a sua idade:"));

if(idade > 18)
    alert(` ${nome}, você já possui idade para tirar sua CNH`)
else
    alert(`${nome}, voce ainda não tem idade para tirar cnh faltam ${18 - idade} anos  `)