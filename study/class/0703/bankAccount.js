var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _BankAccount_balance;
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        _BankAccount_balance.set(this, 0);
    }
    BankAccount.prototype.deposit = function (amount) {
        __classPrivateFieldSet(this, _BankAccount_balance, __classPrivateFieldGet(this, _BankAccount_balance, "f") + amount, "f");
        //this.#balance = this.#balance + amount
        //      this.#balance -= amount;
        //     this.#balance = this.#balance - amount
        //      this.#balance *= amount;
        //     this.#balance = this.#balance * amount
        //      this.#balance /= amount;
        //     this.#balance = this.#balance / amount
        //      this.#balance %= amount;
        //     this.#balance = this.#balance % amount
    };
    BankAccount.prototype.getbalance = function () {
        console.log(__classPrivateFieldGet(this, _BankAccount_balance, "f"));
    };
    BankAccount.prototype.setBalance = function (amount) {
        amount = amount * 1.1;
        //상황에 따른 계산식 포함 가능.
        __classPrivateFieldSet(this, _BankAccount_balance, amount, "f");
    };
    return BankAccount;
}());
_BankAccount_balance = new WeakMap();
var account = new BankAccount();
account.setBalance(1000);
account.getbalance();
//public 이었다 가정
