// Scope

let a = 10;
{
  console.log(a);
}

//Illegal Shadowing

function test() {
  let a = 10;

  {
    var a = 13;
    console.log(a);
  }
  console.log(a);
}

test(); // let can nor be shadowed by var if it happens then it will be called as illegal shadowing

// Re-Declaration is not allowed in case of let and const.

let a = 5;
let a = 6;

console.log(a);

var a = 6;
a = 10;
console.log(a);

const a = 9;
a = 10;

console.log(a); // we canot reassign value in case of const.

// Hoisting in JS

function abc() {
  console.log(a, b, c);

  let b = 9; // TDZ
  let c = 10; // TDZ

  var a = 10;
}
abc();
