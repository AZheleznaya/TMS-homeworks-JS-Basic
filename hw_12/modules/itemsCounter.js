import {todoList, counterCompletedItems, counterAllItems} from "./elementsSearcher.js";
import {returnTodoListItems} from "./returnTodoListItemsFunc.js";

export {countCompletedItems, countAllItems};

// Функция для подсчёта выполненных пунктов ту-ду листа
function countCompletedItems() {

    //Присваивание в переменную функции со значение true для сортироваки массива ту-ду листа на пункты этого листа, у которых есть класс checked
    let items = returnTodoListItems(true);

    //Присваивание DOM-элементу количества выполненных пунктов ту-ду листа
    counterCompletedItems.firstElementChild.textContent = `${items.length}`;
}

// Функция для подсчёта всех пунктов ту-ду листа
function countAllItems() {
    countCompletedItems();

    //Присваивание DOM-элементу количества пунктов ту-ду листа
    counterAllItems.firstElementChild.textContent = `${todoList.childElementCount}`;
}