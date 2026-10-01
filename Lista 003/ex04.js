function MediaAluno(){
    nota1 = parseFloat(document.getElementById("b1").value);
    nota2 = parseFloat(document.getElementById("b2").value);
    mediaFinal = nota1 + nota2
    if(mediaFinal >= 60){
        alert("Aluno Aprovado na Disciplina!!");
    }else{
        alert("Aluno Reprovado na Disciplina!!!")
    }
}