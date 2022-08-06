Rectangle = {
					x: x,
					y: y,
					width: width,
					height: height,
					angle: angle
	};
 
 pointInRotatedRectangle = function (rect, point) {
      var dx = point.x - rect.x,
          dy = point.y - rect.y,
          angle = rect.angle,
          w = rect.width,
          h = rect.height;
 
      if (angle === 0) {
          return dx >= 0 && dx <= w && dy >= 0 && dy <= h;
      }
 
      var cos = Math.cos(angle), sin = Math.sin(angle);
      var px = cos * dx - sin * dy;
      var py = sin * dx + cos * dy;
 
      return px >= 0 && px <= w && py >= 0 && py <= h;
  };
