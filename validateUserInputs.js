exports.validateOperator = function (input) {
    const operators = ['*', '+', '-', '/', 'x'];
    if (operators.includes(input)) {
        return input
    } else {
        return false
    };
};

exports.validateHowManyNumbers = function (input) {
    input = parseInt(input);
    if (input) {
        return input
    } else {
        return false
    };
};

exports.validateEachEnteredNumber = function (input) {
    input = parseFloat(input)
    if (input) {
        return input
    } else {
        return false
    };
};