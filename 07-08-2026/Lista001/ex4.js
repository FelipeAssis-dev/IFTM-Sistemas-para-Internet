nota1 = parseFloat(prompt("Digite a nota do Primeiro bimestre"));
nota2 = parseFloat(prompt("Digite a nota do Segundo bimestre"));
notaFinal = nota1 + nota2 ;

if(notaFinal >= 60 )
    alert("Aluno Aprovado!!")
else
    alert(`Aluno reprovado faltam ${60 - notaFinal} pontos`)