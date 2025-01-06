function solution(arr, queries) {
    queries.forEach(q => {
        const [s, e] = q;
        arr = arr.map((num, i) => {
            if(s <= i && i <= e) {
                return num += 1;
            } 
            return num;
        })
    })
    
    return arr;
}