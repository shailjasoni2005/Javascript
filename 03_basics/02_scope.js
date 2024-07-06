// var c=300;
let a= 300;

if(true){
    let a = 10;
    const b = 20;
    // console.log("INNER: ",a);
    // c = 30;
}


// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username="shailja";
    function two(){
        const website="Github";
        // console.log(username);
    }
    // console.log(website);
    two();
}

one();

//Example:-
console.log(addOne(5));
function addOne(num){                 //this is function 
    return num+1;
}

//or
const addtwo=function(num){           //this is also function but sometimes it is termed as expression.
    return num+2;
}
addtwo(5);
