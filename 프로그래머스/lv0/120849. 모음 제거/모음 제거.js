function solution(my_string) {
    const regex = /[a|e|i|o|u]/gim;  
    let answer = my_string.replace(regex, '');
    return answer;
}