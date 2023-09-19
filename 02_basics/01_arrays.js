/*Arrays are a very important data structure in JavaScript, that could be used to store multiple entities in a single block 
  of memory. Arrays in js are dynamic and can store entities of various data types together in a single block.*/

const arr = [1,2,3,4,5];
const arr2 = new Array(1,2,3,4,5);

//Either of the method can be used to declare arrays in js. Both of the methods initialize arrays in a similar format.
console.log(arr);
console.log(arr2);
console.log(typeof arr);
console.log(typeof arr2);

console.log(arr2[3]); //Indexing in arrays is from '0' until 'arr2.length - 1'.

//Array methods


let element = arr.pop(); //This methods removes last element from the input array and returns the popped element. It modifies the existing array.
console.log(element);
console.log(arr);

let len = arr.push(6); //This methods adds a new element at the end of array and returns the new length of the array. It modifies the existing array.
console.log(len);
console.log(arr);

let element2 = arr.shift(); //This method removes the first element from the input array and returns the removes element. It modifies the existing array.
console.log(element2);
console.log(arr);

let len2 = arr.unshift(0); //This method adds element to the start of the array and returns the new length of the array. It modifies the existing array.
console.log(len2);
console.log(arr);


console.log(arr.splice(1, 2)) //This method removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
console.log(arr); //Splice method returns the array of spliced elements and modifies the existing array.

console.log(arr.slice(0, 2)) //Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. 
console.log(arr); //Slice method returns the array of sliced elements and does not changes the input array.

console.log(arr.includes(4)); //Determines whether an array includes a certain element, returning true or false as appropriate.
console.log(arr.includes(10));

console.log(arr.indexOf(6)); //Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
console.log(arr.lastIndexOf(4)); //Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.


console.log(arr.join("-")); //Adds all the elements of an array into a string, separated by the specified separator string. It returns the string representation.
console.log(arr.toString()) //Returns a string representation of an array, seperated by comma.

console.log(arr.sort()); // This method sorts the array in increasing order and returns the array. It modifies the existing array.
console.log(arr.reverse()); //This method reverses the input array and returns the array. It modifies the existing array.