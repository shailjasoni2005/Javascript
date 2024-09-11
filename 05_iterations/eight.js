const myNums = [1,2,3]
// const total = myNums.reduce(function (acc,cur_value) {
//     console.log(acc,cur_value);
//     return acc+cur_value;
// },0)

// console.log(total);

const total = myNums.reduce((acc,curval) => acc+curval,0)
console.log(total);
