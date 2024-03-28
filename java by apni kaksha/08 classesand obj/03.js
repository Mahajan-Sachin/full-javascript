let employee={
    calculateTax() {
        console.log("tax rate is 10 %");
    }
}
let karanArjun={
    salary:50000,
    calculateTax(){
        console.log("tax rate is 20 %")
    }
};
karanArjun.__proto__=employee
console.log(karanArjun.calculateTax())//as you can see tax rate 20 is printed bcoz it gets priority