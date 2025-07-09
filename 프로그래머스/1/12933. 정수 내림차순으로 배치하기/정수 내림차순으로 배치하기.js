
function solution(n) {
 let a = (n + '')
   let b = a.split('').sort((c,d) => (d - c)).join('')
    return Number(b);
}