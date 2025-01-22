function solution(polynomial) {
    let x = 0;
    let num = 0;
    polynomial.split(' ').filter(v => v !== '+').forEach(v => {
        if(v.length > 1 && v[v.length-1] === 'x') {
            x += parseInt(v.slice(0, v.length-1));
        }
        if(v.length === 1 && v === 'x') {
            x++;
        }
        if(!v.includes('x')) num += parseInt(v);
    });
    
    if(x === 0) return `${num}`;
    if(num > 0) return x > 1 ? `${x}x + ${num}` : `x + ${num}`;
    if(num === 0) return x > 1 ? `${x}x` : `x`;
}