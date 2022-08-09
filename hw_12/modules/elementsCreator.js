import {countCompletedItems, countAllItems} from "./itemsCounter.js";
import {checkTodo, deleteTodo, todos} from "./localStorage.js";
import {todoList} from "./elementsSearcher.js";

export {createTodoListItem, fillTodoList};

//Функция для создания элементов DOM-дерева (создаёт DOM-элемент с заданным тегом, классом и HTML-содержимым)
function createElement(tagName, className, contentHTML) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = contentHTML;

    return element;
}

//Функция для создания одного пункта ту-ду листа
function createTodoListItem({ isChecked, text }, index) {

    //Создание элементов внутри пункта ту-ду листа
    const todoListItem = createElement("div", `todo__list_item ${isChecked ? "checked" : ""}`, "");
    const itemDoneButton = createElement("button", "todo__item_done", `${isChecked ? "✓" : ""}`);
    const todoItemText = createElement("span", "todo__item_text", text);

    const itemDeleteButton = createElement("button", "todo__item_delete", "X");
    const todoItemDate = createElement("span", "todo__item_date", new Date().toLocaleDateString());
    const todoListBlock = createElement("div", "todo__list_block", "");

    //Обработчик событий для кнопки выполнения пункта ту-ду листа
    itemDoneButton.addEventListener("click", () => {

        //Изменение в localStorage данных о том, выполнен ли пункт ту-ду листа
        checkTodo(index);

        //Добавление пункту ту-ду листа класса checked (если такой класс уже есть, то удаляет его)
        todoListItem.classList.toggle("checked");
        //Добавление галочки в кнопку (если галочка уже есть, то очистить значение кнопки)
        itemDoneButton.textContent = !itemDoneButton.textContent ? "✓" : "";

        //Обновление счётчика выполненных пунктов в ту-ду листе
        countCompletedItems();
    });

    //Обработчик событий, удаляющий пункт ту-ду листа, в котором находится кнопка
    itemDeleteButton.addEventListener("click", () => {

        //Удаление из localStorage данных пункта ту-ду листа
        deleteTodo(index);

        //Удаление на странице пункта ту-ду листа
        todoListItem.remove();

        //Обновление счётчика всех пунктов в ту-ду листе
        countAllItems();

    });

    //Добавление объектов в блок, где лежит кнопка удаления и дата создания пункта ту-ду
    todoListBlock.appendChild(itemDeleteButton);
    todoListBlock.appendChild(todoItemDate);

    //Добавление объектов для формирования полностью одного пункта ту-ду листа
    todoListItem.appendChild(itemDoneButton);
    todoListItem.appendChild(todoItemText);
    todoListItem.appendChild(todoListBlock);

    return todoListItem;
}

//Функция для заполнения ту-ду листа данными из localStorage
function fillTodoList() {

    //Очистка ту-ду листа
    todoList.innerHTML = "";

    //Проверка массива в localStorage. Если массив в localStorage не пустой, то этот массив перебирается и каждый объект массива создаст пункт ту-ду листа
    if (todos.length > 0) {
        todos.forEach((item, index) => {
            todoList.appendChild(createTodoListItem(item, index));
        })
    }

    //Обновление счётчика всех пунктов в ту-ду листа
    countAllItems();
}

fillTodoList();