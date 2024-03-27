// Задание 1
let str = 'Строка';
console.log(str.toUpperCase());

// Задание 2
function searchStart(arr, str) {
    const result = arr.filter(el => el.toLowerCase().startsWith(str.toLowerCase()));
    return result;
}
console.log(searchStart(['Кошка', 'Кот', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру')); 
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3
let num = 32.58884;
console.log(Math.floor(num), Math.ceil(num), Math.round(num));

// Задание 4
let c = [52, 53, 49, 77, 21, 32];
console.log(Math.max(...c));
console.log(Math.min(...c));

// Задание 5
function getRandomInt() {
    return Math.round(Math.random() * 10 + 1);
}
console.log(getRandomInt());

// Задание 6
function getRandomArrNumbers(n) {
    let result = [];
    for (let i = 0; i < Math.floor(n/2); i++) {
        result.push(Math.floor(Math.random() * n));
    }
    return result;
}
console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

// Задание 7
// let a = Number(prompt('Введите первое число'));
// let b = Number(prompt('Введите второе число'));
function getRandomNum(minValue, maxValue) {
    return Math.round(Math.random() * (maxValue - minValue)) + minValue;
    // if (isNaN(a) > isNaN(b)) {
    //     return Math.round(Math.random() * (a - b) + b);
    // } else {
    //     return Math.round(Math.random() * (b - a) + a);
    // }
}
console.log(getRandomNum(5, 20));

// Задание 8
let date = new Date();
console.log(date);

// Задание 9
let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

// Задание 10
function getDate() {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    let myDate = new Date();
    let hour = myDate.getHours(); 
    let minute = myDate.getMinutes(); 
    let second = myDate.getSeconds();
    if (hour < 10) {
        hour = "0" + hour; 
    }
    if (minute < 10) { 
        minute = "0" + minute; 
    }
    if (second < 10) { 
        second = "0" + second; 
    }
    return `Дата: ${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}. Время: ${hour}:${minute}:${second}`;
}
console.log(getDate());