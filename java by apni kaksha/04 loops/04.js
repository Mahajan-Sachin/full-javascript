// for -of loop: used as for in python but for strings
let str="karanisagood"
for(let i of str){
    console.log("i=",i)
}

let str1="javascript"
console.log("len of str1:",str1.length)
let size=0;
for(let i of str1){
    console.log("i=",i)
    size++
}
console.log("string size=",size)

// for objects we use (for in) remember it returns key
let student={
    name:"rahulkumar",
    age:20,
    cgpa:9.4,
    isPass:true
}
for(i in student){
    console.log("key=",i)
}
// we can aslo take value

let student1={
    name:"prveen",
    age:21,
    cgpa:9.3,
    isPass:true
}
for(i in student){
    console.log("key=",i,":","value=",student[i]);
}