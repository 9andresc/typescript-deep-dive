// Quick object return

// Wrong way to do it
var foo = () => {
  bar: 123;
};

// Correct
var foo = () => ({
  bar: 123
});
