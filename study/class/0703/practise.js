var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//1
var Person12 = /** @class */ (function () {
    function Person12() {
    }
    Person12.prototype.introduce = function () {
        console.log("\uC548\uB155\uD558\uC138\uC694, \uC800\uB294 ".concat(this.age, "\uC0B4\uC758 ").concat(this.name, "\uC785\uB2C8\uB2E4."));
    };
    return Person12;
}());
var person12 = new Person12();
person12.name = "Alice";
person12.age = 20;
person12.introduce();
//2
var Product = /** @class */ (function () {
    function Product(name1, price) {
        this.name1 = name1;
        this.price = price;
    }
    Product.prototype.display = function () {
        console.log("\uC81C\uD488\uBA85: ".concat(this.name1, ", \uAC00\uACA9: ").concat(this.price, "\uB9CC\uC6D0"));
    };
    return Product;
}());
var product = new Product("MacB00k", 150);
product.display();
//4
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.sound = function () {
        console.log();
    };
    return Animal;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.sound = function () {
        console.log("멍멍");
    };
    return Dog1;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.sound = function () {
        console.log("야옹");
    };
    return Cat;
}(Animal));
var dog1 = new Dog1();
dog1.sound();
var cat = new Cat();
cat.sound();
