var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.greet = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694, \uC81C \uC774\uB984\uC740 ".concat(this.name, "\uC785\uB2C8\uB2E4."));
    };
    return User;
}());
var user1 = new User("홍길동");
user1.greet();
