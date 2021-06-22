// 2
console.log(" 2) To check if string input is numeric")

var val = 2345;
g = isNaN(val);
console.log(g);
if (g == false) {
    console.log("it is a number");
}
var val = "2345";
g = isNaN(val);
console.log(g);
if (g == false) {
    console.log("it is a number");
}
var val = "This is a string";
g = isNaN(val);
console.log(val + ' ' + g);
if (g == false) {
    console.log("it is a number");
}

// 3
console.log("3) convert a number to string and vice versa");
console.log("string to number using parseInt");
let string1 = "this is string";
let strTonum = parseInt(string1);
let type = typeof (strTonum);
console.log("type of" + strTonum + " is " + type);

console.log("number to string");
let number = 1500;
number += '';
let numbertype = typeof (number);
console.log("Type of numbertype::" + numbertype);

// 4
console.log("4) == and ===");
var value4 = "787";
var value5 = 787;

if (value4 == value5) {
    console.log("True since it  compares oly the values");
}
else {
    console.log("not same");
}
if (value4 === value5) {
    console.log("data types are same");
}
else {
    console.log("type is different");
}


// 5 
console.log("5) var and let");

//using var
for (var i = 0; i < 3; i++) {
    console.log("var inside " + i);
}
console.log("outside loop still accessed" + i);

//using let
for (let j = 0; j < 3; j++) {
    console.log("inside loop" + j);

}
// console.log("outside loop"+j);

// 6
console.log("6) storing date in variable");
const d = new Date();
console.log(d);

// 7
console.log("7) storing past date");
const today = new Date()
const yesterday = new Date(today)

yesterday.setDate(yesterday.getDate() - 1)

today.toDateString()
yesterday.toDateString()
console.log("Yesterday's date::" + yesterday);


// 8

console.log("8) Prefix er for even elements /dr for odd elements");
const username = ["Gordan Ramsay", "Harikrish", "Liya", "Shalini", "Nikhil"];
const alter = username.map((uname, idx) => {
    if (idx % 2 == 0) {
        return 'Er.' + uname;
    }
    else {
        return 'Dr.' + uname;
    }
}
);
for (let i = 0; i < alter.length; i++) {
    console.log(alter[i]);
}

// 9

console.log("9) append san for names starting with Dr");
const usernames = ["Gordan Ramsay", "Harikrish", "Liya", "Shalini", "Nikhil"];
const alters = usernames.map((unames, idx) => {
    if (idx % 2 == 0) {
        return 'Er.' + unames;
    }
    else {
        return 'Dr.' + unames;
    }
}
);

var formatted = [];
for (let i = 0; i < alters.length; i++) {
    if (alters[i].startsWith("Dr")) {
        console.log(alters[i] + "San");

    }
    else {
        console.log(alters[i]);
    }

}

// 10
console.log("10) Extract prime numbers");

const newArray = [23, 57, 93, 12, 5, 37, 84, 22, 10, 11];
const PrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
});
console.log("array::" + newArray);
console.log("Prime numbers in array::" + PrimeArray);

