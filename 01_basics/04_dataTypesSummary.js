/*the way data is stored in memory data types are categorised in two ways, primitive and non-primitive.
1.Primitive data types:
these are built in data types . these are in seven categories:
string,number,boolean,null=nothing,undefined=nothing is decided what value is assigned,symbol=to make any value unique symbols are used, BigInt=to store big integer values

2.Non-primitive/reference type:-
these are user defined. 
ex:- array,objects,functions().

JavaScript is dynamically typed. 

Statically typed languages require variable types to be explicitly declared and checked at compile time, meaning the type of a variable is determined before the program runs. Examples of statically typed languages include Java, C++, and Swift.

Dynamically typed languages, like JavaScript, do not require explicit type declarations and perform type checking at runtime, meaning the type of a variable is determined while the program is running. This allows for more flexibility but can also lead to runtime errors if types are not used correctly. Python, Ruby, and JavaScript are examples of dynamically typed languages.
 */

const score=100;
const scorevalue=100.3;
const isLoggedIn = false;
const outsideTemp=null;
let userEmail;
//symbol
const id=Symbol('123');
const anotherid=Symbol('123');
// console.log(id===anotherid);

// BigInt
const bigNumber=12345678910n;

const Arr=["maths","science","hindi","english"];             //reference type
//objects

const obj1={
    name:"shailja",
    age:18,
}

// console.log(obj1.name);

//function()
const func1 = function(){
    console.log("hello world");
}
console.log(typeof score);
console.log(typeof scorevalue);
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp);
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherid);
console.log(typeof bigNumber);
console.log(typeof Arr);
console.log(typeof obj1);
console.log(typeof func1);
