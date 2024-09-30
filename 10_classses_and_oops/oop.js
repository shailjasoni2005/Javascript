// #object literal
const user = {
    username : "shailja",
    loginCount : 8,
    signedI: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);   //gives current context.
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);
//This keyword is used for refering to current context (object).

// ##constructor function:- new is a constructor function which is used for creating new instance.
function User(username,loginCount,isloggedIn){
    this.username = username;
    this.loginCount=loginCount;
    this.isloggedIn=isloggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }
    return this;
}

// here wheather we return this or not, this is implicitly defined and it still prints the value.
/* When we uses new keyword :- 1. An empty object is created, known as instance.
                               2. An constructor function is called due to new keyword : packs arguments and gives it to us.
                               3. The arguments written gets injected in this keyword.
                               4. Then we get the them.
                               
*/

const userOne = new User("Shailja" , 10,true);
const usertwo = new User("js" , 12,false);
console.log(userOne.constructor);
// console.log(usertwo);
