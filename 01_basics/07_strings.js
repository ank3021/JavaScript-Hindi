// Strings are a sequence of characters and whitespaces. It can consist of various different symbols.

//First methods that can be used to declare strings.
const name = "Ankit Kashyap";
console.log(name);

//Second methos that can be used to declare strings
const city = 'New Delhi';
console.log(city);

//Third methods that can be used to declare strings
const school_name = `Modern Convent School`;//It is the most suitable method that should be used to declare strings as it provides string interpolation.
console.log(school_name);

console.log(`My name is ${name}, I live in ${city} and completed my schooling from ${school_name}`);//String interpolation

//The prototype of strings provide us with many in-built methods.

const country = new String(`India`);
console.log(country);
console.log(country.charAt(3));

console.log(country.toUpperCase()); /*These methods donot update the original string, as strings are non-mutable.
                                      It returns a new string with a unique reference in the memory.*/
console.log(country.toLowerCase());

const sub = country.substring(0, 3); //It returns a substring that begins from startIndex and ends at endIndex - 1. 
console.log(sub);

const s = country.slice(0, 3); //It is almost similar to the substring method (except for some edge cases).
console.log(s);

const college = "   MSIT  ";
console.log(college);
console.log(college.trim()); //It removes the whitespaces from the beginning and ending of the string.
console.log(college.trimStart()); //It removes whitespaces from the beginning of the string.
console.log(college.trimEnd()); //It removes whitespaces from the end of the string.

const brand = `GitHub`;
console.log(brand.replace("Hub", "Lab")); //It replaces the input section of string with desired string.

const sentence = `Today is a rainy day`;
console.log(sentence.includes("day")); //It returns a boolean value.
console.log(sentence.includes("summer"));

console.log(sentence.split(" ")); //It returns an array of strings seperated by the seperator.

console.log(sentence.indexOf('a')); //It returns the index of first occurence of the character in the string.
console.log(sentence.lastIndexOf('a')); //It returns the index of last occurence of the character in the string. 







