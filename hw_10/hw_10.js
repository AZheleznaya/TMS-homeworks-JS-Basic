"use strict";

const deleteAllBtn = document.querySelector("#delete__todo_button");
const addTodoBtn = document.querySelector("#add__todo_button");
const todoItem = document.querySelector("#input__todo_item");
const todosWrapper = document.querySelector(".todos__wrapper");

function createTodosDoneBtn() {
    const todosDoneBtn = document.createElement("div");
    todosDoneBtn.className = "todos__button_done";
    todosDoneBtn.insertAdjacentHTML("afterbegin", `<button class="button__done"></button>`);
    return todosDoneBtn;
}

function createTodosDesc() {
    const todosDescItem = document.createElement("span");
    todosDescItem.className = "description__text";
    todosDescItem.innerText = todoItem.value;

    const todosDesc = document.createElement("div");
    todosDesc.className = "todos__description";
    todosDesc.insertAdjacentElement("afterbegin", todosDescItem);
    return todosDesc;
}

function createTodosDeleteBtn() {
    const todosDeleteBtn = document.createElement("div");
    todosDeleteBtn.className = "todos__button_delete";
    todosDeleteBtn.insertAdjacentHTML("afterbegin", `<button class="button__delete">X</button>`);
    return todosDeleteBtn;
}

function createTodosDate() {
    const date = document.createElement("span");
    date.className = "date";
    date.innerText = new Date().toLocaleDateString()

    const todosDate = document.createElement("div");
    todosDate.className = "todos__date";
    todosDate.insertAdjacentElement("afterbegin", date);
    return todosDate;
}

function createTodosItemEnd(button) {
    const todosItemEnd = document.createElement("div");
    todosItemEnd.className = "todos-item__end";
    todosItemEnd.appendChild(button);
    todosItemEnd.appendChild(createTodosDate());
    return todosItemEnd;
}

function createTodosItem() {
    const todosItem = document.createElement("div");
    todosItem.className = "todos-item";

    const todosDoneBtn = createTodosDoneBtn();
    todosDoneBtn.addEventListener("click", () => {
        todosItem.classList.toggle("active")
        todosDoneBtn.firstChild.textContent = todosDoneBtn.firstChild.textContent === "" ? "✓" : "";
    })

    const todosDeleteBtn = createTodosDeleteBtn();
    todosDeleteBtn.addEventListener("click", () => {
        todosItem.remove();
    })

    todosItem.appendChild(todosDoneBtn);
    todosItem.appendChild(createTodosDesc());
    todosItem.appendChild(createTodosItemEnd(todosDeleteBtn));
    return todosItem;
}

addTodoBtn.addEventListener("click", () => {
    if (todoItem.value === "") {
        return
    }
    todosWrapper.appendChild(createTodosItem());
    todoItem.value = "";
});

deleteAllBtn.addEventListener("click", () => {
    while (todosWrapper.firstChild) {
        todosWrapper.removeChild(todosWrapper.firstChild);
    }
})






