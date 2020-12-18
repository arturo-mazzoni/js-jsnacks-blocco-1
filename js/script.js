// *******esercizio 1

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


// var  sommaNumeri = 0;
//
// // for (var i = 0; i < 5; i++) {
// //   var numero = parseInt(prompt("inserisci un numero"));
// //   sommaNumeri += numero;
// // }
// // console.log(sommaNumeri);
//
// var i = 0;
// while(i < 5) {
//   var numero = parseInt(prompt("inserisci un numero"));
//   console.log(numero);
//   sommaNumeri += numero;
//   i++
// }
// console.log(sommaNumeri);


// *******esercizio 2

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array

var numeri = [];

for (var i = 0; i < 6; i++) {
  var numero = parseInt(prompt("inserisci un numero"));
 }
 console.log(numero);

 if (numero % 2 == 1) {
   numeri.push(numero);
 }
 console.log(numeri);



















//
