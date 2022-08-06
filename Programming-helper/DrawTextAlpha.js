function drawTextAlpha(text, x, y, alpha)
    {
        ctx.globalAlpha = alpha;
        ctx.fillText(text, x, y);
        ctx.globalAlpha = 1.0;
    }
