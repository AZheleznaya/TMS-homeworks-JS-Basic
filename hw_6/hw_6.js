"use strict";

// Normal level

// Task 1

const colors = ['red', 'green', 'blue'];

console.log(`Длина массива - ${colors.length}`);

// Task 2

const animals = ['monkey', 'dog', 'cat']

console.log(`Последний элемент массива - ${animals[animals.length - 1]}`)
console.log(`Последний элемент массива - ${animals.at(-1)}`);


// Task 3

const numbers = [5, 43, 63, 23, 90];

numbers.splice(0, 5)
console.log(numbers);

console.log(numbers.length = 0);

// Task 4

const students = ['Polina', 'Dasha', 'Masha'];

// 1 option

students.pop();
students.push('Borya');

students.shift();
students.unshift('Andrey');

console.log(students);

// 2 option

students.splice(2, 1, 'Borya');
students.splice(0, 1, 'Andrey');

console.log(students);

// Task 5

const cats = ['Gachito', 'Tom', 'Batman'];

// 1 option (for)

for (let i = 0; i < cats.length; i++) {
    console.log(cats[i]);
}

// 2 option (for ... of)

for (let cat of cats) {
    console.log(cat);
}

// Task 6

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

// 1 option

const oddAndEvenNumbers = oddNumbers.concat(evenNumbers);
console.log(oddAndEvenNumbers);

console.log(oddAndEvenNumbers.indexOf(8));

// 2 option

oddNumbers.push(...evenNumbers);
console.log(oddNumbers);
console.log(oddNumbers.indexOf(8));

// Task 7

const binary = [0, 0, 0, 0];

let resultArraySize = binary.length * 2;
for (let i = 0; i < resultArraySize; i = i + 2) {
    binary.push(0);
    binary[i + 1] = 1;
}

let result = binary.join('');

console.log(result);

// Advanced level

// Task 1

let userWord = prompt("Введите слово");

function isPalindrome(word) {
    let updatedWord = word.toLowerCase();
    let length = updatedWord.length / 2;
    for (let i = 0; i < length; i++) {
        if (updatedWord[i] !== updatedWord[updatedWord.length - i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(`Введённое слово ${userWord} - ` + (isPalindrome(userWord) ? "палиндром" : "не палиндром"));

// Task 2

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
];

function calcArrayAverage (matrix) {
    let elementsSum = 0;
    let elementsCount = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            elementsSum += matrix[i][j];
        }
        elementsCount  += matrix[i].length;
    }
    return (elementsSum / elementsCount).toFixed(2);
}

console.log(calcArrayAverage(matrix));

// Task 3

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];

let positiveNumbers = mixedNumbers.filter(function (number) {
    return number >= 0;
}) ;

console.log(positiveNumbers);

let negativeNumbers = mixedNumbers.filter(function (number) {
    return number < 0;
});

console.log(negativeNumbers);

// Task 4

let initialArray = [];

for (let i = 0; i < 5; i++) {
    initialArray[i] = (Math.random() * 100).toFixed(0);
}

console.log(initialArray);

let modifiedArray = initialArray.map(function (number) {
    return number ** 3;
});

console.log(modifiedArray);