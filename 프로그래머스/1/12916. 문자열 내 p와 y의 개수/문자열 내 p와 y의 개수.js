function solution(s){
    const obj = [...s.toLowerCase()].reduce((acc, cur) => {
      acc[cur] = (acc[cur]||0)+1;
      return acc;
     }, {});
    return obj.p === obj.y;
}