/**Every data type in JavaScript is an object. Object can be instantiated using constructors or object literals.*/

//Object literals

const mySym = Symbol("This is a symbol");


const obj1 = {
    name: "Ankit Kashyap",
    age: 21,
    location: "New Delhi",
    email: "mankitkashyapr@gmail.com",
    isLoggedIn: true,
    loggedDays: ["Monday", "Tuesday", "Saturday"],
    [mySym]: "This is the object's symbol"
}

console.log(obj1.name);//This is the first method to access the properties of an object.
console.log(obj1["name"]);//This the second method to access the properties of an object, it should be used when the key is in string format.

console.log(obj1[mySym]);//Symbol can only be accessed using this method.

//Object manipulation
obj1.isLoggedIn = false;//This is the first method to modify the properties of an object.
obj1["age"] = 22;//This is the second method to modify the properties of an object.
console.log(obj1);


//Functions in objects
obj1.greeting = function(){
    console.log("Hello, I am the object");
}

console.log(obj1.greeting());

obj1.greeting2 = function(){
    console.log(`Hello, I am  ${this.name} and I am ${this.age} years old.`);//String Interpolation
}

console.log(obj1.greeting2());
//Functions in objects



Object.freeze(obj1);//This method freezes the object and prevents any further modification to the object.

