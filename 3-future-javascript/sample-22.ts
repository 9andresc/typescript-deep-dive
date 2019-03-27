// `for` ... `of`

var someArray = [9, 2, 5];
for (var item in someArray) {
  console.log(item);
}
// -> 0
//    1
//    2

var someArray = [9, 2, 5];
for (var item of someArray) {
  console.log(item);
}
// -> 9
//    2
//    5

// JS generation
for (var _i = 0; _i < someArray.length; _i++) {
  var item = someArray[_i];
  console.log(item);
}
