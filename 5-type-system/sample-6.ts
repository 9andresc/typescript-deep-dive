// Type Assertion

export {};

// var foo = {};
// foo.bar = 123; // Property `bar` does not exist on type `{}`
// foo.baz = 'hello'; // Property `baz` does not exist on type `{}`

interface Foo {
  bar: number;
  baz: string;
}

var foo = {} as Foo;
foo.bar = 123;
foo.baz = 'hello';

interface Foo {
  bar: number;
  baz: string;
}

var foo = {} as Foo;
// ahhh ... forget something?

interface Foo {
  bar: number;
  baz: string;
}

var foo = <Foo>{
  // The compiler will provide autocomplete for properties of Foo
  // But it is easy for the developer to forget adding all the properties
  // Also this code is likely to break if Foo gets refactored (e.g. a new property added)
};

var foo: Foo = {
  // The compiler will provide autocomplete for properties of Foo
  // And the compiler will complain of the lack of properties
};

// Double assertion

function handler(event: Event) {
  let mouseEvent = event as MouseEvent;
}

function handler(event: Event) {
  let element = event as HTMLElement; // Error: Neither `Event` nor type `HTMLElement` is assignable to the other
}

function handler(event: Event) {
  let element = (event as any) as HTMLElement; // Okay
}
