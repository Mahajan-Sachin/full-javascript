// foreach is also called higher order functions/methods:these fn are the methods which either take other functions as parameter or returns other function
// this is the concept of java that we can pass the fn as a perimeter for a other fn
//foreach provides 3 parameters 1)value:val  2)index:idx    3)array itself   

//val
 let arr=[1,2,4,6]
 arr.forEach(function printVal(val){
    console.log(val);
 });

 let arr1=["delhi","haryana","patna","karnatka"]
 arr1.forEach((val) => {
    console.log(val.toLocaleUpperCase());
 });


 // idx
 let arr2=["delhi","haryana","patna","karnatka"]
 arr1.forEach((val,idx) => {
    console.log(val.toLocaleUpperCase(),idx);
 });

 // array itself
 let arr3=["delhi","haryana","patna","karnatka"]
 arr1.forEach((val,idx,array) => {
    console.log(val.toLocaleUpperCase(),idx,array);
 });