// Functions

// Parameter annotations

// Variable annotation
var sampleVariable: { bar: number };

// Function parameter annotation
function foo(sampleParameter: { bar: number }) {}

// Return type annotation

interface Foo {
  foo: string;
}

// Return type annotated as `: Foo`
function foo(sample: Foo): Foo {
  return sample;
}

// Optional parameters

function foo(bar: number, baz?: string): void {}

function foo(bar: number, baz: string = 'hello') {}

foo(123);
foo(123, 'hello');

// Overloading

function padding(a: number, b?: number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }

  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}

// Overloads
function padding(all: number);
function padding(topAndBottom: number, leftAndRight: number);
function padding(top: number, right: number, bottom: number, left: number);
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number) {
  // Same body as before
}
