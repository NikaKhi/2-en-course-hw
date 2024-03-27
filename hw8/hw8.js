// Задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];
console.log(people.sort(function(a, b) {
    if (a.age > b.age) {
        return 1
    } else if (b.age > a.age) {
        return -1
    }
    return 0
}));

 // Задание 2
function isPositive(num) {
    if (num > 0) {
        return num
    }
}
function isMale(gen) {
    if (gen.gender === 'male') {
        return gen;
    }
}
function filter(arr, ruleFunction) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            output.push(ruleFunction(arr[i]));
        }
    } 
    return output;
}   
console.log(filter([3, -4, 1, 9], isPositive));
    
const men = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
]; 
console.log(filter(men, isMale));

// Задание 3
function timer() {
    let currentDate = new Date();
    console.log(currentDate);
    
    let interval = setInterval(() => console.log(new Date()), 3000);
    setTimeout(() => { clearInterval(interval); console.log('30 секунд прошло'); }, 1000 * 30);
}
timer();

// Задание 4
function delayForSecond(callback) {
    setTimeout( () => callback, 1000);
    callback();
}
delayForSecond(function () {
  console.log('Привет, Глеб!');
})

// Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
		if(cb) { 	cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}
delayForSecond(() => sayHi('Глеб'));