// *******ESERCIZIO 1***********************

// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while


// var  sommaNumeri = 0;
//
// // SOLUZIONE CON FOR
// for (var i = 0; i < 5; i++) {
//   var numero = parseInt(prompt("inserisci un numero"));
//   sommaNumeri += numero;
// }
// console.log(sommaNumeri);
//
// // SOLUZIONE CON WHILE
// var i = 0;
// while(i < 5) {
//   var numero = parseInt(prompt("inserisci un numero"));
//   sommaNumeri += numero;
//   i++
// }
// console.log(sommaNumeri);





// *******ESERCIZIO 2***************************

// Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero,
// se è dispari inseriscilo nell’array
//
// var numeri = [];
//
// for (var i = 0; i < 6; i++) {
//   var numero = parseInt(prompt("inserisci un numero"));
//
//   if (numero % 2 == 1) {
//      numeri.push(numero);
//    }
//  }
//
//  console.log(numeri);




 // *******ESERCIZIO 3***************************

// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.


var invitati = ["gatsby", "pippo", "pluto", "paperino"];
var nome = prompt("inserisci in tuo nome");
var messaggio = false;

for (var i = 0; i < invitati.length; i++) {
  if (nome == invitati[i]) {
    messaggio = true;
  }
}

if (messagio == true) {
  console.log("invitato");
} else {
  console.log("non sei invitato");
}



























 // SDVFESDVFGVDFGV
