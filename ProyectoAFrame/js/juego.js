var aciertos = 0;
var equivocaciones = 0;
var carta1 = new cartaSelec();
var carta2 = new cartaSelec();
var numeroAleatorio;
var cartas = [
  "Baby_Bowser",
  "Baby_Mario",
  "Bandit",
  "Coin",
  "Flower",
  "Lakitu",
  "Little_Mouser",
  "Snifit",
  "Stars",
  "Winged_Cloud",
  "Mufti_Guy",
  "Piranha_Plant",
  "Yoshi_and_Baby_Mario"
];

//Escoger 4 cartas aleatoriamente y ponerlas en la baraja
var baraja = [];
for (i = 0; i < 6; i++) {
  numeroAleatorio = Math.floor(Math.random() * cartas.length);
  if (baraja.indexOf(cartas[numeroAleatorio]) === -1) {
    baraja.push(cartas[numeroAleatorio]);
    baraja.push(cartas[numeroAleatorio]);
  } else {
    i--;
  }
}

//Revolver las cartas de la baraja
for (i = 0; i < baraja.length; i++) {
  numeroAleatorio = Math.floor(Math.random() * baraja.length);

  var tmp = baraja[i];
  baraja[i] = baraja[numeroAleatorio];
  i
  baraja[numeroAleatorio] = tmp;
}

//Poner imagene a cada una de las cartas
for (i = 0; i < baraja.length; i++) {
  document.querySelectorAll("a-plane")[0]
    .children[i].children[0].children[0]
    .setAttribute("src", "img/" + baraja[i] + ".png");
}

//Cuadro de dialogo de Bienvenida
//Preguntar por el nombre de la pesona
var persona = prompt("Bienvenido. \nPon tu nombre por favor.", "Shigeru Miyamoto");
if (persona == null || persona == "") {
  location.reload();
}

//Metodo que reproducira un sonido si la persona gana, se equivoca o acierta
function reproducirSonido(sonido) {
  var sonido;

  switch (sonido) {
    case "correcto":
      sonido = new Audio("audio/correcto.mp3");
      break;
    case "incorrecto":
      sonido = new Audio("audio/error.mp3");
      break;
    case "victoria":
      sonido = new Audio("audio/victoria.mp3");
      break;
  }

  sonido.play();
}

//Metodo que tomara cada una de las cartas seleccionadas
function procesoCartas(elemento) {

  /* **************
 SELECCIONAR CARTA
  ************** */
  //Cuando se seleccione una carta se obtendra informacion de ella, como su indice. (De las 12 cartas, cual es)
  //Se volteara la carta
  //Se ejecutara un sonido

  if (carta1.indice == null) {

    carta1.indice = elemento;
    carta1.volteoCarta360();
    carta1.volteoCartaSonido();

  } else {

    carta2.indice = elemento;
    carta2.volteoCarta360();
    carta2.volteoCartaSonido();

  }

  /* **************
 COMPARAR DOS CARTAS SELECCIONADAS
  ************** */
  if (carta2.indice != undefined) {

//Compara las dos imagenes de las cartas
/* SIN SON IGUALES se:
1. ejecutara un sonido 
2. limpiara los indices de cada objecto "cartaSelec"
3. aumentara el puntaje de "aciertos"
*/

/* SIN SON DIFERENTES se:
1. ejecutara un sonido 
2. volteara las cartas
3. limpiara los indices de cada objecto "cartaSelec"
4. aumentara el puntaje de "aciertos"
*/
    if (carta1.icono() == carta2.icono()) {
      reproducirSonido("correcto");

      carta1.indice = carta2.indice = null;

      aciertos++;
      document.querySelector("#aciertos").setAttribute("value", "Aciertos: " + aciertos);
    } else {

      setTimeout(function () {
        reproducirSonido("incorrecto");

        carta1.volteoCarta180();
        carta2.volteoCarta180();

        carta1.indice = carta2.indice = null;

        equivocaciones++;
        document.querySelector("#equivocaciones").setAttribute("value", "Equivocaciones: " + equivocaciones);
      }, 1000);

    }
  }

  /* **************
  FIN DEL JUEGO
  ************** */
  if (aciertos == 6) {
    setTimeout(function () {

    //Reproducir musica de victoria
      reproducirSonido("victoria");

    //Aperece un cuadro de dialogo felicitandonos
      if (confirm("Felicidades " + persona + ". \nGanaste! :)\nAciertos: " + aciertos + "\tEquivocaciones:" +
          equivocaciones) == true)
        location.reload();

    }, 1000);
  }



}