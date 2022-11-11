  function solution(sides) {
    const max_side = Math.max(...sides);
    const a = sides[0];
    const b = sides[1];
    const c = sides[2];

    if (max_side >= a + b || max_side >= a + c || max_side >= b + c) {
      return 2;
    }
    return 1;
  }