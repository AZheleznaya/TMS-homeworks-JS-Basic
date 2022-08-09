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

addItemButton.addEventListener("click", () => {
    if (todoItem.value === "") {
        return
    }
    todoList.appendChild(createTodoListItem(todoItem.value));
    todoItem.value = "";

    counterAllItems.firstElementChild.textContent = `${todoList.childElementCount}`;
});

deleteAllButton.addEventListener("click", () => {
    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    counterAllItems.firstElementChild.textContent = "0";
    counterCompletedItems.firstElementChild.textContent = "0";
})

deleteLastButton.addEventListener("click", () => {
    todoList.lastElementChild.remove();
    handleDeleteItem();
})

function handleCompleteItem() {
    let items = Array.from(todoList.children).filter(i => i.className === "todo__list_item active");
    counterCompletedItems.firstElementChild.textContent = `${items.length}`;
}

function handleDeleteItem() {
    handleCompleteItem();
    counterAllItems.firstElementChild.textContent = `${todoList.childElementCount}`;
}

function createElement(tagName, className, content) {
    const element = document.createElement(tagName);
    element.className = className;
    element.innerHTML = content;

    return element;
}

function createTodoListItem(text) {
    const todoListItem = createElement("div", "todo__list_item", "");
    const itemDoneButton = createElement("button", "todo__item_done", "");
    const todoItemText = createElement("span", "todo__item_text", text);

    const itemDeleteButton = createElement("button", "todo__item_delete", "X");
    const todoItemDate = createElement("span", "todo__item_date", new Date().toLocaleDateString());
    const todoListBlock = createElement("div", "todo__list_block", "");

    itemDoneButton.addEventListener("click", () => {
        todoListItem.classList.toggle("active");
        itemDoneButton.textContent = itemDoneButton.textContent === "" ? "✓" : "";
        handleCompleteItem();
    });

    itemDeleteButton.addEventListener("click", () => {
        todoListItem.remove();
        handleDeleteItem();
    });

    todoListBlock.appendChild(itemDeleteButton);
    todoListBlock.appendChild(todoItemDate);

    todoListItem.appendChild(itemDoneButton);
    todoListItem.appendChild(todoItemText);
    todoListItem.appendChild(todoListBlock);

    return todoListItem;
}

showCompletedButton.addEventListener("click", () => {
    let items = Array.from(todoList.children).filter(i => i.className !== "todo__list_item active");

    for (let todoItem of items) {
        todoItem.style.display = "none";
    }
})

showAllButton.addEventListener("click", () => {
    for (let todoItem of todoList.children) {
        todoItem.style.display = "";
    }
})

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
})






