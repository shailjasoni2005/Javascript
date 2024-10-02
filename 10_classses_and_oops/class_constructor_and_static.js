//ES6

// class User {
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc `;
//     }
//     changeUserName(){
//         return `${this.username.toUpperCase()}`;
//     }
// }

// const userDetails = new User("shailja","shailja@gmail.com","123");
// console.log(userDetails.encryptPassword());
// console.log(userDetails.changeUserName());

// behind the scene
function User(username,email,password){
    this.username=username;
        this.email=email;
        this.password=password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc `;
}
User.prototype.changeUserName = function(){
    return `${this.username.toUpperCase()}`;
}

const User1 = new User("Shailja","Shailja@gmail.com","123");
console.log(User1.encryptPassword());
console.log(User1.changeUserName());
