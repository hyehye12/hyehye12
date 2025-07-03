//1. unknown 타입의 매개변수를 받아, 숫자일 경우 제곱을 출력하고 문자열이면 길이를 출력하는 함수를 작성해보세요.

function num(a: unknown) {
  if (typeof a === "string") {
    console.log(a.length);
  } else if (typeof a === "number") {
    console.log(a * a);
  }
}

//2.
