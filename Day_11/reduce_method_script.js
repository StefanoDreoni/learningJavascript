//Reduce
//Metodo per "ridurre" l'array ad un unico valore
//Ritorna un unico valore

const people = [
    {
      name: "Sandro",
      age: 20,
      position: "Frontend Developer",
    },
    {
      name: "Enzo",
      age: 35,
      position: "Backend Developer",
    },
    {
      name: "Sabrina",
      age: 28,
      position: "App Developer",
    },
    {
      name: "Saverio",
      age: 45,
      position: "Recruiter",
    },
  ];
  
  const prezzi = [18, 28, 45, 78, 54, 43, 12];
  
  const totale =prezzi.reduce(function(total,item,index,array){
    console.log(total,item,index)
    return total  //ritorna sempre 18, il valore da cui riparte l'iterazione
  })
  const totale2 =prezzi.reduce(function(total,item,index,array){
    console.log(total,item,index)
    return total+item 
  })
  console.log(totale2)