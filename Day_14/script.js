//Pagina di manipolozaione e riassunto

//alert
// alert('ciao')

//console
console.log('ciao')
console.log(3)

//errori
// console.log (x) //viene inserito la linea dell'errore

//variabili
//una variabile è una parola per rappresentare un valore, 
//si usa let nomevariabile = valore;  si prende il valore e si assegna

let totaleLibro = 149; //numero
let nomeLibro ='Luigi'; //stringa
let scontoLibro = true; //booleano
variabileSenzaLet = 'hola'; //le varibili si possono dichiarare anche senza il let
let variabileUndefined;     //le variabili possono anche essere vuote

//le variabili si possono inserire negli altir componenti come scatole di valori
console.log(nomeLibro)
console.log(scontoLibro)
console.log(variabileSenzaLet)
console.log(typeof(variabileSenzaLet))  //console.log(typeof(x)) per sapere il tpo di x


//si possono usare tutte le combinazioni ad ecceione delle parole riservate, inoltre non ci possono essere numero come primo carattere
//inoltre si devono usare nomi di variabili comprensibili
let accountNumer ='accountName' //si usa la denominazione a cammello


//Cambiare i valori alle variabili
let vecchioPrezzo= 99.99;
vecchioPrezzo =50;          //una volta dichiarati i valori della variabili questi possono cambiare
console.log(vecchioPrezzo)


//Constanti, varibili che non cambiano
//Una constante è una parte di codice che quasi sicuramente non cambierà mai nel codice. Quando viene dichiarata bisogna essere sicuri che non cambinel corso dell'esecuzione del programma
const primaConstante = 49;
// primaConstante=40; errore nell'aver assegnato un valore ad una constante

console.log(primaConstante)

//Operatori
//comprendono numeri, stringhe(testi), Converting Between Types, Booleans, null and undefined, object and Symbols

//numeri
//+
let price = 20
price = price+1
console.log(typeof price)
//-
price=price-1
console.log(price)

//% mostra il resto
let resto = price%6  //da come risultato 2 perchè price è 20 e si divide per 6, 3 resto 2


//= è un assegnatore di valore che aggiunge al contenuto della sinistra
//+= e -= somma e sottazione
//%= resto
price=20
price+=5        //da 25 perchè price è 20 e si somma 5
price-=5        //da 20 perchè price è 25 e si sottrae 5
price%=6        //% da 2 che è il resto di 20 diviso 6

//moltiplicatori
price =10
price*=6  //moltiplica price per 6
//divisori
price /=10 //divide price per 10

//++ e --  incrementatore e decrementatore 
price=10
price++         //price che è 10 diventa 11
price--         //price che è 11 diventa 10
console.log(price++) //stampa 10 perchè non viene incrementato prima che venga stampato
price=5
console.log(--price) //stampa 4 perchè sottrae 1

//Operator precedence, precedenza di operazioni
price=3+2*2;  //le operazioni si sviluppano alla stessa maniera della matematica ordinaria (moltiplicazioni e divisioni parotno prima) 
price= (3+2)*2 //con le parentesi però si possono modificare gli ordini delle operazioni

price=1.1+1.3 
console.log(price)  //il numero stampato non sarà esatto ma sarà 2.4000000000000004 
                    //il risultato ovviamento è esatto 
//negative numbers
price= -20
price = price - -2 //il risultato è 22 perchè meno e meno danno più

price=0
price-- //0-1 =-1 

