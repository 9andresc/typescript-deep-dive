// Callable

interface ReturnString {
  (): string;
}

declare const foo: ReturnString;
const bar = foo(); // bar is inferred as a string

// Obvious examples

interface Comple {
  (foo: string, bar?: number, ...others: boolean[]): number;
}

interface Overloaded {
  (foo: string): string;
  (foo: number): number;
}

// Example implementation
function stringOrNumber(foo: number): number;
function stringOrNumber(foo: string): string;
function stringOrNumber(foo: any): any {
  if (typeof foo === 'number') {
    return foo * foo;
  } else if (typeof foo === 'string') {
    return `hello ${foo}`;
  }
}

const overloaded: Overloaded = stringOrNumber;

// Example usage
const str = overloaded(''); // type of `str` is inferred as `string`
const num = overloaded(123); // type of `num` is inferred as `number`

const overloaded: {
  (foo: string): string;
  (foo: number): number;
} = (foo: any) => foo;

// Arrow syntax

const simple: (foo: number) => string = foo => foo.toString();

// Newable

interface CallMeWithNewToGetString {
  new (): string;
}

// Usage
declare const Foo: CallMeWithNewToGetString;
const bar = new Foo(); // `bar` is inferred to be of type `string`
