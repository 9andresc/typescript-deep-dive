// Arrow functions and inheritance

class Adder {
  constructor(public a: number) {}

  add = (b: number): number => {
    return this.a + b;
  };
}

class Child extends Adder {
  callAdd(b: number) {
    return this.add(b);
  }
}

// Demo to show it works
const child = new Child(123);
console.log(child.callAdd(123)); // -> 246

class ExtendedAdder extends Adder {
  // Create a copy of parent before creating our own
  private superAdd = this.add;

  // Now create our override
  add = (b: number): number => {
    return this.superAdd(b);
  };
}
