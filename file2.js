let prompt = require ('prompt-sync')();
let input = prompt('input speed: ')
let enteredSpeed = parseFloat(input)
//generates a prompt to interact with the user through the terminal
const l=70


function speedDetector(y){ //calculates the points for your input
  
  let points = Math.floor((y-l) / 5)
  if (l > y) return "Ok"
  else if ((y > l) && points < 12) return "Points:" + points
   else if (points > 12) return "License suspended."// issues a license suspension if points exceed 12

}

console.log(speedDetector(enteredSpeed))





