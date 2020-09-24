/* 
4. Realizar una función división en javascript, donde el usuario ingresara los 
números mediante inputs y muestre el resultado en un alert(). (Validar la 
división atendiendo que el usuario si ingresa un numero 0 para el divisor, 
muestre el mensaje “división por cero, no existe”). Utilizar el evento click.
*/

function dividir_numeros() { 
    // Obtener el primero numero
    
    var n2 = parseInt(document.getElementById("numero2").value);
 
    if ( n2 == 0) {
        alert("El dividendo no puede ser 0")
    } else {
        var n1 = parseInt(document.getElementById("numero1").value);

        var res = n1/n2;

        document.getElementById("resultado").innerHTML = res;
    }
} 