const foobar = (number) => {
  let output = "";
  if (number % 2 === 0) {
    output += "foo";
  }
  if (number % 7 === 0) {
    output += "bar";
  }
  if (!output) {
    console.log(number);
  } else {
    console.log(output);
  }
};
