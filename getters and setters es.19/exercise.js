class Person {
  
  #firstName= '';
  #lastName= '';
  #age= 0; 

constructor(firstName,lastName,age){
  this.firstName= firstName;
  this.lastName= lastName;
  this.age=age;
}

set firstName(fNVal){
  this.#firstName=fNVal;
}

set lastName(lNVal){
  this.#lastName=lNVal;
}

set age(ageVal){
  if(ageVal<=1){
    this.#age=1;
  }
  else if(ageVal>=110){
    this.#age=110;
  }
  else{
    this.#age=ageVal
  }
}

get fullName(){
  return this.#firstName+" "+this.#lastName+" "+this.#age;
}
  
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
