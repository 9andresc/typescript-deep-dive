// Reason why Closures are awesome

// The Module Pattern
function createCounter() {
  let val = 0;

  return {
    increment() {
      val++;
    },
    getVal() {
      return val;
    }
  };
}

let counter = createCounter();

counter.increment();
console.log(counter.getVal()); // -> 1
counter.increment();
console.log(counter.getVal()); // -> 2
