  function solution(n) {
    let answer = 1;
    for (let i = 1; i <= n; i++) {
      if ((6 * i) % n === 0) {
        return i;
      }
    }

    return answer;
  }