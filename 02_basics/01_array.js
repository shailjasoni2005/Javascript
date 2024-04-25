//array---------
const Myarray=[0,1,2,3,4,5];
console.log(Myarray[0]);

//array methods 
// Myarray.push(7);
// Myarray.pop();
// console.log(Myarray);

// Myarray.unshift(9);       //inserted at starting index but it causes all elements to shift to right 
// Myarray.shift();
// console.log(Myarray);

// console.log(Myarray.includes(9));
// console.log(Myarray.indexOf(7));

const NewArray = Myarray.join();

// console.log(typeof(NewArray));

// console.log("A",Myarray);
// const myn1=Myarray.slice(1,3);
// console.log(myn1);
// console.log("B",Myarray);
// const myn2=Myarray.splice(1,3);
// console.log("c",Myarray);
// console.log(myn2);

const marvelHeroes=["Thor","Ironman","hulk"];
const dcHeroes =["superman","batman","flash"];

//here the arrays will not merge but since the arrays can take any type of data it took another array as a type of data.

// marvelHeroes.push(dcHeroes);
// console.log(marvelHeroes[3]);

//instead we can use concatenation

// const newArray= marvelHeroes.concat(dcHeroes);
// console.log(newArray);

// const all_new_heroes=[...marvelHeroes, ...dcHeroes];           /*** spread operator ***/
// console.log(all_new_heroes);

const anotherArray = [1,2,3,[4,5,6],7,[8,7,[4,5]]];

const real_another_array= anotherArray.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("shailja"));
console.log(Array.from("shailja"));

// we can also pass objects in this array creation
//but it is unable to convert it so it will give us an empty array ,here we have to tell that weather we are making array using keys or value,etc.
console.log(Array.from({name:"shailja"}));

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));