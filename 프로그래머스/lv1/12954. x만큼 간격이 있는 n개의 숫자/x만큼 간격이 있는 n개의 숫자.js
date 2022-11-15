function solution(x, n) {
    let answer = [];
    answer = Array(n).fill(x).map((x,n) => {return x * (n+1)})
    return answer;
}