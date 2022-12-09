"use strict";

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
};

//1. Создать строку из названий предметов написаных через запятую
console.log(Object.keys(subjects).toString());

//2. Посчитать общее количество студентов и учителей на всех предметах
let numberOfStudents = 0;
Object.values(subjects).forEach((elem) => {
    numberOfStudents += elem.students;
});
console.log(numberOfStudents);

let numberOfTeachers = 0;
Object.values(subjects).forEach((elem) => {
    numberOfTeachers += elem.teachers;
});
console.log(numberOfTeachers);

//3. Получить среднее количество студентов на всех предметах
let averageNumberOfStudents = numberOfStudents / Object.keys(subjects).length;
console.log(averageNumberOfStudents);

//4. Создать массив из объектов предметов
let arrayOfSubjects = Object.values(subjects);
console.log(arrayOfSubjects);

//5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
let arraySubjects = Object.values(subjects).sort((a, b) => b.teachers - a.teachers);
console.log(arraySubjects);


