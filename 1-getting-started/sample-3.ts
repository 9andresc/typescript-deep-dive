// Types are structural

interface Point2D {
  x: number;
  y: number;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
}

var point2D: Point2D = { x: 0, y: 0 };
var point3D: Point3D = { x: 0, y: 0, z: 0 };

function iTakePoint2D(point: Point2D) {
  // do something
}

iTakePoint2D(point2D); // exact match okay
iTakePoint2D(point3D); // extra information okay
iTakePoint2D({ x: 0 }); // Error: Property 'y' is missing in type '{ x: 0 }' but required in type 'Point2D'
