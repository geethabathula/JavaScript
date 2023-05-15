'use strict';

// Destrurcturing Arrays Begins--------------------------
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
// };

// const [first, second, ...remaining] = restaurant.categories;
// console.log(restaurant.order(2, 1));
// //now upon i want to store the index values in variables i use destructuring.

// const [starter, mainCourse] = restaurant.order(2, 1);

// //nested array destructuring
// const nested = [2, 3, [5, 6]];
// const [i, , k] = nested; //skipping the second element just leave a space
// console.log(i, k);
// const [, , [l, m]] = nested;
// console.log(l, m);

// //assign default values on destructuring

// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
// Destrurcturing Arrays Ends--------------------------

//Destructuring Objects Begins-----------------------------
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },
//     order: function (starterIndex, mainIndex) {
//         return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//     },
// };
// const { name, openingHours } = restaurant;
// console.log(name, openingHours);
// //Changing the variable name

// const { name: restaurantName } = restaurant;
// console.log(restaurantName);

// //setting a default value helpful when we donot know the data as we
// //did to menu.
// const { menu = [], starterMenu: starters = [] } = restaurant;
// //Mutating variables

// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);
// //nested objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

// //practical example
// //Many times in js we have
// //functions with lots of parameters then it hard to knoe the order
// //of parameters for someone that is using this function
// //so instead of defining the parameters manually we
// // can directly pass the object into the function argument
// //and the function will then immediately destructure that object

//Destructuring Objects Ends-----------------------------

//The Spread Operator (...) Beginssss---------------------------
// const array = [7, 8, 9];
// //const newArray = [1,2,arr[0],arr[1],arr[2]]
// const newArray = [1, 2, ...array];
// console.log(newArray);

//Real World Example
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },
//     orderPasta: function (i1, i2, i3) {
//         return `You need \'${i1},${i2},${i3}\' to make Pasta`;
//     },
// };
// //Arrays
// const ingredients = [
//     prompt("Lets make pasta! Ingredient1?"),
//     prompt("Lets make pasta! Ingredient2?"),
//     prompt("Lets make pasta! Ingredient3?")
// ];
// console.log(ingredients);
// const printPasta = restaurant.orderPasta(...ingredients);
// console.log(printPasta);
// //Objects
// //we are creating a new resturant object which consists of old resturant object
// const newRestaurant = { foundedIn: 1999, founder: "Geetha Supriya Bathula", ...restaurant };
// console.log("New Restaurant Object", newRestaurant);

//The Spread Operator (...) Ends---------------------------

//Rest Pattern and Rest Params Begins--------------------------
// const array = [7, 8, 9];

// const newarr = [1, 2, 3, ...array] //Spread bcs on right side of =

// const [a, b, ...others] = newarr; //Rest bcs on left side of =
// // here others variable is packed with remaining elements.
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },
//     orderPasta: function (i1, i2, i3) {
//         return `You need \'${i1},${i2},${i3}\' to make Pasta`;
//     },
//     orderPizza: function (i1, ...other) {
//         return `Your'e MainIngredient is ${i1} and sub ingredients are ${other}`;
//     }
// };
// const [pizza, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu];
// console.log(pizza); //contains the pizza of mainMenu
// console.log(otherFood); //consists of the remaining of mainMenu and starterMenu array

// const { sat, ...weekend } = restaurant.openingHours;
// console.log(sat, weekend);

// //Function Usecase
// const add = function (...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }
//     return `Total = ${sum}`;

// }
// //we should be able to pas sany number of arguments without
// //specifying the length
// const args2 = add(1, 2);
// const args5 = add(7, 8, 9, 34, 67);
// const args11 = add(8, 3, 5, 7, 8, 9, 1, 2, 3, 4, 5);
// console.log(args2, args5, args11);
// const ranNums = [1, 2, 3, 4];
// const ranNumsOP = add(...ranNums);
// console.log(ranNumsOP);

// //RestaurantObject Example
// const pizza1 = restaurant.orderPizza("corn", "capsicum", "onion");
// console.log(pizza1);

// const pizza2 = restaurant.orderPizza("corn");
// console.log(pizza2);

//Rest Pattern and Rest Params Ends--------------------------

// const object = { 'arrayObject': ["hail", "sriram", "hail", "seetharam"] };
// const [...newArr] = object.arrayObject;

