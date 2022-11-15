//Variabili globali
//Una variabile globabale è una variabile che è accessibile in ogni parte di codice

let nome='Mario'
function esempio() {
    let name2='Gino'            //a questo valore è possibile accedere solo all'interno della parentesi della funzione esempio
    function esempio2(){
        console.log(name2);
    };
    esempio2()
    console.log(nome);
    name3='Enzo';  //dichiarazione variabile globale, che può essere utilizzata in ogni caso o luogo, non viene definita ne con let ne con const
                    //si possono definire variabili anche all'intenro di funzioni chiusi, non sono molto utilizzati
}
// console.log(name2)
esempio();
console.log(name3)