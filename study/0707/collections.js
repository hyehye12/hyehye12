const set = new Set([1, 2, 2, 2, 3, 4]); //() = 생성자 호출 괄호 안에 데이터
//set은 중복이 제거된다.
set.add(5);
set.add(5); //중복이라 무시됨
set.delete(2);
console.log(set);

const map = new Map();
map.set("name", "Lee");
console.log(map);
console.log(map.get("name"));
map.set("age", 20);
console.log(map.get("age"));
console.log(map.size);
map.delete("age");
console.log(map);

for (const val of set) {
  console.log(val);
}

for (const [key, val] of map) {
  console.log(key, val);
}
