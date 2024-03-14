"use strict";
/*
const bookings = [];
//Default Parameters
const createBooking = function (
    flightNum, numPassengers = 1, price = 2999 * numPassengers) {
    const booking = {
        flightNum,
        numPassengers,
        price
        //oldschool way
        //flightNum, 
        //numPassengers: numPassengers || 1, 
        //price: price || 2999
    }
    console.log(booking);
    bookings.push(booking);
};
createBooking('IND123'); //{flightNum: 'IND123', numPassengers: 1, price: 2999}
createBooking('IND123', undefined, 9873); //if we dont send any second parameter 
//we can set it to undefined in this case the default value is printed 
//and we can skip the parameter 
//{flightNum: 'IND123', numPassengers: 1, price: 9873}
createBooking('IND123', 4, 9999);//{flightNum: 'IND123', numPassengers: 4, price: 9999}
createBooking('IND123', 3, undefined);//{flightNum: 'IND123', numPassengers: 3, price: 8997}
*/

// Functions Accepting Callback Functions
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};//Geetha Supriya

// Higher-order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
};

transformer('Geetha Supriya', upperFirstWord);
transformer('Geetha Supriya', oneWord);
// JS uses callbacks all the time
const high5 = function () {
    console.log('Hello');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Geetha');

//Call MEthod
//setting up the 'this' keyword
const indigo = {
    airline: "INDIGO",
    airLineCode: "IDG",
    bookings: [],
    //book(flightNum, name) enchanced object literal
    book: function (flightNum, name) {
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
// book(78, "Sarah");
//Does not work because 'this' keyword doesn't apply
//because in a regular function call this keyword points to undefined

//Call Method 
//as book(78, "Sarah");, we should tell js wht the this keyword should look like
//instead of directly calling the book function we are using 
//call method on book function
//call method allows to manually set the 'this' keyword
//to any function that we want to call
//call method -> 1st arg is what we want to point to.
//remainng args are the rest of the parameter
book.call(airAsia, 45, "Peter Parker");
console.log(airAsia.bookings);

book.call(indigo, 83, "Amy Santiago");
console.log(indigo.bookings);

//now we can create as many airlines as we want but we need to use 
// the same property names

//Apply Method 
//It takes the 1st arg the function call
//and the 2nd arg is the array of params to be passed
const flightData = [583, 'Mario'];
book.apply(airAsia, flightData);//not used anymore 
// if u want to enter data using an array use call with spread
book.call(indigo, ...flightData);


//Bind Method 
//this method doesn't immediately call function as call and apply method 
//instead it returns a new function where the this keyword is bound
//so its set to whatever value we pass into bind
const bookAirAsia = book.bind(airAsia);//bookAirAsia is the new function returned by bind method
const bookindigo = book.bind(indigo);
bookAirAsia(345, "Jennifer Aniston");

//we can set a flightnum(is constant) and then only pass the name.
const bookAirAsia67 = book.bind(airAsia, 67);
//is called partial application bcs already one of the argument is already set
bookAirAsia67("Honey Willams");


//Practical Example
//Bind With Event Listeners 
let button = document.createElement("button");
button.textContent = "Buy a Plane Ticket";
document.body.append(button);
//Adding methods and properties to indigo object
indigo.planes = 300;//indigo has 300planes
indigo.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
button.addEventListener('click', indigo.buyPlane);
//we get NAN bcs this keyword is the button element
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

//default tax 
//as we know in bind we are setting up the this keyword for first arg
//here it doesnt matter so we prefer to write as null
//order of the arguments must be same while setting up the default values
const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23;
console.log(addVAT(200));

//Immediatley invoked function expressions (means a function that disappears right after its call)
//IIFE
//we can trick js by wrapping in the parenthesis
(function () {
    console.log("Hello this is called only once, u cannot run it again");
})();

