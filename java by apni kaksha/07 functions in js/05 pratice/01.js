array1=[1,2,3,4,25,6,7,99]
array1.forEach(function sq(val){
    console.log(val*val)
})

let num=[67,52,39];
let calcsq=(num) =>{
    console.log(num*num)
};
num.forEach(calcsq);