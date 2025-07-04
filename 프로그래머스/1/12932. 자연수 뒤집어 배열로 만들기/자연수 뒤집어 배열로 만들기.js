function solution(n) {
    let answer = [];
    let a = String(n)
    for(let i = 0; i<a.length; i++) {
        answer.push(Number(a[i]))
        }
    
     answer.reverse();
        return answer;
}
 