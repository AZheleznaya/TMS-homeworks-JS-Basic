import {todoList, counterAllItems, counterCompletedItems} from "../elementsSearcher.js";
import {countAllItems} from "../itemsCounter.js";
import {todos, setName} from "../localStorage.js";

//Функция, удаляющая все пункты ту-ду листа
export function deleteAll() {

    //Условие для удаления всех дочерних элементов объекта
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    //Установка значения 0 для всех счётчиков ту-ду листа
    counterAllItems.firstElementChild.textContent = "0";
    counterCompletedItems.firstElementChild.textContent = "0";

    //Очистка массива в localStorage
    todos.length = 0;

    //Сохранение пустого массива в localStorage
    setName();
}

//Функция, удаляющая последний пункт ту-ду листа
export function deleteLast() {

    //Удаление последнего элемента ту-ду листа
    todoList.lastElementChild.remove();

    //Обновление счётчика всех пунктов в ту-ду листе
    countAllItems();

    //Удаление последнего элемента массива в localStorage
    todos.pop();
    //Сохранение изменения выше в localStorage
    setName();
}
