

var result

function Somar() {
    v1 = parseFloat(document.getElementById("v1").value);
    v2 = parseFloat(document.getElementById("v2").value);
    if (document.getElementById("v1").value == "" && document.getElementById("v2").value == "") {
        alert("Preencha os 2 campos!!")
    }else{
        v1 = parseFloat(document.getElementById("v1").value);
        v2 = parseFloat(document.getElementById("v2").value);
        result = v1 + v2;
        document.getElementById("resultado").value = result;
    }
}


function Subtrair() {
    v1 = parseFloat(document.getElementById("v1").value);
    v2 = parseFloat(document.getElementById("v2").value);
    if (document.getElementById("v1").value == "" && document.getElementById("v2").value == "") {
        alert("Preencha os 2 campos!!")
    } else {
        v1 = parseFloat(document.getElementById("v1").value);
        v2 = parseFloat(document.getElementById("v2").value);
        result = v1 - v2;
        document.getElementById("resultado").value = result;
    }
}

function Multiplicar() {
    v1 = parseFloat(document.getElementById("v1").value);
    v2 = parseFloat(document.getElementById("v2").value);
    if (document.getElementById("v1").value == "" && document.getElementById("v2").value == "") {
        alert("Preencha os 2 campos!!")
    } else {
        v1 = parseFloat(document.getElementById("v1").value);
        v2 = parseFloat(document.getElementById("v2").value);
        result = v1 * v2;
        document.getElementById("resultado").value = result;
    }
}

function Dividir() {
    v1 = parseFloat(document.getElementById("v1").value);
    v2 = parseFloat(document.getElementById("v2").value);
    if (document.getElementById("v1").value == "" && document.getElementById("v2").value == "") {
        alert("Preencha os 2 campos!!")
    } else if( v2 == 0 ) {
        alert("Não Existe Divisão por 0!!!")
    }else{
        v1 = parseFloat(document.getElementById("v1").value);
        v2 = parseFloat(document.getElementById("v2").value);
        result = v1 / v2;
        document.getElementById("resultado").value = result;
    }
}