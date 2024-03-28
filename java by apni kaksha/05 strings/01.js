//template literals:a way to have embeeded expression in strings
let str="Apnahouse";
console.log(str.length)
console.log(str[2])
let obj={
    item:"pen",
    price:10,
};
let output=`the cost of ${obj.item} is ${obj.price} rupees`
console.log(output)//here 10 is not highlighted in console bcoz `` it makes everything as string but
console.log("the cost of",obj.item,"is",obj.price,"rupees")// highlighation also depends on browser

//string interpolation:to create strings by doing substitution of placeholders
let a=`this is a interpolation ${1+2+3}`
console.log(a)

//escape character
console.log("Apna\nhouse")
console.log("Apna\thouse")
// remember during length of a str even escape char are considered but slash and char consider 1 char means /n=1
str2="karan\nDeepak"
console.log(str2.length)