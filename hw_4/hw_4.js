"use strict";

// Normal level

// Task 1

function getSum(a) {
    let sum = 0;

    for (let i = 0; i <= a; i++) {
        sum += i;
    }

    return sum;
}

console.log(getSum(100));

// Task 2

const CREDIT_TAX_RATE = 0.17;
const CREDIT_YEARS_COUNT = 5;

function getOverPay(sumCredit) {
   return ((sumCredit * CREDIT_TAX_RATE) * CREDIT_YEARS_COUNT);
}

let overPay = getOverPay(1000);
console.log(`Сумма переплаты по кредиту составит: ${overPay}`);


// Task 3

function trimString(string, from, to) {
    let result = "";

    for (let i = from; i <= to; i++) {
        result += string.charAt(i);
    }

    return result;
}

console.log(trimString("Функции - основные строительные элементы", 10, 39))

// Task 4

function getSumNumbers(numbers) {
    let number = String(numbers);
    let sumNumbers = 0;

    for (let i = 0; i < number.length; i++) {
        sumNumbers += +number.charAt(i);
    }

    return sumNumbers;
}

console.log(getSumNumbers(2022));

// Task 5

function getSum(a, b) {
    let sum = 0;

    if (a === b) {
        return a;
    }

    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
}

console.log(getSum(-2, 1));

// Task 6

function fooboo(boolean, foo, boo) {
    let booleanVar = !!boolean;

    if (booleanVar === true) {
        foo()
    } else {
        boo()
    }

    return booleanVar;
}

function showFoo() {
    console.log("Моё имя foo");
}
function showBoo() {
    console.log("Моё имя boo");
}

fooboo(6, showFoo, showBoo);

// Advanced level

// Task 1

// У треугольника сумма любых двух сторон должна быть больше (либо равно) третьей.

function checkTriangle(side1, side2, side3) {
    let a = +side1;
    let b = +side2;
    let c = +side3;

    if (a + b >= c && a + c >= b && b + c >= a) {
        return "true";
    } else {
        return "false";
    }
}

console.log(checkTriangle(2,2,4));

// Task 2

function calcChocolateParts(n, m) {
    let negativeNumbers = 0;

    if (n % 1 !== 0 || m % 1 !== 0) {
        return 0;
    } if (n <= negativeNumbers || m <= negativeNumbers) {
        return 0;
    } if (n === 1 && m === 1) {
        return 0;
    } else {
        return n * m - 1;
    }
}

let chocolateParts = calcChocolateParts(1,7);

console.log(`Минимальное колиичество надломов: ${chocolateParts}`);

// Task 3

const TAX_RATE = 0.20;
const MOBILE_PRICE = 100;
const ACCESSORY_PRICE = 22.2;

let purchaseAmount = 0;

function calcTax(purchaseAmount) {
    return purchaseAmount * TAX_RATE;
}

function updatePurchaseAmount(purchaseAmount) {
    return purchaseAmount.toFixed(2) + "$";
}

function calcPurchases() {
    let bankBalance = +prompt("Введите сумму Вашего банковского счёта.");
    let forConfirm = true;

    while (forConfirm) {
        if (purchaseAmount < bankBalance) {
            purchaseAmount += (MOBILE_PRICE + ACCESSORY_PRICE);
           forConfirm = confirm(`Ваша покупка составит: ${purchaseAmount}. Хотите купить ещё?`);
        } else {
            forConfirm = false;
            alert("У Вас недостаточно средств.");
        }
    }

    purchaseAmount = purchaseAmount + calcTax(purchaseAmount);
    alert(`Ваша покупка составит: ${updatePurchaseAmount(purchaseAmount)}`);

    if (purchaseAmount > bankBalance) {
        alert("Вы не можете себе позволить такую покупку.");
    } else {
        alert("Вы можете позволить себе такую покупку.");
    }

}

calcPurchases();







