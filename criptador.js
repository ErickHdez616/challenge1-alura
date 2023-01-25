var botonesId = document.querySelectorbyId("botonesId");

function accionA(){
    botonesId.link();
    encriptar();
}

function accionB(){
    botonesId.link();
}

function encriptar(){
    var textoInput = document.getElementbyId("campo1").value;
    alert("Haz escrito: " + textoInput);
}