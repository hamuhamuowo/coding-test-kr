function solution(dots) {
    const getSlope = (p1, p2) => {
        const [x1, y1] = p1;
        const [x2, y2] = p2;
        return (y2 - y1) / (x2 - x1);
    }
    
    const pairs = [
        [[dots[0], dots[1]], [dots[2], dots[3]]],
        [[dots[0], dots[2]], [dots[1], dots[3]]],
        [[dots[0], dots[3]], [dots[1], dots[2]]]
    ];
    
    for (const [[p1, p2], [p3, p4]] of pairs) {
        if (getSlope(p1, p2) === getSlope(p3, p4)) {
            return 1;
        }
    }
    return 0;
}