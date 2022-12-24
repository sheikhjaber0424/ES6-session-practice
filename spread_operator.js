
// Spread operator

// ex:1
const arr = [1, 2, 3];
const arr2 = [...arr]; 

console.log(arr2);


// ex:2
let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];

arr3 = [...arr3, ...arr4];
console.log(arr3);

// ex:3

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
console.log(clonedObj);