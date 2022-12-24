
//Global Scope can be accessed from anywhere in the file 

var x=10;
console.log(x);     //output: 10
function add()
{
console.log(x);  
}
add();              //output: 10
// =============================================


// let is local scoped
let a=20;
console.log(a);     //output: 20
function sum()
{
    let a=200
console.log(a);     //output: 200
}
sum();
console.log(a);     //output: 20



// ==============================================


//var can be re-declared but let can't re-declared, var & let can be initialized again
var b =30;
var b;
console.log(b);      //output: 30


let d =40;
// let d;           // ERROR
console.log(d);     //output: 40


b=300;
d=400;

// re-initialize
console.log(b);      //output: 300
console.log(d);     //output: 400



