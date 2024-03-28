let a=document.querySelector("h2")
console.dir(a.innerText)
b=a.innerText=a.innerText+"from apna college";
console.log(b)


let x=document.querySelectorAll(".box")
let indx=1;
for(div of x){
    div.innerText=`new unique value ${indx}`;
    indx++;
}
