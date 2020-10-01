function validarEntero(valor){
    valor = parseInt(valor);
    if (isNaN(valor)){
        return "";
    }else{
        return valor;
    }
}

function validarFormulario() {
    var verificar = true;
    var expRegNombres = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,}([\s][A-Za-zÁáÉéÍíÓóÚúÜüÑñ]{1,})+$/;
    var expRegEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var expRegUrl = /^(http|https|ftp)+\:+\/\/+(www\.|)+[a-z0-9\-\.]+([a-z\.]|)+\.[a-z]{2,4}$/i;
    var expRegTelefono = /^\(?([0-9]{4})\)?[-.]?([0-9]{3})[-.]?([0-9]{3})$/;
    var formulario = document.getElementById("formulario");
    var nombres = document.getElementById("nombres");
    var direccion = document.getElementById("direccion");
    var email = document.getElementById("email");
    var website = document.getElementById("website");
    var telefono = document.getElementById("telefono");
    var comentario = document.getElementById("comentario");

    edad = document.formulario.edad.value;
    edad = validarEntero(edad);
    document.formulario.edad.value=edad;

    if (!nombres.value) {
        alert("Escriba sus nombres por favor.");
        nombres.focus();
        verificar = true;
        return false;
    } else if(nombres.value.split("").length < 2) {
        alert("Escriba sus nombres completos por favor.");
        nombres.focus();
        verificar = true;
        return false;
    } else if(!expRegNombres.exec(nombres.value)) {
        alert("Este campo admite letras de la A-Za-z, y no admite espacios en blanco al final.");
        nombres.focus();
        verificar = true;
        return false;
    } else if (edad == "") {
        alert("Tiene que introducir un número entero en su edad");
        document.formulario.edad.focus();
        return 0;
    } else if ( edad < 18 ) {
        alert("Debe ser mayor de 18 años");
        document.formulario.edad.focus();
        return 0;
    } else if (!direccion.value){
        alert("Escriba su dirección");
        direccion.focus();
        verificar = true;
        return false;
    } else if (!email.value) {
        alert("Escriba su email");
        email.focus();
        verificar = true;
        return false;
    } else if (!expRegEmail.exec(email.value)) {
        alert("Escriba un email valido");
        email.focus();
        verificar = true;
        return false;
    } else if ((website.value!="") && !expRegUrl.exec(website.value)) {
        alert("Escriba un formato de sitio web valido");
        website.focus();
        verificar = true;
        return false;
    } else if (!telefono.value) {
        alert("Escriba un numero de telefono por favor");
        telefono.focus();
        verificar = true;
        return false;
    } else if (!expRegTelefono.exec(telefono.value)){
        alert("El campo telefono no admite espacios en blanco");
        telefono.focus();
        verificar = true;
        return false;
    } else if (!comentario.value) {
        alert("El campo Mensaje es requerido");
        comentario.focus();
        verificar = true;
        return false;
    } else if (!comentario.value) {
        alert("El campo Mensaje es requerido");
        comentario.focus();
        verificar = true;
        return false;
    } else if (comentario.value.length > 1000) {
        alert("El campo Mensaje no puede tener mas de 1000 caracteres");
        comentario.focus();
        verificar = true;
        return false;
    }
    var elementos = document.getElementsByName('pregunta');
    for (var i=0; i< elementos.length; i++) {
        alert("Elemento:" + elementos[i].value+"\n Seleccionado: "+ elementos[i].checked);

    } 
    if (verificar==true) {
        document.formulario.submit();
    }
}

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

function calcular() {
    var contadorChar = document.getElementById("contador-char").innerHTML = 1000 - document.formulario.comentario.value.length;
}

window.onload=function(){
    var botonLimpiar=document.getElementById("limpiar");
    botonLimpiar.onclick=limpiarFormulario;
    var botonEnviar = document.getElementById("enviar");
    botonEnviar.onclick=validarFormulario;

    var x = document.getElementsByClassName("logodescrip");
    document.getElementById("logo").innerHTML = x[0].innerHTML + "----" + new Date();
}
