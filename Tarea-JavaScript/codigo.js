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