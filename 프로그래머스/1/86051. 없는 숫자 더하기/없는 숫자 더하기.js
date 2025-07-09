function solution(numbers) {
    let answer = 0;
    let b = (9*10)/2
   for (let i = 0; i < 10; i++ ) {
       answer = numbers.filter((t) => (t % 2 ===  0) || (t % 2 !== 0)).reduce((acc, cur) => acc + cur, 0);
   } return (b - answer);
}