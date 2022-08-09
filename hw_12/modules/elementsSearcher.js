export {
    deleteAllButton,
    deleteLastButton,
    todoItem,
    addItemButton,
    counterAllItems,
    counterCompletedItems,
    showAllButton,
    showCompletedButton,
    searchItem,
    todoList
};

// Поиск и присваивание переменным DOM-элементов (те, что в HTML-документе)
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
