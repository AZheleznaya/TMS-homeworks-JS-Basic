"use strict";

const deleteAllButton = document.querySelector("#todo__deleteAll");
const deleteLastButton = document.querySelector("#todo__deleteLast");
const todoItem = document.querySelector("#todo__item");
const addItemButton = document.querySelector("#todo__add");
const counterAllItems = document.querySelector(".counter__all");
const counterCompletedItems = document.querySelector(".counter__completed");
const showAllButton = document.querySelector("#show__all");
const showCompletedButton = document.querySelector("#show__completed")
const searchItem = document.querySelector("#search__item");
const todoList = document.querySelector(".todo__list");

function getName() {
    return !localStorage.todos ? [] : JSON.parse(localStorage.getItem("todos"));
}

function setName () {
    return localStorage.setItem("todos", JSON.stringify(todos));
}

let todos = getName();

function countCompletedItems() {
    let items = Array.from(todoList.children).filter(i => i.className === "todo__list_item checked");
    counterCompletedItems.firstElementChild.textContent = `${items.length}`;
}

function countAllItems() {
    countCompletedItems();
    counterAllItems.firstElementChild.textContent = `${todoList.childElementCount}`;
}

function createElement(tagName, className, content) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = content;

    return element;
}

function checkTodo(index) {
    todos[index].isChecked = !todos[index].isChecked;
    setName();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    setName();
}

function createTodoListItem(todo, index) {
    const todoListItem = createElement("div", `todo__list_item ${todo.isChecked ? "checked" : ""}`, "");
    const itemDoneButton = createElement("button", "todo__item_done", `${todo.isChecked ? "✓" : ""}`);
    const todoItemText = createElement("span", "todo__item_text", todo.text);

    const itemDeleteButton = createElement("button", "todo__item_delete", "X");
    const todoItemDate = createElement("span", "todo__item_date", new Date().toLocaleDateString());
    const todoListBlock = createElement("div", "todo__list_block", "");

    itemDoneButton.addEventListener("click", () => {
            checkTodo(index);

            todoListItem.classList.toggle("checked");
            itemDoneButton.textContent = itemDoneButton.textContent === "" ? "✓" : "";

            countCompletedItems();
    });

    itemDeleteButton.addEventListener("click", () => {
        deleteTodo(index);

        todoListItem.remove();

        countAllItems();

    });

    todoListBlock.appendChild(itemDeleteButton);
    todoListBlock.appendChild(todoItemDate);

    todoListItem.appendChild(itemDoneButton);
    todoListItem.appendChild(todoItemText);
    todoListItem.appendChild(todoListBlock);

    return todoListItem;
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function CreateTodo(text) {
    this.id = getRandomInRange(0, 100);
    this.date = new Date().toLocaleDateString();
    this.text = text;
    this.isChecked = false;
}

function fillTodoList() {
    todoList.innerHTML = "";
    if (todos.length > 0) {
        todos.forEach((item, index) => {
            todoList.appendChild(createTodoListItem(item, index));
        })
    }

    countAllItems();
}

addItemButton.addEventListener("click", () => {
    if (todoItem.value === "") {
        return
    }

    todos.push(new CreateTodo(todoItem.value));
    setName();
    fillTodoList();

    todoItem.value = "";

    counterAllItems.firstElementChild.textContent = `${todoList.childElementCount}`;
});

deleteAllButton.addEventListener("click", () => {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    counterAllItems.firstElementChild.textContent = "0";
    counterCompletedItems.firstElementChild.textContent = "0";

    todos.length = 0;
    setName();
});

deleteLastButton.addEventListener("click", () => {
    todoList.lastElementChild.remove();
    countAllItems();

    todos.pop();
    setName();
});

showCompletedButton.addEventListener("click", () => {
    let items = Array.from(todoList.children).filter(i => i.className !== "todo__list_item checked");

    for (let todoItem of items) {
        todoItem.style.display = "none";
    }
});

showAllButton.addEventListener("click", () => {
    for (let todoItem of todoList.children) {
        todoItem.style.display = "";
    }
});

searchItem.addEventListener("input", (event) => {
    let searchValue = event.target.value.toLowerCase();
    let todoValue = document.querySelectorAll(".todo__item_text");

    for (let value of todoValue) {
        let itemValue = value.textContent;
        if (itemValue.toLowerCase().includes(searchValue)) {
            value.parentElement.style.display = "flex";
        } else {
            value.parentElement.style.display = "none";
        }
    }
});

fillTodoList();


