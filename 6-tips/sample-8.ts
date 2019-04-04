// Limit usage of property setters

export {};

// Consider the following code
{
  foo.bar = {
    a: 123,
    b: 456
  };
}

// In the presence of setters/getters
{
  class Foo {
    a: number;
    b: number;

    set bar(value: { a: number; b: number }) {
      this.a = value.a;
      this.b = value.b;
    }
  }

  let foo = new Foo();
}
