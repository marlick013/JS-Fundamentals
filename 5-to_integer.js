const arg = process.argv[2];         // This gets the argument from the command line
const number = parseInt(arg);        // This tries to turn the argument into an integer

if (isNaN(number)) {
  console.log('Not a number');       // If it’s not a number, say so
} else {
  console.log(My number: ${number}); // If it is a number, show it
}
