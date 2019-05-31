/*
- work out how to return Zero or helpful error if no numbers, or stop if no numbers are entered
*/

const readline = require('readline-sync');
const calc = require('./calculator');
const validator = require('./validateUserInputs');

console.log('Welcome to the calculator!');

console.log('Enter the operator:');
for (i = 0; i < 1; i) {
  var operator = readline.prompt();
  operator = validator.validateOperator(operator);
  if (operator === false) {
    console.log("This is not a valid operator - try again (which operator?)")
    i = 0
  } else {
    i++
  };
};


console.log(`How many numbers do you want to ${operator} ?`);
for (i = 0; i < 1; i) {
  var howMany = readline.prompt()
  howMany = validator.validateHowManyNumbers(howMany);
  if (howMany === false) {
    console.log("This is not a valid number - try again (how many?)")
    i = 0
  } else {
    i++
  };
};

const calculator = calc.create_calculator(operator);
var i = 0
do { 
  console.log('Enter a number:');
  var thisNumber = readline.prompt();
  thisNumber = validator.validateEachEnteredNumber(thisNumber)
  if (thisNumber) {
    calculator.add_number(thisNumber)
    i++
  } else {
    console.log("You haven't entered a number or you've entered something that is not a number! Please enter again")
  }
} while (i < howMany)

console.log('The answer is: ' + calculator.calculate());