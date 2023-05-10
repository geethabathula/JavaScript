
//Challenge-1
const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};
/*
//Challenge 1
// const [players1, players2] = game.players;

// const [gk1, ...fieldPlayers1] = players1;
// const [gk2, ...fieldPlayers2] = players2;
// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// const { team1, x: draw, team2 } = game.odds;


// function printGoals(...names) {
//     console.log(` ${names} Total Goals : ${names.length}`);
// }

// let p1 = printGoals(...allPlayers);
// let p2 = printGoals('Davies', 'Muller', 'Leo', 'Kimichi');
// let p3 = printGoals(...game.scored);
// let win = team1 < team2 ? console.log("Team1 Wins") : console.log("Team2 Wins");

// team1 < team2 && console.log("team1 wins");
// team1 > team2 && console.log("team2 wins");

//Challenge-2
//1
for (let [goal, name] of game.scored.entries()) {
    console.log(`Goal ${goal + 1} : ${name}`);
}
//2
let oddsValues = Object.values(game.odds)
let avg = 0;
for (let odd of oddsValues) {
    avg += odd;
}
avg /= oddsValues.length;
console.log(avg);
//3
let odd = Object.entries(game.odds);
for (let [k, v] of odd) {
    let string = k === 'x' ? 'draw' : `victory ${game[k]}`;
    console.log(`Odd of ${string} ${v}`);

}
//4
const scorers = {

};

for (const player of game.scored) {
    scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

//Challenge 3
const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);
//1
const arrOfEvents = new Set([...gameEvents.values()]);
console.log(arrOfEvents);
//2
gameEvents.delete(64);
console.log(gameEvents);
//3
let gametime = [...gameEvents.keys()].pop();
let average = gametime / gameEvents.size;
console.log(`An event happened, on average, every ${average} minutes`);
//4
for (let [min, event] of gameEvents.entries()) {
    let str = min <= 45 ? 'FIRST HALF' : 'SECOND HALF';
    console.log(`[${str} ${min}: ${event}]`);
}
*/
//Challenge-4
let textArea = document.createElement('textarea');
document.body.append(textArea);
let btn = document.createElement('button');
document.body.append(btn);
btn.textContent = "Submit";

let theString = textArea.textContent.value;
function conversion(string) {
    let stringSplit = string.split("\n");
    let count = 1;
    for (let split of stringSplit) {
        let [first, last] = split.toLowerCase().split('_');
        let upperLetter = last[0].toUpperCase();
        let string = first + last.replace(last[0], upperLetter);
        let finalString = string.padEnd(21, " ") + `✅`.repeat(count);
        // console.log(string);
        // let lowerString = String(newSplit[1]);
        // let n = lowerString[0].toUpperCase();
        // let capitalizeString = lowerString.replace(lowerString[0], n);
        // let joinSplit = newSplit[0] + capitalizeString;
        // let finalString = joinSplit.padEnd(21, " ") + `✅`.repeat(count);
        console.log(finalString);
        count++;
    }
}

btn.addEventListener('click', function () {
    const text = document.querySelector('textarea').value;
    conversion(text);
});
// conversion(`underscore_case
// first_name
// Some_Variable
// calculate_AGE
// delayed_departure`);