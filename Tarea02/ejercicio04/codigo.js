/* 4. Realizar un función comparacion() con JavaScript, donde el usuario ingresa dos números
mediante input y mostrar en la página cual es el mayor, si son iguales debe mostrar un mensaje “los números son iguales” */
function comparacion() {
    // Obtener el primero numero
    var p = parseInt(document.getElementById("numero1").value);
    // Obtener el segundo numero
    var q = parseInt(document.getElementById("numero2").value);
    // Procesar la igualdad
    if (p == q) {
        var res = "los numeros son iguales";
    } else {
        // procesar el mayor de ambos
        if (p > q) {
            var res =  p;
        } else {
            var res =  q;
        }
    }
    // Imprimir el resultado
    document.getElementById("resultado").innerHTML = res;
}