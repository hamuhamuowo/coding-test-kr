function solution(my_string) {
    return my_string.replaceAll(/[^1-9]/g, "").split('').map(Number).reduce((a,c) => a+c, 0);
}