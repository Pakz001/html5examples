function PointInRectangle(x, y, rectX, rectY, width, height)
{
    if(x > rectX && x < rectX + width && y > rectY && y < rectY + height) {
        return true;
    }
    else {
        return false;
    }
}
