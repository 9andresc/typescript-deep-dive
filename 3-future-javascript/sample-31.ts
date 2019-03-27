// Lazy iterators

function* infiniteSequence() {
  var i = 0;

  while (true) {
    yield i++;
  }
}

var iterator = infiniteSequence();

while (true) {
  console.log(iterator.next()); // { value: xxx, done: false } forever and ever
}

function* idMaker() {
  let index = 0;

  while (index < 3) {
    yield index++;
  }
}

let gen = idMaker();

console.log(gen.next()); // -> { value: 0, done: false }
console.log(gen.next()); // -> { value: 1, done: false }
console.log(gen.next()); // -> { value: 2, done: false }
console.log(gen.next()); // -> { done: true }
