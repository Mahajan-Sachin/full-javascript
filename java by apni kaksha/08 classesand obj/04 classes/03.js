/*
class parent{

} 

lass child extends parent{

}
*/
class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent{
    greet(){
        console.log("gm")
    }
}

let obj=new Child();
obj.hello()
obj.greet()