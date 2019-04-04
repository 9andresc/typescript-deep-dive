// `export default` consider harmful

export {};

// Instead of this
{
  class Foo {}

  export default Foo;

  // And then
  import Foo from './foo';
}

// Write this
{
  export class Foo {}

  // And then
  import { Foo } from './foo';
}
