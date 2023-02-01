 function solution(array) {
    let sortedArray = array.sort((a, b) => a - b);
    let cnt = 0;
    let mode = -1; // 최빈값 - 등장할 수 없는 값으로 해줌
    let modeRepeatCnt = 0; // 최빈값이 될 때 몇번 반복해서 된건지
    let repeatCnt = 0; // 현재 똑같은 숫자가 몇번 등장했는지
    let beforeNum = 0; // 지금 보고 있는 숫자의 이전 숫자
    let isDupMode = false; // 최빈값이 중복되었는지 체크
    while (cnt < array.length) {
      // 반복을 세주기 - 숫자가 바뀔때 반복 횟수
      if (beforeNum !== array[cnt]) {
        repeatCnt = 1;
      } else {
        repeatCnt = repeatCnt + 1;
      }
      // 최빈값 중복 체크
      // 두번째 다른 값을 셀 때 중복값이 같은지를 체크해야됨.
      if (repeatCnt === modeRepeatCnt) {
        if (mode !== array[cnt]) {
          isDupMode = true;
        }
      }
      // 지금 반복 카운트가 최빈값 카운트보다 크면,
      // 새로운 최빈값을 기록할 때.
      if (repeatCnt > modeRepeatCnt) {
        mode = array[cnt];
        modeRepeatCnt = repeatCnt;
        isDupMode = false;
      }
      beforeNum = array[cnt];
      cnt = cnt + 1;
    }
    if (isDupMode) {
      return -1;
    } else {
      return mode;
    }
  }