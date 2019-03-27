// `let` in closures

var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}
// -> 3
//    3
//    3

var funcs = [];

for (var i = 0; i < 3; i++) {
  (function() {
    var local = i;

    funcs.push(function() {
      console.log(local);
    });
  })();
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}
// -> 0
//    1
//    2

var funcs = [];

for (let i = 0; i < 3; i++) {
  funcs.push(function() {
    console.log(i);
  });
}

for (var j = 0; j < 3; j++) {
  funcs[j]();
}
// -> 0
//    1
//    2
