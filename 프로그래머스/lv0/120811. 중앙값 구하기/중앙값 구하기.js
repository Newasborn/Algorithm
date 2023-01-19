function solution(array) {
	let answer = 0;
   	let halfIndex;
    
    answer = array.sort((a, b) => a-b)
    halfIndex = Math.floor(answer.length/2)
    return answer[halfIndex]
}