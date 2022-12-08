function solution(numbers) {
const alphabets = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
// let answer = '';

    for (let i = 0; i < alphabets.length; i++){
        numbers = numbers.split(alphabets[i]).join(i)
    }

return Number(numbers);
}