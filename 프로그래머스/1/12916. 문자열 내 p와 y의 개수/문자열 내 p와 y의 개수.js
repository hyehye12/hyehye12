function solution(s){
  
    const x = s.toLowerCase().split("").filter((w) => w === "p").length
    const y = s.toLowerCase().split("").filter((w) => w === "y").length
    if (x === y){
        return true;
    } else {return false};
    

    
    
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
}