let bill = Number(prompt("Enter bill "));
let tip;

bill >= 50 && bill <= 300 ? (tip = 15) : (tip = 20);

tip = bill * (tip / 100);
let amount = bill + tip;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${amount}`
);
