    
    // Get the tile coordinates from a single index. Row and Column. 
    //
    //
    // w and h of the tile image file
    var tileImageWidth = 640
    var tileImageHeight = 480;
    var tileImageCellSize = 32;
    var maxColumns = tileImageHeight/tileImageCellSize
    var maxRows = tileImageWidth/tileImageCellSize
    
    // tile
    function drawTile(x,y,tile){
        var row = tile % maxRows
        var column = tile / maxRows
        ctx.drawImage(tileImage,row*tileImageCellSize,
                                column*tileImageCellSize,tileImageCellSize,tileImageCellSize,
                                x,y,tilewidth,tileheight);
    }
