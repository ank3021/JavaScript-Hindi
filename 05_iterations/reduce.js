//reduce method executes a user-supplied reducer callback function on each element of the array, in order, pasing in the return value from the calculation on the preceding element.
//The first time the callback is run there is no return value of previous calculation, if supplied, an initial value may be used in its place.
//The reducer function can take four arguments: accumulator, currentValue, currentIndex, array, initialValue(optional).
//The accumulator is the value that is returned from previous calculation.

let arr = [1,2,3,4,5,6,7,8,9,10];
let result = arr.reduce( function(acc, val) {
   return (acc + val);
}, 0);
console.log(result);


let arr2 = [1,2,3,4,5];
let result2 = arr2.reduce( (acc, val) => acc*val, 1); //arrow function and implicit return
console.log(result2);


let arr3 = [10,20,30,40,50];
let result3 = arr3.filter( (element) => element >= 30).reduce( (acc, val) => acc*val, 1); //method chaining
console.log(result3);


//practice
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
];

const total_price = shoppingCart.reduce( (acc, item) => acc + item.price, 0);
console.log("The total sum of all the courses is: " + total_price);



