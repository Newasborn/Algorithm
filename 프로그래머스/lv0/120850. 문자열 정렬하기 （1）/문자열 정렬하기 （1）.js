  function solution(my_string) {
    const reg = /[0-9]/gm;

    return my_string.match(reg).map(str=> +str).sort();
  }