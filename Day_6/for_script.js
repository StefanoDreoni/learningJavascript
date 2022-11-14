//studio del ciclo for
let valore =0;
for (let i = 0; i < 10; i += 2) {
valore++; 
}
console.log(valore);

// let valori= ['uno', 'due', 'tre', 'quattro'];
// for (let j = 0; j < valori.length; j++) {
//     const el = valori[j];
//     console.log(el)    
// }

let valori= [1,2,3,4];
let nuoviValori=[];

for (let j = 0; j < valori.length; j++) {
    const el = valori[j];
    nuoviValori.push(el*el)    //push mette dentro un array i valori estratti
}    

console.log(nuoviValori)
