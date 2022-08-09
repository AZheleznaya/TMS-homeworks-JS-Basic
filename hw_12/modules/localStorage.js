export {getName, setName, todos, checkTodo, deleteTodo, CreateTodo};

//Функция для проверки наличия значений по ключу в localStorage
function getName() {
    return !localStorage.todos ? [] : JSON.parse(localStorage.getItem("todos"));
}

//Функция для сохранения(записи) пар ключ/значение в localStorage
function setName() {
    return localStorage.setItem("todos", JSON.stringify(todos));
}

let todos = getName();

//Функция, принимающая индекс объекта массива, в котором произошли изменения (в этом случае, где нажали кнопку выполнить ту-ду), и меняет значение на true (если пункт ту-ду листа выполнен)
function checkTodo(index) {
    todos[index].isChecked = !todos[index].isChecked;

    //Сохранение изменений в localStorage
    setName();
}

//Функция для удаления элемента из localStorage
function deleteTodo(index) {
    todos.splice(index, 1);

    //Сохранение изменений в localStorage
    setName();
}

//Функция для получения случайного числа из заданного диапазона
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Функция-конструктор для создания объектов в localStorage
function CreateTodo(text) {
    this.id = getRandomInRange(0, 100);
    this.date = new Date().toLocaleDateString();
    this.text = text;
    this.isChecked = false;
}

