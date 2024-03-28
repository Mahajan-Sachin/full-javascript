//js stops the code if it gets error
a=10
b=0
//console.log(a+c)// it shows c is not defined when you uncomment this
d=10
console.log(a+b)
try{
    console.log("a+c",a+c)
}catch(err){
    console.log(err)
}
console.log(a/d)