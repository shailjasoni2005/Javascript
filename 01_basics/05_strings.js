const Name="shailja";
const repo=5;

// console.log(`Hello my name is ${Name} and my repo count is ${repo}`);

const gameName= new String('shailja Soni');

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));
const newString=gameName.substring(0,4);
// console.log(newString);

const anotherString=gameName.slice(-8,4);
// console.log(anotherString);

// when we don't want to save extra space in database the we use:-
const NewString = "    shailja     ";
// console.log(NewString);
// console.log(NewString.trim());

//For exammple When there comes nay invalid url with space then browser adds %20 in that space which we do not want the we use:-
const url="https://shailja.com/shailja%20soni";
// console.log(url.replace('%20','_'));

// console.log(url.includes('shailja'));

//we can change these strings into array on the basis of anything we want 
const string="shailja_1234,github2005@,soni_college";
// console.log(string.codePointAt(4));
// console.log(string.split('_')); 

let index = 5;
// console.log(`An index of ${index} returns the character ${string.at(index)}`);
// console.log(`Character  code of ${string.charAt(index)} is ${string.charCodeAt(index)}`);

// const icons = '☃★♲';

// console.log(icons.codePointAt(1));

