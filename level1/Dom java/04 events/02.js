//event handling in js
/*
node.event=() =>{
    //handle here
}
*/
let a=document.querySelector("#btn1");
a.onclick =() =>{
    console.log("btn1 was clicked");
    let x=25;
    x++;
    console.log(x)
};

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log('you are inside div')
};
//js file has more priority than inline



// event obj (e): it is a special obj which has details abt the event
let b=document.querySelector("#btn2")
b.onmouseover=(evt) =>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY)
    //clientX means where event occurs  in horizontal and clientY is in vertical axis
}