abstract class Shape {
  // size: number; //변수 삽입 가능
  // calculateArea(): number {
  //     return 1
  // }//일반 함수 삽입 가능
  abstract getAreaRectangle(width: number, height: number): number; //abstract는 무조건 하나 있어야함.
  abstract getAreaCircle(radius: number): number;
}

// 느슨한 로직을 만드는 팁.
// class Rectangle extends Shape {
//     width: number;
//     getArea(): number {
//         throw Error("Unimplemented method")
//     }
// }

class Rectangle extends Shape {
  width: number;
  getAreaRectangle(width: number, height: number): number {
    return width * height;
  }
  getAreaCircle(radius: number): number {
    throw Error("Unimplemented method");
  }
}

class Circle extends Shape {
  width: number;
  getAreaRectangle(): number {
    throw Error("Unimplemented method");
  }
  getAreaCircle(radius: number): number {
    return radius * 3.14;
  }
}
