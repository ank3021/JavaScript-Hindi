//When non-boolean values are used in boolean context, such as in conditional statements, they will be coerced into either true or false values.
//Values that are coerced into true are called truthy and the values that are coerced into false are called falsy.

let platform = `GitHub`;

if (platform)
{
    console.log("It is a truthy value.");
}

else
{
    console.log("It is a falsy value.");
}


let val = 0;
if (val)
{
    console.log("It is a truthy value.");
}

else
{
    console.log("It is a falsy value.");
}


//Falsy values in js:
// false, 0, -0, 0n, "", null, undefined, Nan


//Truthy values in js:
//Any non-empty string is a truthy value.
//Any number other than 0 is a truthy value.
//Empty array, object and function are truthy values.
// true, "false", "0", "-0", "0n", " ", [], {}, function(){}
