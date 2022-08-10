module.exports = function toReadable(number) {
    let numberToString = number + '';

    let arrayOne = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let arrayTwo = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrayThree = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    if (numberToString.length == 1) {
        return arrayOne[number - 1];
        console.log(arrayOne[number - 1]);
    };

    if ((numberToString.length == 2) && (number <= 19)) {
        return arrayTwo[number - 10];
    };

    if ((numberToString.length == 2) && (number >= 20)) {
        return arrayThree[numberToString[number - 2]] + arrayOne[number - 1];
    };








    
};
