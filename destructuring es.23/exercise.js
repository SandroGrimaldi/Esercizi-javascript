function isAdult({age}) {
  /*return person.age >= 18;*/
  if(age >=18){
    return true;
  }else{
    return false;
  }
}

const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

console.log(isAdult(person));
