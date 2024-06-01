//we have two methods for declaring objects :-
//1.literal   :- when we declares object as literals then the object is not formed as singleton
//2.constructor :- if object is made from constructor then always singleton formed

//we also have concept of singleton: 

//object literals

const mySym =Symbol("key1");


const JsUser={
    // "name":"shaila"               when we declares the data like this then we have to use the second method to access them 
    name:"shailja",
    "full name":"Shailja soni",
    [mySym]: "Mykey1",
    age:18,
    location:"bhopal",
    email:"shailja100@gmail.com",
    isloggedin:"false",
    lastlogindays:["monday","tuseday","wednesday"]
}

//we can access like this but it's not correct way 
// console.log(JsUser.age);

//instead we can access like this
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser["mySym"]);   //here the value we gave inside the object gets printed but then it's data type is not a symbol.
// console.log(typeof(JsUser["mySym"])); //it's a string , if we want it as a symbol then we have write (mySym) in square bracets at the place of declaration.
// console.log(JsUser[mySym]);    //after declaring we have to call it like this .

// JsUser.email="Shailja123@gmail.com";
//we can also freeze the values if we want that the values should'nt change ;
// Object.freeze(JsUser);   //after freezing objects greeting method doesn't work 
JsUser.email="Shailja565@gmail.com";
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JsUser");
}
//console.log(JsUser.greeting);           //here the output [Function(anonymous)]  shows function doesn't executed but we get the reference of the function 
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JsUser,${this.name}`);
}
console.log(JsUser.greetingTwo());