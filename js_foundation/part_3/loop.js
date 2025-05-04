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

// console.log(multipliedNumbers);

// challenge - 7
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.push(myCity);
}

// console.log(cityList);

// challenge - 8

let teas = ["green tea", "black tea", "chai", "oolang tea"];
let selectedTeas = [];

for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }

  selectedTeas.push(teas[i]);
}

// console.log(selectedTeas);

// challenge - 9

let allCities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let city = 0; city < allCities.length; city++) {
  if (allCities[city] === "Paris") {
    continue;
  }

  visitedCities.push(allCities[city]);
}

// console.log(visitedCities);

// challenge - 10

let nums = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of nums) {
  if (num === 4) {
    break;
  }

  smallNumbers.push(num);
}

// console.log(smallNumbers);

// challenge - 11

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }

  preferredTeas.push(tea);
}

// console.log(preferredTeas);

// challenge - 12

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewPopulations = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }

  cityNewPopulations[city] = citiesPopulation[city];
}

// console.log(cityNewPopulations);

// challenge - 13

let allTeaTypes = ["earl grey", "green tea", "chai", "oolang tea"];
let availableTeas = [];

allTeaTypes.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});

// console.log(availableTeas);

// challenge - 14

let myCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});

// console.log(traveledCities);

// challenge - 15

let myNumbers = [1, 2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < myNumbers.length; i++) {
  if (myNumbers[i] === 2) {
    continue;
  }
  doubledNumbers.push(myNumbers[i] * 2);
}

// console.log(doubledNumbers);

// challenge - 16

let myTeas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];

for (const tea of myTeas) {
  console.log(tea);
  if (tea.length > 10) {
    break;
  }

  shortTeas.push(tea);
}

// console.log(shortTeas);
