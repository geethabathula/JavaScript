"use strict";
let bill; //= Number(prompt("Enter bill "));
let tip;

// bill >= 50 && bill <= 300 ? (tip = 15) : (tip = 20);

// tip = bill * (tip / 100);
// let amount = bill + tip;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${amount}`
// );

const calcTip = (bill) => {
  bill >= 50 && bill <= 300 ? (tip = 15) : (tip = 20);
  tip = bill * (tip / 100);
  return tip;
};
/*
const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const amounts = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(bills, tips, amounts);
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let rep = 0; rep < bills.length; rep++) {
  tips.push(calcTip(bills[rep]));
  totals.push(tips[rep] + bills[rep]);
}
console.log(tips, totals);

let sum = 0;
for (let i = 0; i < totals.length; i++) {
  sum = sum + totals[i];
}
console.log(sum);

let avg;
function calcAvg() {
  avg = sum / totals.length;
  console.log(`Average of the Totals Arrays is: ${avg}`);
}
calcAvg();
