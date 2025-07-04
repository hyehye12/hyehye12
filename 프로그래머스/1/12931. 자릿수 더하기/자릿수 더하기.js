let answer = 0;
function solution(n)

{ let answer = 0;
    let a = String(n);
 for (let i = 0; i<a.length; i++) {
      answer += Number(a[i]); 
 } return answer;


    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(`${a[0]}+${a[1]}+${a[2]} = ${answer} 이므로 ${answer}를 return 하면 됩니다.`)
}