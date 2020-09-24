/* 
5. Realizar una función que muestre una imagen enel html con el evento mouseout()
*/
const x = document.getElementById("texto"); 

x.addEventListener("mouseover", onMouseOver);

function onMouseOver() {

    var imagen = '<img src="imagen.jpg" width="100">';

    document.getElementById("imagen").innerHTML = imagen; 
} 