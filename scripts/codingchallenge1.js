let markMass1 = 78;
let markHeight1 = 1.69;
let JohnMass1 = 92;
let JohnHeight1 = 1.95;

let BMIMark = markMass1 / markHeight1 ** 2;
console.log("Mark's BMI :", BMIMark);

let BMIJohn = JohnMass1 / (JohnHeight1 * JohnHeight1);
console.log("John's BMI :", BMIJohn);

if (BMIJohn > BMIMark) {
  console.log(`John's BMI ${BMIJohn} is higher than Marks's ${BMIMark}!`);
} else {
  console.log(`Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`);
}
