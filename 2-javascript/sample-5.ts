// Equality is for references

var foo = {};
var bar = foo; // bar is a reference
var baz = {}; // baz is a new object distinct from 'foo'

console.log(foo === bar); // true
console.log(foo === baz); // false
