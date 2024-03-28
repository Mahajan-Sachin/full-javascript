//prototypes in js:A javascript is an entity having state and behaviour (prop and methods).
//js obj have a special prop called prototype.
//we can set prototype using __proto__
// their are diff methods to create obj in js
/*
const obj(variable)={
    prop
}
*/  
const student={
    fullName:"sachin",
    marks:94.4,
    printMarks:function () {
        console.log("marks=",this.marks);//The "this" keyword is used to refer to the current object, which is "student" in this case
    },
};
console.log(student.printMarks())