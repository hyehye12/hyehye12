class Preson {
  constructor(public name: string, private age: number) {}
  introduce(): string {
    return `Hi, I'm ${this.name}`;
  }
}

// class Person2 {
//   name: string;
//   age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

class Car implements Vehicle {
  carModel: string;
  owner: string;
  carWeight: number;
  byYear: number;
  isSunk: boolean;
  distance: number;

  drive() {
    console.log("Go");
  }

  alarm() {
    console.log("Beep Beep");
  }

  back() {
    console.log("back");
  }

  wipe() {
    console.log("wipe");
  }

  break() {
    console.log("Break");
  }

  accelator() {
    console.log("Accelerate");
  }

  trunck() {
    console.log("Trunk");
  }
}

class DumpTruck extends Car {
  storage: number;
  operate() {
    console.log("Operate");
  }

  splay() {
    console.log("Splay");
  }
}

class Bus extends Car {
  passenger: number;

  busNumber: number;

  constructor(passenger: number, busNumber: number) {
    super();
    console.log("Bus Extends");
  }

  openDoor() {
    console.log("Open Door");
  }
  trunck() {
    console.log("");
  }
}

interface Vehicle {
  break(): void;
  accelator(): void;
  trunck(): void;
}
