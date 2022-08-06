function drawUnderlinedText(context, text, x, y, lineWidth) {
    context.fillText(text, x, y);
    context.beginPath();
    context.moveTo(x, y);
    context.lineTo(x + context.measureText(text).width, y);
    context.lineWidth = lineWidth;
    context.stroke();
}
