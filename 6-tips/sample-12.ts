// Barrel

// Imagine the following class structure in a library
{
  // demo/foo.ts
  export class Foo {}

  // demo/bar.ts
  export class Bar {}

  // demo/baz.ts
  export class Baz {}

  // Without a barrel, a consumer would need three `import` statements
  import { Foo } from '../demo/foo';
  import { Bar } from '../demo/bar';
  import { Baz } from '../demo/baz';
}

// You can instead add a barrel demo/index.ts
{
  // demo/index.ts
  export * from './foo';
  export * from './bar';
  export * from './baz';

  // Now the consumer can import what it needs from the barrel
  import { Foo, Bar, Baz } from '../demo';
}

// Named exports

export {};

{
  // demo/foo.ts
  export class Foo {}

  // demo/bar.ts
  export class Bar {}

  // demo/baz.ts
  export function getBaz() {}
  export function setBaz() {}

  // demo/index.ts
  import * as baz from './baz'; // Import as name

  export * from './foo';
  export * from './bar';
  export { baz }; // Export the name

  // And now the consumer would look like
  import { Foo, Bar, baz } from '../demo';

  // Usage
  baz.getBaz();
  baz.setBaz();
}
