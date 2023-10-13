//Loops in javascript are used to execute the same block of code a specified number of times or while the specified condition remains true.
//There are three types of loop in javascript: for, while and do-while loop.

//for loop

//It is used to prinnt first 10 natural numbers.
//The scope of each variable defined in the for loop is restricted within the braces of the loop.
for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(element);   
}


//Nested loop

console.log("The nested loop is printed as follows: ");
for (let i = 0; i < 5; ++i) {
    const element = i;
    for (let j = 0; j < 5; ++j) {
        const element2 = j;
        console.log(element*element2); 
    }
}


//break and continue statements
//break statement is used to terminate the loop at any particular point and takes the flow of the program to the next statement after the loop. 
//continue statement is used to skip the current iteration and takes the flow of the program to the next iteration.


console.log("The break statmenet is used as follows :");
for (let i = 0; i <= 10; ++i) {
    const element = i;
    if (element == 4)
    {
        console.log("This is the threshold value: " + 4);
        break;
    } 
    console.log(element);
}


console.log("The continue statement is used as follows: ");
for (let i = 0; i < 10; ++i) {
    const element = i;
    if (element == 4)
    {
        console.log("This is a special value....");
    }
    console.log(element); 
}


console.log("Loops are widely used with arrays to iterate over the elements of an array.");
let arr = ["A", "B", "C", "D", "E"];
for (let index = 0; index < arr.length; ++index) {
    const element = arr[index];
    console.log(element);
}





