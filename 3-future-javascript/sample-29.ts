// Parallel control flow

// An async function to simulate loading an item from some server
function loadItem(id: number): Promise<{ id: number }> {
  return new Promise(resolve => {
    console.log('Loading item', id);
    setTimeout(() => {
      resolve({ id });
    }, 1000);
  });
}

// Chaining
let item1;
let item2;

loadItem(1)
  .then(res => {
    item1 = res;
    return loadItem(2);
  })
  .then(res => {
    item2 = res;
    console.log('done');
  }); // Overall time will be around 2s

// Parallel
Promise.all([loadItem(1), loadItem(2)]).then(res => {
  [item1, item2] = res;
  console.log('done');
}); // Overall time will be around 1s

// Race
var task1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one');
});
var task2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two');
});

Promise.race([task1, task2]).then(value => {
  console.log(value); // -> one
  // Both resolve, but task1 resolves faster
});
