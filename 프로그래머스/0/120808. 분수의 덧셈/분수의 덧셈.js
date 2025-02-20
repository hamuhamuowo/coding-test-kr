function solution(numer1, denom1, numer2, denom2) {
    let lcm = denom1 * denom2; // 분모
    let sumNumer = (numer1 * denom2) + (numer2 * denom1); // 분자
    
    // 최대공약수
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // 기약분수
    let gcdNum = gcd(sumNumer, lcm);
    return [sumNumer / gcdNum, lcm / gcdNum];
}