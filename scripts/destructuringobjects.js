//Destrurcturing Objects Begins--------------------------

const restaurant = {
    rname: 'Classico Italiano',
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
    }
};



//we have to provide the variable names that exactly
//matches the object property name 
//as in objects the order keeps changing we need to keep
//destructuring with same property name defined in object
const { rname, openingHours, categories } = restaurant;
console.log(`Restaurant Name ${rname}`);
console.log(`open timings ${openingHours}`);
console.log(`Cuisines ${categories}`);

//if u want to rename the variable name instead using the property name
const { rname: restaurantName, openingHours: hours } = restaurant;
console.log(restaurantName, hours);
//renaming variable name is 
//helpful when u r dealing with thirdparty data 

//default values when u dont have a value 
const { menu = "hello", starterMenu: starters = [] } = restaurant;
//as there is starterMenu the default value doesnt apply but
//for menu it applies his property doesnt exist so setting a default value to hello
console.log(menu, starters);

//switching variables / mutating varaibles
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const { fri: { open: o, close: c } } = openingHours;
console.log(o, c);

//practical example
//Many times in js we have
//functions with lots of parameters then it hard to know the order 
//of parameters for someone that is using this function
//so instead of defining the parameters manually we 
// can directly pass the object into the function argument
//and the function will then immediately destructure that object
restaurant.orderDelivery({
    time: "12:30pm",
    address: "Baker Street 101",
    mainIndex: 2,
    starterIndex: 2,
});