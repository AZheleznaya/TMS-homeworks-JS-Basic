interface IUser {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean,
}

const users: IUser[] = [
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
function getStringUsersNames<T extends IUser>(users: T[], separator?: string): string {
    return users
        .map(user => user.name)
        .join(separator);
}

console.log(getStringUsersNames(users, ", "));

// Task 2 --> Посчитать общее количество машин у пользователей
function calcUsersCars<T extends IUser>(users: T[]): number {
    return users
        .map(user => user.cars)
        .filter(cars => cars !== undefined)
        .map(cars => cars.length)
        .reduce((sum: number, curr: number) => sum + curr, 0);
}

console.log(calcUsersCars(users));

// Task 3 --> Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
function getUsersWithEducation<T extends IUser>(users: T[]): T[] {
    return users.filter(user => user.hasEducation);
}

console.log(getUsersWithEducation(users));

// Task 4 --> Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
function getUsersWithAnimals<T extends IUser>(arrayUsers: T[]): T[] {
    return arrayUsers.filter(user => user.animals && user.animals.length !== 0);
}

console.log(getUsersWithAnimals(users));

// Task 5 --> Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую
function getStringCarsBrand<T extends IUser>(users: T[], removeDuplicates: boolean): string {
    let usersCars = [].concat.apply([], users.filter(user => user.cars && user.cars.length !== 0).map(user => user.cars));

    if (removeDuplicates) {
        return usersCars
            .filter((brand: string, index: number, array: string[]) => array.indexOf(brand) === index)
            .join(", ");
    }

    return usersCars.join(", ");
}

console.log(getStringCarsBrand(users, true));
console.log(getStringCarsBrand(users, false));















