function solution(array) {
    const obj = array.reduce((acc, cur) => {
      acc[cur] = (acc[cur]||0)+1;
      return acc;
    }, {});
    
    const maxValue = Math.max(...Object.values(obj));
    const maxKeys = Object.keys(obj).filter(key => obj[key] === maxValue);
    
    return maxKeys.length > 1 ? -1 : parseInt(maxKeys[0]);
}