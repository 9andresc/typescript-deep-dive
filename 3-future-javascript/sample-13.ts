// let

// `var` declarations are function scoped
var foo = 123;

if (true) {
  var foo = 456;
}

console.log(foo); // -> 456

// `let` declarations are block scoped
let foo = 123;

if (true) {
  let foo = 456;
}

console.log(foo); // -> 123

// Another place where `let` would save from errors is loops
var index = 0;
var array = [1, 2, 3];

for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

console.log(index); // -> 0
