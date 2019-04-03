// Moving Types

export {};

// Copying both the Type + Value
{
  class Foo {}
  let Bar = Foo;
  let bar: Bar; // Error: Cannot find name `Bar`
}
{
  namespace importing {
    export class Foo {}
  }

  import Bar = importing.Foo;
  let bar: Bar;
}

// Capturing the type of a variable
{
  let foo = 123;
  let bar: typeof foo;

  bar = 456; // Okay
  bar = '789'; // Error
}

// Capturing the type of a class member
{
  class Foo {
    foo: number;
  }

  // Purely to capture type
  declare let _foo: Foo;

  // Same as before
  let bar: typeof _foo.foo;
}

// Capturing the type of magic strings
{
  // Capture both the type and value of a magic string
  const foo = 'Hello World';

  // Use the captured type
  let bar: typeof foo;

  // `bar` can only ever be assigned to `Hello World`
  bar = 'Hello World'; // Okay
  bar = 'Anything else'; // Error
}

// Capturing Key Names
{
  const colors = {
    red: 'reddish',
    blue: 'bluish'
  };

  type Colors = keyof typeof colors;

  let color: Colors; // Same as `let color = 'red' | 'blue'`
  color = 'red'; // Okay
  color = 'blue'; // Okay
  color = 'anythingElse'; // Error
}
