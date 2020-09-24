/* 
1. Realizar una página html con el uso del evento onclick de la Forma 
Tradicional que muestre un mensaje en pantalla indicando “Evento 
onclick”  utilizando el método alert().
*/
const x = document.getElementById("clickar"); 
x.addEventListener("click", RespondClick);
function RespondClick() {
    alert("Se realizó click");
    //document.getElementById("effect").innerHTML+= "Evento Click" + "<br>"; 
} 