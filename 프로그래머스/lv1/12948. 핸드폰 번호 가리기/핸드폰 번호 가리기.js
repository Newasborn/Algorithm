function solution(phone_number) {
    let answer = ''
    let arr = phone_number.split('').splice(-4, 4);
    let star = ''
    for(let i = 0; i < phone_number.length-4; i++){
    star += '*'}
    answer = star + arr.join('')
    return answer;
}