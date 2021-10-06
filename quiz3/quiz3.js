const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "text.txt");

const read = async () => {
  const fileStream = fs.createReadStream(filePath);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let value = 0;
  let indexOf = 0;
  for await (const line of rl) {
    const cl = line.replace('"', "").split(",");
    if (cl.includes("value")) {
      indexOf = cl.indexOf("value");
    }
    if (cl[indexOf] !== "value") {
      const current = parseInt(cl[indexOf]);
      value += current;
    }
  }
  return value;
};
read()
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
