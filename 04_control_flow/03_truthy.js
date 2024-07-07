const useremail =[];
if(useremail){
    // console.log("Got user email");
}
else{
    // console.log("don't have email address");
}

//falsey values:-
/* false, 0 , -0 , BigInt 0n, "" , null ,undefined , NaN ; 

1. false ==0 -> true
2. false =='' -> true
3. 0 =='' -> true*/ 

//truthy values:-
//Any value inside string is truthy value including space.
/* "0", 'false' , " " ,[] (empty array), {} (empty object) , function(){}  (empty function)  */


//to check array------
// if (useremail.length === 0) {
//         console.log("Array is empty");
//     }

//To check object------
const emptyObj = {};
if (Object.keys(emptyObj).length===0) {
    // console.log("Object is empty");
}

// Nullish coalescing Operator (??): null , undefined:--
 let val1;
//  val1 = 5 ?? 10;
// val1=null ?? 10;
// val1 = undefined ?? 15;

val1= undefined ?? 12 ?? 300;

//  console.log(val1);

//---------Terniary operator----- 

// condition ? true : false

//ex:-
const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");