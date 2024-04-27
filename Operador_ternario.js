/* El operador ternario en JavaScript es una herramienta poderosa y concisa para escribir declaraciones condicionales. A menudo se utiliza como un atajo para la instrucción if. 

Sintaxis:
condición ? expr1 : expr2

Parámetros:
condición: Una expresión que se evalúa como verdadera (true) o falsa (false).
expr1, expr2: Expresiones con valores de algún tipo.
Descripción:
Si la condición es verdadera, el operador retorna el valor de expr1; de lo contrario, devuelve el valor de expr2.

Por ejemplo, para mostrar un mensaje diferente según el valor de la variable isMember, puedes usar esta declaración:
const mensaje = "La Cuota es de: " + (isMember ? "$2.00" : "$10.00");
*/

//Ejemplo basico.
function ageVerification(age) {
    if (age > 25) {
        console.log('can rent a car');
    } else {
        console.log('is not old enough yet');
    }
}

ageVerification(15)

//___________________________________Siguiente ejemplo

function ageVerification(age) {
  let answer = age > 25 ? 'Can rent a car' : 'Can´t rent a car';
console.log(answer);
}

ageVerification(55)

//______________________________Siguiente ejemplo. 
function adminControls(user) {
  // if (user) {
  //   if (user.admin) {
  //     return 'showing admin controls...';
  //   } else {
  //     return 'You need to be an admin';
  //   }
  // } else {
  //   return 'You need to be logged in';
  // }

  return user
    ? user.admin ? "showing admin controls" : "You need to be an admin"
    : "you need to be logged in";
}

const userOne = {
  name: "Kristine",
  admin: true
};

adminControls(userOne); //?

const userTwo = null;

adminControls(userTwo); //?

const userThree = {
  name: "Tiffany",
  admin: false
};

adminControls(userThree); //?
