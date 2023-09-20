const marvel_heroes = ["Captain-America", "Ironman", "Thor", "Hulk", "Hawk-eye", "Black-widow"];
const dc_heroes = ["Batman", "Superman", "Aquaman", "Wonder-woman", "Flash", "Green-lantern"];
console.log(marvel_heroes);
console.log(dc_heroes);

const len = marvel_heroes.push(dc_heroes); //push method pushes the complete array as a single element to the existing array. This method returns the new length of the array.
console.log(len); //Returns the new length of the array.
console.log(marvel_heroes) //Modifies the existing array.


const all_heroes = marvel_heroes.concat(dc_heroes); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
console.log(all_heroes.length);
console.log(all_heroes);


//Spread Operator
//Spread operator can also be used to copy an array in an efficient manner.

const final_heroes = [...marvel_heroes, ...dc_heroes]; //Spread operator spreads the elements of the array as individual elements in the new array. This method returns a new array.
console.log(final_heroes.length);
console.log(final_heroes);


//Flat method
const array = [1,2,3,4,[5,6,7],8,9,10,[11,12,13,[14,15]]];
console.log(array);
console.log(array.length);
const array2 = array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(array2);
console.log(array2.length);


console.log(Array.isArray("Ankit")); //It returns boolean true if the input is an array, else it returns false.
console.log(Array.isArray(array2));

//This method can only create array of iterable objects.
console.log(Array.from("Ankit")); //Creates an array from an iterable object(like string, array etc.)


//This method can create array of any type of object.
let var1 = 100;
let var2 = 200;
let var3 = 300;
let var4 = 400;
let var5 = "Hello";
let var6 = true;

console.log(Array.of(var1, var2, var3, var4, var5, var6)); //Returns a new array from a set of elements.



