
const readline = require('readline');

const rl = readline.createInterface // crestes an interface to carry out the code 
({
  input: process.stdin,
  output: process.stdout
});

function grades(x) { // creates an expression to classify the input into a specific grade
  if (x > 79 && x <= 100) return "A";
  else if (60 <= x && x <= 79) return "B";
  else if (50 <= x && x <= 59) return "C";
  else if (40 <= x && x <= 49) return "D";
  else if (40 > x) return "E";
}

rl.question('Enter your grade: ', (input) => { 
  const myGrade = parseInt(input);

  if (isNaN(myGrade)) { // If input is not a number
    console.log('Invalid input. Please enter a valid number.');
  } else {
    const result = grades(myGrade);
    console.log(`Your grade is: ${result}`);// Displays your grade
  }

  rl.close();
});

