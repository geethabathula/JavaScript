let dolphinsScore;
let koalasScore;

let teamDolphin1 = Number(prompt("Enter Team Dolphins Score"));
let teamDolphin2 = Number(prompt("Enter Team Dolphins Score"));
let teamDolphin3 = Number(prompt("Enter Team Dolphins Score"));

let teamKoalas1 = Number(prompt("Enter Team Koalass Score"));
let teamKoalas2 = Number(prompt("Enter Team Koalass Score"));
let teamKoalas3 = Number(prompt("Enter Team Koalass Score"));

dolphinsScore = (teamDolphin1 + teamDolphin2 + teamDolphin3) / 3;

koalasScore = (teamKoalas1 + teamKoalas2 + teamKoalas3) / 3;

if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
  console.log(`Team Dolphin won with Score: ${dolphinsScore}`);
} else if (dolphinsScore < koalasScore && koalasScore >= 100) {
  console.log(`Team Koala won with Score: ${koalasScore}`);
} else {
  console.log(`It's a Tieeee!!!`);
}
