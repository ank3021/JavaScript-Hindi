/* Since javascript csn be used in various different browsers, so there can be different versions of js.
   Thus to define a standard for the language, ecmascript was developed. It is a basic guidelines set 
   that is followed by js all across the globe. It is used to maintain uniformity in the language irr-
   espective of the platform that is being used to implement js.  */

   //The various data types in js are-

   //1. Primitive data types-
   let name = "Ankit Kashyap";//String
   let unique = Symbol("foo");//Symbol
   let bool = true;//Boolean
   let val = BigInt(12345);//BigInteger
   let val2 = 21;//Number
   let x = null;//Null
   let y = undefined;//Undefined

   /* Null means that the value is not fetched or not present at the instant it is being 
      called, and Undefined means that the value for the variable is not initialized. */

   //2. Non-primitive data types-
   let obj = {
    name:"Ankit Kashyap",
    age:21,
    college:"MSIT"
   };

   let arr = ["BMV", "MERCEDES", "FERRARI", 1, 3, 5, true];

   console.table([name, unique, bool, val, val2, x, y, obj, arr]);

   console.log(typeof(x));// typeof operator is used to return the data type of the variable.

   console.log(typeof(y));

   console.log(typeof(typeof(y)));// typeof operator always return a string value. Thus, the typeof of typeof always returns string.
