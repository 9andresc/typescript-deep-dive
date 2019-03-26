// NaN

console.log(Math.sqrt(-1)); // -> NaN

// Don't do this
console.log(NaN === NaN); // -> false

// Do this
console.log(Number.isNaN(NaN)); // -> true
