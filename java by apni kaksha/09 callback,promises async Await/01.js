//synchronous:synchronous means the code runs in a particular seq of instructions given in the program.Each instructions waits for the prev instruction to complete its execution.
//Asynchronous:
//Due to synchronus programminng,sommetimes imp instructions get blocked due to some previous instructions,which cause a delay in the ui.asychronus code execution allows to execute next instructions immediately and doesnot block the flow

//below is a example of synchornus and yes till now we are doing this type of coding 
console.log("1")
console.log("2")
console.log("3")

//Asunchronus
function hello(){
    console.log("hello")
}
setTimeout(hello,2000)// settimeout is a keyword(actually it is a fn itself) that helps to call a fn at a specific time in miliseconds 1ms=10^-3sec means here i am saying to call hello fn after 2 sec 
//we can also use arrow fn
setTimeout(()=>{
    console.log("karan")
},4000)


console.log("4")
console.log("5")
console.log("6")// as we can see these results are print even before the timeout one
