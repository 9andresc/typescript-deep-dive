// Externally controlled execution

function* generator() {
  console.log('Execution started');
  yield 0;
  console.log('Execution resumed');
  yield 1;
  console.log('Execution resumed');
}

var iterator = generator();
console.log('Starting iteration');
// -> Execution started
console.log(iterator.next()); // -> { value: 0, done: false }
// -> Execution resumed
console.log(iterator.next()); // -> { value: 1, done: false }
// -> Execution resumed
console.log(iterator.next()); // -> { value: undefined, done: true }

function* generator() {
  const bar = yield 'foo'; // `bar` may be `any` type
  console.log(bar); // -> bar
}

const iterator = generator();
// Start execution till we get first yield value
const foo = iterator.next();
console.log(foo.value); // -> foo
// Resume execution injecting bar
const nextThing = iterator.next('bar');

// The following example demostrates `iterator.throw(error)`
function* generator() {
  try {
    yield 'foo';
  } catch (err) {
    console.log(err.message); // -> bar
  }
}

var iterator = generator();
// Start execution till we get the first yield value
var foo = iterator.next();
console.log(foo.value); // -> foo
// Resume execution throwing an exception `bar`
var nextThing = iterator.throw(new Error('bar'));
