/* 5. Realizar una función calcularSalario() con JavaScript donde: A un trabajador le pagan
según sus horas y una tarifa de pago por horas. La tarifa por horas es de 20.000 guaraníes. 
Si la cantidad de horas trabajadas es mayor a 40 horas. La tarifa se incrementa en 30.000
guaraníespor horasegúnlo restanteluego de las 40horas. Calcular el salario del trabajador. 
OBS: Se debe introducir mediante input la cantidad de horas trabajadas y con un botón 
calcular salario, debe mostrar el resultado en pantalla. No se admite las horas trabajadas 
menor a 40. */
function calcularSalario() {
    // Obtener las horas trabajadas
    var horas_trabajadas = parseInt(document.getElementById("horas").value);
    // Este sera la variable devuelta
    var salario = "";
    if ( horas_trabajadas < 40 ) {
        salario = "No se admite las horas trabajadas menor a 40";
    } else {
        salario = 40*(20000) + (horas_trabajadas-40)*30000;
    }
    // Imprimir el resultado
    document.getElementById("resultado").innerHTML = salario;
}