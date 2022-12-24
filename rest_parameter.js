// Rest parameter
// used when we want to pass multiple arguments in a function

// ex:1
function myFun(a, b, ...x) {
  console.log("a =", a);
  console.log("b =", b);
  console.log("x =", x);
}

myFun("one", "two", "three", "four", "five", "six");


// ex:2
// rest with function and other arguments
function fun(a,b,...c){
console.log(`${a} ${b}`);               //Enzo Alister
console.log(c);                         //[ 'Lionel', 'Messi', 'Barca' ]
console.log(c[0]);                      //Lionel
console.log(c.length);                  //3
console.log(c.indexOf('Lionel'));       //0
}
fun('Enzo','Alister','Lionel','Messi','Barca');







// ex:3
let num=new Function('...args','return args');
console.log(num(10,20,30));