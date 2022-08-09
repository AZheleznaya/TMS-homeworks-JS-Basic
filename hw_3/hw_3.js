"use strict"

// Normal level

// Task 1

let stringVariable = "true";
let booleanVariable = false;
let numberVariable = 17;
let undefinedVariable = undefined;
let nullVariable = null;

console.log(typeof stringVariable, typeof booleanVariable, typeof numberVariable, typeof undefinedVariable, typeof nullVariable);

// Task 2

let height = 15;
let width = 20;

if (height > width) {
    console.log(`У высоты наибольшее число - ${height}`);
} else if (height < width) {
    console.log(`У ширины наибольшее число - ${width}`);
} else {
    console.log("Числа равны");
}

// Task 3

for (let a = 0; a < 20; a++) {
    if (a % 3 !== 0) continue;
    console.log(a);
}

// Task 4

let key = true;
let documents = true;
let pen = true;
let apple = false;
let orange = true;

let shouldGoToWork = key && documents && pen && (apple || orange);

// Task 5

let i = prompt("Введите число", "1");

if ((i % 5 === 0) && (i % 3 === 0)) {
    alert("FizBuz");
} else if (i % 5 === 0) {
    alert("Fiz");
} else if (i % 3 === 0) {
    alert("Buz");
} else {
    alert("Какое странное число!");
}

// Task 6

let b = prompt("Введите Ваш возраст", "10");

if (b > 18) {
    alert("Попей пивка");
} else if (b >= 16) {
    alert("Можешь выкурить сигаретку, только маме не говори");
} else {
    alert("Пей колу");
}

// Task 7

let userSideOfTheWorld = prompt("В какую сторону света Вы бы хотели отправиться?", "Юг");

switch (userSideOfTheWorld) {
    case "Юг":
    case "юг":
    case "ЮГ":
        alert("На юг пойдешь счастье найдешь");
        break;
    case "Север":
    case "север":
    case "СЕВЕР":
        alert("На север пойдешь много денег найдешь");
        break;
    case "Запад":
    case "запад":
    case "ЗАПАД":
        alert("На запад пойдешь верного друга найдешь");
        break;
    case "Восток":
    case "восток":
    case "ВОСТОК":
        alert("На восток пойдешь разработчиком станешь");
        break;
    default:
        alert("Попробуйте ввести сторону света ещё раз");
}

// Advanced level

// Task 1

let userName = prompt("Введите своё имя");

let updatedUserName = userName.toLowerCase();
let result = "";

for (let d = 0; d < updatedUserName.length; d++) {
    if (d === 0) {
        result += updatedUserName.charAt(d).toUpperCase();
    } else if (updatedUserName.charAt(d - 1) === " ") {
        result += updatedUserName.charAt(d).toUpperCase();
    } else {
        result += updatedUserName.charAt(d);
    }
}

alert(`Привет, ${result}!`);

// Task 2

let userNumber = +prompt("Введите число");
let deduction = +prompt("Cколько отнять?");
let sum = +prompt("Cколько прибавить?");
let multiplication = +prompt("На сколько умножить?");
let division = +prompt("На сколько разделить?");

if (division !== 0) {
    let totalAmount = (((userNumber - deduction) + sum) * multiplication) / division;

    alert(`((((${userNumber} - ${deduction}) + ${sum}) * ${multiplication}) / ${division} = ${totalAmount})`);
} else {
    alert('Ошибка деления на ноль')
}


// Task 3

let string = "";
for (let f = 1; f <= 6; f++) {
    string +="#";
    console.log(string);
}

// Practice

// 1 option

let hiddenNumber = 4;

while (true) {
    let playerNumber = +prompt("Угадайте число  от 1 до 10");
    if (!playerNumber) break;
    else if (playerNumber > hiddenNumber && playerNumber <= 11) {
        alert ("Не угадал :(, загаданное число меньше");
    }
    else if (playerNumber > 10) {
        alert ("Я надеюсь ты опечатался, угадывать нужно в пределах первых 10 чисел");
    }
    else if (hiddenNumber > playerNumber ) {
        alert ("Ты почти у цели, но тебе стоит немного прибавить ;)");
    }
    else if (hiddenNumber === playerNumber) {
        alert (`Ты смог(-ла)! Загаданное число было ${hiddenNumber}.`);
    }
}

 // 2 option

let secretNumber = 6;
let shouldGuess = true;

while (shouldGuess) {
    let playerNumber = +prompt("Угадайте число  от 1 до 10");
    if (!playerNumber) {
        shouldGuess = false;
    }
    else if (playerNumber > secretNumber && playerNumber <= 11) {
        shouldGuess = confirm("Не угадал :(, загаданное число меньше. Попробуешь еще раз?");
    }
    else if (playerNumber > 10) {
        shouldGuess = confirm("Я надеюсь ты опечатался, угадывать нужно в пределах первых 10 чисел. Попробуешь еще раз?");
    }
    else if (secretNumber > playerNumber) {
        shouldGuess = confirm("Ты почти у цели, но тебе стоит немного прибавить ;). Попробуешь еще раз?");
    }
    else if (hiddenNumber === playerNumber) {
        shouldGuess = confirm(`Ты смог(-ла)! Загаданное число было ${secretNumber}. "Сыграем еще раз?"`);
    }
}









