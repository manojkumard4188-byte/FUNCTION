class 

class BankAccount {
    accountHolder:string;
    balance:number;
    constructor(accountHolder:string,balance:number){
        this.accountHolder = accountHolder;
        this.balance = balance;
    }
    displayBalance(){
        console.log(this.balance,this.accountHolder);

    }
}

const account1 = new BankAccount("manoj",5000);
account1.displayBalance();

class employee{
    empId:number=123;
    empName:string="manoj";

    login(){
        console.log("employee login");
    }
    logout(){
        console.log("employee logout");
    }
    
}
class developer extends employee{
    workout(){
        console.log("developer working");

    }
}
const Developer = new developer();
Developer.login();
Developer.logout();
Developer.workout();
console.log(Developer.empId);
console.log(Developer.empName);