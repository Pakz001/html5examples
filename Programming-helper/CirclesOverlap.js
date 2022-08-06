function checkOverlap(radius1, x1, y1, radius2, x2, y2) {
     let d = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
     return d <= radius1 + radius2;
 }
