function solution(participant, completion) {
    // 1. 인자로 들어오는 배열을 정렬
    let p = participant.sort();
     let c = completion.sort();

    // 2. 참가자 (p) 배열 기준으로 순회
  for (let i = 0; i < p.length; i++) {
    // 3. 두 배열의 요소를 비교, 같지 않은 요소를 반환
    if (c[i] !== p[i]) {
      return p[i];
    }
  }
    return p
}