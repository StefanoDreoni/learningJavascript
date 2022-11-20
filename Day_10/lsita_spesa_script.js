const cryptovaluta=[200,500, 800, 1000]
const sport=[12, 25, 50, 75, 100]
const listaSpese=[]

function nomeyManager(array) {
   let total =0;
   for (let i = 0; i < array.length; i++) {
       total+=array[i]        
       listaSpese.push(array[i])
   }
   return total;
}

const bilancio={
   crypto: nomeyManager(cryptovaluta),
   sport: nomeyManager(sport)
}
console.log(bilancio)
console.log(listaSpese)