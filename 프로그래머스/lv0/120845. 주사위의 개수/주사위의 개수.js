  const solution = (box, n) => {
    let answer = 0;

    answer = box
      .map((v) => Math.floor(Number(v) / n))
      .reduce((prev, curr) => (prev *= curr));

    return answer;
  };