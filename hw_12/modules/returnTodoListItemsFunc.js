import {todoList} from "./elementsSearcher.js";

//Функция, сортирующая массив пунктов ту-ду листа в зависимости от наличия класса checked у этих ту-ду пунктов
export function returnTodoListItems(booleanValue) {
    return Array.from(todoList.children).filter(i => booleanValue ? i.classList.contains("checked") : !i.classList.contains("checked"))
}
