// Interfaces

// Write this (inline annotation)
declare var myPoint: { x: number; y: number };

// Or this (interface)
interface Point {
  x: number;
  y: number;
}

declare var myPoint: Point;

// Classes can implement interfaces
interface Point {
  x: number;
  y: number;
}

class MyPoint implements Point {
  x: number;
  y: number;
}

var foo: Point = new MyPoint();
