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
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
// 느슨한 로직을 만드는 팁.
// class Rectangle extends Shape {
//     width: number;
//     getArea(): number {
//         throw Error("Unimplemented method")
//     }
// }
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.getAreaRectangle = function (width, height) {
        return width * height;
    };
    Rectangle.prototype.getAreaCircle = function (radius) {
        throw Error("Unimplemented method");
    };
    return Rectangle;
}(Shape));
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.getAreaRectangle = function () {
        throw Error("Unimplemented method");
    };
    Circle.prototype.getAreaCircle = function (radius) {
        return radius * 3.14;
    };
    return Circle;
}(Shape));
