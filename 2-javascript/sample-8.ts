// Limit explicit use of undefined

// Instead of this
function foo() {
  // If something
  return { a: 1, b: 2 };
  // Else
  return { a: 1, b: undefined };
}

// Write this
function foo(): { a: number; b?: number } {
  // If something
  return { a: 1, b: 2 };
  // Else
  return { a: 1 };
}
