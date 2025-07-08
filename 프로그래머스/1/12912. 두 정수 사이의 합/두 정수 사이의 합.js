function solution(a, b) {
  let x = 0;
    if ( a -b <= 0) {
    for (let i = a; i < b+1; i++) {
             x += i;
                     }return x;
    } else {
        for(let j = b; j < a+1; j++) {
            x += j
        } return x;
    }
}
