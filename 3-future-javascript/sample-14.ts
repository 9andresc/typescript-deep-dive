// Functions create a new scope

var foo = 123;

function test() {
  var foo = 456;
}

test();
console.log(foo); // -> 123
