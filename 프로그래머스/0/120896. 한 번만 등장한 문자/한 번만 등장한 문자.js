function solution(s) {
    const obj = {};
    [...s].forEach(v => {
        obj[v] = (obj[v] || 0) + 1;
    })
    const keys = Object.keys(obj);
    const vals = Object.values(obj);
    const min = Math.min(...vals);
    
    let answer = []
    for(let i = 0; i < vals.length; i++) {
        if(vals[i] === min) answer.push(keys[i]);
    }
    
    return answer.sort().join('');
}