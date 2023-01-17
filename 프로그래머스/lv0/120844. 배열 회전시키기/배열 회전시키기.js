function solution(numbers, direction) {
    let arrayLength = numbers.length - 1;
    console.log(arrayLength);
    let answer = [];
    for (let i = 0; i <= arrayLength; i++) {
      // direction이 left일 경우
      direction === 'left'
        ? i - 1 < 0
          ? (answer[arrayLength] = numbers[i])
          : (answer[i - 1] = numbers[i])
        : // direction이 'right'일 경우
        i + 1 > arrayLength
        ? (answer[0] = numbers[i])
        : (answer[i + 1] = numbers[i]);
    }

    return answer;
  }