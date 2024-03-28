function getData(dataId,getnextdata){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("data",dataId);
            resolve("sucess");
            if(getnextdata){
                getnextdata()
            }
        },5000);
    });
}
let result=getData(123)
console.log(result)