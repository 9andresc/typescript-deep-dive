import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

// Async/Await

async function foo() {
  try {
    var val = await Promise.resolve(123);
    console.log(val);
  } catch (err) {
    console.log('Error: ', err.message);
  }
}

// Generated JS
const foo = wrapToReturnPromise(function*() {
  try {
    var val = yield Promise.resolve(123);
    console.log(val);
  } catch (err) {
    console.log('Error: ', err.message);
  }
});

// Async/Await support in TypeScript

function delay(milliseconds: number, count: number): Promise<number> {
  return new Promise<number>(resolve => {
    setTimeout(() => {
      resolve(count);
    }, milliseconds);
  });
}

// `async` functions always return a Promise
async function dramaticWelcome(): Promise<void> {
  console.log('Hello');

  for (let i = 0; i < 5; i++) {
    // `await` is converting `Promise<number>` into `number`
    const count: number = await delay(500, i);
    console.log(count);
  }

  console.log('World!');
}

dramaticWelcome();
