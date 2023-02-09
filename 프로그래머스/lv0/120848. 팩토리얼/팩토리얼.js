function solution(n) {
    let answer = 0;
    let save = 1; 
    
    for(let i = 1; i <= 10; i++){
        save = save * i
        if(save == n){
            answer = i
            return answer
        } else if (save > n){
            answer = i -1
            return answer
        }
        
    }
    
}