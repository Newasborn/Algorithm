  const solution = (rsp) => {
    let answer = '';
    // 문자열을 배열에 담기
    let arr = rsp.split('');
    // 배열에 담긴 요소를 한글자씩 돌면서 비교하기
    arr.map((x) =>
      x === '2' ? (answer += 0) : x === '0' ? (answer += 5) : (answer += 2)
    );

    return answer;
  };