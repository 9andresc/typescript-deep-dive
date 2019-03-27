// Object destructuring

var rect = { x: 0, y: 10, width: 15, height: 20 };

// Destructuring assignment
var { x, y, width, height } = rect;
console.log(x, y, width, height); // -> 0, 10, 15, 20

rect.x = 10;
// Assign to existing variables using outer parentheses
({ x, y, width, height } = rect);
console.log(x, y, width, height); // -> 10, 10, 15, 20

// Structure
const obj = { 'some property': 'some value' };

// Destructure
const { 'some property': someProperty } = obj;
console.log(someProperty === 'some value'); // -> true

var foo = { bar: { baz: 123 } };
var {
  bar: { baz }
} = foo; // Effectively `var baz = foo.bar.baz;`

// Object destructuring with rest
var { w, x, ...remaining } = { w: 1, x: 2, y: 3, z: 4 };
console.log(w, x, remaining); // -> 1, 2, { y: 3, z: 4 }
