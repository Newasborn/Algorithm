function solution(my_string) {
    let sum = 0
    let array = [...my_string]
    for (const key of array){
      if(isNaN(parseInt(key))){
        sum += 0;
      } else {
        sum += parseInt(key)
      }
    }    
    return sum;
}