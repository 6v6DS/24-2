function solution(num) {
    var count = 0;
    if(num < 1 || num > 8000000){
        return 0;
    }
    if(num == 1){
        return 0;
    }
    
    for(let i=0; i< 500; i++){
        if(num % 2 == 0){
            num = num / 2;
            count++;
            if(num == 1){
                return count;
            }
        }else{
            num = num * 3 + 1;
            count++;
            if(num == 1){
                return count;
            }
        }
        if(i == 499){
            return -1;
        }
    }

}