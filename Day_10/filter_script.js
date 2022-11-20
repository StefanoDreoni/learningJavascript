//Filter
//Ritorna un nuovo Array
//Può alterare il numero di elementi
//Ritorna in base la verificarsi di una condizione

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
  
  // const Developer = people.filter(function(person,index){
  //   if (index%2===0) {
      
  //   }  
  //   return true
  // })
  const developer= people.filter(function(item){
    return item.position.toLowerCase().endsWith('developer') //fi vanno a filtrare gli item con posizione che finisce per developer
  })
  console.log(developer)
  
  const notDeveloper= people.filter(function(item){
    return !item.position.toLowerCase().endsWith('developer') //con il ! si selezionano gli item che non hanno la suddette caratteristiche
  })
  
  console.log(notDeveloper)