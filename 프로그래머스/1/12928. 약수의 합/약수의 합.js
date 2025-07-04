function solution(n) {
    let answer = 0;
    for(let j = 1; j<=n; j++){
        if( n % j === 0){
            answer += j
            } 
        }return answer;
}