function solution(a, b) {
    let answer = 0;
    if (a === b) {
        answer = a;
    }
    if(a !== b && a < b){
        for (let i = a; i<= b; i++){
            answer += i;
        }   
    }
    if(a !== b && a > b){
        for (let i = b; i<= a; i++){
            answer += i;
        }
    }
    return answer;
}