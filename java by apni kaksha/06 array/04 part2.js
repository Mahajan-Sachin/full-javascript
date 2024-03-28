//slicing:doesnot change original array
let marvel_heroes=["thor","spider","hulk","ironman"]
console.log(marvel_heroes.slice(1,3))


//splice():change original array(add,remove,replace)
//splice(startindex,delcount,newEli)
let array=[1,2,3,4,5,6,7,8,9];
array.splice(2,2,101,102);
console.log(array)

// we can add an element at aparticular pt 
let array1=[10,20,30,40,50,60,70,80,90];//splice.(position(to place),0,new element)
array1.splice(2,0,55);
console.log(array1)

//del element
let array2=[100,200,300,400,500,600,700,800,900];
array2.splice(3,1)
console.log(array2)

//replace element
let array3=[1000,2000,3000,4000,5000,6000,7000,8000,9000];
array3.splice(3,1,657)
console.log(array3)


// defaults
let a=[1,2,3,4,5,6,7,8,9];
a.splice(4)
console.log(a)
b=[1,2,3,4,5,6,7,8,9]

b.splice()//print all
console.log(b)


