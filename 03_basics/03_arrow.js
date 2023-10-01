//This keyword in javascript is used to refer to current object. It can be used to access the properties of the current object.

const details = {
    website: "coding ninjas",
    price: 2499,

    welcome: function() {
        console.log(`Welcome to ${this.website}. The price you have paid is ${this.price}.`);
        console.log(this);//It refers to current object.
    }
}

details.welcome();
details.price = 2999;
details.welcome();

console.log(this);//It refers to global object, in node.js it will return empty object and in browser it will return window object.



//Arrow function
//It is a new way of writing function introduced in ES6.
//It is anonymous function.
//It is always a function expression.
//this keyword cannot be used in arrow function, as it will not refer to current object.


//Arrow function consists of two types of return statements: implicit and explicit.

//1. explicit return statement
const func = (num1, num2) => {
      console.log(this); //It will return empty object.
      return num1 + num2;
}

console.log(func(2,3));

//2. implicit return statement
const func2 = (num1, num2) => (num1  + num2);

console.log(func2(2,3));


