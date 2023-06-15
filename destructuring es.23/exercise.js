function isAdult({age}) {
  /*return person.age >= 18;*/
  if(age >=18){
    return age;
  }
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));