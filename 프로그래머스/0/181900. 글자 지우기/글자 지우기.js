function solution(my_string, indices) {
    return [...my_string].map((v, i) => {
        if(indices.includes(i)) {
            return '';
        } else {
            return v;
        }
    }).join('');
}