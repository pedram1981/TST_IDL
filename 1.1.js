function Declarative(numbers){

const doubleNumbers = numbers.map((num) => num * 2);

console.log("Declarative:"+doubleNumbers); 
}

function Imperative(numbers){
const doubleNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log("Imperative:"+doubleNumbers); 
}

Declarative([1, 2, 3, 4, 5]);
Imperative([1, 2, 3, 4, 5])
