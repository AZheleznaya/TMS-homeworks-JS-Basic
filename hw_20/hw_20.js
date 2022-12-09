var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
// Task 1 --> Создать строку из имен пользователей через запятую
function getStringUsersNames(users, separator) {
    return users
        .map(function (user) { return user.name; })
        .join(separator);
}
console.log(getStringUsersNames(users, ", "));
// Task 2 --> Посчитать общее количество машин у пользователей
function calcUsersCars(users) {
    return users
        .map(function (user) { return user.cars; })
        .filter(function (cars) { return cars !== undefined; })
        .map(function (cars) { return cars.length; })
        .reduce(function (sum, curr) { return sum + curr; }, 0);
}
console.log(calcUsersCars(users));
// Task 3 --> Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function getUsersWithEducation(users) {
    return users.filter(function (user) { return user.hasEducation; });
}
console.log(getUsersWithEducation(users));
// Task 4 --> Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function getUsersWithAnimals(arrayUsers) {
    return arrayUsers.filter(function (user) { return user.animals && user.animals.length !== 0; });
}
console.log(getUsersWithAnimals(users));
// Task 5 --> Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
function getStringCarsBrand(users, removeDuplicates) {
    var usersCars = [].concat.apply([], users.filter(function (user) { return user.cars && user.cars.length !== 0; }).map(function (user) { return user.cars; }));
    if (removeDuplicates) {
        return usersCars
            .filter(function (brand, index, array) { return array.indexOf(brand) === index; })
            .join(", ");
    }
    return usersCars.join(", ");
}
console.log(getStringCarsBrand(users, true));
console.log(getStringCarsBrand(users, false));
