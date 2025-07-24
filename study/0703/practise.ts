//1
class Person12 {
  name: string;
  age: number;
  introduce() {
    console.log(`안녕하세요, 저는 ${this.age}살의 ${this.name}입니다.`);
  }
}

let person12 = new Person12();
person12.name = "Alice";
person12.age = 20;

person12.introduce();

//2
class Product {
  name1: string;
  price: number;
  constructor(name1: string, price: number) {
    this.name1 = name1;
    this.price = price;
  }

  display() {
    console.log(`제품명: ${this.name1}, 가격: ${this.price}만원`);
  }
}

let product = new Product("MacB00k", 150);
product.display();

//4
class Animal {
  sound(): void {
    console.log();
  }
}

class Dog1 extends Animal {
  sound(): void {
    console.log("멍멍");
  }
}

class Cat extends Animal {
  sound(): void {
    console.log("야옹");
  }
}

let dog1 = new Dog1();
dog1.sound();

let cat = new Cat();
cat.sound();
