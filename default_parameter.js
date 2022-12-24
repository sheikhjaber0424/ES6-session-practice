// default parameter

function add(a, b = 10) {
  console.log(a + b);
}
add(10);                //output: 10


function f(x = 1, y) {
  return [x, y];
}
 console.log(f(2));     //output: [ 2, undefined ]



function sum(x = 1, y = x,  z = x + y) {
    console.log( x + y + z );
}

sum();                  //output: 4