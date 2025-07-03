var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var Order = /** @class */ (function () {
    function Order() {
    }
    Order.prototype.summary = function () {
        console.log("\uC0AC\uC6A9\uC790 ".concat(this.user.username, "\uAC00 \uC0C1\uD488 ").concat(this.product.productname, "\uC744 \uAD6C\uB9E4\uD588\uC2B5\uB2C8\uB2E4."));
    };
    return Order;
}());
var user = new User();
user.username = "Amy";
var product = new Product();
product.productname = "labtop";
var order = new Order();
order.user = user;
order.product = product;
order.summary();
