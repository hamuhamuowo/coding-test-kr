function solution(chicken) {
    let serviceChicken = 0;
    let coupon = chicken;
    while(coupon >= 10) {
        let service = Math.floor(coupon/10);
        serviceChicken += service;
        coupon = service + (coupon % 10);
    }
    return serviceChicken;
}