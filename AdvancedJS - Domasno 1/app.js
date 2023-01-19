console.log("------Task 1------");

let n = prompt("Type a number");
let numbers = [];
let sum = 0;

for(let i = 1; i <= n; i++) {
    numbers.push(i);
};

for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
};

console.log(sum);
console.log(numbers);

// =====================================================
console.log("------Task 2------");

let userInput = prompt("Give me a number");
let printDigits;

for(let i = 0; i < userInput.length; i++) {
     printDigits = userInput[i];
     console.log(printDigits);
};

// =====================================================
console.log("------Task 3------");

numArr = [4, -9, -98, -1, 444, 3, -555];

for(let i = 0; i <= numArr.length; i++) {
    if(numArr[i] < 0) {
        numArr[i] = numArr[i] * -1;
    };
};

console.log(numArr);

// =====================================================
console.log("------Task 4------");

const givenArr = [12, 45, 88, 1, 567, 3, 91];
const newArr = [];

for(let i = 0; i < givenArr.length; i++) {
    if(givenArr[i] % 2 != 0) {
        newArr.push(givenArr[i]);
    };
};

console.log(newArr);

// ====================================================
console.log("------Task 5------");

let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];
let arrNew = [];

for(let i = 0; i < test.length; i++) {
    if(typeof test[i] === "number" && !isNaN(test[i])) {
        arrNew.push(test[i]);
    };
};

console.log(arrNew);