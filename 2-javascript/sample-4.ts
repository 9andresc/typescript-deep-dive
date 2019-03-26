// Mutations are across all references

var foo = {};
var bar = foo; // bar is a reference to the same object

foo.baz = 123;

console.log(bar.baz); // 123
