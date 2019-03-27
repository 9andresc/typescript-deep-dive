// Callback style code

import fs from 'fs';

function loadJSONSync(filename: string) {
  return JSON.parse(fs.readFileSync(filename).toString());
}

// Good JSON file
console.log(loadJSONSync('good.json'));

// Non-existent file, so `fs.readFileSync` fails
try {
  console.log(loadJSONSync('absent.json'));
} catch (err) {
  console.log('absent.json error', err.message);
}

// Invalid JSON file
try {
  console.log(loadJSONSync('invalid.json'));
} catch (err) {
  console.log('invalid.json error', err.message);
}

// Async callbacks
function loadJSON(filename: string, cb: (error: Error, data?: any) => void) {
  fs.readFile(filename, function(err, data) {
    if (err) cb(err);
    else cb(null, JSON.parse(data.toString()));
  });
}

// Load invalid JSON file
loadJSON('invalid.json', function(err, data) {
  // This code never executes
  if (err) console.log('invalid.json error', err.message);
  else console.log(data);
});

// A better attempt... but still not correct
function loadJSON(filename: string, cb: (error: Error, data?: any) => void) {
  fs.readFile(filename, function(err, data) {
    if (err) cb(err);
    else {
      try {
        cb(null, JSON.parse(data.toString()));
      } catch (err) {
        cb(err);
      }
    }
  });
}

// Load invalid JSON file
loadJSON('invalid.json', function(err, data) {
  if (err) console.log('invalid.json error', err.message);
  else console.log(data);
});

// A good JSON file but a bad callback... gets called again
loadJSON('good.json', function(err, data) {
  console.log('our callback called');

  if (err) console.log('Error:', err.message);
  else {
    // Let's simulate an error by trying to access a property on an undefined variable
    var foo;
    // The following code throws 'Error: Cannot read property `bar` of `undefined`'
    console.log(foo.bar);
  }
});

// A fully functional async version of `loadJSON`
function loadJSON(filename: string, cb: (error: Error, data?: any) => void) {
  fs.readFile(filename, function(err, data) {
    if (err) return cb(err);

    // Contain all your sync code in a try/catch
    try {
      var parsed = JSON.parse(data.toString());
    } catch (err) {
      return cb(err);
    }

    // Except when you call the callback
    return cb(null, parsed);
  });
}
