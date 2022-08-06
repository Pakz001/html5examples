function draw(x, y, width, height, angle) {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.save();
  ctx.translate(x + width / 2, y + height / 2);
  ctx.rotate(angle * Math.PI / 180);
  ctx.fillRect(-width / 2, -height / 2, width, height);
  ctx.clearRect(-width / 2, -height / 2, width / 3, height);
  ctx.restore();
}
draw(50, 50, 50, 50, 45);
