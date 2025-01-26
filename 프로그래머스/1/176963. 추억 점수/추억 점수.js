function solution(name, yearning, photo) {
    return photo.map(p => {
        return p.map(v => {
            const index = name.indexOf(v);
            return yearning[index] ? yearning[index] : 0;
        }).reduce((acc, cur) => acc + cur, 0);
    })
}