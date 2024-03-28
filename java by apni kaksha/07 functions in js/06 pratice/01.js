//filter no greater than 90
let arr=[100,20,30,4,5,60,99,94,90]
let bestmarks=arr.filter((val) =>{
    return val>90;
});
console.log(bestmarks);


// array of n no

let n=prompt("n: ")
let arr1=[];
for(let i=1;i<=n;i++){
    arr1[i-1]=i
}
console.log(arr1)

// use the reduce method to calculate sum of all no in array
let a=arr1.reduce((prv,curr) =>{
    return prv+curr
});
console.log(a)

let b=arr1.reduce((prv,curr) =>{
    return prv*curr
});
console.log(b)