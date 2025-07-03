class Car1 {
  drive(driver: Driver) {
    console.log(`${driver.name}님 운전을 시작합니다.`);
  }
}

class Driver {
  name: string;
}

let car = new Car1();
// car.drive(new Driver());

let driver = new Driver();
driver.name = "홍길동";
car.drive(driver);
