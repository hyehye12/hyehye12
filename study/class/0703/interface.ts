//기능에 대한 추상화
interface Movable {
  move(): void;
}

class Car implements Movable {
  move(): void {
    console.log("car");
  } //오버라이드
}

class Robot implements Movable {
  move(): void {
    console.log("robot");
  }
}
