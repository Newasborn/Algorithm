function solution(emergency) {
let newEmergencyArray = [];
    let cnt = 0;
    while (cnt < emergency.length) {
      newEmergencyArray.push({ value: emergency[cnt], idx: cnt });
      cnt = cnt + 1;
    }

    // console.log('newEmergencyArray', newEmergencyArray);
    newEmergencyArray.sort((a, b) => b.value - a.value);
    // console.log('newEmergencyArray', newEmergencyArray);

    let answer = new Array(emergency.length);
    // console.log('answer', answer);
    cnt = 0;

    while (cnt < newEmergencyArray.length) {
      let item = newEmergencyArray[cnt];
      answer[item.idx] = cnt + 1;
      // console.log('item', item);
      cnt += 1;
    }
    return answer;
}