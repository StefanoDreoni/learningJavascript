//ForEach
//Non ritorna un nuovo Array, 
//item ritorna il singolo elemento
//index la poszione in cui ci troviamo del ciclo
//array l'intero array
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
  // function printName(person,index, array) {
  //   console.log(person.name)
  //   console.log(index)
  //   console.log(array)
  // }
  // people.forEach(printName)
  people.forEach(function (item,index, array){
     console.log(item.name, item.age)   //
    console.log(index)
    // console.log(array)
  })