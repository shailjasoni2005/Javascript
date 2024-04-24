//Dates
let mydate = new Date();
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toISOString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleDateString());
// console.log(mydate.toLocaleString());
// console.log(mydate.toLocaleTimeString());
// console.log(mydate.toTimeString());
// console.log(mydate.toUTCString());
// console.log(typeof(mydate));

// let myCreatedDate = new Date(2024,3,24,10,14);       //year,month,date
// let myCreatedDate = new Date("2024-04-24");
let myCreatedDate = new Date("04-24-2024");
// console.log(myCreatedDate.toLocaleString());

//----Time stamps---------
let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate= new Date();
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{
    weekday: "long"
});