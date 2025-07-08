function solution(arr, divisor) {
    let z = arr.filter((x) => x % divisor === 0);
    if (z.length === 0) {
        return [-1];
    } else { return z.sort((a,b) => (a - b))}
}