/*  Promise is like a container that holds the result of an action that takes time to finish,
 (like loading a webpage or getting data from a server).
 The action can either succeed or fail. */

// Promise is created:- 

const promiseOne = new Promise(function(resolve,reject){
    // do an async task
    // Database calls, cryptography , network calls.
    setTimeout(function(){
        // console.log('Async taks is complete');
        resolve();
    },1000);
});

// To consume promise we use then() which is directly connected to resolve.
promiseOne.then(function(){
    // console.log("Promise consumed");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 2");
        resolve();
        
    },1000)
}).then(function(){
    // console.log("Async2 resolved");
    
})


// To pass value from promise to then()
const promiseThree =  new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"shailja", email: "shailja@123.com"})
    },1000)
})

promiseThree.then(function(user){
    // console.log(user);
})


//Understanging use of reject and callback hell and we can use then(), catch() as many as required.

const promiseFour =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username:"shailja", password:"123"})
        }else{
            reject("ERROR:Something went wrong")
        }
    },1000)
})

 promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch(function(error){

    console.log(error);
    
}).finally(() => {
    console.log("Promise is either resolved or rejected.");
})


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        // let error = false;
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject("ERROR:js went wrong")
        }
    },1000)
});

async function ConsumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
}
ConsumePromiseFive();

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }
// getAllUsers();

fetch('https://api.github.com/users/shailjasoni2005')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
})