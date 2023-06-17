const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};
/*
const id = person.id;
const personInfo = {
  firstName: person.firstName,
  lastName: person.lastName,
  age: person.age
};

console.log(id, personInfo);*/

const {id, ...personInfo} = person;
console.log(id, personInfo)

/* così da creare un oggetto contenente una "copia" della key id
  dell'oggetto person e il resto delle info come fossero un oggetto nested */