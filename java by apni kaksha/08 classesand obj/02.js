//prototypes in js:A javascript is an entity having state and behaviour (prop and methods).
//js obj have a special prop called prototype.
//we can set prototype using __proto__
let employee={
    calculateTax() {
        console.log("tax rate is 10 %");
    }
}
let karanArjun={
    salary:50000,
};
karanArjun.__proto__=employee
console.log(karanArjun.calculateTax())