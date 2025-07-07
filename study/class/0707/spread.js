//스프레드 연산자, 구조분해
const user = { id: 1, name: "김", address: "Seoul" };
const updated = { id: 2, ...user, name: "Lee", age: 21 };

console.log(updated);

const UserArr = [1, 2, 3, 4, 5];
const updatedArr = [1, 2, ...UserArr, 6, 7];

console.log(updatedArr);

//구조 분해
const userSplit = { id: 1, name: "김민", age: 20, address: "Seoul" };
// const { id, name, age, address } = userSplit;
// console.log(id, name, age, address);

// const { id, name, ...rest } = userSplit;
// console.log(id, name, rest);
const { ...rest } = userSplit;
console.log(rest);

//1. 구조 분해 할당을 이용해 다음 객체에서 'title'과 'author'을 추출
const book = { title: "종의 기원", author: "김유정" };
const { title: title2, author } = book;
console.log(title2);
console.log(author);
