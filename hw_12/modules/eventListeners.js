import {
    addItemButton,
    deleteAllButton,
    deleteLastButton, searchItem,
    showAllButton,
    showCompletedButton
} from "./elementsSearcher.js";

import {addItem} from "./buttons/addButton.js";
import {deleteAll, deleteLast} from "./buttons/deleteButtons.js";
import {showCompleted, showAll} from "./buttons/showButtons.js";
import {searchItems} from "./itemsSearcher.js";
import {CLICK_EVENT} from "./constants.js";

//Обработчик событий для кнопки добавления элементов в ту-ду лист
addItemButton.addEventListener(CLICK_EVENT, addItem);
//Обработчик событий для кнопки удаления всех элементов ту-ду листа
deleteAllButton.addEventListener(CLICK_EVENT, deleteAll);
//Обработчик событий для кнопки удаления последнего пункта ту-ду листа
deleteLastButton.addEventListener(CLICK_EVENT, deleteLast);
//Обработчик событий для кнопки вывода выполненных пунктов ту-ду листа
showCompletedButton.addEventListener(CLICK_EVENT, showCompleted);
//Обработчик событий для кнопки вывода всех пунктов ту-ду листа
showAllButton.addEventListener(CLICK_EVENT, showAll);
//Обработчик событий для поля поиска пункта ту-да листа
searchItem.addEventListener("input", searchItems);