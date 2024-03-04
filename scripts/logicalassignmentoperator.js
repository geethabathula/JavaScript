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
        console.log(`You have ordered Pasta with ${ing1},${ing2},${ing3}. `)
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log(`mainIngredient is ${mainIngredient}`);
        console.log(`otherIngredients are ${otherIngredients}`);
    },
};

// Short Circuiting (&& and ||)

console.log('---- OR ----');
// Use ANY data type, return ANY data type, short-circuiting
//returns the first value when it is true 


console.log(3 || 'geetha');//returns the first value 3 because it is a truthy value
console.log('' || 'geetha');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log("gusests", guests1);//10 since 0 is falsy value 

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('---- AND ----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'geetha'); //null

// Practical example
if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach', 'corn', 'cheese');