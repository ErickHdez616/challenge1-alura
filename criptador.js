var textoInput = document.getElementById("campo1");
var imagen = document.getElementById("persona");
var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");
var salida = document.getElementById("campo2");
var copiar = document.getElementById("btn3");

function reescribirTexto(){
    valor = textoInput.value;
    return salida.innerHTML = valor;
}

function accionBotonEncriptar(){
    ocultarImg_y_Txt();
    mostrarCopiar_y_Output();
    reescribirTexto();
}

function accionBotonDesencriptar(){
    mostrarImg_y_Txt();
    ocultarCopiar_y_Output();
}

function ocultarImg_y_Txt(){ 
    return [imagen.style.display = "none", txt1.style.display = "none"
    , txt2.style.display = "none"];
}

function mostrarImg_y_Txt(){
    return [imagen.style.display = "block", txt1.style.display = "block"
    , txt2.style.display = "block"];
}

function mostrarCopiar_y_Output(){
    return [salida.style.display = "inline-block", copiar.style.display = "inline-block"];
}

function ocultarCopiar_y_Output(){
    return [salida.style.display = "none", copiar.style.display = "none"];
}