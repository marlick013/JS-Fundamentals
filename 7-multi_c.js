const { argv } = require('node:process');

const x = parseInt(argv[2]);

if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < Math.abs(x)) {
    console.log(`${x} times`);
    i++;
  }
