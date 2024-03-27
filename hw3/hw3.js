//ЗАДАНИЕ 1
let password = "Пароль";
let answer = promt("Введите пароль");
if (password === answer) {
    alert("Пароль введен верно");
}
else {
    lert("Пароль введен неправильно");
}

//ЗАДАНИЕ 2
let c = Number(promt("Введите любое число"));
if (c > 0 && c < 10) {
    alert("Верно");
}
else {
    alert("Неверно");
}

//ЗАДАНИЕ 3
let b = 3;
let e = 5;
if (b > 100 || e > 100) {
    alert("Верно");
}
else {
    alert("Неверно");
}

//ЗАДАНИЕ 4
let a = 2;
let t = 3;
alert(a + b);

//ЗАДАНИЕ 5
let monthNumber = Number(prompt("Введите номер месяца"));
switch (monthNumber) {
    case 1:
    case 2:
    case 12:
        alert("Зима");
        break;
    case 3:
    case 4:
    case 5:
        alert("Весна");
        break;
    case 6:
    case 7:
    case 8:
        alert("Лето");
        break;
    case 9:
    case 10:
    case 11:
        alert("Осень");
        break;
    default: alert("Неверно");
        break;
}

