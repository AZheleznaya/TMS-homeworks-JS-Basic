"use strict";

const requestURL = "https://jsonplaceholder.typicode.com/todos";

async function getTodos(url) {

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Enable to fetch data from ${url}: error status ${response.status}`)
    }

    return await response.json();
}

function printTodos(todos) {
    const todosList = document.createElement("ul");
    todosList.style.listStyleType = "none";

    todos.forEach((e) => {
        const todoItem = document.createElement("li");
        todoItem.innerHTML = e.id + " " + e.title;
        todosList.appendChild(todoItem);
    })

    document.body.appendChild(todosList);
}

getTodos(requestURL).then((result) => printTodos(result)).catch((err) => console.log(err));
