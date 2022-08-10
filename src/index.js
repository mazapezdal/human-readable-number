module.exports = function toReadable(number) {
    let numberToString = number + '';

    let arrayOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrayTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrayThree = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    if (numberToString.length == 1) {
        return arrayOne[number - 1];
    };

    if ((numberToString.length == 2) && (number <= 19)) {
        return arrayTwo[number - 10];
    };

    if((numberToString.length == 2) && (number % 10 == 0)){
        return arrayThree[+numberToString[0] - 2];
    }

    if ((numberToString.length == 2) && (number >= 20) && (number <= 99) && (number % 10 != 0)) {
        return arrayThree[+numberToString[0] - 2] + arrayOne[+numberToString[1]];
    };









};
