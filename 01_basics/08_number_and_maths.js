//JavaScript provide us with a constructor for each of the datatype class, it could be used to contruct an object of the respective class.

const num = 500;
console.log(num);
const num2 = new Number(800);
console.log(num2);

const balance = new Number(1000.4569);
console.log(balance.toFixed(2)); //This method of the Number class is used to fix the number of digits after the decimal in the output.

const balance2 = new Number(1000);
console.log(balance2.toFixed(2));

const p1 = new Number(22.45);
console.log(p1.toPrecision(3)); //This method is used to provide the required precision to the number.

const p2 = new Number(50.47);
console.log((p2.toString()).length); //This method is used to convert the number type to string, after that the string methods and properties could be used on the variable.

/**Maths */
//It is a static class, thus all the methods and properties of the math class can be used without initializing an object of the class.

console.log(Math); //It returns the object of the math class.
console.log(Math.PI); //It returns the value of PI.
console.log(Math.abs(-15)); //It returns the absolute value of the number.
console.log(Math.round(4.2)); //It rounds off the input value to the nearest integer.
console.log(Math.round(4.8));

console.log(Math.ceil(4.2)); //It rounds off the input value to the nearest greater integer.
console.log(Math.floor(4.8)); //It rounds off the input value to the nearest smaller integer.


console.log(Math.min(1,2,3,4,5,6,7,8)); //It returns the minimum value from the input array.
console.log(Math.max(1,2,3,4,5,6,7,8)); //It returns the maximum value from the input array. 

console.log(Math.sqrt(8)); //It returns the square root of the input value.
console.log(Math.round(Math.sqrt(8))); //It rounds off the square root of the input value.





