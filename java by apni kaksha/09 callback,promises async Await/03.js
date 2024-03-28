function getData(dataid,getnextdata){
    setTimeout(() =>{
        console.log("data",dataid);
        if(getnextdata){
            getnextdata();
        }
    },2000);
}
getData(1,() =>{
    console.log("getting data2...")
    getData(2,()=>{
        console.log("getting data3...")
        getData(3,()=>{
            console.log("getting data4...")
            getData(4)
        })
    });
});// to call other fn in a fn make a new fn in form of arrow

//this code is not easy to read and forms a pyramid like structure thats why it is a hell but it is also necessary so we use promises see in next slide