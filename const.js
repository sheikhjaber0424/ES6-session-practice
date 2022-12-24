// * const is a block scope variable
// * const variable will be in capital letter
// * needs to be initialized when its declared
// * can not be reassigned

const X=10;             //read only reference will be created
console.log(X);

// X=20;                 //ERROR , can't be reassigned


// const A;             //ERROR , as its only declared


// ==========================
// mutable vs immutable
// consnt variable cant be redeclared or reassigned
// variable user a const object can be redeclared or reassigned
const HOUSE = {
    rent : 3000,
    location : "dhaka"
  
}
HOUSE.rent =5000;
console.log(HOUSE.rent);
console.log(HOUSE.location);