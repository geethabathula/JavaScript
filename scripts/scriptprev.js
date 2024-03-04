"use strict";
/*
let country = "India";
let continent = "Asia";
let population = 180;

// console.log(country);
// console.log(continent);
// console.log(population);

const isIsland = false;
let language = "Telugu";

// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

halfOfPopulation = population / 2;
console.log("Half Population : " + halfOfPopulation);
console.log(population + 1);
avgPopulation = 33;
if (population >= avgPopulation) alert(true);
description =
  "'Portugal is in Europe, and its 11 million people speak portuguese";

let fName = "Geetha Supriya";
let lName = "Bathula";
let birthYear = 1999;
let currentYear = 2022;
let data =
  "I'm " + fName + lName + "." + " I'm " + (currentYear - birthYear) + " old.";
console.log(data);

let template = `I'm ${fName} ${lName}. I'm ${currentYear - birthYear} old.`;
console.log(template);

const legalAge = 18;
let customAge = 13;

if (customAge >= legalAge) {
  console.log("Valid");
} else {
  console.log("Invalid");
}


console.log("False when 0 :", Boolean(0));
console.log("False when '' :", Boolean(""));
console.log("False when NaN :", Boolean(NaN));
console.log("False when undefined :", Boolean(undefined));
console.log("True when number :", Boolean(23));
console.log("True when {} :", Boolean({}));

const money = 0;
if (money) {
  console.log(`You have zero balance ${money}`);
} else {
  console.log(`Your balance amount ${money}`);
}
// Here 0 is a falsy value so it executes the else statement
console.log("9" - "5"); //4
console.log("19" - "13" + "17");
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2);


let day = "monday";

switch (day) {
  case "sunday":
    console.log("Weekend :)");
    break;
  case "monday":
    console.log("Seminar Day ");
    break;
  default:
    console.log("Regular Day!");
    break;
}
*/

/*
function displayName() {
  console.log("Myself Geetha Bathula !!!"); //Function body
}

// calling / running / invoking function
displayName();
displayName();
displayName();

// funtion with passing parameter
function juiceMaker(fruitName) {
  const juice = `${fruitName} Juice :) `;
  return juice;
}

// function calling with argument
console.log(juiceMaker("Banana")); //the value is not stored but directly printing to console.

const juiceName = juiceMaker("Sugarcane");
console.log(juiceName); // storing value to juiceName variable.
*/

/*
function describeCountry(country, population, capitalCity) {
  const statement = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return statement;
}

let printStatement1 = describeCountry("Finland", 6, "Helsinki");
console.log(printStatement1);

let printStatement2 = describeCountry("India", 86, "Delhi");
console.log(printStatement2);

let printStatement3 = describeCountry("Australia", 36, "Sydney");
console.log(printStatement3);

const worldPopulation = 7900;
const percentageOfWorld = function (population) {
  return (population / worldPopulation) * 100;
};

console.log(percentageOfWorld(1441));


const wpop = (pop) => (pop / 7900) * 100;
console.log(wpop(1441));
*/
/*
//Function Declaration
const currentYear = 2022;
function calcAge(birthYear, currentYear) {
  return currentYear - birthYear;
}
let birthYear = prompt("Enter Birth Year : ");

let age = calcAge(birthYear, currentYear);
console.log("Your Age: ", age);

//Function Expression /Anonymous Function

const ageExp = function (birthYear, currentYear) {
  return currentYear - birthYear;
};

console.log(ageExp(birthYear, currentYear));

//Arrow Function / One-liner function
//Way-1
const ageArrowFunction = (birthYear, currentYear) => currentYear - birthYear;

console.log(ageArrowFunction(birthYear, currentYear));
//Way-2
const yrsOfRetirement = () => {
  return 60 - ageArrowFunction(birthYear, currentYear);
};
console.log(yrsOfRetirement());
*/
/*
//DataStructure Array
const friends = ["Monica", "Chandler", "Rachel", "Ross", "Joey", "Pheobe"];
console.log(friends);
console.log(friends[0]);
console.log(friends.length); //Length of the array
console.log(friends[friends.length - 1]); //Last element of an array
friends[friends.length - 2] = "Rachel";
friends[2] = "Joey";
console.log("After Interchanging Array", friends);
//push method - adds elements at the end of a array. also push method returns a the length of the array.
let arrayLength = friends.push("Gunther");
console.log(friends);
console.log("Length of the array: ", arrayLength);
//unshift method - adds elements at the the beginning of the array.
friends.unshift(1994);
console.log(friends);
//pop method - remove elements from last
friends.pop();
console.log(friends);
//shift method - remove elements from first
friends.shift();
console.log(friends);
//indexOf method - returns the index of an element
console.log(friends.indexOf("Ross"));
//includes method - returns true if element exists else false uses strict equality
console.log(friends.includes("Joey")); //true
console.log(friends.includes("Mike")); //false

if (friends.includes("Monica")) {
  console.log("Yay u have a friend Monica");
} else {
  console.log("Yay u do not have a friend Monica");
}*/
/*
//Object
const person = {
  firstName: "Geetha Supriya",
  lastName: "Bathula",
  eyeColor: "brown",
  birthYear: 1999,
  // calcAge: function () {
  //   console.log("using this, this");
  //   return 2022 - person.birthYear;
  // },
  calcAge: function () {
    this.age = 2022 - this.birthYear;
    return this.age;
  },
  hasDriversLicense: true,
};

console.log(person["calcAge"]()); //Bracket Notation
console.log(person["hasDriversLicense"]);
if (person["hasDriversLicense"]) {
  console.log(
    `${person["firstName"]} ${person["lastName"]} is ${person[
      "calcAge"
    ]()} years old. And has driver's license.`
  );
} else {
  console.log(
    `${person["firstName"]} ${person["lastName"]} is ${person[
      "calcAge"
    ]()} years old. And has no driver's license.`
  );
}
*/
/*
// for loops keeps running while condition is TRUE.
const friends = [
  "Monica",
  "Chandler",
  "Rachel",
  "Ross",
  "Joey",
  "Pheobe",
  ["Mike", "Gunther", "Emily"],
];

const friendsTypeArray = [];
for (let rep = 0; rep <= friends.length - 1; rep++) {
  friendsTypeArray.push(typeof friends[rep]);
}
console.log(friendsTypeArray);

const years = [1991, 2007, 1997, 2020];
let ages = [];
function calcAge(age) {
  return 2022 - age;
}
for (let rep = 0; rep < years.length; rep++) {
  if (calcAge(years[rep]) <= 20) continue;
  ages.push(calcAge(years[rep]));
}
console.log(ages);

for (let rep = friends.length - 1; rep >= 0; rep--) {
  console.log(rep, friends[rep]);
}
*/
/*
//while loop runs while the condition is true
//counter is not required as in for loop
let rep = 1;
while (rep <= 5) {
  console.log(rep);
  rep++;
}
*/

// console.log(document.querySelector("h1").textContent); //prints JavaScript

// document.querySelector("h1").textContent = "Hello World !!! 😁"; //sets the h1 element.
// console.log((document.querySelector("h1").textContent = "Hello World !!! 😁"));

// console.log(document.querySelector("#color").value);
// document.querySelector("#color").value = "#aaaabc";
// console.log(document.querySelector("#color").value);
const person = {
  firstName: "Geetha Supriya",
  lastName: "Bathula",
  eyeColor: "brown",
  birthYear: 1999,
  hasDriversLicense: true,
};