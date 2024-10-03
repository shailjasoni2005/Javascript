class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        // super allows you to access and call functions on an object's parent class.
        super(username);
        this.email=email;
        this.password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const shailja = new Teacher("Shailja","shailja@123","123sh");
const soni = new User("Shailja");
soni.logMe();
shailja.addCourse();
shailja.logMe();

console.log(shailja instanceof Teacher);
console.log(shailja instanceof User);
console.log(soni instanceof User);
