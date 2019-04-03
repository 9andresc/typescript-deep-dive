// Type compability

export {};

// let str: string = 'Hello';
// let num: number = 123;

// str = num; // Error: `number` is not assignable to `string`
// num = str; // Error: `string` is not assignable to `number`

// // Soundness

// let foo: any = 123;
// foo = 'Hello';
// foo.toPrecision(3); // Allowed as you typed it as `any`

// // Structural

// interface Point {
//   x: number;
//   y: number;
// }

// class Point2D {
//   constructor(public x: number, public y: number) {}
// }

// let p: Point;
// // Okay, because of structural typing
// p = new Point2D(1, 2);

// interface Point2D {
//   x: number;
//   y: number;
// }
// interface Point3D {
//   x: number;
//   y: number;
//   z: number;
// }

// var point2D: Point2D = { x: 0, y: 10 };
// var point3D: Point3D = { x: 0, y: 10, z: 20 };

// function iTakePoint2D(point: Point2D) {}

// iTakePoint2D(point2D); // Exact match okay
// iTakePoint2D(point3D); // Extra information okay
// iTakePoint2D({ x: 0 }); // Error: missing information `y`

// // Functions

// // Return type

// // Type hierarchy
// interface Point2D {
//   x: number;
//   y: number;
// }
// interface Point3D {
//   x: number;
//   y: number;
//   z: number;
// }

// // Two sample functions
// let iMakePoint2D = (): Point2D => ({ x: 0, y: 0 });
// let iMakePoint3D = (): Point3D => ({ x: 0, y: 0, z: 0 });

// // Assignment
// iMakePoint2D = iMakePoint3D; // Okay
// iMakePoint3D = iMakePoint2D; // Error: `Point2D` is not assignable to `Point3D`

// // Number of arguments

// let iTakeSomethingAndPassItAnErr = (x: (err: Error, data: any) => void) => {};

// iTakeSomethingAndPassItAnErr(() => null); // Okay
// iTakeSomethingAndPassItAnErr(err => null); // Okay
// iTakeSomethingAndPassItAnErr((err, data) => null); // Okay

// // Error: `(err: any, data: any, more: any) => null` is not assignable to `(err: Error, data: any) => void`
// iTakeSomethingAndPassItAnErr((err, data, more) => null);

// // Optional and Rest Parameters

// let foo = (x: number, y: number) => {};
// let bar = (x?: number, y?: number) => {};
// let baz = (...args: number[]) => {};

// foo = bar = baz;
// baz = bar = foo;

// // Types of arguments

// // Event hierarchy
// interface Event {
//   timestamp: number;
// }
// interface MouseEvent extends Event {
//   x: number;
//   y: number;
// }
// interface KeyEvent extends Event {
//   keyCode: number;
// }

// // Sample event listener
// enum EventType {
//   Mouse,
//   Keyboard
// }
// function addEventListener(eventType: EventType, handler: (n: Event) => void) {}

// // Unsound, but useful and common. Works as function argument comparison is bivariant
// addEventListener(EventType.Mouse, (e: MouseEvent) =>
//   console.log(`${e.x}, ${e.y}`)
// );

// // Undesirable alternatives in presence of soundness
// addEventListener(EventType.Mouse, (e: Event) =>
//   console.log(`${(<MouseEvent>e).x}, ${(<MouseEvent>e).y}`)
// );
// addEventListener(EventType.Mouse, <(e: Event) => void>(
//   ((e: MouseEvent) => console.log(`${e.x}, ${e.y}`))
// ));

// // Still disallowed (clear error). Type safety enforced for wholly incompatible types
// addEventListener(EventType.Mouse, (e: number) => console.log(e));

// // Enums

// enum Status {
//   Ready,
//   Waiting
// }

// let status = Status.Ready;
// let num = 0;

// status = num; // Okay
// num = status; // Okay

// enum Color {
//   Red,
//   Blue,
//   Green
// }

// let color = Color.Red;

// status = color; // Error

// // Classes

// class Animal {
//   feet: number;
//   constructor(name: string, numFeet: number) {}
// }

// class Size {
//   feet: number;
//   constructor(meters: number) {}
// }

// let a: Animal;
// let s: Size;

// a = s;
// s = a;

// // A class hierarchy
// class Animal {
//   protected feet: number;
// }
// class Cat extends Animal {}

// let animal: Animal;
// let cat: Cat;

// animal = cat; // Okay
// cat = animal; // Okay

// // Looks just like Animal
// class Size {
//   protected feet: number;
// }

// let size: Size;

// animal = size; // Error
// size = animal; // Error

// // Generics

// interface Empty<T> {}

// let x: Empty<number>;
// let y: Empty<string>;

// x = y; // Okay, `y` matches the structure of `x`

// interface NotEmpty<T> {
//   data: T;
// }

// let x: NotEmpty<number>;
// let y: NotEmpty<string>;

// x = y; // Error, `x` and `y` are not compatible

// let identity = function<T>(x: T): T {};
// let reverse = function<U>(y: U): U {};

// identity = reverse; // Okay, because `(x: any) => any` matches `(y: any) => any`

// class List<T> {
//   add(val: T) {}
// }

// class Animal {
//   name: string;
// }
// class Cat extends Animal {
//   meow() {}
// }

// const animals = new List<Animal>();
// animals.add(new Animal()); // Okay
// animals.add(new Cat()); // Okay

// const cats = new List<Cat>();
// cats.add(new Animal()); // Error
// cats.add(new Cat()); // Okay

// // Invariance

// Hierarchy
class Animal {
  constructor(public name: string) {}
}
class Cat extends Animal {
  meow() {}
}

// An item of each
let animal = new Animal('animal');
let cat = new Cat('cat');

// Polymorphism - Animal <= Cat
animal = cat; // Okay
cat = animal; // Error: `cat` extends `animal`

// Array of each to demostrate variance
let animalArr: Animal[] = [animal];
let catArr: Cat[] = [cat];

// Obviously bad: Contravariance - Animal <= Cat, Animal[] >= Cat[]
catArr = animalArr; // Okay, if contravariant
catArr[0].meow(); // Allowed, but error at run-time

// Also bad: Covariance - Animal <= Cat, Animal[] <= Cat[]
animalArr = catArr; // Okay, if covariant
animalArr.push(new Animal('another animal')); // Just pushed an animal into catArr
catArr.forEach(c => c.meow()); // Allowed, but error at run-time
