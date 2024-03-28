// inline makes html code bulky
//event in js is good but you can call only i event at a time
//so we use event listner
//node.addEventlistneer(event,callback)
//node.removeEventlistneer(event,callback)

let a=document.querySelector("#btn1");
a.addEventListener("click",()=>{
    console.log("button 1 is clicked")
});// it shows 2 results 1)hello bcoz of inline  2)button 1 is clicked means we are doing multiple events at a same time


a.addEventListener("click",()=>{
    console.log("button 1 is clicked-handler2") 
});// this shows even same event on same js file can work having diff parameter

a.addEventListener("click",(evt)=>{
    console.log("button 1 is clicked-handler3");
    console.log(evt);
    console.log(evt.type);
});// even we can get info too