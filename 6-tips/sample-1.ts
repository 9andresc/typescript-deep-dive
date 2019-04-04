// Nominal Typing

export {};

// Using literal types
{
  // Generic Id type
  type Id<T extends string> = {
    type: T;
    value: string;
  };

  // Specific Id types
  type FooId = Id<'foo'>;
  type BarId = Id<'bar'>;

  // Optional: constructor functions
  const createFoo = (value: string): FooId => ({ type: 'foo', value });
  const createBar = (value: string): BarId => ({ type: 'bar', value });

  let foo = createFoo('sample');
  let bar = createBar('sample');

  foo = bar; // Error
  foo = foo; // Okay
}

// Using Enums
{
  // Foo
  enum FooIdBrand {}
  type FooId = FooIdBrand & string;

  // Bar
  enum BarIdBrand {}
  type BarId = BarIdBrand & string;

  // Usage demo
  let fooId: FooId;
  let barId: BarId;

  // Safety
  fooId = barId; // Error
  barId = fooId; // Error

  // Newing up
  fooId = 'foo' as FooId;
  barId = 'bar' as BarId;

  // Both types are compatible with the base
  let str: string;
  str = fooId;
  str = barId;
}

// Using interfaces
{
  // Foo
  interface FooId extends String {
    _fooIdBrand: string; // To prevent type errors
  }

  // Bar
  interface BarId extends String {
    _barIdBrand: string; // To prevent type errors
  }

  // Usage demo
  let fooId: FooId;
  let barId: BarId;

  // Safety
  fooId = barId; // Error
  barId = fooId; // Error
  fooId = <FooId>barId; // Error
  barId = <BarId>fooId; // Error

  // Newing up
  fooId = 'foo' as any;
  barId = 'bar' as any;

  // If you need the base string
  let str: string;
  str = fooId as any;
  str = barId as any;
}
