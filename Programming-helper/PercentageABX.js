function percentage(a, b, x) {
 	if (a > b) {
 		var c = a;
 		a = b;
 		b = c;
 	}
 	return ((x - a) * 100 / (b - a)).toFixed(0);
 }
