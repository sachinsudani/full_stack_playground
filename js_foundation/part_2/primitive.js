// Number

let balance = 120;
let anotherBalance = new Number(120);

// console.log(balance);
// console.log(anotherBalance.valueOf());

// console.log(typeof balance);
// console.log(typeof anotherBalance.valueOf());

// Boolean

let isActive = true;
let isReallyActive = new Boolean(true);

// Null and Undefined

let firstName;
let lastName = null;

// console.log(firstName);
// console.log(lastName);

// String

let msg = "Hello";
let username = "Hitesh";

let greetMsg = `${msg} ${username}`;
let number = `Number is ${2 * 2}`;

// console.log(number);

let sm1 = Symbol(1);
let sm2 = Symbol(1);

console.log(sm1 === sm2);
