
console.log("convert a number to string & string to number");
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





console.log("== and ===");
var value4 = "1030";
var value5 = 1030;

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





console.log("storing date in variable");
const d = new Date();
console.log(d);



console.log("storing past date");
const today = new Date()
const yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)
today.toDateString()
yesterday.toDateString()
console.log("Yesterday's date::" + yesterday); 




console.log("append san for names starting with Dr");
const usernames = ["Guna", "Gokul", "Subeesh", "Mahesh", "Amal"];
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



console.log("prime numbers");

const newArray = [21, 47, 37, 12, 10, 37, 84, 22, 5, 11];
const PrimeArray = newArray.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num !== 1;
});
console.log("array::" + newArray);
console.log("Prime numbers in array::" + PrimeArray);





let Student = [];

Student[0] = { id: "a001", name: "guna", marks: 45, city: "Chennai" };
Student[1] = { id: "a002", name: "amal", marks: 30, city: "Madurai" };
Student[2] = { id: "a003", name: "varsha", marks: 28, city: "Karur" };
Student[3] = { id: "a004", name: "mahesh", marks: 65, city: "Chennai" };
Student[4] = { id: "a005", name: "ashwin", marks: 75, city: "Chennai" };
Student[5] = { id: "a006", name: "Ramya", marks: 45, city: "Banglore" };
console.log("add 20 marks to all stuednts");

let addmarks = Student.map(addmarks => {
    let mar = addmarks.marks + 20;

    console.log(`NAME: ${addmarks.name} Stuednt id: ${addmarks.id} Mark: ${mar} City: ${addmarks.city}`);

}); 
