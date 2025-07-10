function solution(absolutes, signs) {
        for(let i = 0; i<signs.length; i++) {
            if (signs[i] === false) {
                absolutes[i] = -absolutes[i];
            }
        } let answer = absolutes.reduce((acc,cul) => acc + cul ,0);
        return answer;
}