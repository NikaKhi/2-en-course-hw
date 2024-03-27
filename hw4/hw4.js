//ЗАДАНИЕ 1
let i = 0;
while (i < 2) {
    console.log("Привет !");
    i++;
}

//ЗАДАНИЕ 2
for (a = 1; a <= 5; a++) {
    console.log(a);
}

//ЗАДАНИЕ 3
for (c = 7; c <= 22; c++){
    console.log(c);
}

//ЗАДАНИЕ 4
const salary = {
    "Коля" : 200,
    "Вася" : 300,
    "Петя" : 400
};
for (let name in salary) {
    console.log(`${name} - зарплата ${salary[name]} долларов`);
}

//ЗАДАНИЕ 5
let n = 1000;
let num = 0;
while (n >= 50) {
    n /= 2;
    num++;
}
console.log(`Получилось число ${n}. Количество итераций ${num}`);

//ЗАДАНИЕ 6
for (day = 5; day <= 31; day +=7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}