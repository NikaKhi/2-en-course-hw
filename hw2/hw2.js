// ЗАДАНИЕ 1
let a = 10;
alert(a);
a = 20;
alert(a);

// ЗАДАНИЕ 2
const yearRelease = 'Год выпуска первого iPhone - 2007г.'
alert(yearRelease);

// ЗАДАНИЕ 3
const creatorJS = 'Имя создателя языка JavaScript - Брендан Эйх'
alert(creatorJS);

// ЗАДАНИЕ 4
let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

// ЗАДАНИЕ 5
let result = 2 ** 5;
alert(result);

// ЗАДАНИЕ 6
let n = 9;
let f =2;
result = n % f;
alert(result);


    // ЗАДАНИЕ 7
    let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
++num;
--num;
alert(num);

// ЗАДАНИЕ 8
let age = prompt('Сколько вам лет?');
alert(age);

// ЗАДАНИЕ 9
const user = {
    name: 'Никита',
    age: 18,
    isAdmin: false
}

// ЗАДАНИЕ 9.1
user["city of residence"] = 'Санкт-Петербург';

// ЗАДАНИЕ 9.2
user.age = 25;

// ЗАДАНИЕ 9.3
delete user["city of residence"];

// ЗАДАНИЕ 9.4
let info = prompt('Какую информацию хотите узнать о пользователе?');
alert(user[info]);

// ЗАДАНИЕ 10
let yourName = prompt('Как Вас зовут?');
alert(`Привет, ${yourName} !`);