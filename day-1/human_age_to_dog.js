// declare variable myAge and store a value 20 
let myAge = 20;
console.log("this is my age", myAge);

// assign value 2 to variable earlyYear
let earlyYears = 2;
earlyYears *= 10.5;
console.log("this is earlyYears", earlyYears);

// sub 2 from myAge variable and assign that value to laterYears and multiply laterYears with 4

let laterYears;
laterYears = myAge - 2;
console.log("This is laterYears", laterYears);
laterYears *= 4;

console.log(`this is earlyYears ${earlyYears}`);
console.log(`this is laterYears ${laterYears}`);

let myAgeInDogYears = earlyYears + laterYears;
console.log("This is my dog age", myAgeInDogYears);

let Name = "Abhishek";
let myName = Name.toLowerCase();
console.log("This is my name", myName)

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)