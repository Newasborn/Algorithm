
 function solution(array, n) {
    let answer = 0;
    let answerArr = [];
     
    array.sort((a, b) => a - b);

    for (let i = 0; i < array.length; i++) {
      answerArr.push(Math.abs(array[i] - n));
    }

    const index = answerArr.indexOf(Math.min(...answerArr));

    return (array[index]);
  }
