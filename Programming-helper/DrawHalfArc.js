var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
// Draw half of a arc
ctx.beginPath();
ctx.arc(200, 200, 50, 0, Math.PI);
ctx.stroke();
