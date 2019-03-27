// Classes

class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  add(point: Point) {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

var p1 = new Point(0, 10);
var p2 = new Point(10, 20);
var p3 = p1.add(p2); // -> { x:10, y:30 }

// This class generates the JS on ES5 emit
var Point = (function() {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }

  Point.prototype.add = function(point) {
    return new Point(this.x + point.x, this.y + point.y);
  };

  return Point;
})();
