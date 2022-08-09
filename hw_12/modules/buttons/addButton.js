import {todoItem} from "../elementsSearcher.js";
import {todos, CreateTodo, setName} from "../localStorage.js";
import {fillTodoList} from "../elementsCreator.js";
import {countAllItems} from "../itemsCounter.js";

//Функция, добавляющая пункт ту-ду листа
export function addItem() {

    //Проверка на ввод пользователем значения пункта ту-ду листа
    if (todoItem.value === "") {
        return
    }

    //Добавление в список ту-ду листа нового созданного пункта с введённым значением
    todos.push(new CreateTodo(todoItem.value));

    //Сохранение массива в localStorage
    setName();

    //Добавление объектов из localStorage в ту-ду лист
    fillTodoList();

    //Очистка поля ввода после нажатия кнопки
    todoItem.value = "";

    //Обновление счётчика всех пунктов в ту-ду листе
    countAllItems();
}

