// Promises

// Subscribing to the fate of the promise
const promise = new Promise((resolve, reject) => {
  resolve(123);
});

promise.then(res => {
  console.log('I get called:', res === 123); // -> I get called: true
});
promise.catch(err => {
  // This is never called
});

const promise = new Promise((resolve, reject) => {
  reject(new Error('Something awful happened'));
});

promise.then(res => {
  // This is never called
});
promise.catch(err => {
  console.log('I get called:', err.message); // -> I get called: Something awful happened
});

// Chain-ability of Promises

Promise.resolve(123)
  .then(res => {
    console.log(res); // -> 123
    return 456;
  })
  .then(res => {
    console.log(res); // -> 456
    return Promise.resolve(123);
  })
  .then(res => {
    console.log(res); // -> 123
    return 123;
  });

// Create a rejected promise
Promise.reject(new Error('Something bad happened'))
  .then(res => {
    console.log(res); // Not called
    return 456;
  })
  .then(res => {
    console.log(res); // Not called
    return 123;
  })
  .then(res => {
    console.log(res); // Not called
    return 123;
  })
  .catch(err => {
    console.log(err.message); // -> Something bad happened
  });

// The `catch` actually returns a new promise
Promise.reject(new Error('Something bad happened'))
  .then(res => {
    console.log(res); // Not called
    return 456;
  })
  .catch(err => {
    console.log(err.message); // -> Something bad happened
    return 123;
  })
  .then(res => {
    console.log(res); // -> 123
  });

// Any synchronous errors thrown in a `then` or `catch` result in the returned promise to fail
Promise.resolve(123)
  .then(res => {
    throw new Error('Something bad happened'); // Throw a synchronous error
    return 456;
  })
  .then(res => {
    console.log(res); // Not called
    return Promise.resolve(789);
  })
  .catch(err => {
    console.log(err.message); // -> Something bad happened
  });

// Only the nearest `catch` is called for a given error
Promise.resolve(123)
  .then(res => {
    throw new Error('Something bad happened'); // Throw a synchronous error
    return 456;
  })
  .catch(err => {
    console.log('First catch:', err.message); // -> Something bad happened
    return 123;
  })
  .then(res => {
    console.log(res); // -> 123
    return Promise.resolve(789);
  })
  .catch(err => {
    console.log('Second catch:', err.message); // Not called
  });
