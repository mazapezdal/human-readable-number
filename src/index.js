module.exports = function toReadable(number) {
    let numberToString = number + '';

    let zero = 'zero';
    let arrayOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrayTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrayThree = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number <= 0) {
        return zero;
    }

    if ((numberToString.length == 1) && (number != 0)) {
        return arrayOne[number - 1];
    };


    if ((numberToString.length == 2) && (number <= 19)) {
        return arrayTwo[number - 10];
    };

    if ((numberToString.length == 2) && (number % 10 == 0)) {
        return arrayThree[+numberToString[0] - 2];
    }

    if ((numberToString.length == 2) && (number > 20) && (number <= 99) && (number % 10 != 0)) {
        return arrayThree[+numberToString[0] - 2] + ' ' + arrayOne[+numberToString[1] - 1];
    };

    if ((numberToString.length == 2) && (number > 20) && (number <= 99) && (number % 10 != 0)) {
        return arrayThree[+numberToString[0] - 2] + ' ' + arrayOne[+numberToString[1] - 1];
    };


    if ((numberToString.length == 3) && (+numberToString[1] == 0) && (+numberToString[2] == 0)) {

        return arrayOne[number - 1] + ' ' + 'hundred';

    };
};
