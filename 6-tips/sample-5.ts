// Lazy Object Literal Initialization

export {};

// In JavaScript
{
  let foo = {};
  foo.bar = 123; // Error: `bar` does not exists on type `{}`
  foo.baz = 'Hello World'; // Error: `baz` does not exists on type `{}`
}

// Ideal fix
{
  let foo = {
    bar: 123,
    baz: 'Hello World'
  };
}

// Quick fix
{
  let foo = {} as any;
  foo.bar = 123;
  foo.baz = 'Hello World';
}

// Middle ground
{
  interface Foo {
    bar: number;
    baz: string;
  }

  let foo = {} as Foo;
  foo.bar = 123;
  foo.baz = 'Hello World';
}
