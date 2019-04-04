// Creating Arrays

export {};

// Creating an empty array is super easy
{
  const foo: string[] = [];
}

// If you want to create an array pre-filled with some content use the ES6 `Array.propotype.fill`
{
  const foo: string[] = new Array(3).fill('');
  console.log(foo); // -> ['', '', '']
}
