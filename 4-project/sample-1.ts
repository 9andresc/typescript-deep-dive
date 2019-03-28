// Namespaces

var something;

(function(something) {
  something.foo = 123;
})(something || (something = {}));

console.log(something); // -> { foo: 123 }

(function(something) {
  something.bar = 456;
})(something || (something = {}));

console.log(something); // -> { foo: 123, bar: 456 }

// TypeScript's namespace

namespace Utility {
  export function log(msg) {
    console.log(msg);
  }

  export function error(msg) {
    console.error(msg);
  }
}

// Usage
Utility.log('Call me');
Utility.error('Maybe!');

// Generated JS
(function(Utility) {
  // Add stuff to Utility
})(Utility || (Utility = {}));
