function solution(n) {
    let answer = 0;
    let x = Math.sqrt(n);
    if (x === Math.floor(Math.sqrt(n)))
        {answer= Math.pow((x+1),2);
        }
    else {answer= -1}
    return answer;
}

// Math.sqrt - 제곱근 구해주는 메서드
// Math.pow - 거듭 제곱 