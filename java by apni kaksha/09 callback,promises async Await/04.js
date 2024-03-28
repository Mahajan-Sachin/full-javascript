// promise is for "eventual" completion of task.it is an obj in js. it is asol of to callback to hell

//let promise=new Promise(resolve,reject) as real life promise can either be fullified(resolve) either pending(pending) or break(reject)
let promise=new Promise((resolve,reject) =>{
    console.log("checking your promise")
    resolve("yup you passed")// its status is fullfied

});

let promise1=new Promise((resolve,reject) =>{
    console.log("checking your promise")
    reject("yup you failed")
})


 