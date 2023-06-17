const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
};

const { id, firstName: name, lastName: surname, age: old } = person;
/* non ho cambiato le proprietà dell'oggetto ma ho fatto diventare le tre proprietà come fossero valori delle key */
console.log(id, name, surname, old);