// const btnSubmit = document.querySelector('.submit');

// function addBG(array) {
//     for (let i = 0; i < array.length; i++) {
//         let addLabel = document.querySelector('.buttonCard');

//         let h6 = document.createElement("h2");
//         h6.textContent = array[i];
//         h6.classList.add("buttonCardBG");
//         addLabel.insertAdjacentElement('beforeend', h6);
//     }

// }
//Random Practice-----------------
// btnSubmit.addEventListener('click', () => { addBG(newArr) });

// const btnSubmit = document.querySelector('.submit');
// const textBoxArray = [];

// function addBG() {

//     console.log("Entered");
//     let textBox = document.forms[0];
//     let textValue = textBox.querySelector('#textBox').value;
//     textBoxArray.push(textValue);
//     for (let i = 0; i < textBoxArray.length; i++) {


//         let addLabel = document.querySelector('.buttonCard');
//         let h2Ele = document.createElement("h2");
//         h2Ele.textContent = textBoxArray[i];
//         console.log(textBoxArray);
//         h2Ele.classList.add("buttonCardBG");
//         addLabel.insertAdjacentElement('beforeend', h2Ele);

//     }
//     console.log("Exit");

// }
// const nums = [];



// btnSubmit.addEventListener('click', addBG);
//Random Practice-----------------

//for of Beigns------------------------------
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//     openingHours: {
//         thu: {
//             open: 12,
//             close: 22,
//         },
//         fri: {
//             open: 11,
//             close: 23,
//         },
//         sat: {
//             open: 0, // Open 24 hours
//             close: 24,
//         },
//     },
//     orderPasta: function (i1, i2, i3) {
//         return `You need \'${i1},${i2},${i3}\' to make Pasta`;
//     },
//     orderPizza: function (i1, ...other) {
//         return `Your'e MainIngredient is ${i1} and sub ingredients are ${other}`;
//     }
// };

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// //looping menu using for of
// for (let item of menu) {
//     console.log(item);
// }
// //to get index
// for (let item of menu.entries()) {
//     console.log(`${item[0] + 1}: ${item[1]}`);
// }
// for (let [index, ele] of menu.entries()) {
//     console.log(`${index + 1}: ${ele}`);
// }
// console.log(...menu.entries());
//for of Ends--------------------------------

// Enhanced Object Literals Begins -----------------------------------------
// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// let openingHours = {
//     [weekdays[3]]: {
//         open: 12,
//         close: 22,
//     },
//     [weekdays[4]]: {
//         open: 11,
//         close: 23,
//     },
//     [`day:${weekdays[5]}`]: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// };

// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     //ES6 Object Literals this adds openingHours variable as object to the
//     //restaurant object.
//     openingHours,
//     //Before ES6 writing function
//     // orderPasta: function (i1, i2, i3) {
//     //     return `You need \'${i1},${i2},${i3}\' to make Pasta`;
//     // },
//     // orderPizza: function (i1, ...other) {
//     //     return `Your'e MainIngredient is ${i1} and sub ingredients are ${other}`;
//     // }
//     //After ES6 writing function
//     orderPasta(i1, i2, ...i3) {
//         console.log(`You need \'${i1},${i2},${i3}\' to make Pasta`);
//     },
//     orderPizza(i1, ...other) {
//         console.log(`Your'e MainIngredient is ${i1} and sub ingredients are ${other}`);
//     }
// };
// restaurant.orderPasta("Mushroom", "Tomatoes", "Olives", "Onions");
// Enhanced Object Literals Ends -----------------------------------------



