// Arrow functions with libraries that use `this`

var _self = this;

something.each(function() {
  console.log(_self); // The lexical scoped value
  console.log(this); // The library passed value
});
