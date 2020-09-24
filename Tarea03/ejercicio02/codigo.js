/* 
2. Realizar  una  página  html  con  el  uso  del  evento  mouseover()  para
mostrar  un  párrafo pasando el cursor encima de un texto.
*/
const y = document.getElementById("hoverPara");

y.addEventListener("mouseover", RespondMouseOver);

function RespondMouseOver() { 
    document.getElementById("efecto").innerHTML+= "MouseOver Event-Encima del texto" + "<br>";
} 