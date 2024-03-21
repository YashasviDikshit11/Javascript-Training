// 1. Create a class BankAccount with properties balance and owner and methods deposit(), withdraw(), and displayBalance().
class BankAccount {
    balance;
    owner;
    constructor(balance, owner) {
        this.balance = balance,
            this.owner = owner
    }
    deposit(amount) {
        this.balance += amount;

    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient balance");

        }
    }
    displayBalance() {
        console.log(`Balance for ${this.owner}: ${this.balance}`);
    }
}
const obj = new BankAccount(100, "Yashi");
obj.displayBalance();
obj.deposit(50);
obj.displayBalance();
obj.withdraw(30);
obj.displayBalance();

