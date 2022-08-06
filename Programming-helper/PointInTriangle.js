function pointInTriangle(x,y,a,b,c,d) {
		var p1 = (x - a) * (b - d) - (y - b) * (a - c);
		var p2 = (x - c) * (d - b) - (y - d) * (c - a);
		var p3 = (x - a) * (d - b) - (y - b) * (a - c);
		if ((p1 >= 0 && p2 >= 0 && p3 >= 0) || (p1 <= 0 && p2 <= 0 && p3 <= 0)) {
			return true;
		}
		return false;
	}
