// readonly

export {};

function foo(config: { readonly bar: number; readonly baz: number }) {}

let config = { bar: 123, baz: 123 };
// You can be sure that `config` isn't changed
foo(config);

type Foo = {
  readonly bar: number;
  readonly baz: number;
};

// Initialization is okay
let foo: Foo = { bar: 123, baz: 123 };

// Mutation is not
foo.bar = 456; // Error: Left-hand side of assignment expression cannot be a constant or a read-only property

class Foo {
  readonly bar = 1; // Okay
  readonly baz: string;

  constructor() {
    this.baz = 'hello'; // Okay
  }
}

// Readonly

type Foo = {
  bar: number;
  baz: number;
};

type FooReadonly = Readonly<Foo>;

let foo: Foo = { bar: 123, baz: 456 };
let fooReadonly: FooReadonly = { bar: 123, baz: 456 };

foo.bar = 456; // Okay
fooReadonly.bar = 456; // Error: `bar` is readonly

// Various use cases

// ReactJS

interface Props {
  readonly foo: number;
}
interface State {
  readonly bar: number;
}

class Something extends React.Component<Props, State> {
  someMethod() {
    // You can rest assured no one is going to do
    this.props.foo = 123; // Error: props are immutable
    this.state.bar = 456; // Error: one should use this.setState
  }
}

// Seamless immutable

interface Foo {
  readonly [x: number]: number;
}

let foo: Foo = { 0: 123, 2: 345 };
console.log(foo[0]); // Okay
foo[0] = 456; // Error

let foo: ReadonlyArray<number> = [1, 2, 3];
console.log(foo[0]); // Okay
foo.push(4); // Error
foo = foo.concat([4]); // Okay

// Automatic inference

class Person {
  firstName: string = 'John';
  lastName: string = 'Doe';

  get fullName() {
    return this.firstName + this.lastName;
  }
}

const person = new Person();
console.log(person.fullName); // John Doe
person.fullName = 'Dear Reader'; // Error: `fullName` is readonly
