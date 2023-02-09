  function solution(n) {
    let save = 1;
    for (let i = 1; i <= 10; i++) {
      save = save * i;
      if (save == n) {
        return i;
      } else if (save > n) {
        return i - 1;
      }
    }
  }