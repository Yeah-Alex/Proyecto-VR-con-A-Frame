 //Clase carta seleccionada
 function cartaSelec() {
   var indice = null;

   this.icono = function () {
     return this.indice.children[0].children[0].getAttribute("src").slice(4);
   }

   this.volteoCarta180 = function () {
     var a_animation = document.createElement('a-animation');
     a_animation.setAttribute('attribute', 'rotation');
     a_animation.setAttribute('dur', '1000');
     a_animation.setAttribute('to', '0 180 0');
     this.indice.appendChild(a_animation);
   }

   this.volteoCarta360 = function () {
     var a_animation = document.createElement('a-animation');
     a_animation.setAttribute('attribute', 'rotation');
     a_animation.setAttribute('dur', '1000');
     a_animation.setAttribute('to', '0 360 0');
     this.indice.appendChild(a_animation);
   }

   this.volteoCartaSonido = function () {
     var sonido = new Audio("audio/volteo_carta.mp3");
     sonido.play();
   }
 }