/* function sum(num1, num2, num3) {
  return num1 + num2 + num3;
} */

function sum(...arr){
  return arr.reduce((a,b) => a+b);
}


const numbers = [1, 2, 3];
console.log(sum(numbers[0], numbers[1], numbers[2]));

/* ho utilizzato la stessa tipologia di funzione dell'esercizio 26
  poichè è simile l'effetto che vogliamo ottenere pur operando lì 
  su una serie di parametri e qui un array 
*/