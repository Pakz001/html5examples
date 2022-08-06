function drawCircle(angle) {
        var full_circle = 2 * Math.PI;
        var quarter_circle = full_circle / 4;
        
        var start_angle = (quarter_circle * angle) - (quarter_circle / 4);
        var end_angle = (quarter_circle * angle) + (quarter_circle / 4);
        
        // Draw a small part of a circle at a given angle
        ctx.arc(x, y, radius, start_angle, end_angle);
    }
