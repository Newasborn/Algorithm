function solution(balls, share) {
    let answer = 0;

    const n = balls;
    const m = share;

    let numerator = 1; // 분자
    for (let i = n; i >= n - m + 1; i--) {
      numerator *= i;
    }

    let denominator = 1; // 분모
    for (let i = m; i >= 1; i--) {
      denominator *= i;
    }

    answer = numerator / denominator;
    return answer;
}