//when a fn is passsed as an argument in another fn is called callback
function sum(c,d){
    console.log(c+d)
}
function calculator(a,b,sumCallback){
    sumCallback(a,b)
}
calculator(1,2,sum);



 //nested callback hell:
 //nested callback stacked below one another forming a pyramid structure.(pyramid of doom)
 //this type of programing becomes difficult to understand and manage
 