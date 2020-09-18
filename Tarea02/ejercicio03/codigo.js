/*3. Crear un array meses, una función recorridoArray () y mostrarlos meses en la página web. */
function recorrerArray() {
    // Meses del anho
    var meses = [ "Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto",
     "Setiembre", "Octubre", "Noviembre", "Diciembre"];

    // Imprimir el resultado
    var resultado = "";
    for ( mes in meses) {
        resultado = resultado + meses[mes] + " </br>";
    }

    return resultado;
    
}

document.getElementById("meses").innerHTML = recorrerArray();