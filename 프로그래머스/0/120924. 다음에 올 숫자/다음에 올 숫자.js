function solution(common) {
    let answer = common.length
    for(let i = 0; i <= common.length; i++){
        
      if ((common[i+1] - common[i]) === (common[i+2] - common[i+1])){
          return (common[i+1] - common[i]) + common[answer-1]
      }else {
          return common[i+1] / common[i] * common[answer-1]
      }  
            
       
    }
}