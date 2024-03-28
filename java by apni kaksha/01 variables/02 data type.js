let age=56;
console.log(typeof age)

let price=-45;
console.log(typeof price)

let fullName="karan"
console.log(typeof fullName)

isFollow=true
console.log(typeof isFollow)

let x=BigInt("1234")//just to store big integers
console.log(x)
console.log(typeof x)

let y=Symbol("hello!")
console.log(typeof y)

// last one is object which is of two types array and functions
const students={
    name:"karan",
    class:"twelfth",
    roll_no:45
}
console.log(students);
console.log(typeof students);
console.log(students["name"]);
console.log(students.class)
console.log(typeof students.name)
console.log(students.roll_no);
students.roll_no=students.roll_no+1;
console.log(students.roll_no)