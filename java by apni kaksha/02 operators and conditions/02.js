//comparision
/* equal to == {rember it will try its best to show it equal even by changing its type}

equal to and type === {it will check with strictness}
not equal to !=

not equal to & type !== */
let a=5;
let b=10;
let c="5"
console.log("a==b",a ==b)
console.log("a==b",a !=b)
console.log("a==c",a ==c)// here a number gets equal to a string
console.log("a==c",a ===c)
console.log("a !==c",a !==c)

//other are again simple

// logical And //:
let x=6;
let y=5;
let z=6;

let cond1=x>y;//true
let cond2=x === z;//true
let cond3=x ==y;//false
console.log("cond1 && cond2",cond1 && cond2)
console.log("cond1 && cond2",cond1 && cond3)

// logical or ||
console.log("cond1 || cond2 =",x < y || x==z );
console.log(" not cond1 || cond2 =",!(x < y || x==z ));

