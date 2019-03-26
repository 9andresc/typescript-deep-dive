// Infinitesimal

// The smallest non-zero value representable in Number is available as static `Number.MIN_VALUE`
console.log(Number.MIN_VALUE); // -> 5e-324

// Values smaller than `MIN_VALUE` are converted to 0
console.log(Number.MIN_VALUE / 10); // -> 0
