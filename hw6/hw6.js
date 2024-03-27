// ЗАДАНИЕ 1
const numbs = [1, 5, 4, 10, 0, 3];
	for (let i = 0; i < numbs.length; i++) {
		console.log(numbs[i]);
		if (numbs[i] == 10) break;
	};

// ЗАДАНИЕ 2
let numbers = [1, 5, 4, 10, 0, 3];
console.log(numbers.indexOf(4));

// ЗАДАНИЕ 3
let num = [1, 3, 5, 10, 20];
num = num.join(' ');
console.log(num);

//ЗАДАНИЕ 4
let arr = [];
for (let i = 0; i < 3; i++) {
	let addArr = [];
	for(let j = 0; j < 3; j++) { 
		addArr.push(1);
	}
	arr.push(addArr);
}
console.log(arr);

// ЗАДАНИЕ 5
let a = [1, 1, 1];
a.push(2, 2, 2);
console.log(a);

// ЗАДАНИЕ 6
let b = [9, 8, 7, 'a', 6, 5];
b.sort((d, f) => d - f);
b.pop();
console.log(b);

// ЗАДАНИЕ 7
let c = [9, 8, 7, 6, 5]
let answer = Number(prompt('Угадай число'));
if (c.includes(answer)) {
    alert('Угадал');
} else {
    alert('Не угадал');
}

// ЗАДАНИЕ 8
let str = 'abcdef';
let revStr = str.split('').reverse().join('');
console.log(revStr);

// ЗАДАНИЕ 9
let e = [[1, 2, 3,],[4, 5, 6]];
let flatE = e.flat();
console.log(flatE);

// ЗАДАНИЕ 10
let k = [3, 9, 5, 2, 8];
for (let i = 0; i < k.length - 1; i++) {
	console.log(k[i] + k[i + 1]);
}

// ЗАДАНИЕ 11
function squareNumbers(l) {
	return l.map(num => num * num);
}
console.log(squareNumbers([2, 4, 5]));

// ЗАДАНИЕ 12
function getLengthWords(words) {
	return words.map(words => words.length);
}
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));

// ЗАДАНИЕ 13
function filterPositive(array) {
	return array.filter(item => item < 0);
}
console.log(filterPositive([-1, 0, 5, -10, 56])); // => [-1, -10]
console.log(filterPositive([-25, 25, 0, -1000, -2])); // => [-25, -1000, -2]