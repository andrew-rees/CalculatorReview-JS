exports.create_calculator = function (operator) {
  let numbers = []; 

  return {
    clear_numbers: function () {
      numbers = [];
    },
    add_number: function (number) {
      numbers.push(number);
    },
    calculate: function () {
      let answer = numbers[0];
      for (var i = 1; i < numbers.length; i++) {
        switch (operator) { 
          case '+':
            answer = answer + numbers[i];
            break;
          case '-':
            answer = answer - numbers[i];
            break;
          case '/':
            answer = answer / numbers[i];
            break;
          case 'x':
            answer = answer * numbers[i];
            break;
          case '*':
            answer = answer * numbers[i];
            break;
        };
      };
      return answer;
    }
  };
};
