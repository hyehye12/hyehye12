function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("data received");
    }, 3000);
  });
}

fetchData().then((data) => console.log(data));

// console.log(fetchData());
// Promise { <pending> }

//asyn/await
async function loadData() {
  const result = await fetchData();
  console.log(result);
}

// loadData();

//실전 예제 : 유저 정보 가져오기
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Alice", age: 25 });
    }, 1000);
  });
}

async function showUser() {
  console.log("유저 정보 로딩중....");
  const user = await getUser();
  console.log(`이름: ${user.name}, 나이: ${user.age}`);
}

// showUser();

//try / catch

async function load() {
  try {
    const data = await fetch("https://example.com/data");
    const json = await data.json();
  } catch (err) {
    console.error("데이터 로딩 실패", err);
    // return "jhon";
    // retry 3 times
  }
}

// load();

//await 병렬 처리
const p1 = fetch("https://example.com/data1");
const p2 = fetch("https://example.com/data2");

async function test() {
  const [res1, res2] = await Promise.all([p1, p2]);
  console.log(res1);
  console.log(res2);
}

// test();

//간단한 비동기 함수 만들기
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function helloAfter2() {
  await delay(2000);
  console.log("2초 후 Hello");
}

helloAfter2();
