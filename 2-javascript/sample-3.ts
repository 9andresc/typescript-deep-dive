// Structural equality

import * as deepEqual from 'deep-equal';

console.log({ a: 123 } == { a: 123 }); // false
console.log({ a: 123 } === { a: 123 }); // false

console.log(deepEqual({ a: 123 }, { a: 123 })); // true

type IdDisplay = {
  id: string;
  display: string;
};

const list: IdDisplay[] = [
  {
    id: 'foo',
    display: 'Foo Select'
  },
  {
    id: 'bar',
    display: 'Bar Select'
  }
];

const fooIndex = list.map(i => i.id).indexOf('foo');

console.log(fooIndex);
