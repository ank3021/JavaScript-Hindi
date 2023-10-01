//This keyword in javascript is used to refer to current object. It can be used to access the properties of the current object.

const details = {
    website: "coding ninjas",
    price: 2499,

    welcome: function(){
        console.log(`Welcome to ${this.website}. The price you have paid is ${this.price}.`);
        console.log(this);//It refers to current object.
    }
}

details.welcome();
details.price = 2999;
details.welcome();

console.log(this);//It refers to global object, in node.js it will return empty object and in browser it will return window object.


