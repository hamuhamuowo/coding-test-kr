function solution(id_pw, db) {
    const [id, pw] = id_pw;
    const filterDb = db.filter(info => info[0] === id);
    if(filterDb.length === 0) return 'fail';
    return filterDb[0][1] === pw ? 'login' : 'wrong pw';
    
}