// `const`

const foo; // Error: `const` declarations must be initialized

const foo = 123;
foo = 456; // Error: Cannot redeclare block-scoped variable `foo`

const foo = 123;
if (true) {
  const foo = 456; // Allowed as it's a new variable limited to this `if` block
}

const foo = { bar: 123 };
foo.bar = 456;
console.log(foo); // -> { bar: 456 }
