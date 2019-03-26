// this

function foo() {
  console.log(this);
}

foo(); // 'window' in browsers

var bar = { foo };

bar.foo(); // 'bar' as 'foo' was called on 'bar'
