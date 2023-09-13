let num = 3;
let negval = -num;    /* Both of these operations output the same value. */
let negval2 = -1*num;

console.log(negval);
console.log(negval2);

/*Basic types of operations are:
1. Airthmetic operations
2. Logical operations
3. Relational operations
4. Bitwise operations
5. Assigment operations */

let str1 = "Ankit";
let str2 = " Kashyap";
console.log(str1 + str2);      /* Both of these operations output the same value. */
console.log(str1.concat(str2));

console.log(1 + 1 + 1); /* All the operators are evaluated on the basis of their precedence and associativity. */
console.log(1 + "1");   /* Majority of the operators have left to right associativity. */
console.log("1" + 1);
console.log("1" + 1 + 1);
console.log(1 + 1 + "1");

console.log(+true);
console.log(+false);
console.log(+"");
console.log(+"x");
