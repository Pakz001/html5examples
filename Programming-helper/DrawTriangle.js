function drawTriangle(x, y, angle, length) {
    var ctx = document.getElementById('canvas').getContext('2d');

    ctx.save();

    ctx.translate(x, y);
    ctx.rotate(angle * Math.PI / 180);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, length);
    ctx.lineTo(length, 0);
    ctx.lineTo(0, 0);
    ctx.fill();

    ctx.restore();
}
