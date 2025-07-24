// 중복 제거
const set = new Set([1, 2, 2, 3, 4, 5, 5]);
// 모든 숫자에 5를 더한 값 // 순서대로 출력
for (let num of set) {
  console.log(Number(num) + 5);
}
// "total"이라는 키에 중복을 제거한 숫자들의 합
const map = new Map();
map.set(
  "total",
  set.reduce((acc, cur) => acc + cur, 0)
);

console.log(map.fet("total", i));

//
const numbers = [3, 4, 7, 8, 10, 13];
const evens = numbers.filter((num) => num % 2 === 0);
const squred = evens.map((num) => num * num);
const sum = squred.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

//
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data OK");
    }, 2000);
  });
}

async function loadData() {
  const data = await fetchData();
  console.log(data);
}

loadData();
