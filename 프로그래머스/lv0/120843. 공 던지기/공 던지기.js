  function solution(numbers, k) {
      let count = 1;
    for (let i = 0; ; i += 2) {
      i %= numbers.length;
      const answer = numbers[i];
      if (count === k) {
        return answer;
      }
      count += 1;
    }
  }