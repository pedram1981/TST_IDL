function flatArray (arr){
const flatArr = arr.flat(Infinity);
console.log(flatArr); 
}

flatArray([4,[[5],[6,[7],[8]],9,10]]);
