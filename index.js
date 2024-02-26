function receivesAFunction(callback) {
  callback();
}

function returnsANamedFunction() {
  function namedFunction() {
    console.log(`helloo`);
  }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
  return () => console.log(`Hellooo again`);
}
