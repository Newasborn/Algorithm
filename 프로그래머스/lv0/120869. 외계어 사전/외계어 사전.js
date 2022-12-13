  function solution(spell, dic) {
    let sortArr = [];
    let sortSpell = spell.sort().join('');

    for (let i = 0; i < dic.length; i++) {
      sortArr.push(dic[i].split('').sort().join(''));
    }
      
    console.log('sortArr', sortArr)
    console.log('sortSpell', sortSpell)

    return sortArr.find((v) => v === sortSpell) !== undefined? 1 : 2;

  }