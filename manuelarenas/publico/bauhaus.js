var rojos = document.getElementsByClassName("color_red"),
  azules = document.getElementsByClassName("color_blue"),
  blancos = document.getElementsByClassName("color_white"),
  efectos = ["ease", "ease-out", "ease-in", "ease-in-out"],
  efectoActual = 0;

console.log("Rojos: ", rojos.length);
console.log("Azules: ", azules.length);
console.log("Blancos: ", blancos.length);

function definirAnimacion() {
  efectoActual++;
  
  if (efectoActual >= efectos.length){
      efectoActual = 0;    
  }

  return efectos[efectoActual];
}


setInterval(function() {
  for (var i = 0; i < rojos.length; i++) {
    rojos[i].style.animationTimingFunction = definirAnimacion();
  }
 }, 3500);

setInterval(function() {
  for (var i = 0; i < azules.length; i++) {
    azules[i].style.animationTimingFunction = definirAnimacion();
  }
 }, 1500);

setInterval(function() {
  for (var i = 0; i < blancos.length; i++) {
    blancos[i].style.animationTimingFunction = definirAnimacion();
    console.log("("+i+"):", blancos[i].style.animationTimingFunction);
  }
 }, 3000);

