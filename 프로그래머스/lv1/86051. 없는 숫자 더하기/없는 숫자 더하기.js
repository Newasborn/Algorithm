function solution(numbers) {
  let answer = 0;
  let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < numberArr.length; i++) {
    const index = numbers.indexOf(numberArr[i]);
    if (index === -1) {
      answer += i;
    }
  }
  return answer;
}