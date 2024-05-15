# ***Los procesos asíncronos y await***
*en JavaScript son conceptos fundamentales para manejar tareas que no deben bloquear la ejecución del código.*

1. ## Asincronía en JavaScript:
Por defecto, JavaScript es un lenguaje síncrono de un solo hilo. Esto significa que las instrucciones se ejecutan una tras otra, en orden.
Sin embargo, cuando necesitamos realizar tareas que pueden llevar tiempo (como solicitudes a servidores o lectura de archivos), no queremos bloquear todo el programa mientras esperamos.
Aquí es donde entra la asincronía: permite que ciertas tareas se ejecuten en segundo plano sin bloquear el hilo principal.

Callbacks:
Un callback es una función que se pasa como argumento a otra función y se ejecuta cuando se completa una tarea asincrónica.

Ejemplo:

console.log('Primero');
setTimeout(() => {
  console.log('Tercero (después de 2 segundos)');
}, 2000);
console.log('Segundo');

2. ## Promesas: 
Las promesas son objetos que representan valores que pueden estar disponibles ahora, en el futuro o nunca.
Permiten manejar tareas asíncronas de manera más estructurada.

*Ejemplo:*

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulación de solicitud a un servidor
    setTimeout(() => {
      resolve('Datos obtenidos');
    }, 2000);
  });
}

fetchData().then((data) => {
  console.log(data);
});

3. # async y await:
Introducidos en ECMAScript 2017, async declara una función asíncrona, y await espera a que una promesa se resuelva.
Permite escribir código asincrónico de manera más clara y concisa.

Ejemplo:

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
}

fetchData();


En resumen, los procesos asíncronos y await nos ayudan a manejar tareas no bloqueantes en JavaScript, mejorando la eficiencia y la legibilidad del código.
