// challenge - 1

const teaFlavors = ["grean tea", "black tea", "lemon tea"];

const firstTea = teaFlavors[0];

// console.log(firstTea);

// challenge - 2

const cities = ["London", "Tokyo", "Paris", "New York"];

const favouriteCity = cities[2];

// console.log(favouriteCity);

// challenge - 3

const teaTypes = ["herbal tea", "white tea", "masala chai"];

teaTypes[1] = "jasmine tea";

// console.log(teaTypes);

// challenge - 4

const citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
// console.log(citiesVisited);

// challenge - 5

const teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
teaOrders.pop();
// console.log(teaOrders);

// challenge - 6

const popularTeas = ["green tea", "oolang tea", "chai"];

const softCopyTeas = popularTeas;
popularTeas.pop();
// console.log(popularTeas);
// console.log(softCopyTeas);

// challenge - 7

const topCities = ["Berlin", "Singapore", "New York"];

const hardCopyCities = [...topCities];
// const hardCopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);

// challenge - 8

const europeanCities = ["Paris", "Rome"];
const asianCities = ["Tokyo", "Bangkok"];

// const worldCities = [...europeanCities, ...asianCities];
const worldCities = europeanCities.concat(asianCities);

// console.log(worldCities);

// challenge - 9

const teaMenu = ["masala chai", "oolang tea", "green tea", "earl grey"];

const menuLength = teaMenu.length;
// console.log(menuLength);

// challenge - 10

const cityBucketList = ["Kyoto", "London", "Cape Town", "Vancouver"];

const isLondonInList = cityBucketList.includes("London");
console.log(isLondonInList);
