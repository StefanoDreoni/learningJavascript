// Variable Lookup definisce la direzione univoca con cui javascript "ricerca" il valore contenuto in una varibaile

// Si definisce Call stack l'insieme di processi/routine che sono state invocate ma la cui esecuzione non è terminata.
let nome = "Mario";

//Rischio di errore
function esempio() {
  console.trace('1');

  // let nome='Gregorio';
  function inner() {    //per Lookup si intende il metodo con cui javascript prende le variabili, cioè dall'interno all'esterno
    console.log(nome)
    console.trace('2'); //console.trace indica il livello di scoop globale o locale in cui ci si trova, in pila. Questo ci aiuta a capire cosa deve essere risolto prima di avanzare a livello più globale
  function deep() {
    let gianni
    console.trace('3')
  }
  deep()
  }

  inner();
}

console.trace('0');
esempio();
