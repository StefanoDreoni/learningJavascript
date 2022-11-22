// Date
// Oggetto che permette di lavorare con le date

const mesi = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
  ];
  
  const giorni = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venderdì",
    "Sabato",
  ];
  
  const data = new Date('07/21/2001');    //metodo di generazione di una data
  console.log(data)
  console.log(data.getDay())  //prende il giorno, che parte dalla domenica
  console.log(data.getFullYear()) //prende l'anno
  console.log(data.getMonth())  //restituisce il mese
  
  data = new Date(Date.now());
  console.log(data)
  const mese = new Date(data.getMonth);
  console.log(mese)
  const giorno_oggi= new Date(data.getDay)
  console.log(giorno_oggi)