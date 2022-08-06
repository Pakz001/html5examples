<script>
 
 function DrawTriangle() {
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(100,100);
	ctx.lineTo(100,300);
	ctx.lineTo(200,300);
	ctx.fill();
	ctx.closePath();
}

 </script>
