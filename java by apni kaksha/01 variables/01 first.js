console.log("hello");
name="karan"
console.log(name);
price=55.88
console.log(price);
//how to write vriable name
fullname="aniket"//means space is not allowed
_fullname="mohan"//means underscore is valid
$fullname="tony stark"//means dollar is allowed but not @ so not every special chracter is allowed
// nums and reserved words cant use in variable name

// we use let var and const before giving a variable name and never ever use var in industry they have global scope

var age=10
var age=45
var age=70
console.log("var age:",age);

//in case of let remove the comment and see it will thrrow error rember let has block scope:block scope means "{}" this is a scope means we can declare let variable only in 1 scope
// let age=55;
// let age=88;
// let age=80;
//console.log(age)
// if you think then how we can update the variable then here is the soln
let age_person=77;
age_person=45;
age_person=99
console.log("let variable:",age_person)



// then const never allows to update it rember const has block scope
const a=45;
//a=66;
console.log(a)//throws error make a a comment




//let doesnot req a initializer
let b;// even this exist it will print nothing
//b=10;//uncooment b and you will see value of b will be 10
console.log(b)
//rember you cant do the same in const as it req a initializer