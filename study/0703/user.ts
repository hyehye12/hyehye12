// 클래스를 만들고 생성자를 할당.
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  //   constructor(public name: string) {}
  greet() {
    console.log(`안녕하세요, 제 이름은 ${this.name}입니다.`);
  }
}

//인스턴스
let user1 = new User("홍길동");
user1.greet();
