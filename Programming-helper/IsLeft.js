var isLeft = function (p1, p2, p3) {
    return ((p2.x - p1.x) * (p3.y - p1.y) - (p3.x - p1.x) * (p2.y - p1.y));
};
