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

//100 200 300 ... 900
    if ((numberToString.length == 3) && (number % 100 == 0)) {
        return arrayOne[numberToString[0] - 1] + ' ' + 'hundred';
    };
//101 102 103... 109... 201 202 203... 209...
    if ((numberToString.length == 3) && (+numberToString[1] == 0) && (+numberToString[2] != 0)) {
        return arrayOne[numberToString[0] - 1] + ' ' + 'hundred' + ' ' + arrayOne[numberToString[2] - 1];
    };
//110 111 112... 119... 210 211 212... 219
    if ((numberToString.length == 3) && (+((numberToString[1]) + (numberToString[2])) <=19) && (+numberToString[1] != 0)) {
        return arrayOne[numberToString[0] - 1] + ' ' + 'hundred' + ' ' + arrayTwo[+((numberToString[1]) + (numberToString[2])) - 10];
    };
//120 130 140... 190... 220 230 240
    if ((numberToString.length == 3) && (+((numberToString[1]) + (numberToString[2])) > 19) && (+((numberToString[1]) + (numberToString[2])) %10 == 0)) {
        return arrayOne[numberToString[0] - 1] + ' ' + 'hundred' + ' ' + arrayThree[+numberToString[1] - 2];
    };
//121 122 123.. 199
    if ((numberToString.length == 3) && (+((numberToString[1]) + (numberToString[2])) > 19) && (+((numberToString[1]) + (numberToString[2])) %10 != 0)) {
        return arrayOne[numberToString[0] - 1] + ' ' + 'hundred' + ' ' + arrayThree[+numberToString[1] - 2] + ' ' + arrayOne[+numberToString[2] - 1];
    };
};
