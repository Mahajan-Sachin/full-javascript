function Asuncfn(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("set data1...");
            resolve("sucess");
        },4000);
    })
};


function Asuncfn2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("set data2...");
            resolve("sucess of data2");
        },4000);
    })
};

console.log("fetching data1.....")
let p1=Asuncfn()
p1.then((res)=>{
    console.log("fetching data2....",res);
    let p2=Asuncfn2();
    p2.then((res)=>{
        console.log("be happy",res)
    })
});

// console.log("fetching data2.....")
// let p2=Asuncfn2()
// p2.then((res)=>{
//     console.log(res);
// });


