//The execution of code in javascript is synchronous and single threaded.
//This means that only one statement is executed at a time and after the first statement is executed, the successive statments gets executed.
//The execution context is created in two phases:
//1. Memory creation phase: It consists of declaration of variables and functions. The variables are assigned undefined and functions are assigned their definition.
//2. Execution phase: It consists of execution of the block of code line by line.

//A seperate execution context is created for each function call.  When the second phase is completed, then the execution context for the respective function is deleted/removed from call stack.

//The call stack is the data structure that stores the execution context of the called functions. It follows last in-first out principle.