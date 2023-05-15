"use strict";

/*
//Slice Method ----- begins---------------------------------------------
let arr = ['a', 'b', 'c', 'd', 'e'];
//begins slicing from 2nd position of the array.
arr.slice(2);//Array(3) [ "c", "d", "e" ]
//we can also specify the end parameter as in strings the end parameter is not included.
arr.slice(2, 4);//Array [ "c", "d" ]
//starts slicing from backwards
arr.slice(-1);//Array [ "e" ]
//creates a shallow copy
arr.slice()//Array(5) [ "a", "b", "c", "d", "e" ]
console.log(arr);//Array(5) [ "a", "b", "c", "d", "e" ]
//Slice Method ----- ends ---------------------------------------------



//Splice Method-----begins ------------------------------------------------------
let arr = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr.splice(2));
//Adding elements to arr using splice
//splice(start, deleteCount, item1)
arr.splice(2, 0, "new1", "new2");
//here 0 means dont remove anything just add elements at position 2
console.log(arr);//Array(7) [ "a", "b", "new1", "new2", "c", "d", "e" ]
arr.splice(0, 2, "new3", "new4");
//here 2 means remove two elements and add at position 0
console.log(arr);//Array(7) [ "new3", "new4", "new1", "new2", "c", "d", "e" ]
///Splice Method ----- ends ---------------------------------------------


//Reverse
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.reverse());//Array(5) [ "e", "d", "c", "b", "a" ]



//Concat
let arr = ['a', 'b', 'c', 'd', 'e'];
let arr2 = ['f', 'g', 'h'];
console.log(arr.concat(arr2));//Array(8) [ "a", "b", "c", "d", "e", "f", "g", "h" ]
console.log(arr);//Array(5) [ "a", "b", "c", "d", "e" ]

//Join Method
let joined = arr2.join("*");
console.log(joined);//f*g*h
console.log(typeof joined);//string


//at method
let array = [23, 11, 64];
console.log(array.at[0]); // === array[0] 23

//getting last element
console.log(array[array.length - 1]);//64
console.log(array.slice(-1)[0]);//64
console.log(array.at(-1));//64


//on strings
const me = "geetha";
console.log(me.at(4));//v
*/
/*
//for Each -----------------Begins

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
}
console.log("----------FOREACH----------");
movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
})

const numbers = [1, 2, 3, 4, 5];

const square = (n, index, array) => console.log(`CurrentElement is ${n} at index${index} of ${array} value = ${(n * n)}`);
numbers.forEach(square);
//for Each --------------------------Ends

/*
//for Each on maps and sets
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
// currencies.forEach(function (val, key, map) {
//     console.log(`${key}:${val}`);
// })

const currenciesSet = new Set(currencies);
// currenciesSet.forEach(function (val, key, set) {
//     console.log(`${key}:${val}`);
// })//key and value are same so it returns
/*
USD,United States dollar:USD,United States dollar moreonarrays.js:107:13
EUR,Euro:EUR,Euro moreonarrays.js:107:13
GBP,Pound sterling:GBP,Pound sterling
*/
//the key here is unnecessary but to miantain the signature it is left like that
//for sets
// currenciesSet.forEach(function (val, _, set) {
//     console.log(`${val}`);
// });
/*
USD,United States dollar moreonarrays.js:117:13
EUR,Euro moreonarrays.js:117:13
GBP,Pound sterling
*/
