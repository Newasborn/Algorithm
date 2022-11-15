function solution(array, commands) {
  let answer = [];
  let result = [];

  for (let i = 0; i <= commands.length - 1; i++) {
    answer = array.slice(commands[i][0] - 1, commands[i][1]).sort((a , b) => a - b);
    result.push(answer[commands[i][2] - 1]);
  }
  return result;
}