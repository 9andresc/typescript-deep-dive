// Access modifiers

class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

// Effect on instances
var foo = new FooBase();
foo.x; // okay
foo.y; // Error: private
foo.z; // Error: protected

// Effect on child classes
class FooChild extends FooBase {
  constructor() {
    super();
    this.x; // okay
    this.y; // Error: private
    this.z; // okay
  }
}
