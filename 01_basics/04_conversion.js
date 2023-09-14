//Conversion Confusion - In case of conversion, JavaScript behaves in a very strange manner.

//Conversion of number into other data types.
{
    let x = 45;
    console.log(typeof x);
    let str = String(x);
    console.log(typeof str);
    let s = Symbol(x);
    console.log(typeof s);
    let bool = Boolean(x); //if number is zero then the boolean value is false, else if number is non-zero then the boolean value is true.
    console.log(typeof bool);
    let big = BigInt(x);
    console.log(typeof big);
   
    console.table([x, str, s, bool, big]);
}


{
    let string = "Ankit Kashyap";
    console.log(typeof string);
    let num = Number(string);
    console.log(typeof num);
    let s = Symbol(string);
    console.log(typeof s);
    let bool = Boolean(string);//if string is empty then the boolean value is false, else if string is non-empty then the boolean value is true.
    console.log(typeof bool);
    
    console.table([string, num, s, bool]);
}


{
    let val = true;
    console.log(typeof val);
    let num = Number(val);//if boolean is true then the number value is one, else if boolean is false then the number value is zero.
    console.log(typeof num);
    let string = String(val);
    console.log(typeof string);
    let s = Symbol(val);
    console.log(typeof s);
    let big = BigInt(val);//if boolean is true then the bigint value is 1n, else if boolean value is false then the bigint value is 0n. 
    console.log(typeof big);
    
    console.table([val, num, string, s, big]);
}






