// Type Instantiation for Generics

export {};

class Foo<T> {
  foo: T;
}

{
  let FooNumber = Foo as { new (): Foo<number> };
}
{
  class FooNumber extends Foo<number> {}
}

function id<T>(x: T) {
  return x;
}
const idNum = id as { (x: number): number };
