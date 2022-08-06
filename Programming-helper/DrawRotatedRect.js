function drawRotatedText(context, text, x, y, angle, color) {
	context.save();
	context.fillStyle = color;
	context.translate(x, y);
	context.rotate(angle * Math.PI / 180);
	context.fillText(text, 0, 0);
	context.restore();
}
