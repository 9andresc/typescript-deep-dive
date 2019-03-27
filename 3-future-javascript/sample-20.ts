// Array destructuring

var x = 1;
var y = 2;

[x, y] = [y, x];
console.log(x, y); // -> 2,1

// Array destructuring with rest
var [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining); // -> 1, 2, [3,4]

// Array destructuring with ignores
var [x, , ...remaining] = [1, 2, 3, 4];
console.log(x, remaining); // -> 1, [3,4]
