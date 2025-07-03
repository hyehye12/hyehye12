class Calculator {
  add(a: number, b: number): void {
    console.log(a + b);
  }

  add1(a: string, b: string): void {
    console.log(a + b);
  }
}

let calculator = new Calculator();
calculator.add(1, 2);

//오버로딩 하나의 메서드 이름으로 여러가지 인자를 처리 할 수 있다. 함수명이 같아도 매개변수와 리턴타입을 비교해 다르면 이름이 같아도 실행.
