const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

// Print values of person using Object.keys

for(i=0; i<Object.keys(person).length; i++){
  console.log (Object.keys(person)[i]+": "+Object.values(person)[i])
}
