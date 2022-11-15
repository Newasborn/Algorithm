function solution(my_string, n) {
    let answer = '';
    answer = my_string.split('').map(str=>str.repeat(n)).join('')
    return answer;
}