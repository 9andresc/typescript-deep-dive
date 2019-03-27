// Spread operator

// `apply`
function foo(x, y, z) {}
var args = [0, 1, 2];
foo.apply(null, args);

// `...`
function foo(x, y, z) {}
var args = [0, 1, 2];
foo(...args);

// Destructuring
var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // -> 1, 2, [3,4]

var list = [1, 2];
list = [...list, 3, 4];
console.log(list); // -> [1, 2, 3, 4]

var list = [1, 2];
list = [0, ...list, 3];
console.log(list); // -> [0, 1, 2, 3]

// Object spread
const point2D = { x: 1, y: 2 };
const point3D = { ...point2D, z: 3 };

// Another common use case is a simple shallow extend
const foo = { a: 1, b: 2, c: 0 };
const bar = { c: 1, d: 2 };
// Merge `foo` and `bar`
const fooBar = { ...foo, ...bar }; // { a: 1, b: 2, c: 1, d: 2 }
