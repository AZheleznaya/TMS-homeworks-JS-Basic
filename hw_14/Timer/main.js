"use strict";

const secondItem = document.querySelector(".timer__dial_time");
const buttonStart = document.querySelector(".timer__button_start");
const buttonStop = document.querySelector(".timer__button_stop");

let second = 0;
let interval;

function startTimer () {
    second++;
    (second < 10) ? secondItem.innerText = ("0" + second) : secondItem.innerText = second;
}

function removeButtonClass(buttonForClassRemove, className) {
    buttonForClassRemove.classList.remove(className);
}

buttonStart.addEventListener('click', () => {
    buttonStart.classList.toggle("active");
    removeButtonClass(buttonStop, "active");

    clearInterval(interval);
    interval = setInterval(startTimer, 1000);
});

buttonStop.addEventListener('click', () => {
    buttonStop.classList.toggle("active");
    removeButtonClass(buttonStart, "active");

    clearInterval(interval);
});




