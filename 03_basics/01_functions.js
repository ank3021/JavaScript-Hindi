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