let userInput = Number(prompt("Enter number"))
let userInputOne = Number(prompt("Enter second number"));
let userInputTwo = Number(prompt("Enter third number"));
let userInputThree = Number(prompt("Enter fourth number"));

function getDigits(number){
    if(number < 0){
        return number.toString().length - 1;
    }
    return number.toString().length;
};


function evenOrOdd(num) {
    if(num % 2 === 0) {
        return "The number is even";
    } 
    return "The number is odd";
};


function positiveOrNegative(num) {
    if(num < 0) {
        return "The number is negative";
    } else if(num > 0) {
        return "The number is positive"
    }
    return "You number is zero";
};


const getAllThree = (num) => {
    const digits = num < 0 ? num.toString().length - 1 : num.toString().length;
    const evenOdd = num % 2 === 0 ? "the number is even" : "the number is odd";
    const positiveNegative = num < 0 ? "the number is negative" : "the number is positive";

    return {
        digits,
        evenOdd,
        positiveNegative
    }
};

const result = getAllThree(userInputThree);


console.log(getDigits(userInput));
console.log(evenOrOdd(userInputOne));
console.log(positiveOrNegative(userInputTwo));
console.log(`The number of digits is ${result.digits}, ${result.evenOdd}, ${result.positiveNegative}`);