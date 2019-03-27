// d.prototype.__proto__ = b.prototype

function Animal() {}
Animal.prototype.walk = function() {
  console.log('walk');
};

function Bird() {}
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function() {
  console.log('fly');
};

var bird = new Bird();

bird.walk(); // -> walk
bird.fly(); // -> fly
