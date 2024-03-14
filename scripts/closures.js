"use strict";
let f;
const g = function () {
    const a = 2;
    return f = () => {
        console.log(a * 2);
    }
}


g();
f();
//g function already finished execution
// but because of closure concept f is able to access 'a'

const h = function () {
    const b = 7;
    return f = () => {
        console.log(b * 2);
    }
}

g();
f();
//g funstion already finished execution
// but because of closure concept f is able to access 'a'
//Re-assigning f function
h();
f();
