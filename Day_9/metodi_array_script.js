const frontend = ["react", "javascript", "css", "html"];
//leght
console.log(frontend.length);
const backend=[ 'go', 'java', 'c#', 'phyton']

const developer= frontend.concat(backend)       //concat unisce gli array per crearne uno solo
console.log(developer)

console.log(developer.reverse())        //reverse inverte l'ordine dell'array

developer.unshift('dark');          //mette in cima
console.log(developer);

developer.shift()   //elimina il primo elemento e ritorna l'array
console.log(developer)

developer.push('bootstrap');        //mette dal fondo
console.log(developer)

developer.pop()   //elimina il primo elemento e ritorna l'array
console.log(developer)

console.log('slice',developer.slice(1,4))       //i valori comprendono il range di array compreso

console.log('splice', developer.splice(2,4))      //eleminia elementi dal valore inserito


