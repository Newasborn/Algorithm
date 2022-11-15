function solution(s1, s2) {
  let count = 0;
  for (let i = 0; i < s2.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s2[i] == s1[j]) {
        count += 1;
      }
    }
  }
  return count;
}