const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".


person2.firstName = "Simon";

/* Ho usato questo metodo perchè essendo person1 un oggetto, gli passo un valore per riferimento,
  cioè posso modificare il valore della key dopo aver "copiato" tutte le keys in person2 */

console.log(person1);
console.log(person2);
