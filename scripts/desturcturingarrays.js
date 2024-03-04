"use strict";
//Destructuring Arrays Begins
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

//Destructuring --> breaking up one single object/array to different variables and storing

//in restaurant object i have categories array i want to define
//main(Italian), secondary(Vegetarian), teritary(Organic) cuisines 
//as i dont want pizzeria to be defined to a new variable 
//I can simply leave a space and continue defining others

let [main, , secondary, teritary] = restaurant.categories;
console.log(`Main : ${main}, Secondary : ${secondary}, Teritary : ${teritary}`);
//i can also use spread operator
//const [first, second, ...remaining] = restaurant.categories;

//I want to swap main cuisine and secondary cuisine
//regular method using temp variable
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(`Main : ${main} Secondary: ${secondary}`);

// or this way

[main, secondary] = [secondary, main];
console.log(`Main : ${main} Secondary: ${secondary}`);

//Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(1, 2);
console.log(`Starter : ${starter} MainCourse ${mainCourse}`);

//nested array we need to destructure using nested 
const array = [2, 4, 6, [1, 3, 5]];
const [i, , , [j]] = array;
console.log(i, j); //2,1

//assign default values on destructuring

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);