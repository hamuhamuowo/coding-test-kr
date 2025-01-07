function solution(arr) {
    const mapArr = (ar) => {
        return ar.map(num => {
            if(num >= 50 && num % 2 === 0) {
                return num / 2;
            } else if (num < 50 && num % 2 !== 0) {
                return num * 2 + 1;
            } 
            return num;
        })
    }
    
    let count = 0;
    let prev = arr;
    let cur = mapArr(arr);
    
    while(JSON.stringify(prev) !== JSON.stringify(cur)) {
        prev = cur;
        cur = mapArr(cur);
        count++;
    }
    
    return count;
}