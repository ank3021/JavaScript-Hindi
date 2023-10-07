//Switch case statements are also a type of conditional statements in javascript.
//The switch statement is used to perform different actions based on conditions.
//The break statement is used to stop the execution of consecutive cases, once a case is evaluated to true.
//When no case evaluates to true, then the default case is executed.

let age = 25;
switch(age)
{
    case 18:
        console.log("You are 18 years old.");
        break;
    
    case 19:
        console.log("You are 19 years old.");
        break;

    case 20:
        console.log("You are 20 years old.");
        break;
    
    case 21:
        console.log("You are 21 years old.");
        break;

    default:
        console.log("You are immortal !!");
}