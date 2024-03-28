//after a promise gets fullfilled or reject we want to do some things after it so we use this
// if after succes then we use:  Promise.then

const getpromise=() =>{
    return new Promise((resolve,reject) =>{
        console.log("i am a  promise");
        resolve("sucess")
    });
};
let a=getpromise()
a.then(()=>{
    console.log("promise fulfilled");
})




const getpromise1=() =>{
    return new Promise((resolve,reject) =>{
        console.log("i am a  promise1");
        reject("chal hat bsdk")
    });
};
let b=getpromise1()
b.catch(()=>{
    console.log("you are rejected");
})