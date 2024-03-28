//classes is a program-code template for creating objects
//those objects will have some state(variale) & some behaviour(functions) inside it.
class Car{
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop brother");
    }
    setBrandName(brand){
        this.brandName=brand;
    }
    GetbrandName(){
        console.log(`your car name is ${this.brandName}`)
    }
}
let fortuner=new Car();// new is syntax keyword which is necessary it actually finds constructors  
fortuner.stop()
fortuner.setBrandName("nano")
fortuner.GetbrandName()