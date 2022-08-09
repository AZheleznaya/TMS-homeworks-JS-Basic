"use strict";

// Normal level

// Task 1

let ages = {
    "Vanya": 30,
    "Petya": 23
};

delete ages["Vanya"];
delete ages["Petya"];

console.log(ages);

// Task 2

let options = {
    color: "red",
    size: 42
};

console.log(options.color !== undefined);
console.log("size" in options);

// Task 3

const student = {
    name: "John",
    age: 19,
    isHappy: true
};

for (let key in student) {
    console.log(key);
}

for (let key in student) {
    console.log(student[key]);
}

// Task 4

const colors = {
    "ru pum pu ru rum": {
        red: "красный",
        green: "зеленый",
        blue: "синий"
    },
};

let innerColors = colors["ru pum pu ru rum"];

console.log(`${innerColors.red} и ${innerColors.blue}`);

// Task 5

let salaries = {
    andrey: 500,
    sveta: 413,
    anton: 987,
    andre: 664,
    alexandra: 199
};

let sumSalaries = 0;
let membersCount = 0;

for (let key in salaries) {
    sumSalaries += salaries[key];
    membersCount++;
}

let averageSalary = sumSalaries / membersCount;

console.log(averageSalary);

// Task 6

function getUserData(loginMessage, passwordMessage) {
    let login = prompt(loginMessage);
    let password = prompt(passwordMessage);
    let userData = {
        login,
        password
    }

    return userData;
}

let userData = getUserData("Введите Ваш логин", "Введите Ваш пароль");
let userDataConfirmation = getUserData("Подтвердите Ваш логин", "Подтвердите Ваш пароль");

function validateUserData(userData, userDataConfirmation) {
    alert(userData.login === userDataConfirmation.login && userData.password === userDataConfirmation.password ? "Добро пожаловать" : "Перепроверьте введенные данные");
}

validateUserData(userData, userDataConfirmation);

// Advanced level

// Task 1

let numberStringStore = {
    0: "ноль",
    1: "один",
    2: "два",
    3: "три",
    4: "четыре",
    5: "пять",
    6: "шесть",
    7: "семь",
    8: "восемь",
    9: "девять"
};

let matchResult = prompt("Введите результат матча", "2:5");

let resultArray = matchResult.split(":");

let firstTeamScore = +resultArray[0];
let secondTeamScore = +resultArray[1];

console.log(`Результат матча - ${numberStringStore[firstTeamScore]} : ${numberStringStore[secondTeamScore]}`);

// Task 2

let student1 = {
    name: "Polina",
    age: 28
};

let student2 = {
    name: "Polina",
    age: 28
};

function checkObjects(student1, student2) {
    return student1.name === student2.name && student1.age === student2.age;
}

console.log(checkObjects(student1, student2) ? "объекты равны" : "объекты не равны");

// Task 3

const animals = {
    cat: {
        name: "Енчик",
        age: 3,
    },
    dog: {
        name: "Орео",
        age: 2,
    }
};

function showAnimalsName(animals, animal) {
    if (animal in animals) {
        console.log(animals[animal].name);
    } else {
        console.log("Указанный зверь не найден");
    }
}

showAnimalsName(animals,"cat");
showAnimalsName(animals,"bird");


