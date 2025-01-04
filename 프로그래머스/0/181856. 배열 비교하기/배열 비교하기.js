function solution(arr1, arr2) {
    // 배열 길이가 다를 때
    if(arr1.length !== arr2.length) {
        return arr1.length > arr2.length ? 1 : -1;
    }
    
    // 모든 원소의 합
    const sum1 = arr1.reduce((acc, cur) => acc+cur, 0);
    const sum2 = arr2.reduce((acc, cur) => acc+cur, 0);

    if(sum1 > sum2) {
        return 1;
    } else if (sum1 < sum2) {
        return -1;
    } else if (sum1 === sum2) {
        return 0;
    }
}