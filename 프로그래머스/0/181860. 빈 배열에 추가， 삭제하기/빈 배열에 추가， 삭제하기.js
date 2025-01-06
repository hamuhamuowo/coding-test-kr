function solution(arr, flag) {
    let x = [];
    flag.forEach((v, i) => {
        if(v) {
            for(let j = 0; j < arr[i]*2; j++) {
                x.push(arr[i]);
            }
        } else {
            x = x.slice(0, x.length - arr[i]);
        }
    })
    return x;
}