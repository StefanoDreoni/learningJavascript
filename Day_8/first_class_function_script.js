/**
 * FIRST-CLASS FUNCTIONS - Un linguaggio di programmazione dice di avere First-class function quando queste possono essere trattate come ogni altro tipo di dato: possono essere passate come parametro (High-Order && Callback), possono essere ritornate da una funzione (Closure) oppure essere assegnate ad una variabile (function expression)
 */

/**
 * HIGH-ORDER-FUNCTIONS
 * Sono funzioni che accettano tra i loro parametri anche delle funzioni (richiamabili poi al loro interno), 
 * oppure funzioni che returnano delle funzioni (CLOSURE)
 */

/**
 * CALLBACK FUNCTION
 * Funzioni che vengono passate come parametro ad un'altra funzione per essere richiamate all'interno (finiscono nelle high-order-function)
 */

 function validator(a,b) {
    return typeof  a=== 'number' && typeof b==='number'
}
function minoreCinquanta(a,b) {
    return a-b<50
}
function absoluteValue(number){
    if(number<0){
        return Math.abs(number)     //valore assoluto
    }
    return number
}

function sottrazione(a,b,callback1,callback2) {
    const areNumbers= callback1(a,b);
    if(areNumbers){
        return callback2(a-b)
    }
    return'Spiacente non sono numeri'
}
let risultato = sottrazione(5,6, validator, absoluteValue)   
risultato = sottrazione(100,60, minoreCinquanta, absoluteValue)     //si sostituisce con la funzione minoreCinquanta

console.log(risultato)   
//si prendono le funzioni validator e absoluteValor e si utilizzano all'interno dellla funzione sottrazione con i parametri indicati.Vanno difatti a sostituri callback1 e callback2
