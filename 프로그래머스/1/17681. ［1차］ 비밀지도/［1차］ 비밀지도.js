function solution(n, arr1, arr2) {
    const answer = [];
    for(let i = 0; i < n; i++) {
        let str1 = arr1[i].toString(2);
        let str2 = arr2[i].toString(2);
        str1 = str1.length < n ? `${'0'.repeat(n-str1.length)}${str1}` : `${str1}`;
        str2 = str2.length < n ? `${'0'.repeat(n-str2.length)}${str2}` : `${str2}`;
        
        str1 = str1.split('').map((v, i) => {
            if(v === '0' && str2[i] === '0') return " ";
            return "#";
        })
        answer.push(str1.join(''));
    }
    return answer;
}