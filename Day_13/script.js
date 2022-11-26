//Pagina di manipolazione e riassunto

//alert
alert('ciao')

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


