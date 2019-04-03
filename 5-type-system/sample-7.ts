// Freshness

export {};

// Structural typing
function logName(something: { name: string }) {
  console.log(something.name);
}

var person = { name: 'matt', job: 'being awesome' };
var animal = { name: 'cow', diet: 'vegan, but has milk of own species' };
var random = { note: 'I don`t have a name property' };

logName(person); // Okay
logName(animal); // Okay
logName(random); // Error: Property `name` is missing
logName({ name: 'matt', job: 'being awesome' }); // Error: Object literals must only specify known properties

// Allowing extra properties

var x: { foo: number; [x: string]: any };
x = { foo: 1, bar: 2 }; // Okay, `bar` matched by index signature
