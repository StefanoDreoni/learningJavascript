//Map
//Ritorna un nuovo Array

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
  // const newArray= people.map(function(person){
  //   return'map method'
  // });
  
  // const yearsForRetired= people.map(function (person,index,array) {
  //   let years =65- person.age
  //   return{
  //     name: person.name,
  //     retiresIn:years,
  //   }
  // })
  
  
  // console.log(yearsForRetired)
  
  const advancedExamples = people.map((person,index) => {
    return `<h2 style="margin-top:20px;"> ${index+1} ${person.name}</h2>`;
  })
  console.log(advancedExamples)
  const div =document.createElement('div');
  div.innerHTML= advancedExamples.join('');
  div.style.marginTop='30px';
  
  document
    .querySelectorAll('.container')[1]
    .insertAdjacentElement('beforeend', div)