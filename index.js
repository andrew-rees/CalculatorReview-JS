/*
- work out how to return Zero or helpful error if no numbers, or stop if no numbers are entered
*/

const readline = require('readline-sync');
const calc = require('./calculator');
const validator = require('./validateUserInputs');

console.log('Welcome to the calculator!');

console.log('Enter the operator:'); 
var operator = readline.prompt();
operator = validator.validateOperator(operator);
if (operator === false) {
  console.log("This is not a valid operator - start again")
  return
};

console.log(`How many numbers do you want to ${operator} ?`);
var howMany = parseInt(readline.prompt());
howMany = validator.validateHowManyNumbers(howMany);
if (howMany === false) {
  console.log("This is not a valid number - start again")
  return
};

const calculator = calc.create_calculator(operator);

for (let i = 0; i < howMany; i++) {
  console.log('Enter a number:'); 
  const thisNumber = parseFloat(readline.prompt());
  if (thisNumber) {
    calculator.add_number(thisNumber);
  } else {
    console.log("You haven't entered a number or you've entered something that is not a number! Please start again")
    return
    // i = 0;
    // calculator.clear_numbers()
    //do a number adding thing here
  };
};

console.log('The answer is: ' + calculator.calculate());
