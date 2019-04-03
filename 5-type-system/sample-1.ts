// Basic annotations

function identify(num: number): number {
  return num;
}

// Primitive types

var num: number;
var str: string;
var bool: boolean;

num = 123;
num = 123.456;
num = '123'; // Error

str = '123';
str = 123; // Error

bool = true;
bool = false;
bool = 'false'; // Error

// Arrays

var boolArray: boolean[];

boolArray = [true, false];
console.log(boolArray[0]); // -> true
console.log(boolArray.length); // -> 2
boolArray[1] = true;
boolArray = [false, false];

boolArray[0] = 'false'; // Error
boolArray = 'false'; // Error
boolArray = [true, 'false']; // Error

// Interfaces

interface Name {
  first: string;
  second: string;
}

var name: Name;
name = {
  first: 'John',
  second: 'Doe'
};

// Error: `second` is missing
name = {
  first: 'John'
};

// Error: `number` is not assignable to type `string`
name = {
  first: 'John',
  second: 123
};

// Inline type annotation

var name: {
  first: string;
  second: string;
};

name = {
  first: 'John',
  second: 'Doe'
};

// Special types: `any`, `null`, `undefined`, and `void`

// `any`
var power: any;

// Takes any and all types
power = '123';
power = 123;

// It's compatible with all types
power = num;
num = power;

// `null` and `undefined`
var num: number;
var str: string;

// These literals can be assigned to anything
num = null;
str = undefined;

// `void`
function log(message: any): void {
  console.log(message);
}

// Generics

function reverse<T>(items: T[]): T[] {
  var toReturn = [];

  for (let i = items.length - 1; i >= 0; i--) {
    toReturn.push(items[i]);
  }

  return toReturn;
}

var sample = [1, 2, 3];
var reversed = reverse(sample);
console.log(reversed); // -> 3,2,1

// Safety
reversed[0] = '1'; // Error
reversed = ['1', '2']; // Error

reversed[0] = 1; // Okay
reversed = [1, 2]; // Okay

// Union type

function formatCommandLine(command: string[] | string) {
  var line = '';

  if (typeof command == 'string') {
    line = command.trim();
  } else {
    line = command.join(' ').trim();
  }

  // Do stuff with line: string
}

// Intersection type

function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{};

  for (let id in first) {
    result[id] = first[id];
  }

  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id];
    }
  }

  return result;
}

var x = extend({ a: 'hello' }, { b: 42 });

// x now has both `a` and `b`
var a = x.a;
var b = x.b;

// Tuple type

var nameNumber: [string, number];

// Okay
nameNumber = ['Jenny', 123];

// Error
nameNumber = ['Jenny', '123'];

// Type alias

type StrOrNum = string | number;

// Usage: just like any other notation
var sample: StrOrNum;
sample = 123;
sample = '123';

// Just checking
sample = true; // Error

type Text = string | { text: string };
type Coordinates = [number, number];
type Callback = (data: string) => void;
