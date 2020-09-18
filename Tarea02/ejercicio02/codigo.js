/* 2. Realizar una función Celsius() con JavaScriptque pida al usuario introducir
un numero en Fahrenheit mediante un input y mostrar la conversióna Celsius en la página. */
function Celsius() {
    // Obtener el primero numero
    var far = parseInt(document.getElementById("farenheit").value);
    // Procesar la conversion del input
    var res = (5/9) * (far-32);
    // Imprimir el resultado
    document.getElementById("resultado").innerHTML = res;
}