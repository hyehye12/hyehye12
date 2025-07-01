console.log("Hello World!!");

function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet("Jhon"));

let n: number = 1;
let b: boolean = true;
let s: string = "Hello";
let o: object = {};

let n1 = 1;
let b1 = true;
let s1 = "Hello";
let o1 = {};

let a: any = 0;
a = "Hello";
a = true;
a = {};

let u: undefined = undefined;
// u = 1; -> 실행안됨

let count = 10,
  message = "your count";
let result = `${message} is ${count}`;
console.log(result);
