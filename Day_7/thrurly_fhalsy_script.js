//Thruthy e Falsy

//tutti i valori sono intrisecamente booleani

//Falsy, cioè intrinsecamente privi di valore
// '', 0, false, undefined, null, Nan,


const esempio= 2 >6;
console.log(esempio);
const prova= 'Tavolo'
if (prova) {            //ci serve a provare che un valore sia vero o falso prima dif are un operazione
    console.log('valore truthy')
}else{
    console.log('valore falsy')
}
//undefiend vuol dire che js non ha trovato un valore corrispondente

console.log(20 + null); //da come risultato 20
console.log(20+NaN) //da come risultato Nan, facendo fallire il codice