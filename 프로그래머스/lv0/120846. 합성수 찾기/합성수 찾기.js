function solution(n) {
     let answer = [];

  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        answer.push(i);
      }
    }
  }

  const setAnswer = new Set(answer);
    
    return [...setAnswer].length;
}