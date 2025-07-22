function solution(x) {
    let answer = x.toString().split('').map(Number).reduce((acc, cul) => acc + cul,0)
    if(x % answer === 0){
        return true
    }else{
        return false
    }
  
}