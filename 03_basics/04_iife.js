//Immediately invoked function expression
//It is used to prevent pollution from global scope and to create private variables.
//Thre are two types of IIFE's: Named and Anonymous
//If the program consists of multiple IIFE's, then they must be terminated by a semicolon.


//1. Named IIFE
(function func()
{
    console.log("This is the first IIFE.");
})();


//2. Anonymous IIFE
(() =>{
    console.log("This the second IIFE.");
})();


//IIFE with parameters

(function chai(num1, num2){
    console.log("The sum of the numbers is:",num1 + num2);
})(15, 25);

