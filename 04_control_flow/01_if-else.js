//Conditional statements are used to perform different actions based on diverse conditions.
// In javascript, we have the following conditional statements:
// 1. if statement - executes the block of code if the input condition is true.
// 2. if-else statement - executes the if block when the input condition is true, and the else block when the input condition is false.
// 3. if-else if-else statement - executes the block, whose condition evaluates to true. When no conditions are true, then the else block is executed.


//if statement
if (4 % 2 === 0)
{
    console.log("4 is a even number.");
}


//if-else statement
if (5 <= 2)
{
    console.log("5 is less than or equal to 2.");
}

else
{
    console.log("5 is greater than 2.");
}


//if-else if-else statement
let name = "Ankit";

if (name === "Nikhil")
{
    console.log("Hello Nikhil");
}

else if (name === "Rohit")
{
    console.log("Hello Rohit");
}

else
{
    console.log("Hello Ankit");
}