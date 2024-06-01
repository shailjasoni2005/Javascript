// const tinderUser =  new Object();             //singleton object
const tinderUser =  {};                          //non-singleton object 
tinderUser.name="shailja";
tinderUser.age=18;
tinderUser.isLoggedIn="false";

// console.log(tinderUser);

const regularUser = {
    email: "shailja123@gmail.com",
    fullname : {
        userfullname: {
            firstName : "shailja",
            lastname : "soni"
        } 
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

const obj1={1:"a" , 2:"b"};
const obj2={3:"c" , 4:"d"};
// const obj3={obj1,obj2};

// const obj3= Object.assign({},obj1,obj2);        //we use these {} as a empty object object to store result

const obj3={...obj1,...obj2};

// console.log(obj3);

const users = [
    {
        id:1,
    email:"shailja123@gmail.com",
    },
    {
        id:1,
    email:"shailja123@gmail.com",
    },
    {
        id:1,
    email:"shailja123@gmail.com",
    },
    {
        id:1,
    email:"shailja123@gmail.com",
    },
    {
        id:1,
    email:"shailja123@gmail.com",
    }
]
// console.log(users[1].email);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName  : "javascript in hindi",
    price : 999,
    courseInstructor : "hitesh"
}
console.log(course["courseInstructor"]);

//de-structure the objects:-
const {courseInstructor:Instructor} = course;
console.log(Instructor);