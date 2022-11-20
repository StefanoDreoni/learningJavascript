// // Metodi e proprietà

// const obj = {
//     nome: 'Sandro',
//     saluta(momento){
//         console.log(`${momento}, sono Sandro Petruzzi`)
//     }
// }

// //Proprietà
// console.log(obj.nome)

// //Metodo
// console.log(obj.saluta('BuonGiorno'))

const stringa = " Sono una Stringa";
//metodi: modifiche o operatori funzionali che si possono suare sulle constanti
console.log(stringa.length)     //con la formula variabile.leght si contano i caratteri di una stringa
console.log(stringa.toLowerCase)    // fa tdiventare il metodo minuscolo
console.log(stringa.toLocaleUpperCase)      //fa stamapre tutto maiuscolo
console.log(stringa.charAt(1)) //prende il carattere numero x, che corrisponde alla variabile
console.log(stringa.charAt(stringa.length-1))   //in questo caso prendiamo il penultimo, cioè lunghezza carattere meno 1
console.log(stringa.indexOf('Sono'));
console.log(stringa.split(' '))      //cerca un parametro per cui ricerca un elemento, la variabile x e va a dividere per il suo numero
console.log(stringa.trim())
console.log(stringa.startsWith(' Sono')) //ritorna vero s ela stringa inizia per la variabile, è case sensitive
console.log(stringa.trim().toLocaleLowerCase().startsWith('sono')) //viene true perchè abbiamo eliminato tutit gli spazi, è stata tutto reso minuscolo e inzia quindi per sono
