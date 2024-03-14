
//Maps Begins ----------------------------------------------
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
    orderPasta: function (i1, i2, i3) {
        return `You need \'${i1},${i2},${i3}\' to make Pasta`;
    },
    orderPizza: function (i1, ...other) {
        return `Your'e MainIngredient is ${i1} and sub ingredients are ${other}`;
    }
};
const rest = new Map();
//Setting values to map
rest.set('name', 'Classico Italiano');
rest.set(1, 'RJY, AP');
rest.set(2, 'HYD, TS');
rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');
console.log(rest);
//reading map values
console.log(rest.get('name'));
console.log(rest.get(true));
//
const time = 21//8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close') ? true : false));
//has  method checks if the key exits or not
console.log(rest.has('categories'));
//delete based on key
console.log(rest.delete(2));
//returns size of map
console.log(rest.size);

//Iteraing on Maps
const question = new Map([
    ['question', "What is the best programming language"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    [4, "Python"],
    ['correct', 3],
    [true, "Correct Answer"],
    [false, "Oops try again!!!!"]
]);
console.log(question.get('question'));
for (let [key, value] of question) {
    if (typeof key === 'number')
        console.log(`Choose ${key}: ${value}`);
}
//let answer = Number(prompt("Enter key between 1 to 4"));
let answer = 3;
console.log(question.get(question.get('correct') === answer));
//Convert an Object to map
console.log(Object.entries(restaurant.openingHours));
const hrsMap = new Map(Object.entries(restaurant.openingHours));
console.log(hrsMap);
//convert Map to Array
console.log([...question]);//[...question.entries()]
console.log([...question.keys()]);
console.log([...question.values()]);