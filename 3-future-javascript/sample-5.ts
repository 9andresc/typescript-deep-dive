// Define using constructor

class Foo {
  x: number;

  constructor(x: number) {
    this.x = x;
  }
}

// This is the same
class Foo {
  constructor(public x: number) {}
}
