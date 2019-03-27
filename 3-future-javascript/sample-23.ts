// Iterators

interface IteratorResult<T> {
  done: boolean;
  value: T;
}

interface Iterator<T> {
  next(value?: any): IteratorResult<T>;
  return?(value?: any): IteratorResult<T>;
  throw?(e?: any): IteratorResult<T>;
}

class Component {
  constructor(public name: string) {}
}

class Frame implements Iterator<Component> {
  private pointer = 0;

  constructor(public name: string, public components: Component[]) {}

  public next(): IteratorResult<Component> {
    if (this.pointer < this.components.length) {
      return {
        done: false,
        value: this.components[this.pointer++]
      };
    } else {
      return {
        done: true,
        value: null
      };
    }
  }
}

let frame = new Frame('Door', [
  new Component('top'),
  new Component('bottom'),
  new Component('left'),
  new Component('right')
]);
let iteratorResult1 = frame.next(); // { done: false, value: Component { name: 'top' } }
let iteratorResult2 = frame.next(); // { done: false, value: Component { name: 'bottom' } }
let iteratorResult3 = frame.next(); // { done: false, value: Component { name: 'left' } }
let iteratorResult4 = frame.next(); // { done: false, value: Component { name: 'right' } }
let iteratorResult5 = frame.next(); // { done: true, value: null }

// It is possible to access the iterator value via the value property
let component = iteratorResult1.value; // { Component { name: 'top' } }

// Iterator protocol with `[Symbol.iterator]`
class Frame implements Iterable<Component> {
  constructor(public name: string, public components: Component[]) {}

  [Symbol.iterator]() {
    let pointer = 0;
    let components = this.components;

    return {
      next(): IteratorResult<Component> {
        if (pointer < components.length) {
          return {
            done: false,
            value: components[pointer++]
          };
        } else {
          return {
            done: true,
            value: null
          };
        }
      }
    };
  }
}

let frame = new Frame('Door', [
  new Component('top'),
  new Component('bottom'),
  new Component('left'),
  new Component('right')
]);
for (let cmp of frame) {
  console.log(cmp);
}

/*
Unfortunately `frame.next()` won't work with this pattern and it also looks a 
bit of clunky. `IterableIterator` interface to the rescue!
*/
class Frame implements IterableIterator<Component> {
  private pointer = 0;

  constructor(public name: string, public components: Component[]) {}

  public next(): IteratorResult<Component> {
    if (this.pointer < this.components.length) {
      return {
        done: false,
        value: this.components[this.pointer++]
      };
    } else {
      return {
        done: true,
        value: null
      };
    }
  }

  [Symbol.iterator](): IterableIterator<Component> {
    return this;
  }
}

// Both `frame.next()` and `for...of` cycle now work fine with `IterableIterator` interface.

// Iterator does not have to iterate a finite value.
class Fib implements IterableIterator<number> {
  protected fn1 = 0;
  protected fn2 = 1;

  constructor(protected maxValue?: number) {}

  public next(): IteratorResult<number> {
    var current = this.fn1;
    this.fn1 = this.fn2;
    this.fn2 = current + this.fn1;

    if (this.maxValue != null && current >= this.maxValue) {
      return {
        done: true,
        value: null
      };
    }

    return {
      done: false,
      value: current
    };
  }

  [Symbol.iterator](): IterableIterator<number> {
    return this;
  }
}

let fib = new Fib();

fib.next(); // { done: false, value: 0 }
fib.next(); // { done: false, value: 1 }
fib.next(); // { done: false, value: 1 }
fib.next(); // { done: false, value: 2 }
fib.next(); // { done: false, value: 3 }
fib.next(); // { done: false, value: 5 }

let fibMax50 = new Fib(50);
console.log(Array.from(fibMax50)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

let fibMax21 = new Fib(21);
for (let num of fibMax21) {
  console.log(num); // Prints fibonacci sequence 0 to 21
}
