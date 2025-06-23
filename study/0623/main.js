// alert("Hello World!");
// console.log("Hello world");
// document.write("<h1>Document Write</h1>");

// let currentYear = 2025;
// let birthYear = prompt("태어난 해를 입력하세요.");
// let age =currentYear - birthYear +1;
// alert("당신의 나이는" + age + "살 입니다.")

// let name ="철수"
// let age ="20"
// let isStudent = true;

// console.log(typeof name);
// console.log(typeof age);
// console.log(typeof isStudent);

// let price = 10000;
// let rate = 0.2;
// let discount = price*rate;
// let finalPrice = price - discount;

// console.log ("할인된 가격은" + finalPrice + "원입니다.")

// let name ="영희"
// console.log (`안녕하세요,${name}님!`)

// let a = 10;
// console.log(a); //디버깅 할 때 필수
// a += 5;
// console.log(a);
// a -= 3;
// console.log(a);
// a*= 2;
// console.log(a);
// a/= 4;
// console.log(a);
// console.log(`최종값은 ${a} 입니다.`);

// let name = prompt("이름을 입력해주세요")
// let age = prompt("나이를 입력해주세요.")
// alert(`안녕하세요. ${age}살 ${name}님. 만나서 반갑습니다.`)

// let number = Number(prompt("숫자를 입력해주세요"));
// let number1 = Number(prompt("두번쩨 숫자를 입력해주세요")); 
// //**prompt는 문자열로 받기 때문에 Number로 형변환을 하는것이 필수!
// alert(number+number1);

// console.log(1=="1")
// console.log(1==="1")

//실습: 3의 배수 검사
// let num = prompt("숫자를 입력하세요")
// if(num % 3 === 0) {
//     alert('3의 배수입니다.');
// } else {
//     alert('3의 배수가 아닙니다.');
// }
// % 모듈러 연산: 나누기한 값의 나머지 ex) 7%2=1 11%5=1 

// let day = prompt("요일을 입력하세요")
// switch (day) {
//     case '월요일':
//         alert("한주의 시작")
//     break;
//     case "금요일":
//         alert("불타는 금요일")
//     break;
//     default:
//         alert("평범한 하루네요");
// }

// let a = 5;
// let b = 3;
// console.log(a+b)

// let name = "홍길동";
// let age = 20;
// console.log(`${name}님은 ${age}살입니다.`)

// let side = 4;
// console.log(side*side)

let number = prompt("숫자를 입력해주세요.");
if(Number(number) % 2 == 0) {
    alert("짝수입니다.")
} else {
    alert("홀수입니다.")
}

let age = prompt("나이를 입력하세요.");
if(Number(age) < 19) {
    alert("미성년자입니다.")
} else {
    alert("성인입니다.")
}

let password = prompt("비밀번호를 입력하세요.")
let input = "1234"
if(password === input) {
   alert("로그인 성공")
} else {
   alert("로그인 실패")
}