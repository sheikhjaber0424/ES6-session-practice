// example:3// Template literals


// example:1
hello = () => "Hello World!"; 

console.log(hello())


// example:2
Hello = val => "Hello " + val; 

console.log(Hello("Sir"))



// example:3
let age =20;

let welcome = (age < 18) ?
  () => console.log('Baby') :
  () => console.log('Adult');

welcome()


// example:4
let sum = (a, b) => {
    let result = a + b;
    return result;
}

let result1 = sum(5,7);
console.log(result1); 