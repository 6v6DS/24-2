function solution(number) {
    let count = 0;
    
    for(let i = 0; i < number.length; i++){
        for(let j = i + 1; j < number.length + 1; j++){
            for(let k = j + 1; k < number.length + 2; k++){
                if(number[i] + number[j] + number[k] === 0){
                    count++;
                }
            }
        }
    }
    
    return count;
}