function solution(price, money, count) {
    let sumPrice = 0;
    for(let i = 1; i <= count; i++){
        sumPrice += price * i;
    }
    if (money - sumPrice > 0) {
        return 0
    } else {
        return (money - sumPrice) * -1
    }
}