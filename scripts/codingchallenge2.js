let dolphinsScore;
let koalasScore;

let teamDolphin1 = Number(prompt("Enter Team Dolphins Score"));
let teamDolphin2 = Number(prompt("Enter Team Dolphins Score"));
let teamDolphin3 = Number(prompt("Enter Team Dolphins Score"));

let teamKoalas1 = Number(prompt("Enter Team Koalass Score"));
let teamKoalas2 = Number(prompt("Enter Team Koalass Score"));
let teamKoalas3 = Number(prompt("Enter Team Koalass Score"));
/*
if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`Team Dolphin won with Score: ${dolphinsScore}`);
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
  console.log(`Team Koala won with Score: ${koalasScore}`);
} else {
  console.log(`It's a Tieeee!!!`);
}
*/

const calcAvg = (s1, s2, s3) => (s1 + s2 + s3) / 3;

dolphinsScore = calcAvg(teamDolphin1, teamDolphin2, teamDolphin3);

koalasScore = calcAvg(teamKoalas1, teamKoalas2, teamKoalas3);

console.log(dolphinsScore);
console.log(koalasScore);

let winner;

const doubleScore = (score) => 2 * score;
const teamDolphin = doubleScore(dolphinsScore);
const teamKoala = doubleScore(koalasScore);

const checkWinner = (dolphinsScore, koalasScore) => {
  if (dolphinsScore >= teamKoala) {
    winner = `"Dolphins win(${dolphinsScore} vs. ${koalasScore})"`;
  } else if (koalasScore >= teamDolphin) {
    winner = `"Koalas win(${koalasScore} vs. ${dolphinsScore})"`;
  } else {
    winner = "No Team wins";
  }
  return winner;
};

console.log(checkWinner(dolphinsScore, koalasScore));
