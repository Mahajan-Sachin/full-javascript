// to insert a new element firstly we have to create it and secondly we have to insert it on screen
//this is how we make a new element
let a=document.createElement("button");
a.innerText="clickme";
console.log(a)//here we can see the new button is not on screen



//let say we want to add button in div id=box but at last sp we use append
let b=document.querySelector("#box");
b.append(a);//change append to prepend to make it on starting



//we can make changes even beforeor after a node(tag)
let y=document.createElement("button");
y.innerText="clickme bhai";
console.log(y)

b.before(y)//it will add click me bhai button before the div
// change before to after

let m=document.createElement("h1");
m.innerHTML="<i>this is me</i>";
console.log(m);

b.before(m)


// we can also remove
let para=document.querySelector("p")
para.remove();