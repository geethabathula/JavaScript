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
*/
const money = 0;
if (money) {
  console.log(`You have zero balance ${money}`);
} else {
  console.log(`Your balance amount ${money}`);
}
// Here 0 is a falsy value so it executes the else statement
console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); //false
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143
