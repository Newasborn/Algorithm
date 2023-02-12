function solution(n) {
    let answer = [];

    // 나누는 값을 2부터 시작, n이 1이 아닐 때까지 계속 나누기
    for (let i = 2; n !== 1; i++) {
      if (n % i === 0) {
        // 2로 나눴을 때 0이고, 또 2로 계속 나눌 수 있을 때까지 반복해주기
        while (n % i === 0) {
          n /= i;
        }
        answer.push(i);
      }
    }
    return answer;
  }