/**
 * Operatore Ternario è un espressione che si serve di tre parametri per simulare il comportamento di un if statement.
 * La differenza sostanziale è che un operatore ternario, essendo un espressione, deve sempre ritornare un valore.
 */

 const numero = 7;
 let conditionalNumber;
 
 if (numero > 6) {
   conditionalNumber = 9;
 } else {
   conditionalNumber = 4;
 }
 
 let ternaryNumber = numero >6 ? 9 : 4     //il punto interrogativo è un if che divide la condizione dai risultati. Il concetto p se numero > 6 ternaryNumber è uguale a 9 altrimenti(else) è uguale a 4 
 
 console.log(ternaryNumber)
 let ternaryNumber2 =
 numero<= 0 
 ? false
 :numero> 0 &&numero<6
 ?'tra 1 e 5'
 : 'maggiore di 6'
 
 console.log(ternaryNumber2)