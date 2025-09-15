const { argv } = require('node:process');

const x = parseInt(argv[2]);
let output = "";

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < Math.abs(x); i++) {
    output += "C is fun\n";
  }
  console.log(output.trim())
