//Esta variable guarda una referencia al control de resultado, 
// se declara global para no tener que estar ejecutando document.getElementById en cada ocasión que se necesite.

var valor= null;

let ctrlMostrado = document.getElementById('texto');
let ctrlMostradoI = document.getElementById('inicio');
let ctrlMostradoF = document.getElementById('fin');
let ctrlMostradoT = document.getElementById('tiempo');

function binarySearch(valor, personas) {
	//var ahora= new Date();
	var ahora= performance.now();
  var valor = document.getElementById("txtBuscaR1").value
  let primero = 0;
  let ultimo = personas.length - 1;
  let posicion = -1; let found = false; let medio;
  while (found === false && primero <= ultimo) {
    medio = Math.floor((primero + ultimo) / 2);
    if (personas[medio].id == valor) {
      found = true;
      posicion = medio;
    } else if (personas[medio].id > valor) {
      ultimo = medio - 1;
    } else {
      primero = medio + 1;
    }
  }
  //var despues= new Date();
  var despues= performance.now();
 // return personas[posicion].nombre;
  imprime=personas[posicion].nombre
 imprimeI= ahora
 	imprimeF= despues
 	imprimeT= despues-ahora

  //console.log("arreglo",personas[posicion].nombre);
  //document.getElementById("Texto").innerHTML = personas[posicion].nombre;
  ctrlMostrado.innerHTML = imprime;
   ctrlMostradoI.innerHTML = imprimeI;
    ctrlMostradoF.innerHTML = imprimeF;
     ctrlMostradoT.innerHTML = imprimeT;
  //return posicion;
}
