let a=document.querySelector("#btn1");
a.addEventListener("click",()=>{
    console.log("button 1 is clicked-handler1")
}); 


a.addEventListener("click",()=>{
    console.log("button 1 is clicked-handler2") 
}); 

const handler3= () =>{
    console.log("button 1 is clicked-handler3")
}
a.addEventListener("click",handler3);

a.addEventListener("click",()=>{
    console.log("button 1 is clicked-handler4");

}); 

a.removeEventListener("click",handler3)