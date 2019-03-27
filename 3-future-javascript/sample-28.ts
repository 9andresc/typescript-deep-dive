// Converting a callback style function to return a Promise

import fs from 'fs';

function readFileAsync(filename: string): Promise<any> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
}

// Revisiting the JSON example
function loadJSONAsync(filename: string): Promise<any> {
  return readFileAsync(filename).then(res => JSON.parse(res));
}

// A good JSON file
loadJSONAsync('good.json')
  .then(val => {
    console.log(val);
  })
  .catch(err => {
    console.log('good.json error', err.message); // Not called
  })
  // Non-existent JSON file
  .then(() => loadJSONAsync('absent.json'))
  .then(val => {
    console.log(val); // Not called
  })
  .catch(err => {
    console.log('absent.json error', err.message);
  })
  // Invalid JSON file
  .then(() => loadJSONAsync('invalid.json'))
  .then(val => {
    console.log(val); // Not called
  })
  .catch(err => {
    console.log('invalid.json error', err.message);
  });
