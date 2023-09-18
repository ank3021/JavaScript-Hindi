let currDate = new Date();
console.log(currDate);

console.log(currDate.toString());
console.log(currDate.toLocaleString());
console.log(currDate.toLocaleDateString());
console.log(currDate.toLocaleTimeString());

let myDate = new Date(2023, 8, 8); //In this format, the months start from 0.
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());

let myDate2 = new Date(2023, 8, 8, 5, 30); //In this format, we can input the specific time along with the date.
console.log(myDate2);
console.log(myDate2.toString());
console.log(myDate2.toLocaleString());

/**Time  */

let a = new Date();
let timestamp = Date.now();
console.log(timestamp); //It returns the number of milliseconds from 1st January, 1970, 00:00:00 UTC. It is a static variable.
console.log(a.getTime()); //It returns the number of milliseconds from the 1st January, 1970, 00:00:00 UTC. It is non-static method.
console.log(a.valueOf()); //It returns the number of milliseconds from the 1st January, 1970, 00:00:00 UTC. It is non-static method.

