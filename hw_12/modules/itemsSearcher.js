//Функция, осуществляющая поиск по названию пунктов ту-ду листа и фильтрует на страниице
export function searchItems(event) {
    //Присваивание в переменную введённого значения в нижний регистр
    let searchValue = event.target.value.toLowerCase();
    //Присваивание в переменную списка всех пунктов ту-ду листа
    let todoValue = document.querySelectorAll(".todo__item_text");

    //Скрытие со страницы пунктов ту-ду листа, которые не подпадают под поисковой запрос
    for (let value of todoValue) {
        let itemValue = value.textContent;
        if (itemValue.toLowerCase().includes(searchValue)) {
            value.parentElement.style.display = "flex";
        } else {
            value.parentElement.style.display = "none";
        }
    }
}
