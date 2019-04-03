// Discriminated Union

export {};

interface Square {
  kind: 'square';
  size: number;
}
interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}
type Shape = Square | Rectangle;

function area(s: Shape) {
  if (s.kind === 'square') {
    // Now TypeScript *knows* that `s` must be a square
    // So you can use its members safely
    return s.size * s.size;
  } else {
    // Wasn't a square? So TypeScript will figure out that it must be a rectangle
    // So you can use its members safely
    return s.width * s.height;
  }
}

// Exhaustive Checks

// Someone just added this new `Circle` type
// We would like to let TypeScript give an error at any place that *needs* to cater for this
interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape) {
  if (s.kind === 'square') {
    return s.size * s.size;
  } else if (s.kind === 'rectangle') {
    return s.width * s.height;
  } else if (s.kind === 'circle') {
    return Math.PI * s.radius ** 2;
  } else {
    // Error: `Circle` is not assignable to `never`
    const _exhaustiveCheck: never = s;
  }
}

// Switch
function area(s: Shape) {
  switch (s.kind) {
    case 'square':
      return s.size * s.size;
    case 'rectangle':
      return s.width * s.height;
    case 'circle':
      return Math.PI * s.radius ** 2;
    default:
      const _exhaustiveCheck: never = s;
  }
}
