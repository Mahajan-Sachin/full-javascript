const getpromise=() =>{
    return new Promise((resolve,reject) =>{
        console.log("i am a  promise");
        resolve("sucess")
    });
};
let a=getpromise()
a.then((res)=>{
    console.log("promise fulfilled",res);
})




const getpromise1=() =>{
    return new Promise((resolve,reject) =>{
        console.log("i am a  promise1");
        reject("chal hat bsdk")
    });
};
let b=getpromise1()
b.catch((err)=>{
    console.log("you are rejected",err);
})