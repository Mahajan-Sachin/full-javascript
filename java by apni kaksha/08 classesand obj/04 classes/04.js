class Parent{
    hello(){
        console.log("hello");
    }
}
class Child extends Parent{
    hello(){
        console.log("gm bhai")
    }
}

let obj=new Child();
obj.hello()// gm bhai prints it shows child has more priority
