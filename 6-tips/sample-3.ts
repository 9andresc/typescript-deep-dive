// Currying

export {};

// A curried function
let add = (x: number) => (y: number) => x + y;

// Simple usage
add(123)(456);

// Partially applied
let add123 = add(123);

// Fully apply the function
add123(456);
