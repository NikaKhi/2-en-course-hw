// ЗАДАНИЕ 1
let a = Number(prompt('Введите первое число'));
let b = Number(prompt('Введите второе число'));
function num(a, b) {
if (a < b) {
    return a
} else {
    return b
}
}
let result = num(a, b);
console.log(result);

// ЗАДАНИЕ 2
let answer = Number(prompt('Введите любое число'));
function userAnswer(answer) {
if (answer % 2 == 0) {
    return 'Число чётное'
} else {
    return 'Число нечётное'
}
}
let res = userAnswer(answer)
console.log(res);

// ЗАДАНИЕ 3.1
let c = Number(prompt('Введите любое число'));
function number(c) {
console.log(c ** 2);
}
number(c);

// ЗАДАНИЕ 3.2
let d = Number(prompt('Введите любое число'));
function square(d) {
return d ** 2;
}
console.log(square(d));

// ЗАДАНИЕ 4
let age = Number(prompt('Сколько Вам лет?'));
function sayHi(age) {
if (age < 0) {
    console.log('Вы ввели неправильное значение');
} else if (age >= 0 && age <= 12) {
    console.log('Привет, друг!');
} else if (age >= 13) {
    console.log('Добро пожаловать!')
}
}
sayHi(age);

// ЗАДАНИЕ 5
let e = Number(prompt('Введите первое число'));
let f = Number(prompt('Введите второе число'));
function example(e, f) {
if (isNaN(e) || isNaN(f)) {
    return 'Одно или оба значения не являются числом'; 
} else {
    return e * f;
} 
}
console.log(example(e, f));

// ЗАДАНИЕ 6
function cube() {
let g = Number(prompt('Введите любое число'));
let numberCube = g ** 3;
if (g >= 0 && g <= 10) {
    console.log(`${g} в кубе равняется ${numberCube}`);
} else {
    return 'Переданный параметр не является числом';
}
}
console.log(cube());


// ЗАДАНИЕ 7
function getCircleArea() {
return 3.14 * this.radius ** 2;
}
function getCirclePerimeter() {
return 2 * this.radius * 3.14;
}
const circle1 = {
radius: 5,
getArea: getCircleArea,
getPerimeter: getCirclePerimeter,
};
const circle2 = {
radius: 3,
getArea: getCircleArea,
getPerimeter: getCirclePerimeter,
};
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());