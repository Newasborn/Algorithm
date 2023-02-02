function solution(age) {
let alphabetArr = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',

  ];
  let ageArr = String(age).split('');
  let answer=[];

  for (let i = 0; i < alphabetArr.length; i++) {
    if (ageArr[i]) {
      answer.push(alphabetArr[ageArr[i]]);
    }
  }
    return answer.join('');
}