//Immediately invoked function expression:-
// to avoid the pollution from global scope we use IIFE.

(function js(){
    //named iife
    console.log(`db connected`);
})();                  //to end this iife function we must use ;(semi-colon) .

(function html(){
    console.log(`db connected two`);
})();
((name) => {
    //simple iife
    console.log(`${name} , what's up!`);
})('shailja')