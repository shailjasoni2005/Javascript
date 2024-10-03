class User {
    constructor(username) {
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    //We use static because we don't want to give access of this function to  every object who is intantiated from this class.
    static createId(){
        return `123`;
    }
}

const shailja = new User("Shailja");
// console.log(shailja.createId());

class Teacher extends User {
    constructor(username,email) {
        super(username);
        this.email=email;
    }
}

const lenovo = new Teacher("lenovo","@gmail.com");
lenovo.logMe();
