class BankAccount {
  private balance: number = 0;
  deposit(amount: number) {
    this.balance += amount;
    //this.balance = this.balance + amount
    //      this.balance -= amount;
    //     this.balance = this.balance - amount
    //      this.balance *= amount;
    //     this.balance = this.balance * amount
    //      this.balance /= amount;
    //     this.balance = this.balance / amount
    //      this.balance %= amount;
    //     this.balance = this.balance % amount
  }

  getbalance() {
    console.log(this.balance);
  }

  setBalance(amount: number) {
    amount = amount * 1.1;
    //상황에 따른 계산식 포함 가능.
    this.balance = amount;
  }
}

let account = new BankAccount();
account.setBalance(1000);
account.getbalance();

//public 이었다 가정
// #은 최신 문법
