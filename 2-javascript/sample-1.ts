// Making JavaScript better

// JavaScript will give you "" (which makes little sense). But TypeScript will yield an error
console.log([] + []);

/*
Other things that are nonsensical in JavaScript
- Don't give a runtime error (making debugging hard)
- But TypeScript will give a compile time error (making debugging unnecessary)
*/

// JS: 0, TS: Error
console.log({} + []);

// JS: [object Object], TS: Error
console.log([] + {});

// JS: Nan or [object Object][object Object] depending upon browser, TS: Error
console.log({} + {});

// JS: NaN, TS: Error
console.log('hello' + 1);

function add(a, b) {
  // JS: undefined, TS: Error 'unreachable code detected'
  return;
  a + b;
}
