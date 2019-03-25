// Type errors do not prevent JavaScript emit

var foo = 123;
// Error: Type '"456"' is not assignable to type 'number'
foo = '456';

/*
Even if there are compilation errors, by default TypeScript will emit valid 
JavaScript the best that it can. e.g.

  var foo = 123
  foo = '456'

*/
