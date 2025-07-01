function solution(num1, num2) {
    let answer = "";
    let n = num1%num2;
    if(n>=0){
        answer=(num1-n)/num2;
    }
    return answer;
}