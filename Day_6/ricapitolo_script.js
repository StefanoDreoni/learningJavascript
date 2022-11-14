//Ricapitolo della sezione
const persona = {   //variabile e oggetto 
    nome:'Omar', 
    age:26,
    amici:['Enzo','Mario','Luigi'],     //array
    sposato:false,  //booleana
    lavoro:{        //oggetto con valori e oggetti dentro
        posizione:'Front-end',
        azienda:'Giuneco',
        colleghi: [         //definizione di due array interno a un valore dell'array principale
            {nome:'Gabriele', cognome:'Coppola'},
            {nome:'Daniele', cognome:'Lopreiato'}
        ],
    },
    isRetieres (age)            //funzione che genera un valore booleano come risultato 
    {return 60-age <= 40;},
    };
    console.log(persona.isRetieres(83))     //stampa il valore prendendo la funzione internamente da persona e applicando l'age di 40
    