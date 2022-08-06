function distance(point, points) {

    var dist = [];
    for (var i = 0; i < points.length; i++) {
      dist.push(Math.sqrt(Math.pow(point.x - points[i].x, 2) + Math.pow(point.y - points[i].y, 2)));
    }
    return dist;
  }


  // test:
  console.log(distance({ x: 1, y: 1 }, [{ x: 0, y: 0 }, { x: 2, y: 2 }])); // => [1.4142135623730951, 3.1622776601683795]
