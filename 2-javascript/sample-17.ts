// Infinity

console.log(Number.MAX_VALUE); // -> 1.7976931348623157e+308
console.log(-Number.MAX_VALUE); // -> -1.7976931348623157e+308

// Values outside the range where precision isn't changed are clamped to these limits
console.log(Number.MAX_VALUE + 1 == Number.MAX_VALUE); // -> true

// Values outside the range where precision is changed resolve to special values 'Infinity' and '-Infinity'
console.log(Number.MAX_VALUE + 10 ** 1000); // -> Infinity

// You can also use static members of the `Number` class
console.log(Number.POSITIVE_INFINITY === Infinity); // -> true
console.log(Number.NEGATIVE_INFINITY === -Infinity); // -> true
