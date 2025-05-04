// challenge - 1

let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i;
  i++;
}

// console.log(sum);

// challenge - 2

let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}

// console.log(countdown);

// challenge - 3

let teaCollection = [];
let tea;

// do {
//   // tea = prompt(`Enter your favourite tea (type "stop" to finish.)`);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

// console.log(teaCollection);

// challenge - 5

let total = 0;
let num = 1;

do {
  total += num;
  num++;
} while (num <= 3);

// console.log(total);

// challenge - 6

let numbers = [2, 4, 6];
let multipliedNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i] * 2;

  multipliedNumbers.push(element);
}

console.log(multipliedNumbers);

// challenge - 7
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.push(myCity);
}

console.log(cityList);
