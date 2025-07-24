const p1 = fetch("https://example.com/data1");
const p2 = fetch("https://example.com/data2");

const [res1, res2] = await Promise.all([p1, p2]);
console.log(res1);
console.log(res2);

// test();
