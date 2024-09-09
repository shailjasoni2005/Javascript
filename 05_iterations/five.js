const coding = ["ruby","python","cpp","php","js","java"]

coding.forEach(function(item){
    // console.log(item);
});
coding.forEach((item) => {
    // console.log(item);
})

function printMe(item){
    // console.log(item);
    
}

// coding.forEach(printMe)   

coding.forEach((item,index,arr)=>{
    // console.log(item,index,arr);
    
})

const MyCoding = [
    {
        languageNAme:"javascript",
        LanguageFile:"js"
    },
    {
        languageNAme:"java",
        LanguageFile:"java"
    },
    {
        languageNAme:"Python",
        LanguageFile:"py"
    }
]

MyCoding.forEach((item)=>{

    console.log(item.languageNAme);
    
})
