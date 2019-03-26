// Equality

console.log(5 == '5'); // JS: true, TS: Error

console.log(5 === '5'); // JS: false, TS: Error

console.log('' == '0'); // JS: false
console.log(0 == ''); // JS: true

console.log('' === '0'); // JS: false
console.log(0 === ''); // JS: false

// Tip: Always use === and !== except for null checks
