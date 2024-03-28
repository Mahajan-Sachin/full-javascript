class Car{
    constructor(brand,mileage){
        console.log("creating new obj")
        this.brand=brand;
        this.mileage=mileage;
    };
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop brother");
    }
    GetbrandName(){
        console.log(`your car name is ${this.brand} whose mileage is ${this.mileage}`)
    }
}
let x=new Car("fortuner",250);// new is syntax keyword which is necessary it actually finds constructors  
x.stop()
x.GetbrandName()