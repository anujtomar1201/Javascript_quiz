// First class functions. --- which can be used as variables.
function one(num) {
  return num * num;
}

function displayfn(fn) {
  console.log(fn);
}

let result = displayfn(one(5));

console.log(result);

// What will be the output of the code
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000); // Output - 10 10 10 ....10. because of var put let instead of var
}

// Functions Hoisting
displayfn();

function displayfn(fn) {
  var fn = 5;
  console.log(fn);
}

console.log(displayfn);
// Out of following
let fn = 5;

function displayfn() {
  let fn = 21;
  console.log(fn);
}

let result = displayfn();
console.log(fn);

// Output of the following functions.
const fn = (a, x, y, z, ...num) => {
  console.log(y, a, ...num);
};

fn(
  10,
  29,
  32,
  12,
  1,
  2,
  12,
  21,
  222,
  122,
  12321,
  123,
  12,
  12,
  12,
  21,
  32,
  2112
);

console.log(fn);
