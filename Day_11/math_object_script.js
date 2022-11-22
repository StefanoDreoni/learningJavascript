//Math
// Oggetto che contiene metedo e funzioni matematiche
//contiene tutte quelle che sono le funzioni matematica da usare per il nostro codice

let risultato;

risultato= Math.floor(1.1111)   //arrotonda per difetto il valore
risultato=Math.ceil(1.111)  //arrotonda per eccessso
risultato=Math.min (1,5,6,8,34) //trova il valore minimo
risultato=Math.max(1,4,5,3465,675,345,)// rende il massimo
risultato=Math.sqrt(9) //restituisce la radice quadrata

console.log(risultato)

//numero casuale compreso fra 0 e 1

let random =Math.random()

console.log(random)

//numero casuale fra io e dieci

let random2 = Math.random()
random2= Math.ceil(Math.random()*100)
console.log(random2)