//In JavaScript, each relational operator evaluate the operands in a unique manner.

//In some comparisons the type conversions takes place as expected, but in other comparisons the output is strange.

console.log("Ankit" > 5);
console.log("Ankit" == 5);
console.log("Ankit" >= 5);

console.log("Ankit" < 5);
console.log("Ankit" <= 5);

console.log("5" == 5);
console.log(true == 1);
console.log(false == 0);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(null < 0);
console.log(null == 0);
console.log(null <= 0);

console.log("" == false);
console.log("Ankit" == true);
console.log(0 == false);
console.log(-5 == true);

//To resolve this anomaly while using relational operators in javscript, strict equality operators can be used.

/* '===', it only returns true under the following conditions:
   1. If both the operands are primitive, then they must have equal value and similar data type.
   2. If both the operands are non-primitive, then they must have equal value and reference.
   3. It always returns false when one operand is primitive and other operand is non-primitive.
*/ 
