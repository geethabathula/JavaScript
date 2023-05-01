/*
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
*/

const mark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

const john = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return this.mass / this.height ** 2;
  },
};

if (mark["calcBMI"]() > john["calcBMI"]()) {
  console.log(
    `Mark's BMI (${mark["calcBMI"]()}) is higher than John's (${john[
      "calcBMI"
    ]()})`
  );
} else {
  console.log(
    `John's BMI (${john["calcBMI"]()}) is higher than Mark's (${mark[
      "calcBMI"
    ]()})`
  );
}
