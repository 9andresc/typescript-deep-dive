// Closure

function outerFunction(arg) {
  var variableInOuterFunction = arg;

  function innerFunction() {
    // Access a variable from the outer scope
    console.log(variableInOuterFunction);
  }

  // Call the local function to demostrate that it has access to arg
  innerFunction();
}

outerFunction('Hello Closure');
// -> Hello Closure

function outerFunction(arg) {
  var variableInOuterFunction = arg;

  return function() {
    console.log(variableInOuterFunction);
  };
}

var innerFunction = outerFunction('Hello Closure');

innerFunction();
// -> Hello Closure
