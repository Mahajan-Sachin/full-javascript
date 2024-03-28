//we use it it selects every type automatically
let elements=document.querySelector("p")//it selects 1st p
console.dir(elements);

let elements1=document.querySelectorAll("p")//returns all elements of req
console.dir(elements1)

let elements2=document.querySelector("#heading1")//it selects 1st heading
console.dir(elements2);

let elements3=document.querySelector(".heading")//it selects 1st heading
console.dir(elements3);

let elements4=document.querySelectorAll(".heading")//it selects 1st heading
console.dir(elements4);

a=document.querySelector("div").children;
console.dir(a)