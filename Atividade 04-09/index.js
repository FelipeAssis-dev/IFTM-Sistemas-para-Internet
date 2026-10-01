votosCand = [0, 0 , 0 , 0 , 0 ,0]

document.getElementById("VotosCand1").innerHTML = votosCand[0]; 
document.getElementById("VotosCand2").innerHTML = votosCand[1]; 
document.getElementById("VotosCand3").innerHTML = votosCand[2]; 
document.getElementById("VotosCand4").innerHTML = votosCand[3]; 
document.getElementById("VotosCand5").innerHTML = votosCand[4]; 
document.getElementById("VotosCand6").innerHTML = votosCand[5]; 

document.getElementById("btnIncrementar").addEventListener("click", function(){
    incrementarVotos(1);
} );
document.getElementById("btnIncrementar2").addEventListener("click", function(){
    incrementarVotos(2);
} );
document.getElementById("btnIncrementar3").addEventListener("click", function(){
    incrementarVotos(3);
} );
document.getElementById("btnIncrementar4").addEventListener("click", function(){
    incrementarVotos(4);
} );
document.getElementById("btnIncrementar5").addEventListener("click", function(){
    incrementarVotos(5);
} );
document.getElementById("btnIncrementar6").addEventListener("click", function(){
    incrementarVotos(6);
} );



function incrementarVotos(numCand){
    votosCand[numCand-1]++;
document.getElementById("VotosCand" + numCand ).innerHTML = votosCand[numCand-1];

}
