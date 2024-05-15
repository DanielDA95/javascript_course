/*
Las promesas en JavaScript son un mecanismo para controlar la asincronía de una forma más legible, cómoda y práctica. Permíteme explicarte más detalladamente:

Concepto de Promesa:
Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca.
Imagina que haces una solicitud a un servidor para obtener datos. La respuesta puede llegar de inmediato (cumpliendo la promesa), demorarse (quedando pendiente) o fallar (rechazando la promesa).

Estados de una Promesa:
Cada promesa tiene tres estados posibles:
Pendiente: Cuando se crea la promesa y aún no se ha cumplido ni rechazado.
Cumplida (Resuelta): Cuando la operación asíncrona se completa exitosamente.
Rechazada: Cuando ocurre un error o la operación no se puede realizar.

Métodos de las Promesas:
.then(resolve): Ejecuta la función resolve cuando la promesa se cumple.
.catch(reject): Ejecuta la función reject cuando la promesa se rechaza.
.then(resolve, reject): Equivalente a los dos anteriores en el mismo .then().
.finally(end): Ejecuta la función end tanto si se cumple como si se rechaza la promesa.
    */

let sleepyGreeting = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello....')
  }, 2000);

  setTimeout(() => {
    reject(Error('Too sleepy...'))
  }, 2000);
});

sleepyGreeting
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });
