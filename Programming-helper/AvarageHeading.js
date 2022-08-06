function averageHeading(vectors){
	if (!vectors.length) return 0;
	var x = 0, y = 0;
	for (var i = 0; i < vectors.length; i++)
	{
		var vector = vectors[i];
		x += Math.cos(vector);
		y += Math.sin(vector);
	}
	return Math.atan2(y, x);
}
