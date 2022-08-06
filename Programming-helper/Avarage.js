function average() {
    var points = 0;
    for (var i = 0; i < arguments.length; i++) {
        points += arguments[i];
    }
    return points / arguments.length;
}
 
 console.log(average(1, 2, 3, 6));
