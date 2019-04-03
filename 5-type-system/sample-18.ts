// Exception Handling

export {};

{
  try {
    throw new Error('Something bad happened');
  } catch (e) {
    console.log(e);
  }
}

// Error Sub-types

// Range Error
// Call console with too many arguments
console.log.apply(console, new Array(1000000000)); // RangeError: Invalid array length

// ReferenceError
console.log(notValidVar); // ReferenceError: notValidVar is not defined

// SyntaxError
1***3; // SyntaxError: Unexpected token *

// TypeError
('1.2').toPrecision(1); // TypeError: '1.2'.toPrecision is not a function

// URIError
decodeURI(%); // URIError: URI malformed

// Always use `Error`
// Don't do this
try {
  throw 'Something bad happened'
} catch(e) {
  console.log(e)
}

// You don't have to throw an error

function myFunction(callback: (e?: Error)) {
  doSomethingAsync(function () {
    if (somethingWrong) {
      callback(new Error('This is my error'))
    } else {
      callback()
    }
  })
}

// Unclear where it is thrown

try {
  const foo = runTask1()
  const bar = runTask2()
} catch (e) {
  console.log('Error: ', e)
}

// Makes graceful handling hard

try {
  const foo = runTask1()
} catch (e) {
  console.log('Error: ', e)
}

try {
  const bar = runTask2()
} catch (e) {
  console.log('Error: ', e)
}

let foo: number;
try {
  foo = runTask1()
} catch (e) {
  console.log('Error: ', e)
}

try {
  const bar = runTask2(foo)
} catch (e) {
  console.log('Error: ', e)
}

// Not well represented in the type system

// Instead of this
function validate(value: number) {
  if (value < 0 || value > 100) throw new Error('Invalid value')
}

// Write this
function validate(value: number): { error?: string } {
  if (value < 0 || value > 100) return { error: 'Invalid value' }
}
