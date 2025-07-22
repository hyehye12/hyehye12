function solution(n) {
for(let i = 0; i <= n; i++) {
    if(n === (i*i)) {
        return (i+1)*(i+1);
    }
    
}for(let j =0; j <= n; j++){
    if(n !== (j*j)){
        return (-1)
    }
}
}