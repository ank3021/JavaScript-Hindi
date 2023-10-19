//map method is used to iterate over the array elements and operate on the elements.
//It takes a function as an argument that can consist of array element, index and array itself as function parameters.
//It returns a new array.

let arr = [1,2,3,4,5,6,7,8,9,10];

let square = arr.map( (element) => {
    return element*element; //Explicit return
});
console.log(square);

let cube = arr.map( (element) => element*element*element); //Implicit return
console.log(cube);

//method chaining
//Various methods can be chained with each other to perform collective operation on the same array.

let arr2 = [10,20,30,40,50];
let result = arr2.map( (element) => element+10).filter( (element) => element >= 30);
console.log(result);

let arr3 = ["apple", "banana", "mango", "grapes", "orange"];
let fruits = arr3.map( (element) => `The name of fruit is: ${element}.`)
                 .filter( (element) => element === 'The name of fruit is: mango.')
                 .map( (element) => element + ` Mango is the king of fruits.`);
console.log(fruits);

