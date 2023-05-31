function multiplyByTwo(value) {
  let number = 2;
  function inner(){
    return value * number;
  }
  return inner;
}

console.log(multiplyByTwo(3)());
console.log(multiplyByTwo(5)());
console.log(multiplyByTwo(10)());
console.log(multiplyByTwo(17)());
console.log(multiplyByTwo(34)());
