// Funciones de cadenas.
var str = 'The quick brown fox jumped over the lazy dog';

str.length(); // VM2349:1 Uncaught TypeError: str.length is not a function

str.length; // 44

str.charAt(2); // "e"

str.charAt(200); // ""

str.concat(' again and again'); // "The quick brown fox jumped over the lazy dog again and again"

str; // "The quick brown fox jumped over the lazy dog"

str.includes('quick'); // true

str.endsWith('dog'); // true

str.startsWith('Foo'); // false

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0

'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4

str.indexOf('jumped'); // 20

str.lastIndexOf('jumped'); // 20

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54

str.slice(4, 10); // "quick "

str.slice(-8); // "lazy dog"

str.slice(10); // "brown fox jumped over the lazy dog"

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

var messyString = '    Hi there    ';

messyString.trim(); // "Hi there"

//____________________________________________________________________________________________________________________________________________________


//Siguiente clase acerca de las funciones 

str.repeat(5); // "The quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dogThe quick brown fox jumped over the lazy dog"

str.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // null

'555-555-5555'.match(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // (4) ["555-555-5555", "555-", undefined, "555-", index: 0, input: "555-555-5555"]0: "555-555-5555"1: "555-"2: undefined3: "555-"index: 0input: "555-555-5555"length: 4__proto__: Array(0)

str.replace('fox', 'wolf'); // "The quick brown wolf jumped over the lazy dog"

'555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 0

'Hi, 555-555-5555 is my phone number'.search(/((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/) // 4

str.indexOf('jumped'); // 20

str.lastIndexOf('jumped'); // 20


//____________________________________________________________________________________________________________________________________________________

//Tercera clase sobre las funciones.

str.slice(4, 10); // "quick "

str.slice(-8); // "lazy dog"

str.slice(10); // "brown fox jumped over the lazy dog"

str.toUpperCase(); // "THE QUICK BROWN FOX JUMPED OVER THE LAZY DOG"

str.toLowerCase(); // "the quick brown fox jumped over the lazy dog"

var messyString = '    Hi there    ';

messyString.trim(); // "Hi there"

var str2 = str.concat('again and again');

str2.indexOf('again'); // 44
str2.lastIndexOf('again'); // 54

//________________________________________________________________________________________________________________________________________________________
//Como trabajar con argumentos de función. 
function nombreCompleto(primernombre, apellido) {
  return apellido.toUpperCase() + ", " + primernombre.toUpperCase();
}

nombreCompleto('Carolina', 'Agudelo')

//_______________________________________________________________Otro ejemplo
function nombreCompleto(primernombre, apellido, languaje) {
  var languaje = languaje || 'Español';
  return apellido.toUpperCase() + ", " + primernombre.toUpperCase() + ' - ' + languaje;
}

console.log(nombreCompleto('Carolina', 'Agudelo'));

//____________________________________________________________________________________________________________________________________________________________
//var someUser = {
    name: 'Jordan'
}

function nameFormatter (user) {
    return user.name = 'Oops';
}

nameFormatter(someUser); // "Oops"

someUser; // Object {name: "Oops"}

var someName = 'Tiffany';

function someOtherNameFormatter(name) {
    return name = 'Oops';
}

someOtherNameFormatter(someName); // "Oops"

someName; // "Tiffany"

function nameFormatter (userName) {
    return userName = 'Oops';
}

someUser.name; // "Oops"

someUser.name = 'Kristine';

nameFormatter(someUser.name); // "Oops"

someUser.name; // "Kristine"