//Optional Chaining on Objects (?.) Begins---------------------------------
//On Objects
// const weekdays = ['mon', 'tues', 'wed', 'thu', 'fri', 'sat', 'sun'];
// let openingHours = {
//     [weekdays[3]]: {
//         open: null,
//         close: 22,
//     },
//     [weekdays[4]]: {
//         open: 11,
//         close: 23,
//     },
//     [weekdays[5]]: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// };
// const restaurant = {
//     name: 'Classico Italiano',
//     location: 'Via Angelo Tavanti 23, Firenze, Italy',
//     categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//     starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//     mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//     openingHours,
//     orderPasta: function (i1, i2, i3) {
//         return `You need \'${i1},${i2},${i3}\' to make Pasta`;
//     },
//     orderPizza: function (i1, ...other) {
//         return `Your'e MainIngredient is ${i1} and sub ingredients are ${other}`;
//     },
//     orderPasta(i1, i2, ...i3) {
//         console.log(`You need \'${i1},${i2},${i3}\' to make Pasta`);
//     },
//     orderPizza(i1, ...other) {
//         console.log(`Your'e MainIngredient is ${i1} and sub ingredients are ${other}`);
//     },
//     order(starterIndex, mainIndex) {
//         console.log(`You ordered ${this.starterMenu[starterIndex]}, ${this.mainMenu[mainIndex]}`);
//     },
// };
// console.log(restaurant.openingHours.thu.open);
// console.log(restaurant.openingHours.mon.open);
// Uncaught ReferenceError: mon is not defined
// we get this error as there is no such property.
// In real world scenario it raises a problem as it is throwing error
// Instead we can do this using optional chaining(?.)
// By using optional chaining only if it exists value is returned
// other wise returns undefined. Here exists means
// if it is zero or null also it returns the value

// console.log(restaurant.openingHours.mon?.open); //undefined is returned since mon doesn't exist.

// for (const day of weekdays) {
//     const open = restaurant.openingHours[day]?.open || 'closed';
//     const open = restaurant.openingHours[day]?.open ?? 'closed';
//     console.log(`On ${day}, we open at ${open}`);
// }
// here there is a problem there exists sat property yet it returns closed
// because the value is zero.
// the solution is using nullish coelasing operator ??

// On Methods
// console.log(restaurant.order(1, 1));
// console.log(restaurant.order?.(1, 1) ?? "Doesn't Exist");
// Arrays
// const users = [];
// const users = [
//     { name: 'geetha', email: 'abc@g.com' },
//     { name: 'swetha', email: 'asd@j.com' }
// ];
// console.log(users[0]?.name ?? "Array is Empty");
//Optional Chaining on Objects (?.) Ends---------------------------------

// //Looping on Objects using keys,values and entries Begins-----------------
// let openDays = {
//     thu: {
//         open: 12,
//         close: 22,
//     },
//     fri: {
//         open: 11,
//         close: 23,
//     },
//     sat: {
//         open: 0, // Open 24 hours
//         close: 24,
//     },
// };
// //Property Names
// const properties = Object.keys(openDays);
// console.log(properties);
// let openString = `We are open for ${properties.length} days: `;
// for (let day of properties) {
//     openString += `${day}`;
// }
// console.log(openString);
// //Values
// const values = Object.values(openDays);
// console.log(values);

// //Entire object
// const entries = Object.entries(openDays);
// console.log(entries);

// //[key value]
// for (let [key, { open, close }] of entries) {
//     console.log(`On ${key} we open at ${open} and close at ${close}`);
// }
// //Looping on Objects using keys,values and entries Ends-----------------

