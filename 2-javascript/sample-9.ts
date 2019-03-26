// Node style callbacks

fs.readFile('someFile', 'utf8', function onLoad(err, data) {
  if (err) {
    // Do something
  } else {
    // No error
  }
});
