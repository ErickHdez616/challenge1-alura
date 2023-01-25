var textoInput = document.getElementById("campo1");
var imagen = document.getElementById("persona");
var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");
var salida = document.getElementById("campo2");
var copiar = document.getElementById("btn3");

var textoParaEncriptar;
var textoParaDesencriptar;

// Funciones de los botones al ser apretados

function accionBotonEncriptar(){
    if(textoInput.value.length == 0){
        ocultarCopiar_y_Output();
        mostrarImg_y_Txt();
    }else{
        ocultarImg_y_Txt();
        mostrarCopiar_y_Output();
        encriptarTexto();
    }
    
}

function accionBotonDesencriptar(){
    if(textoInput.value.length == 0){
        ocultarCopiar_y_Output();
        mostrarImg_y_Txt();
    }else{
        ocultarImg_y_Txt();
        mostrarCopiar_y_Output();
        desencriptarTexto();
    }
}

// Funciones extra 

function ocultarImg_y_Txt(){ 
    return [imagen.style.display = "none", txt1.style.display = "none"
    , txt2.style.display = "none"];
}

function mostrarImg_y_Txt(){
    return [imagen.style.display = "block", txt1.style.display = "block"
    , txt2.style.display = "block"];
}

function mostrarCopiar_y_Output(){
    return [salida.style.display = "block", copiar.style.display = "block"];
}

function ocultarCopiar_y_Output(){
    return [salida.style.display = "none", copiar.style.display = "none"];
}

// Aquí las funciones propias de encriptar y desencriptar per se

function encriptarTexto(){
    textoParaEncriptar = textoInput.value.toLowerCase();
    
    // Código de encriptación...
    var str = textoParaEncriptar;
    var arr = [];

    for(let i of str) {
        if(i=='e'){
            i = 'enter';
            arr.push(i);
        }else

        if(i=='i'){
            i = 'imes';
            arr.push(i);
        }else

        if(i=='a'){
            i = 'ai';
            arr.push(i);
        }else

        if(i=='o'){
            i = 'ober';
            arr.push(i);
        }else

        if(i=='u'){
            i = 'ufat';
            arr.push(i);
        }
        
        else{
            arr.push(i);
        }
    }

    var palabraEncriptada = '';

    for(var j=0; j<arr.length; j++){   
        palabraEncriptada = palabraEncriptada + arr[j];
    }

    return salida.innerHTML = palabraEncriptada;
    
}

function desencriptarTexto(){
    textoParaDesencriptar = textoInput.value;
    return salida.innerHTML = textoParaDesencriptar;
    // Código de desencriptación...
}

// Código de encriptación




