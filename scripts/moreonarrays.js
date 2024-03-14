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

// for (let movement of movements) {
//     if (movement > 0) {
//         console.log(`You deposited ${movement}`);
//     }
//     else {
//         console.log(`You withdrew ${Math.abs(movement)}`);
//     }
// }
console.log("----------FOREACH----------");
movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    }
    else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
})

movements.forEach(function (movementElement, index, movementArray) {
    console.log(`${movementElement} at index ${index} of array${movementArray}`);
});

const numbers = [1, 2, 3, 4, 5];

const square = (n, index, array) => console.log(`Square Of numbers CurrentElement is ${n} at index${index} of ${array} value = ${(n * n)}`);
numbers.forEach(square);
*/
//for Each --------------------------Ends
/*
//for Each on maps and sets
const cUniq = new Set(['g', 'e', 'e', 't', 'h', 'a']);

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);
//A set doesn't have keys values and indexes here val key 
//doesnt make any sense so returning val or key is same 
currencies.forEach(function (val, key, map) {
    console.log(`${key}:${val}`);
})

const currenciesSet = new Set(currencies);
currenciesSet.forEach(function (val, key, set) {
    console.log(`set ${val[0]} ${val[1]}`);
})//key and value are same so it returns same 
//instead as the output is an array i used array index to get
//the neat output
*/
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

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJuliaCorrected = dogsJulia.slice(1, 3);

const checkDogs = function (array) {
    array.forEach(function (val, index) {
        if (val >= 3) {
            console.log(`Dog number ${index + 1} is an adult, and is ${val} years old`);
        }
        else {
            console.log(`Dog number ${index + 1} is still a puppy🐶`);
        }
    });
}
checkDogs(dogsJuliaCorrected);
checkDogs(dogsKate);
*/
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //same as forEach has acess to value, index and array for map,filter and reduce
// //map method
// const euroToUSD = 1.08;
// let movementsUSD = movements.map(
//     function (val) {
//         let convert = val * euroToUSD;
//         return convert;
//     }
// );
// //filter method
// console.log(movementsUSD);
// let onlyDeposit = movements.filter(
//     function (val) {
//         if (val > 0) {
//             return val;
//         }
//     }
// );
// //reduce method
// console.log(onlyDeposit);
// const total = movements.reduce(
//     function (val, cI, i, arr) {
//         console.log(val, i);
//         val = val + cI;
//         return val;
//     });
// console.log(total);

//Fill Method 
console.log([1, 2, 3, 4, 5, 6, 7]);

//another way to create an array
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(8);
// creates an empty array of length
console.log(x);

let s = x.fill(1);
//original array is also modified 
console.log("s =", s, "x = ", x)

//by using fill method we can also specify
//the start index
console.log(x.fill(8, 3));//starts filling 1 from 3rd index

//we can also use it as a slice option
console.log(x.fill(2, 3, 5));

//we can use fill method on any array

//adding data programatically or dynamically
let hundredRandomArray = Array.from({ length: 100 }, () => {
    let num = Math.floor(Math.random() * 100) + 1;
    return num;
});