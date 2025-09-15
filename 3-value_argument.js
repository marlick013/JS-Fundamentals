const { argv } = require('node:process');

if (argv[2] === undefined) {
  console.log("No argument");
} else if (argv[3] === undefined) {
  console.log("Argument found");
  console.log(argv[2]);
} else {
  console.log("Arguments found");
  console.log(argv.slice(2).join(' '));
}
