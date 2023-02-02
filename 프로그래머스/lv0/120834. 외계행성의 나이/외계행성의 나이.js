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
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
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