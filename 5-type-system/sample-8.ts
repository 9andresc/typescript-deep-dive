// Type Guard

export {};

// typeof

function doSomething(x: number | string) {
  if (typeof x === 'string') {
    console.log(x.subtr(1)); // Error: `subtr` does not exist on type `string`
    console.log(x.substr(1)); // Okay
  }

  x.substr(1); // Error: There is no guarantee that `x` is a `string`
}

// instanceof

class Foo {
  foo = 123;
  common = '123';
}

class Bar {
  bar = 123;
  common = '123';
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // Okay
    console.log(arg.bar); // Error
  }

  if (arg instanceof Bar) {
    console.log(arg.foo); // Error
    console.log(arg.bar); // Okay
  }

  console.log(arg.common); // Okay
  console.log(arg.foo); // Error
  console.log(arg.bar); // Error
}

class Foo {
  foo = 123;
}

class Bar {
  bar = 123;
}

function doStuff(arg: Foo | Bar) {
  if (arg instanceof Foo) {
    console.log(arg.foo); // Okay
    console.log(arg.bar); // Error
  } else {
    // Must be `Bar`
    console.log(arg.foo); // Error
    console.log(arg.bar); // Okay
  }
}

// in

interface A {
  x: number;
}

interface B {
  y: string;
}

function doStuff(q: A | B) {
  if ('x' in q) {
    // q: A
  } else {
    // q: B
  }
}

// Literal Type Guard

type Foo = {
  kind: 'foo'; // Literal type
  foo: number;
};

type Bar = {
  kind: 'bar'; // Literal type
  bar: number;
};

function doStuff(arg: Foo | Bar) {
  if (arg.kind === 'foo') {
    console.log(arg.foo); // Okay
    console.log(arg.bar); // Error
  } else {
    // Must be `Bar`
    console.log(arg.foo); // Error
    console.log(arg.bar); // Okay
  }
}

// User Defined Type Guards

interface Foo {
  foo: number;
  common: string;
}

interface Bar {
  bar: number;
  common: string;
}

function isFoo(arg: any): arg is Foo {
  return arg.foo !== undefined;
}

function doStuff(arg: Foo | Bar) {
  if (isFoo(arg)) {
    console.log(arg.foo); // Okay
    console.log(arg.bar); // Error
  } else {
    console.log(arg.foo); // Error
    console.log(arg.bar); // Okay
  }
}
