// Funciones con su sintaxis basica. 

function hiThere () {
    console.log('Hi there');
}

hiThere(); // Hi there

function hiThereTwo() {
    return 'Hi there again';
}

hiThereTwo(); // "Hi there again"

var storedText = hiThere(); // Hi there

storedText; // undefined

var storedTextTwo = hiThereTwo();

storedTextTwo; // "Hi there again"


//_______________________________________________________________________________________________
//Como funciona el ambito variable en JS
var userObj = {
  email: 'sample@example.com',
  fullName: 'Kristine Hudgens'
}

function dashboardGreeting() {
  var userObj = {
    email: 'sample2@example.com',
    fullName: 'Jordan Hudgens'
  }
  console.log("Hi there, ".concat(userObj.fullName));
}

dashboardGreeting();
console.log(userObj.fullName);
