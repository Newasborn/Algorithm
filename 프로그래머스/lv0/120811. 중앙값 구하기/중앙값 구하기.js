function solution(array) {
    let halfIndex = Math.floor(array.length/2) + 1 

    let answer = array.sort((a,b) => a - b).slice(0, halfIndex)

    return answer[answer.length-1];
}