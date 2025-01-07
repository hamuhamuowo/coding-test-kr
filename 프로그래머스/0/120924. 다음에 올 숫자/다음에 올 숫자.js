function solution(common) {
    if(common[common.length-1] - common[common.length-2] === common[1] - common[0]) {
        return common[common.length - 1] + common[1] - common[0];
    } return common[common.length - 1]*(common[1] / common[0]);
}