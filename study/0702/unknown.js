var value2 = 10;
value2 = "hello";
console.log(value2);
value2 = new Array(); // 배열을 선언하는 네가지 방법: [], Array(), new Array(), new Array(10)
if (value2 instanceof Array) {
    value2.push(33);
}
console.log(value2);
