//-------------NUMBERS------------

const score = 400;
const balance = new Number(100);
// console.log(balance);
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 23.8966;
// console.log(otherNumber.toPrecision(4));

const hundreds = 10000000000;
// console.log(hundreds.toLocaleString('en-IN'));

//--------------MATHS-------------
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.3));
// console.log(Math.sqrt(25));
// console.log(Math.min(4,5,3,8,9));
// console.log(Math.max(4,5,3,8,9));

// console.log((Math.random()*10)+1);        //vaues are always from 0 to 1

const min=10;
const max=20;
console.log(Math.floor(Math.random()* (max-min + 1))+min);