/*
//Sets Begins -----------------------------------------
const ordersSet = new Set(
    ["Pizza", "Pasta", "Pasta", "Rissotto", "Rissotto"]
);
console.log(ordersSet);
console.log(new Set('Geetha'));
console.log(ordersSet.size);
//checks of ordersSet has "Pizza" or not returns true/false
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));
ordersSet.add("Garlic Bread");
console.log(ordersSet);
ordersSet.delete("Pasta");//deletes the specific element
// ordersSet.clear();//empties the set
console.log(ordersSet);
for (let i of ordersSet) {
    console.log(i);
}
//Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = new Set(staff);
console.log(staffUnique);
const staffUnique1 = [...new Set(staff)];
console.log(staffUnique1);
//Sets Ends -------------------------------------------
*/
/*
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
// const rest = new Map();
// //Setting values to map
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'RJY, AP');
// rest.set(2, 'HYD, TS');
// rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('open', 11).set('close', 23).set(true, 'We are open :D').set(false, 'We are closed :(');
// console.log(rest);
// //reading map values
// console.log(rest.get('name'));
// console.log(rest.get(true));
// //
// const time = 21//8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close') ? true : false));
// //has  method checks if the key exits or not
// console.log(rest.has('categories'));
// //delete based on key
// console.log(rest.delete(2));
// //returns size of map
// console.log(rest.size);
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
// let answer = Number(prompt("Enter key between 1 to 4"));
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
//Maps Ends ------------------------------------------------

//String Manipulations
const airline = "Indigo Lucknow";
const plane = "IL230";
//String Methods
//is case-sensitive
console.log(airline.indexOf('o'));
console.log(airline.lastIndexOf('o'));

const checkMiddleSeat = function (seat) {
    const s = seat.slice(-1) === 'B' || seat.slice(-1) === 'E' ?
        `${seat} is Middle` : `${seat} is not Middle`;
    return console.log(s);
}
checkMiddleSeat('11B');
checkMiddleSeat('12C');
checkMiddleSeat('14E');
checkMiddleSeat('14B');

let name = "Geetha Supriya Bathula";
let namesArr = name.split(" ");

console.log("Split OP: ", namesArr);
console.log("Join OP: ", namesArr.join(','));

//Padding a string 

const message = "Hello Geetha";
let msgPasStart = message.padStart(25, "-");
console.log(msgPasStart); //-------------Hello Geetha
console.log(msgPasStart.length); //25

//A Simple Function to mask Credit Card number
const maskCreditCardNumber = function (number) {
    let str = number + '';
    let last = str.slice(-4);
    return last.padStart(str.length, "*");
}

console.log(maskCreditCardNumber(123446778988596));//xxxxxxxxxxx8596
//Repeat
const message2 = "Bad Weather... All Departures Delayed... "
console.log(message2.repeat(5));

const greet = (greeting) => {
    return (name) => console.log(`${greeting} ${name}`);
}
//This works because of closure 
const greeterHello = greet("Hello");
greeterHello("Geetha Bathula"); //Hello Geetha Bathula
greeterHello("Swetha Bathula"); //Hello Swetha Bathula


//Call Method
const indigo = {
    airline: "INDIGO",
    airLineCode: "IDG",
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} has booked a seat on ${this.airline} flight ${this.airLineCode}${flightNum}`);
        this.bookings.push({ flight: `${this.airLineCode} ${flightNum}`, name });
    }
}
indigo.book(56, "Geetha");
indigo.book(789, "Swetha");
console.log(indigo.bookings);

const airAsia = {
    airline: "AIRASIA",
    airLineCode: "ASA",
    bookings: [],
}
const book = indigo.book;

//Does not work because 'this' keyword doesn't apply
// book(78, "Sarah");
book.call(airAsia, 45, "Peter Parker");
console.log(airAsia.bookings);

//Apply Method
const flightData = [583, 'Mario'];
book.apply(airAsia, flightData);//not used anymore 
// if u want to enter data using an array use call with spread
book.call(indigo, ...flightData);

//Bind Method 
//more useful and reusable compared to call.
const bookAirAsia = book.bind(airAsia);
const bookindigo = book.bind(indigo);
bookAirAsia(345, "Jennifer Aniston");

//we can set a flightnum(is constant) and then only pass the name.
const bookAirAsia67 = book.bind(airAsia, 67);
//is called partial application bcs already one of the argument is already set
bookAirAsia67("Honey Willams");

//Bind With Event Listeners 
let button = document.createElement("button");
button.textContent = "Buy a Plane Ticket";
document.body.append(button);
//Adding methods and properties to indigo object
indigo.planes = 300;
// indigo.buyPlane = function () {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// button.addEventListener('click', indigo.buyPlane); 
// //we get NAN bcs this keyword is the button element
//this means we need to manually tell the js

indigo.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
button.addEventListener('click', indigo.buyPlane.bind(indigo));
//Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.1);
//addVAT = value => value + value * 0.23;
console.log(addVAT(200));


//Immediate Function call executing only once
(function () {
    console.log("This will execute only once");
})();
(() => console.log("This will execute only once"))
    ();
*/

//Closure
const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount}`);
    }
}

const booker = secureBooking();
booker();//1
booker();//2
booker();//3
//even after getting out of execution context 
//closure is still remembers the variable so the value is getting 
//incremented on evry call

// let f;
// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     }
// }
// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     }
// }

// g();
// f();
// //g funstion already finished execution
// // but because of closure concept f is able to access 'a'
// //Re-assigning f function 
// h();
// f();

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = "blue";
    });
})();