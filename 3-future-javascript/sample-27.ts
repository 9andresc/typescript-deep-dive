// TypeScript and Promises

Promise.resolve(123)
  .then(res => {
    // `res` is inferred to be of type `number`
    return true;
  })
  .then(res => {
    // `res` is inferred to be of type `boolean`
  });

function iReturnPromiseAfter1Second(): Promise<string> {
  return new Promise(resolve => {
    setTimeout(() => resolve('Hello world!'), 1000);
  });
}

Promise.resolve(123)
  .then(res => {
    // `res` is inferred to be of type `number`
    return iReturnPromiseAfter1Second(); // We are returning `Promise<string>`
  })
  .then(res => {
    // `res` is inferred to be of type `string`
    console.log(res); // -> Hello world!
  });
