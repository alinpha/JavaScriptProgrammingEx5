/*
 * Author: Aline Vetrov
 * Date: Jan.28, 2020
 * Title: JS practice
 */

function l(value) {
    console.log(value);
}

let a = 10;
let b = 15;
let c = 5;
let d = 5;
let y = 5;
let z = 6;

if (x == y) {
    l(`x is equal to y`);
} else {
    l(`x is not equal to y`);
}

if (x == '5') {
    l(`x is equal to string 5`);
} else {
    l(`x is not equal to string 5`);
}

if (x === '5') {//check type and value
    l(`x is equal to string 5 and same type`);
} else {
    l(`x is not equal to string 5 or same type`);
}

if (x == y || a > b) {
    l(`true`);
} else {
    l(`false`);
}

let dayOfWeek;
let today = new Date().getDay();

switch(today) {
    case 0:
    dayOfWeek = 'sunday';
    break;

    case 1:
    dayOfWeek = 'monday';
    break;

    case 2:
    dayOfWeek = 'tuesday';
    break;

    case 3:
    dayOfWeek = 'wednesday';
    break;

    case 4:
    dayOfWeek = 'thursday';
    break;

    case 5:
    dayOfWeek = 'friday';
    break;

    case 6:
    dayOfWeek = 'saturday';
    break;
}

l(dayOfWeek);
l("---------------------------------");

for (let i=0; i<10; i++) {
    l(i);
}

let j = 5;
while (j<10) {
    l(j);
    j++;
}
l("---------------------------------");


