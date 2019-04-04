// Singleton Pattern

{
  class Singleton {
    private static instance: Singleton;

    private constructor() {}

    static getInstance() {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }

      return Singleton.instance;
    }

    someMethod() {}
  }

  let something = new Singleton(); // Error: constructor of `Singleton` is private
  let instance = Singleton.getInstance(); // Do something with the instance
}

{
  namespace Singleton {
    export function someMethod() {}
  }

  // Usage
  Singleton.someMethod();
}

{
  // someFile.ts
  export function someMethod() {}

  // Usage
  import { someMethod } from './someFile';
}
