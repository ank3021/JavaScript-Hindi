//while loop is used to execute a block of code repeteadly until the given condition remains true.

let i = 0;
while(i <= 20)
{
    console.log(i);
    i+=2;
}

//while loop with array
let arr = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let index = 0;
while (index <= arr.length - 1)
{
    console.log(`Today is ${arr[index]}`);
    ++index;
}

//while loop with object
let obj = {
    name: "Ankit Kashyap",
    age: 21,
    city: "New Delhi",
    company: "Accenture"
}

let key = 0;
while (key <= Object.keys(obj).length - 1)
{
    console.log(`The value of key is: ${Object.values(obj)[key]}`);
    ++key;
}


//do-while loop is used when the code needs to be executed atleast once before the condition is evaluated.

let j = 0;
console.log("The odd numbers till 10 are listed below: ");
do{
    if (j % 2 != 0)
    {
        console.log(j);
    }
    ++j;
}while (j <= 10)