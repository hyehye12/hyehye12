type Points = 20 | 30 | 40 | 50 | 60; //별칭 alias라고 함.
let score: Points = 40; //재활용성, 리팩토링-> 중복이 많다 싶으면 바꿔나가기

console.log(score);

//@ts-ignore
//@ts-nocheck
//@prettier-ignore

type ComplexPerson = {
  name: string;
  age: number;
  birthday: Date;
  married: boolean;
  address: string;
};

type Type1 = number;
type Type2 = string;
type Type3 = boolean;
type Type4 = {};
type Type5 = { name: string } & { age: number };
type Type6 = { name: string } | { age: number };
type Type7 = Type5 & Type6;
// 별칭을 쓰면 내가 알고있는 타입을 담을 수 있다.
