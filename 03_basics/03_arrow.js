//This and arrow function------------------------------------------------------


const user={
    username:"soni",
    price:999,

    welcomeMessage: function(){
        // console.log(`${this.username} , welcome to website...`);              /*this means current context.(context means values which a variable holds)*/
        // console.log(this);
    }
}
// user.welcomeMessage();
// user.username="sam";
// user.welcomeMessage();
// console.log(this);            /*when we are executig this then the output is (empty parenthesis) {} but in browser it shows  (windows:...) . This happens because in older times there was only way for executing js which was in browser (the engine used to execute js was found at only one place in browser) but nowdays the engine is being used in many different platforms with different names such as:- node,etc. so here we have stand-alone engine .["But in  browser when the engine runs,the global object in browser is window object hence we are able to capture all events of windows"].*/


function js(){
    // console.log(this);
}

js();

const article = () => {              
    // console.log(this);
}
article();

/* the difference between function and arrow function is that, Regular functions have their own this context. And this is determined dynamically depending on how you call or execute the function. Arrow functions, on the other hand, do not have their own this context. Instead, they capture the this value from the surrounding lexical context in which the arrow function was created. */

 //arrow function  ----     () => {} 
// we can create it by storing in an variable also . This method is known as explicit return.
// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(3,4));

// another way of creating arrow function is implicit return  -> in this if we wrap inner code in curly braces then we have to write return and if we wrap it using paranthesis then no need of return keyword.

// const addTwo = (num1,num2) => (num1+num2);

// console.log(addTwo(3,4));

//what is the benefit of paranthesis? when we have to return object then paranthesis are required.
const addTwo = () => ({username: "shailja"});

console.log(addTwo());