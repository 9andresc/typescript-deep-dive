// Index Signatures

export {};

// JavaScript Index Signature

{
  let foo: any = {};
  foo['Hello'] = 'World';
  console.log(foo['Hello']); // => World

  class Foo {
    constructor(public message: string) {}

    log() {
      console.log(this.message);
    }
  }

  foo['Hello'] = new Foo('World');
  foo['Hello'].log();

  let obj = {
    toString() {
      console.log('toString called');
      return 'Hello';
    }
  };

  foo[obj] = 'World'; // toString called
  console.log(foo[obj]); // -> toString called, World
  console.log(foo['Hello']); // -> World
}

{
  let foo = ['World'];
  console.log(foo[0]); // -> World
}

// TypeScript Index Signature

{
  let obj = {
    toString() {
      return 'Hello';
    }
  };

  let foo: any = {};

  foo[obj] = 'World'; // Error: The index signature must be a string, number, ...
  // Fix: TypeScript forces you to be explicit
  foo[obj.toString()] = 'World';
}

{
  let obj = { message: 'Hello' };
  let foo: any = {};

  // Error: The index signature must be a string, number, ...
  foo[obj] = 'World';

  // Here is where you actually stored it
  console.log(foo['[object Object']); // -> World
}

// Declaring an index signature
{
  let foo: { [index: string]: { message: string } } = {};

  // Must store stuff that conforms to the structure
  foo['a'] = { message: 'some message' }; // Okay
  foo['a'] = { messages: 'some messages' }; // Error

  // Stuff that is read is also type checked
  foo['a'].message; // Okay
  foo['a'].messages; // Error
}

// All members must conform to the `string` index signature
{
  // Okay
  interface Foo {
    [key: string]: number;
    x: number;
    y: number;
  }

  // Error
  interface Bar {
    [key: string]: number;
    x: number;
    y: string; // Error: `y` must be of type `number`
  }
}
{
  interface Foo {
    [key: string]: number;
    x: number;
  }

  let foo: Foo = { x: 1, y: 2 };

  // Directly
  foo['x']; // `number`

  // Indirectly
  let x = 'x';
  foo[x]; // `number`
}

// Using a limited set of string literals
{
  type Index = 'a' | 'b' | 'c';
  type FromIndex = { [k in Index]?: number };

  const good: FromIndex = { b: 1, c: 2 };

  // Error: Type `{b: number, c: number, d: number}` is not assignable to type `FromIndex`
  const bad: FromIndex = { b: 1, c: 2, d: 3 };
}

// Having both `string` and `number` indexers
{
  interface ArrStr {
    [key: string]: string | number; // Must accommodate all members
    [index: number]: string; // Can be a subset of string indexer
    length: number; // Just an example member
  }
}

// Design Pattern: Nested Index Signature
{
  interface NestedCSS {
    color?: string;
    [selector: string]: string | NestedCSS | undefined;
  }

  const example: NestedCSS = {
    color: 'red',
    '.subclass': {
      color: 'blue'
    }
  };

  const failsSilently: NestedCSS = {
    colour: 'red' // No error as `colour` is a valid string selector
  };
}
{
  interface NestedCSS {
    color?: string;
    nest?: {
      [selector: string]: NestedCSS;
    };
  }

  const example: NestedCSS = {
    color: 'red',
    nest: {
      '.subclass': {
        color: 'blue'
      }
    }
  };

  const doesNotFailsSilently: NestedCSS = {
    colour: 'red' // Error: Unknown property `colour`
  };
}

// Excluding certain properties from the index signature
{
  type FieldState = {
    value: string;
  };

  type FormState = {
    isValid: boolean; // Error: Does not conform to the index signature
    [fieldName: string]: FieldState;
  };
}
{
  type FieldState = {
    value: string;
  };

  // Using an intersection type
  type FormState = { isValid: boolean } & { [fieldName: string]: FieldState };

  // Use it for some JavaScript object you are getting from somewhere
  declare const foo: FormState;

  const isValidBool = foo.isValid;
  const somethingFieldState = foo['something'];

  // Using it to create a TypeScript object will not work
  const bar: FormState = {
    isValid: false // Error: `isValid` is not assignable to `FieldState`
  };
}
