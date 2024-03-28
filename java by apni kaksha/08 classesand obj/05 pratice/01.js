class User{
    constructor(userName,email){
        this.userName=userName
        this.email=email
    }
    viewData(){
        console.log(`your username is ${this.userName} and your email id is ${this.email}`)
    }
}
obj1=new User("karan","aditya123@gmail.com")
obj1.viewData()
class Admin extends User{
    constructor(userName,email){
        super(userName,email)
    }
    editdata(){
        console.log(`after edit username is:${this.userName} and email id is:${this.email}`)
    }
}
obj2=new Admin("prveen","karan123@gmail.com")
obj2.editdata()
