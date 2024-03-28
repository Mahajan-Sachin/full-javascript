/*
do{
    //do some work(updataion)
}while(condition);
*/
//but why we need it is biggest question while loop will not print anuthing for wrong condition 
//but do while can we will see in next slide
let i=10;
while(i<=5){
    console.log("Apna kacha sabsa acha")
    i++;
} // this will not print anything
//but
let a=20
do{
    console.log("prveen")
    i++
}while(i<=10)