//for input use prompt
let num=prompt("enter a number:")
if(num%5===0){
    console.log(num,"is a multiple of 5")
}else{
    console.log(num,"not a multiple")
}

let score=prompt("enter score:")
let grade;
if(score >=90 && score<=100){
    grade="A"
}else if(score>=70 && score<=89){
    grade="B"
}else if(score>60 && score <69){
    grade="C"
}else{
    grade="D"
}
console.log("acc to score your grade is :",grade)