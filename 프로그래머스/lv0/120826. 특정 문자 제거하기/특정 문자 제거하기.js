  function solution(my_string, letter) {
    let answer = '';
    let strArr = Array.from(my_string);
    answer = strArr.filter((x) => x !== letter).join('');
    return answer;
  }