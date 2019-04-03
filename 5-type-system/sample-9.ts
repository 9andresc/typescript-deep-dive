import { Direction } from "tty";
import { Dirent } from "fs";

// Literals

export {};

// String Literals

let foo: 'Hello';
foo = 'Bar'; // Error: "Bar" is not assignable to type "Hello"

type CardinalDirection = 'North' | 'East' | 'South' | 'West';

function move(distance: number, direction: CardinalDirection) {
  // ...
}

move(1, 'North'); // Okay
move(1, 'Nurth'); // Error

// Other literal types

type OneToFive = 1 | 2 | 3 | 4 | 5;
type Bools = true | false;

// Inference

function iTakeFoo(foo: 'foo') {}
const test = {
  someProp: 'foo'
};
iTakeFoo(test.someProp); // Error: Argument of type string is not assignable to parameter of type `foo`

// Fix it with type assertion
const test = {
  someProp: 'foo' as 'foo'
};

// Or with type annotation
type Test = {
  someProp: 'foo';
};
const test: Test = {
  someProp: 'foo'
};

// String based enums

// Utility function to create a K:V from a list of strings
function strEnum<T extends string>(o: Array<T>): { [K in T]: K } {
  return o.reduce((res, key) => {
    res[key] = key;
    return res;
  }, Object.create(null));
}

// Create a K:V
const Direction = strEnum([
  'North',
  'South',
  'East',
  'West'
])

// Create a type
const Direction = keyof typeof Direction;

// Sample using a string enum
let sample: Direction;

sample = Direction.North; // Okay
sample = 'North'; // Okay
sample = 'Anything else'; // Error
