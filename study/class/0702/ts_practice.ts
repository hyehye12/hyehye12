//1. 문자열 변수 선언
let Name: string = "Alice";

//2. 숫자와 boolean 타입
let studentage: number = 21;
let isStudent: boolean = true;

//3. 함수 매개변수와 반환 타입
function add3(a: number, b: number): number {
  return a + b;
}

//4. 배열 타입
// const scores = new Array();
// if (scores instanceof Array) {
//   scores.push(80, 90, 100);
// }
let scores: number[] = [80, 90, 100];

//5. 객체 타입 정의
let Person1: { name: string; age: number };

//6. 유니언 타입
let id: string | number = "user123";
