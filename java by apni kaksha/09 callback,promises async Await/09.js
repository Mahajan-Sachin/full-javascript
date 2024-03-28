//async fn allways returns a promise,
//await pauses the execution of its surrounding async fn until the promise is settled
async function hello(){
    console.log("hello karan");
}
console.log(hello());

function Api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve(200);
        },2000);
    });
}
async function getWeatherData(){
    await Api();//await fn always works under async
    await Api();
}
console.log(getWeatherData())