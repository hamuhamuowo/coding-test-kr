function solution(emergency) {
    const sortArr = [...emergency].sort((a, b) => b-a);
    return emergency.map(v => sortArr.indexOf(v) + 1)
}