const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

/*const json = JSON.stringify(person);

const json = JSON.stringify({id:person.id, age:person.age})*/

function replacer(key,value){
  if(typeof value === "string"){
    return undefined;
  }else{
    return value;
  }
}

const json = JSON.stringify(person,replacer);


console.log(json); // Should return: { id: 1, age: 25 }

/* 
  Metodo alternativo
  function replacer(obj){
    let objReplacer={
      id:obj.id,
      age:obj.age
    }
    return objReplacer;
  }

  const json = JSON.stringify(replacer(person));
  console.log(json);
*/
