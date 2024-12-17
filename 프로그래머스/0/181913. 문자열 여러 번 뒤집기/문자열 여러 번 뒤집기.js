function solution(my_string, queries) {
    let arr = my_string.split('');
    queries.forEach(([s, e]) => {
        let subArray = arr.slice(s, e + 1).reverse();
        arr.splice(s, e - s + 1, ...subArray);
    });
    
    return arr.join('');
}
