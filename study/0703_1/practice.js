//7
// interface Product {
//   name: string;
//   price: number;
// }
// class item implements Product {
//   name: string;
//   price: number;
//   print() {
//     console.log(`${this.name}의 가격은 ${this.price}만원 입니다.`);
//   }
// }
// let product = new item();
// product.name = "노트북";
// product.price = 200;
// product.print();
//8
// interface User {
//   name: string;
//   email?: string;
// }
// // email 다음에 붙은 물음표의 역할 -> 있어도 되고 없어도 되고.
// class Person implements User {
//   name: string;
// }
// //9
// type Point = {
//   x: number;
//   y: number;
// };
// let point: Point = {
//   x: 20,
//   y: 30,
// };
//10
function toUpper(str) {
    return str.toUpperCase();
}
var str = toUpper("i love baseball");
console.log(str);
