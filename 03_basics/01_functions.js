//Functions are very important part of JavaScript. It is used to reduce redundancy of code and improves readability.

function printname(){
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

printname();//This syntax is used to invoke and execute a function.


function add(number1, number2)
{
    console.log(number1 + number2);
}

add();//It will print NaN in the console as we have not passed any arguments.
add(5, 20);


//return keyword, No code in the function is executed after the return statement is encountered. 

function add2(number1, number2)
{
    //let result = number1 + number2;
    return number1 + number2;
}

let sum = add2(5, 20);
console.log("Sum of two numbers is:" + sum);

function username(username)
{
    if (username === undefined)
    {
        console.log("Please enter your username");
    }

    else
    {
        return `${username}, just logged in !!`;
    }
}

let message = username("Ankit");
console.log(message);


//Rest operator is used to pass multiple arguments to a function. It is represented by three dots(...).
function item_prices(...prices)
{
    return prices;
}

let result = item_prices(500, 700, 200, 600, 300);
console.log(result);


//Object in functions
const obj1 = {
    day: "Tuesday",
    month: "September",
    year: 2023
}

function printdate(object)
{
    console.log(`The day is ${object.day} and the month is ${object.month} of the year ${object.year}.`);
}

printdate(obj1); //The complete body of the object can also be passed as an argument while calling the function.


//Array in functions
const arr = [1,2,3,4,5];

function printarray(array)
{
    console.log(`The second element of array is: ${array[1]}`);
}

printarray(arr); //The complete body of the array can also be passed as an argument while calling the function.