  function solution(numer1, denom1, numer2, denom2) {
       // 1. 분자 더하기
    const numer = numer1 * denom2 + numer2 * denom1;
    // 2. 분모 더하기
    const denom = denom1 * denom2;
    // 3. 분자/ 분모 중 작은 수를 최대 공약수로 정하기
    let minNum;
    if (denom < numer) {
      minNum = denom;
    } else {
      minNum = numer;
    }
    // 4. minNum이 0보다 클 동안만 실행
    // - 분자(numer)와 분모(denom)를 최대 공약수로 나눈 나머지가 0일 경우
    // 분자와 분모를 나눈 몫을 배열에 넣어 리턴하기
    while (minNum >= 0) {
      if (denom % minNum === 0 && numer % minNum === 0) {
        return [numer / minNum, denom / minNum];
      }
      minNum--;
    }

  }