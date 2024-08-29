//for-IN loop

const myObject = {
    js:'javascrpit',
    css:'cascading style StyleSheetList',
    html:'Hypertext markup language',
    cpp:'c++'
}

for (const key in myObject) {
    // console.log(myObject[key]);
}

const programming = ["js","cpp","rb","java","python"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

// const map = new Map()                         //not iteratable
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }