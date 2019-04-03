// Type inference in TypeScript

export {};

// Variable definition

let foo = 123; // `foo` is a number
let bar = 'Hello'; // `bar` is a string
foo = bar; // Error
// The types were flowing from right to left

// Function return types

function add(a: number, b: number) {
  return a + b;
}
// The type was flowing bottom out

// Assignment

type Adder = (a: number, b: number) => number;

let foo: Adder = (a, b) => {
  a = 'Hello'; // Error
  return a + b;
};
// The type was flowing from left to right

// Structuring

// `foo` is inferred to be {a: number, b: number}
let foo = {
  a: 123,
  b: 456
};
foo.a = 'Hello'; // Error

// Similarly for arrays
const bar = [1, 2, 3];
bar[0] = 'Hello'; // Error

// And of course any nesting
let foo = {
  bar: [1, 3, 4]
};
foo.bar[0] = 'Hello'; // Error

// Destructuring

let foo = {
  a: 123,
  b: 456
};

let { a } = foo;
a = 'hello'; // Error

// And arrays
const bar = [1, 2];
let [a, b] = bar;
a = 'hello'; // Error

// Function parameters
type Adder = (numbers: { a: number; b: number }) => number;

function iTakeAnAdder(adder: Adder) {
  return adder({ a: 1, b: 2 });
}

iTakeAnAdder(({ a, b }) => {
  a = 'hello'; // Error
  return a + b;
});
