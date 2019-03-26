// Checking for either

// Imagine you are doing 'foo.bar == undefined' where bar can be one of:
console.log(undefined == undefined); // true
console.log(null == undefined); // true

// You don't have to worry about falsy values making trough this check
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

function foo(arg: string | null | undefined) {
  if (arg != null) {
    // 'arg' must be a string as '!=' rules out both 'null' and 'undefined'
  }
}
