// Classes Are Useful

export {};

// Revealing Module Pattern
{
  function foo() {
    let someProperty;

    function someMethod() {}

    return {
      someMethod
    };
  }
}

// File Modules
{
  let someProperty;

  function foo() {
    // Some initialization code
  }
  foo(); // Some initialization code

  someProperty = 123; // Some more initialization

  // Some utility function not exported

  // later
  export function someMethod() {}
}

// Classes
{
  class Foo {
    public someProperty;

    constructor() {
      // Some initialization
    }

    public someMethod() {
      // Some code
    }

    public someUtility() {
      // Some code
    }
  }

  export = new Foo();
}
