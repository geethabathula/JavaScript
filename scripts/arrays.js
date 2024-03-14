"use strict";
//SPLCE
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

/*
//SLICE
let arr = ['a', 'b', 'c', 'd', 'e'];
//begins slicing from 2nd position of the array.
arr.slice(2);//Array(3) [ "c", "d", "e" ]
//we can also specify the end parameter as in strings the end parameter is not included.
arr.slice(2, 4);//Array [ "c", "d" ]
//starts slicing from backwards
arr.slice(-1);//Array [ "e" ]
//it means the minus of last 3 elements 
arr.slice(0, -3);// (2) ['a', 'b']
//creates a shallow copy means original array is not disturbed 
arr.slice()//Array(5) [ "a", "b", "c", "d", "e" ]
console.log(arr);//Array(5) [ "a", "b", "c", "d", "e" ]
*/