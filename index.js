
function mudar() {
    let numeroAleatorio= Math.floor(Math.random() * 400);
    let numeroAleatorio2= Math.floor(Math.random() * 400);
    let numeroAleatorio3= Math.floor(Math.random() * 400);
    let number = numeroAleatorio.toString()
    let number2 = numeroAleatorio2.toString()
    let number3 = numeroAleatorio3.toString()
    let v = document.querySelector('div');
    var body = document.body;
    
    v.style.padding = number + "px"
    body.style.backgroundColor = `rgba(${number},${number2},${number3})`
}
var elemento = document.querySelector('input');
    
 elemento.addEventListener('mouseover', mudar); 