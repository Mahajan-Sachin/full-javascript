//map:creates a new array with the results of some operation.the value its callback returns are used to form new array
//arr.map(callbackfnx(value,index,array))

let num=[67,52,39];
let newArr = num.map((val) =>{
    return val*2;
})
console.log(newArr); 

//filter:creates a new array of elements that gives true for a condition/filter.
let arr=[1,2,3,4,5,6,7,8,9]
let evenArr=arr.filter((val) =>{
    return val%2 ===0;
});
console.log(evenArr);

//reduce:performs some operations & reduces the array to a single value.it returns that single value
let arr1=[1,2,3,4,5];
const output=arr1.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);

let arr2=[1,2,3,4,5];
const output1=arr1.reduce((prv,curr)=>{
    return prv>curr?prv:curr;
});
console.log(output1);