//Generare password casuali della lunghezza specificata dall'utente

//creare un array lungo x dove x è il valore inserito dall'utente
//ad ogni elemento dell'array viene assegnato un valore che è uguale a un valore casuale interno a questa scringa
//convertire l'array in una stirnga.
 

//definizione array lungo x

// let passwordArray =[];
// const x = 8
// function generatePassword() {
//   for (let index = 0; index < x; index++) {
//       let randomValue = Math.random() * 10;//numero casuale fra 0 e 10
//       passwordArray[index]= randomValue;
//     }  
//     console.log(passwordArray)
// }


// function generatePassword() {
//   if (x>8) {
//     const array= new Array(x);
// for (let index = 0; index <= array.length; index++) {
//   let randomValue = Math.random() * 74;//numero casuale fra 0 e 10
//   array[index]= randomValue;
// }

//   } else {
//     console.log('La password deve avere almeno 8 caratteri')
//   }
// }

// let password= generatePassword(10)
// console.log(password)

const letters =
  "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890";
  function generatePassword(Lunghezza) {
    if (Lunghezza<8) {
      alert('PASSWORD NON SICURA')
      return  
    }
    let randomString=''
    for(let i=0; i<=Lunghezza; i++){
      let randoChar = Math.floor(Math.random()*letters.length)
      randomString+=letters.charAt(randoChar)
    }

    return randomString
  }
  const randomPassword=  generatePassword(24)
  console.log(randomPassword)