function solution(before, after) {
    const beforeObj = [...before].reduce((acc, cur) => {
      acc[cur] = (acc[cur]||0)+1;
      return acc;
    }, {});
    
    const afterObj = [...after].reduce((acc, cur) => {
      acc[cur] = (acc[cur]||0)+1;
      return acc;
    }, {});
    
    let isSame = 1; // true
    for(let i = 0; i < Object.keys(beforeObj).length; i++) {
        let val = Object.keys(beforeObj)[i];
        if(beforeObj[val] !== afterObj[val]) {
            isSame = 0; // false
        }
    }
    return isSame;
}
