
<br>touch device browser only atm*<br>
now the new tile map is a 2d isometric map using polygons and with raise and lower terrain feature. This was done by creating a wireframe version and have each connection point connect with the neighbors. by raising or lowering one point the neighbors can adjust and reconnect to those points. since using polygons that are filled, this makes it look like in populous or powermonger from back in the commodore amiga days.
<bt><br>
no texture fill or shading or drawn tile set yet. making a screenshot and drawing ontop of that would allow for these being made.<br><br>
chat gpt4 was used to create small isometric tile maps. then asking it to do various things. until i. figured out to just connect each point to each point. store everything in a array.

<br><br><br>
<img src="Media/IMG_3081.png" width="100%"></img><br>
<img src="Media/git.png" width="100%"></img><br>
<br><br>
touch device only atm.

Populous was a video game from 1989 by Bullfrog productions, ltd. A real time isometric strategy game. <br>
It was released for a whole series of home computers. The Commodore Amiga being one of them.<br><br>
The map in the game was quite special. I never programmed something like this before. I'm trying to get a map engine going right now(jun/2022).<br><br>
In this folder is a source file that has 16 isometric tiles that I remade based on a map editor screenshot using the build in polygon drawing commands in javascript.<br><br>
I hope to figure out how this isometric map with different heights works.<br><br>
I'm programming it right now on a Ipad and Iphone. There are no mouse and keyboard controls at the moment. I can add this later when I am testing and using the laptop. Feel fee to study my repo for bits and pieces that can be inserted into this project for more features(like mouse and keyboard controls)<br><br>

Undo:<br>
The unlimited undo system is a copy of the map array. This with a extra dimension for the undo depth.<br>
Every time a change is made. The previous data before being changed is stored in the undo array. When doing a undo. The last changed data is restored to its previous value. I think with the array system(sparse) Only the changed data is stored, conserving memory.<br><br>

<br><br>
Notes<br>
I think I need a height map system for this. a additional multidimenional array that holds a height value per cell position.<br>
tests: do i need to convert each height to a tile map layer? In the web populous that I found here on github. The map can go to any height and breaks through the top of the screen. I can not seem to find any code in there that shows where and how the actual drawing is done.
<br>
Maybe : draw each height layer starting at heighest. If a value is there in a cell position. draw the tiles based on its auto tiling logic. Look up/down.?? If cell position is 10. Then around it can not be lower than 9. The draw coordinates are multiplied to be drawn up x height level.
<br><br>
Is it 4 way bitwise autotiling or 8 way bitwise tiling. (cracking brain looking for tools that create insigths)<br>
