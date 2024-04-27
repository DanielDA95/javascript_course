//Lo siguiente es la sintaxis basica de los operadores de comparacion
var edad = 30;
var edad_dos = 29;

/* Forma de saber si es igual 
if (edad === edad_dos) {
  console.log('They are equal')
}
*/

//Forma de saber si NO es igual
if ( edad !== edad_dos) {
  console.log('Not equal')
}

// Mayor o igual que
if (age >= 25) {
  console.log('Old enough to rent a car');
}
// Menor o igual que
if (age <= 10) {
  console.log('You can eat from the kid menu');
}

//________________________________________________________________________________________________________________________________________________________________--
// Condicionales if-else if-else if

var age = 30;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
}
//___________________________________________________________________________________________________________________________________
//Cómo crear una instrucción switch en JavaScript para comprobar los tipos de datos (DECLARACION DE UN CASO)
var dataPoint = {};

switch (typeof dataPoint) {
  case "string":
    console.log("It's a string");
    break;
  case "number":
    console.log("It's a number");
    break;
  case "boolean":
    console.log("It's a boolean");
    break;
  default:
    console.log('No matches');
}
