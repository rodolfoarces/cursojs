/* 1. Realizar una función suma() con JavaScript que pida la introducción
de dos números mediante input HTML, luegomostrar el resultado en la página
la adición de ambos números. */
function sumar_numeros() {
    // Obtener el primero numero
    var p = parseInt(document.getElementById("numero1").value);
    // Obtener el segundo numero
    var q = parseInt(document.getElementById("numero2").value);
    // Procesar la suma de las variables
    var res = p + q;
    // Imprimir el resultado
    document.getElementById("resultado").innerHTML = res;
}