function solution(s) {
    const upper = [...s].filter(v => v === v.toUpperCase()).sort((a,b) => {
      if(a < b) return 1;
      if(a > b) return -1;
      if(a === b) return 0;
    });
    const lower = [...s].filter(v => v === v.toLowerCase()).sort((a,b) => {
      if(a < b) return 1;
      if(a > b) return -1;
      if(a === b) return 0;
    });;
    return [...lower, ...upper].join('');
}