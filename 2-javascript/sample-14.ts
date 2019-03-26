// Integer

console.log({ max: Number.MAX_SAFE_INTEGER, min: Number.MIN_SAFE_INTEGER });
// -> { max: 9007199254740991, min: -9007199254740991 }

// Safe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER));
// -> true

// Unsafe value
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1));
// -> false
