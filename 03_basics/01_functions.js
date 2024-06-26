function sayMyName(){
    console.log("shailja");
}
// sayMyName();

function addTwoNumbers(number1,number2){
    let result=number1+number2;
    return result;
}

const result = addTwoNumbers(10, 30);
// console.log(result);

function loginUser(userName){
    if(!userName){
        console.log("Please enter a username");
        return;
    }
    return `${userName} just logged in`;
}
// console.log(loginUser("shailja"));

function calculateCartPrice(...num1){            //rest operator
    return num1;
}

// console.log(calculateCartPrice(100,200,300));

const user= {
    name:"shailja",
    price:999
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}

// handleObject(user);
handleObject({
    name:"soni",
    price:399
});

// const myNewArray = [100,200,400,600];
function returnSecondValue(getArray){
    return getArray[0];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));

