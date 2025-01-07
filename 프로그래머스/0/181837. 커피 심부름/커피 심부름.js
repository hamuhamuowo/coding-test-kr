function solution(order) {
    return order.map(val => {
        if(val.indexOf('latte') !== -1) {
            return 5000;
        } 
        return 4500;
    }).reduce((acc, cur) => acc+cur, 0);
}