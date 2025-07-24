// 고차 함수 정리
// 화살표 함수란?
//const 함수이름 = (매개변수): 반환타입 => 반환값;
// function 함수이름 (매개변수) { 반환 타입
// } return 반환값

let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .map() 각 요소를 변형하고 새 배열 반환
let strs: string[] = nums.map((n): string => `No.${n}`);
console.log(strs);

let double = nums.map((x) => x * x);
console.log(double);

// .filter() 조건을 만족하는 요소만 걸러서 반환
let even = nums.filter((t) => t % 2 === 0);
console.log(even);

//.reduce 배열을 하나의 값으로 누적 계산
// array.reduce((accumulator, currentValue, index?, array?) => {
//   // 로직
//   return newAccumulator;
// }, initialValue);
// accumulator: 누적값 (이전까지 계산된 결과)
// currentValue: 현재 요소
// initialValue: 누적 시작값 (필수)

let re = nums.reduce((acc, cur) => acc + cur, 0);
console.log(re);

// .forEach() 요소를 하나씩 실행(return 없음), 데이터 변경 없이 부수효과를 줄때 사용
nums.forEach((f) => console.log(f));

// .some() 하나라도 조건을 만족하면 true
let some = nums.some((x) => x > 10);
console.log(some);
let some1 = nums.some((x) => x < 2);
console.log(some1);

// .every() 모든 요소가 조건을 만족해야 true
let ev = nums.every((x) => x <= 10);
console.log(ev);
let eve = nums.every((x) => x < 3);
console.log(eve);

// .reverse(); 배열 안에 요소들을 뒤집어서 리턴
nums.reverse();

//실행 안됌
// .flat(중첩의 단계, 기본 1 ~ Infinity)
// const arr = [1, [2, [3, [4]]]];
// console.log(arr.flat(Infinity)); // [1, 2, 3, 4]

// .flatMap() .map()후 .flat()와 동일, 다차원 배열을 평평하게 만들며 변형할 때 유용
// let x = ["a", "b"].flatMap((x) => [nums, x.toUpperCase()]);
// console.log(x);

//.find() 조건을 만족하는 첫 번째 요소 반환, 없으면 undefined
// let find = nums.find((d) => d % 2 === 0);
// console.log(find);
