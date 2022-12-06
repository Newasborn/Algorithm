function solution(num_list, n) {
    
    let answer = [];
    let length = num_list.length / n
    
    for (let i = 0; i < length; i++){
        console.log(answer)
        answer = [...answer, num_list.slice(i * n, i * n + n)];
        console.log(answer)
    }

    return answer;
}