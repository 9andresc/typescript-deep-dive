// Dynamic `import` expressions

import('moment')
  .then(moment => {
    // lazyModule has all of the proper types, autocomplete works, type checking works, code references work
    const time = moment().format();
    console.log('TypeScript >= 2.4.0 Dynamic Import Expressions');
    console.log('time');
  })
  .catch(err => {
    console.log('Failed to load moment: ', err);
  });

// In the tsconfig.json file

/*
  {
    "compilerOptions": {
      ...
      "module": "esnext",
      ...
    }
  }
*/

// Using "module": "esnext" TypeScript produces the mimic `import()` statement to be input for Webpack Code Splitting
