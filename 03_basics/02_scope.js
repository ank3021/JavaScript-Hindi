//Scope in javascript defines the block within which any function, variable can be accessed by the program.
//There are two types of scope in javascript: global scope and block scope.


{
    let a = 20; //let has block scope in js.
    const b = 30; //let has block scope in js.
    var c = 40; //var has global scope in js. This the reason the use of var is discourages as it can be accessed and over-riden from anywhere in the program.
}

if (true)
{
    let a = 50;
    const b = 60;
    var c = 70;
    console.log("Inside if block: ", a, b);
}

console.log("Outside if block: ", c);


//Scope in function
function outer()
{
    let name = "Ankit";
    function inner()
    {
        let platform = "youtube";
        console.log("I am " + name + " from " + platform + ".");//name can be accessed in the inner block.
    }

    //platform cannot be accessed from here, as it has a block level scope.
    inner();
}

outer();


//Scope in conditional statements

if (true)
{
    let name = "Ankit2";
    if (true)
    {
        let platform = "youtube2";
        console.log("I am " + name + " from " + platform + ".");//name can be accessed in the inner block.
    }

    //platform cannot be accessed from here, as it has a block level scope.
}

//name cannot be accessed from here, as it has a block level scope.


//++++++++++++++++++++++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



first(5);//This is valid, as it is a function declaration.
function first(num)
{
    console.log(num + 1);
    return;
}

const value = function second(num)
{
    console.log(num + 2);
    return;
}
value(5);//This cannot be called before the function declaration, as it is a function expression.



