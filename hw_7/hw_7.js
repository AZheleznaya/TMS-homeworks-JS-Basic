"use strict";

// Normal level

// Task 1

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// 1 option - function declaration

fibonacci.forEach(function(number) {
    console.log(number);
});

// 2 option - arrow function

fibonacci.forEach(number => console.log(number));

// Task 2

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];

// 1 option - function declaration

const members = users.map(function (member, index) {
    return `member ${index + 1}: ${member}`;
});

console.log(members);

// 2 option - arrow function

const userList = users.map((member, index) => `member ${index + 1}: ${member}`);

console.log(userList);

// Task 3

const numbers = [7, -4, 32, -90, 54, 32, -21];

// 1 option - function declaration

const positiveNumbers = numbers.filter(function (number) {
    return number > 0;
});

console.log(positiveNumbers);

// // 2 option - arrow function

const positiveNumber = numbers.filter(number => number > 0);

console.log(positiveNumber);

// Task 4

const fibonaci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];

// 1 option - function declaration

const sumFibonacci = fibonaci.reduce(function (sum, current) {
    return sum + current;
});

console.log(`Сумма всех чисел массива: ${sumFibonacci}`);

// 2 option - arrow function

const fibonacciSum = fibonaci.reduce((sum, current) => sum + current, 0);

console.log(`Сумма всех чисел массива: ${fibonacciSum}`);

// Task 5

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5];

// 1 option - function declaration

const firstEvenNumber = numbers.find(function (number) {
    return number % 2 === 0;
});

console.log(`Первое четное число в массиве: ${firstEvenNumber}`);

// 2 option - arrow function

const evenNumber = numbers.find(number => number % 2 === 0);

console.log(`Первое четное число в массиве: ${evenNumber}`);

// Advanced level

// Task 1

function Student(name, salary, rate) {
    this.name = name;
    this.salary = salary;
    this.rate = rate;

    this.creditAmount = function () {
        switch (this.rate) {
            case "A":
                return this.salary * 12;
            case "B":
                return this.salary * 9;
            case "C":
                return this.salary * 6;
            default:
                return 0;
        }
    };
}

const student1 = new Student("Vanya", 1000, "A");
const student2 = new Student("Petya", 100, "D");
const student3 = new Student("Masha", 600, "B");
const student4 = new Student("Galina", 750, "B");
const student5 = new Student("Nastya", 850, "C");

const studentsArray = [];
studentsArray.push(student1);
studentsArray.push(student2);
studentsArray.push(student3);
studentsArray.push(student4);
studentsArray.push(student5);

const sumCredits = studentsArray.reduce((sum, student) => sum + student.creditAmount(), 0);

console.log(`Общая сумма кредита, которую можно выдать группе: ${sumCredits}$`);

// Task 2

const vowels = ["A", "E", "I", "O", "U"];

const comment = prompt("Введите Ваш комментарий", "");

function removeVowels(string) {
    const upperCaseString = string.toUpperCase();
    let result = "";
    for (let i = 0; i < upperCaseString.length; i++) {
        if (!vowels.includes(upperCaseString[i])) {
            result += string[i];
        }
    }

    return result;
}

console.log(removeVowels(comment));

// Task 3

const accum1 = "abcd";
const accum2 = "RqaEzty";
const accum3 = "cwAt";

function accum(string) {
    let result = "";

    for (let i = 0; i < string.length; i++) {
        let upperChar = string[i].toUpperCase();
        result += upperChar;

        let lowerChar = upperChar.toLowerCase();

        for (let j = 0; j < i; j++) {
            result += lowerChar;
        }
        if (i < string.length - 1) {
            result += "-";
        }
    }

    return result;
}

console.log(accum(accum1));
console.log(accum(accum2));
console.log(accum(accum3));

// Task 4

function getHighAndLowNumbers(numbers) {
    let result = numbers.split(" ").map(number => +number).sort((a, b) => a - b);

    return `${result[result.length - 1]} ${result[0]}`;
}

console.log(getHighAndLowNumbers("1 2 3 4 5")); // return "5 1"
console.log(getHighAndLowNumbers("1 2 -3 4 5")); // return "5 -3"
console.log(getHighAndLowNumbers("1 9 3 4 -5")); // return "9 -5"

// Task 5

const userWord = prompt("Введите слово", "");

function isIsogram(string) {
    const lowerCaseString = string.toLowerCase();
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString.substring(i + 1).includes(lowerCaseString.charAt(i))) {
            return false;
        }
    }
    return true;
}

console.log(isIsogram(userWord));

// Task 6

const userString = prompt("Введите значение");

function sumNumbers(string) {
    return string.split("").map(number => +number).reduce((sum, number) => sum + number, 0);
}

function getStringCodesSum(string) {
    let total1 = "";

    for (let i = 0; i < string.length; i++) {
        total1 += string.charCodeAt(i);
    }

    let total2 = total1.replaceAll("7", "1");

    let sumNumberTotal1 = sumNumbers(total1);
    let sumNumberTotal2 = sumNumbers(total2);

    return sumNumberTotal1 - sumNumberTotal2;
}

console.log(getStringCodesSum(userString));

// Task 7

const userWord = prompt("Введите слово", "");

function convertToBrackets(string) {
    const lowerCaseString = string.toLowerCase();
    let result = "";
    for (let i = 0; i < lowerCaseString.length; i++) {
        if (lowerCaseString.substring(i + 1).includes(lowerCaseString.charAt(i)) || lowerCaseString.substring(0, i).includes(lowerCaseString.charAt(i))) {
            result += ")";
        } else {
            result += "(";
        }
    }
    return result;
}

console.log(convertToBrackets(userWord));















