import {todoList} from "../elementsSearcher.js";
import {returnTodoListItems} from "../returnTodoListItemsFunc.js";

//Функция, отображающая выполненные пункты ту-ду листа
export function showCompleted() {

    //Присваивание в переменную функции со значение false для сортироваки массива ту-ду листа на пункты, у которых нет класса checked
    let items = returnTodoListItems(false);

    //Скрытие со страницы пунктов ту-ду листа, у которых отсутствует класс checked
    for (let todoItem of items) {
        todoItem.style.display = "none";
    }
}

//Функция, отображающая все пункты ту-ду листа
export function showAll() {
    //Очистка CSS-свойства display у всех пуктов ту-ду листа
    for (let todoItem of todoList.children) {
        todoItem.style.display = "";
    }
}