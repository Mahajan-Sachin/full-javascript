//get elements by id
let headingid=document.getElementById("heading1");
console.dir(headingid)

let headingid1=document.getElementById("heading");
console.dir(headingid1)//when a id dont exist it shows null



//get elements by class
let headingclass=document.getElementsByClassName("heading")//it stores data as html collection just like array
console.dir(headingclass)
console.log(headingclass)

let headingclass1=document.getElementsByClassName("heading2")
console.dir(headingclass1)//it shows 0
console.log(headingclass1)//it shows empty array.


let para=document.getElementsByTagName("p")
console.dir(para)