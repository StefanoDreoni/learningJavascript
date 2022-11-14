//Differenza fra valore e riferimento
let number = 5
let number2 =5

number2 += 5;

console.log(number);        //valore che si va ad assegnare
console.log(number2)


const object={          //anche se è const, si può modificare. A patto che non si cambi l'oggetto inziale
    name:'gianni',
}
// const object{name='marco'} //    non funziona
let object2=object
console.log(object)
console.log(object2)

object2.eta='32'        //mutando object2 si andrà a modificare anche object
object.peso='80kg'


const persona1={
    name:'Luca'
}
let persona2={...persona1} . //con questa scrittura è possibile fare una copia più profonda del file e modificarlo
persona2.eta='23'
console.log(persona1)
console.log(persona2)
