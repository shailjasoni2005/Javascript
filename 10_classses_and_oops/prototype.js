// let myName = "shailja    ";
// console.log(myName.trueLength(){});

let myHero = ["Thor","spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidermman power is ${this.spiderman}`);
        
    }
}

// Here we injected a method in array,string and object-----

Object.prototype.shailja = function(){
    // console.log(`shailja is present in all objects. `);
    
}

//Injecting method in array------
Array.prototype.helloShailja = function(){
    // console.log(`shailja says hello..`);
    
}

// heroPower.shailja()
myHero.shailja();
myHero.helloShailja();
// heroPower.helloShailja();

//prototype Inheritance-------

const User = {
    name:"shaila",
    email:"shailja@gmail.com"
}

const teacher = {
    makevideo:true
}
const teachingSupport = {
    isAvailable:false
}

const TASupport = {
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:teachingSupport
}

teacher.__proto__ = User

// modern synntax:-
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUsername = "shailja     ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
}
anotherUsername.trueLength();

"shailja".trueLength();
"soni".trueLength();