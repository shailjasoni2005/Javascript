const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);


// here we are talking about Math.PI given below whose is a constant and can't be changed because it is predefined in the JavaScript Math object.In a framework or library that you develop, you can define constants similar to how Math.PI works in JavaScript. These constants can act like flags or configuration values that should not be modified after their initial definition.
// console.log(Math.PI);
// Math.PI=5;
// console.log(Math.PI);

// For creating object we can also use factory functions like:-
// const mynewObject = Object.create(null);

// or 

const object = {
    name:'maths',
    price:'300',
    isBookAvailable:true,
    orderBook: function(){
        console.log("Book is not available");
        
    }
}

// console.log(object);
// We can set the descriptor properties of this object.
// console.log(Object.getOwnPropertyDescriptor(object,'name'));

// We can also modify properties of this object:-
/*Object.defineProperty(object,'name',{
    writable:false,
    enumerable:false
})*/
console.log(Object.getOwnPropertyDescriptor(object,'name'));

// for iterating object we use Object.entries(object).While iterating over object if it contains functions then we have to use conditional statement,since it will print whole function
for (let [key,value] of Object.entries(object)) {
    if (typeof value !== 'function') {
        console.log(`${key}:${value}`);
    }
    
}