// valor1 = parseFloat(prompt("digite o primeiro valor"));
// valor2 = parseFloat(prompt("digite o segundo valor"));
// tipoConta = prompt("Digite um operador:\n\n[+] Soma\n[-] Subtração \n[*]Multiplicação \n[/} Divisão");;
// var resultado = 0;
// sair = 0;

// while(sair == 0){
//     switch(tipoConta){
//     case "+":
//         resultado = valor1+valor2;
//         break;
//     case "-":
//         resultado = valor1-valor2;
//         break;
//     case "*":
//         resultado = valor1*valor2;
//         break;
//     case "/":
//         resultado = valor1/valor2;
//         break;
// }
// alert(resultado)
// sair = parseInt(prompt("Para sair digite um valor diferente de 0"))

// }



// operando1 = parseFloat(prompt("Digite o primeiro valor:"));
// operando2 = parseFloat(prompt("Digite o segundo valor:"));
// operador = prompt("Digite um operador:\n\n[+] Soma\n[-] Subtração \n[*]Multiplicação \n[/} Divisão");

// if (operador == "+")
//     alert(`${operando1} ${operador} ${operando2} = ${operando1+operando2}`);
// else if(operador == "-")
//     alert(`${operando1} ${operador} ${operando2} = ${operando1-operando2}`);
// else if(operador == "*")
//     alert(`${operando1} ${operador} ${operando2} = ${operando1*operando2}`);
// else if(operador == "/"){
//     if(operando2 == 0)
//         alert("Divisão inválida")
//     else
//         alert(`${operando1} ${operador} ${operando2} = ${operando1/operando2}`);
// }
// else{
//     alert("Operador invalido!")
// }
    
qtd = prompt("QUantas vezes voce quer ver seu nome?");

for (i=0; i < qtd; i++)
    document.write("<p>Felipe</p>");