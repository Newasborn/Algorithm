  function solution(order) {
    const reg = /[3|6|9]/gm;
    let arr;
    arr = String(order).split('');
    return arr.filter((v) => v.match(reg)).length;
  }