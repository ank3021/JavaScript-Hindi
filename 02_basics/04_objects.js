const user = new Object();//Constructor is used to instantiate an object.

user.name = "Chris Evans";
user.age = 40;
user.location = "New York";
user.email = "evans@gmail.com";
user.isLoggedIn = true;

console.log(user);

//Nested object
const nestedObj = {
    name: {
        fullname: {
            firstname: "Tom",
            lastname : "Holland"
        }
    }
}

console.log(nestedObj.name.fullname.firstname);//Properties of nested objects can be accessed using dot operator.
console.log(nestedObj["name"]["fullname"]["firstname"]);//Properties of nested objects can be accessed using bracket notation.


//Assign method
const first = {1: "a", 2: "b"};
const second = {3: "c", 4: "d"};
const third = {5: "e", 6: "f"};

const result = Object.assign({}, first, second, third);//Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(result);


//Spread operator
const result2 = {...first, ...second, ...third};//Spread operator is used to copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
console.log(result2);

console.log(Object.keys(user));//Returns the names of the enumerable string properties and methods of an object in the form of an array.
console.log(Object.values(user));//Returns an array of values of the enumerable properties of an object.
console.log(Object.entries(user));//Returns an array of key/values of the enumerable properties of an object.

console.log(user.hasOwnProperty('name'));//Determines whether an object has a property with the specified name.
console.log(user.hasOwnProperty('isLogged'));


//Object destructuring
const course = {
    name: "JavaScript in Hindi",
    price: "free",
    teacher: "Hitesh Choudhary"
}

const {name: course_name} = course;//Object destructuring is used to extract properties from an object and assign them to variables.
console.log(course_name);//Object destructuring
console.log(course.name);//Dot notation


//When data is fetched from an API, then the data is in json format. To convert the json data into an object, we use JSON.parse() method.

/*{
    "name": "Harry Kane",
    "age": 28,
    "team": "Bayern Munich",
    "nationality": "English"
}*/