//Mutabili vs Immutabili
let stringa ='Ciao'
let array =['c','i','a','o']

console.log(stringa[3]);
console.log(array[3]);

array[3]='z';       //si prova sostituire z in 'Ciao
stringa[3]='z';

console.log(stringa)        //Ciao è rimasto tale perchè contiene un "valore". Noon si può modificare un singolo elemento
console.log(array)          //[c,i,a,o] è cambiaato perchè ha un contenuto di tipo oggetto

//immutabilitità e mutabilità sono molto importanti per definire la natura di un oggetto

let stringa2 ='Ciao'            
console.log(stringa=== stringa2)        //i valori sono uguali

let object ={fruit:'mela', colore:'rosso'};
let object2= object;
let object3={fruit:'mela', colore:'verde'}

console.log(object===object2);              //sono uguali perchè uno è generato dall'altro
console.log(object===object3)               //non sono uguali perchè hanno un origine differente
