// const coding = ["ruby","python","cpp","php","js","java"]

// const values = coding.forEach((items) => {
//     console.log(items);
//     return items;                                //for each loop cannot return values
// })

// console.log(values);

// we can use another approach:-

const num = [1,2,3,4,5,6,7,8,9,10]
// const newNum = num.filter((value) => {
//     return value>4;
// })
// console.log(newNum);

const newNum =[]

num.forEach((value) => {
    if(value>4){
        newNum.push(value);
    }
})
// console.log(newNum);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks  = books.filter((story) => {
//     if(story.genre === 'History'){
//         return (story.genre);
//     }
// })
// const userBooks  = books.filter((story) => story.genre==='History')

// console.log(userBooks);

const userBooks = books.filter((story) => {
    if(story.publish>=2000){
        return story.publish
    }
})

// console.log(userBooks);

const secondBook = books.filter((novel) => {
    if(novel.publish>=1995 && novel.genre=='History'){
        return (novel.publish);
    }
})

console.log(secondBook);