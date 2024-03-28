//the super keyword is used to call the the constructor of its parent class to acess the parents prop and methods
// super(args)// call parent constructor
// super.parentMethod(args)
class Person{
    constructor(name){
        this.species="homosapiens"
        this.name=name;
    }
    eat(){
        console.log("homosapiens can eat")
    }
}
class Engineer extends Person{
    constructor(branch){
        super("karan");//to invoke parent class constructor its necessary
        this.branch=branch;
        console.log(`${this.name} who belongs to ${this.species} specie who is curently prsuing ${this.branch}`)
    }
    work(){
        super.eat()
        console.log("solve problems,build something");
    }
}
let obj=new Engineer("chemical engineer");
obj.work()



