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
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
    //added to show practicalexample
    orderDelivery: function ({ time = "12pm", address = "green field", mainIndex = 1, starterIndex = 1 }) {
        console.log(`Order Recieved ${this.starterMenu[starterIndex]} ${this.mainMenu[mainIndex]} at ${address} and ${time}`);
    },
    //added to show example for spreadoperator
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`You have ordered a ${ing1},${ing2},${ing3}. `)
    }
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);//instead we can use spread operator


const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Geetha';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Geetha`); //gives error

/*
//Real-world Example orderPasta
alert('Please Order Pasta name ur 3 ingrideients we will make it for you');
//Way-1
// let input1 = prompt('Enter your ingredient 1:');
// let input2 = prompt('Enter your ingredient 2:');
// let input3 = prompt('Enter your ingredient 3:');
//const inputIngredients = [input1, input2, input3];
//Way-2
const inputIngredients = [prompt('Enter your ingredient 1:'), prompt('Enter your ingredient 2:'), prompt('Enter your ingredient 3:')];
restaurant.orderPasta(...inputIngredients);
*/

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
