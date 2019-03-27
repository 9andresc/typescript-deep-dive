// Arrow functions

var inc = x => x + 1;

// Instead of these
function Person(age) {
  this.age = age;
  this.growOld = function() {
    this.age++;
  };
}

function Person(age) {
  this.age = age;

  var _this = this;

  this.growOld = function() {
    _this.age++;
  };
}

// Write this
function Person(age) {
  this.age = age;
  this.growOld = () => {
    this.age++;
  };
}

// Or even better
class Person {
  constructor(public age: number) {}

  growOld = () => {
    this.age++;
  };
}

var person = new Person(1);

setTimeout(person.growOld, 1000);

setTimeout(function() {
  console.log(person.age); // -> 2
}, 2000);
