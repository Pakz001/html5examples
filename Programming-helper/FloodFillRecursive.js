function floodFill(canvas, x, y, newColor){
  var origColor = canvas[x][y];
  if(origColor == newColor) return;
  floodFillHelper(canvas, x, y, origColor, newColor);
}

function floodFillHelper(canvas, x, y, origColor, newColor){
  if(x < 0 || x >= canvas.length || y < 0 || y >= canvas[x].length) return;
  if(canvas[x][y] != origColor) return;
  
  canvas[x][y] = newColor;
  floodFillHelper(canvas, x-1, y, origColor, newColor);
  floodFillHelper(canvas, x+1, y, origColor, newColor);
  floodFillHelper(canvas, x, y-1, origColor, newColor);
  floodFillHelper(canvas, x, y+1, origColor, newColor);
}
