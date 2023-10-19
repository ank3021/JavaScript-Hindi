//There are various other loops that can be used in js to access the elements of any object.

//for-of loop
//This loops operates on a sequence of values sourced from an iterable object such as arrays, strings, maps etc. It returns the values of the iterable object.

let arr = ["A", "B", "C", "D", "E"];

for (const letter of arr) {
    console.log(letter);
}

let str = "Ankit Kashyap";

for (const character of str) {
    console.log(`The character of the string is: ${character}`);
}

let map = new Map(); //map is an object in js that holds key-value pairs and remembers the original insertion order of the keys. It only consists of unique keys.
map.set("name", "Ankit Kashyap");
map.set("age", 21);
map.set("city", "New Delhi");

//[] can be used to de-structure the map elements.
for (const [key, value] of map) {
    console.log(`The value of ${key} is ${value}.`);//It will print the key value pair as a string.
}


//for-of loop cannot be directly used with non-iterable objects. It can be used with help of Object.keys(), Object.values() and Object.entries() methods.
let obj = {
    Country: "India",
    Capital: "New Delhi",
    Currency: "Rupee",
    Language: "Hindi"
}

for (const val of Object.values(obj)) {
    console.log(val);
}


//for-in loop
//This loops is used to iterate over the enumerable properties of an object. It returns the keys of the object.


let obj2 = {
    "C": 1960,
    "C++": 1970,
    "Python": 1991,
    "Java": 1995,
    "JavaScript": 1995
}

for (const key in obj2) {
    console.log(`The language ${key} was created in ${obj2[key]}.`);
}

let arr2 = [10,20,30,40,50];

for (const key in arr2) {
    console.log(`The index ${key} value is ${arr2[key]}.`);
}


//for-each loop
//This loop is used to calls a function for each element in the array. It is not executed for empty elements.
//Performs the specified action for each element in an array.

let arr3 = ["Spider-man", "Captain-America", "Iron-man"];

arr3.forEach( function (name) {
    console.log(`The name of the avenger is ${name}.`);
});

let arr4 = ["Cricket", "Football", "Hockey", "Basketball", "Tennis", "Badminton"];

arr4.forEach( (sport, index, array) => {
    console.log(`The name of the sport is ${sport}, the index is ${index}, the array is ${array}.`);
});

let arr5 = [1,2,3,4,5,6,7,8,9,10];

console.log("The table of 2 is: ");
arr5.forEach( (val) =>{
    console.log(2*val);
});






