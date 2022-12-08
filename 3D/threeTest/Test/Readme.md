<br><br>
<img src="Media/7B129187-D317-49F5-8A8A-3A95F9550603.jpeg" width="60%"><br>
(book23.html version / touch control / first person camera / voxels / Minecraft / camera vs map collision / gravity / walking)
<br><br>
Current controls touch : touch center = move forward, touch left bottom = move backwards, double tap center bottom = jump,
elsewhere touch and drag = rotate camera. touch+hold then release to break block<br>
<br><br>
<a href="https://cromdesi.home.xs4all.nl/html5/voxelthing/">Play run test here(touchscreen)</a><br><br>
the thee.min.js is a old version.<br>
the three.js is new <11-2022 <br>
<br>
trying to figure out the things needed to code a voxel minecraft type game.<br>

boxes, chunks, atlasses, worlds, collision, controls, ...<br>
<br>
Book = Notes:<br>
I'm getting to know how to use tree.js using tutorials and forum and a book.<br>
Learning how to create a voxel world. Building from a 3d scene and
getting a chunk system working. My ipad has no multi core support in
the editors. So the world generation wil not be fast.<br>
The chunks are made up from cubes. Each cube is made from a quad. Each
quad has a texture from a atlas. Each cube can have its face turned on or
off. This allows it to save on memory and gpu/cpu.<br>
When two cubes are set side by side. The sides that touch have the
faces they share not be generated.<br>
A chunck is a sort of block of blocks. A world is made from a series
of chunks. The collision would(i think) be done by shooting a bullet from
the camera. The position divided by the cell w/h/d and if occupied in the array
means collide and remove/work/place.<br>
I have done loads of map generators over the years. These wil show up in the
series<br>
Touch and keyboard and maybe controller support(ipad).
<br><br>
book1 = plane cube camera spotlight<br>
book2 = plane cube shadow rotation<br>
book3 = plane cube spotlight rotation fog shadow<br>
book4 = create a mesh from points.<br>
book5 = group 2 cubes, each cube of different color.<br>
book9 = create buffer geometry and load texture and set uv mapping<br>
book10 = create a buffer geometry quad and texture it with a atlas texture.<br>
book11 = create multiple box front faces as a single buffer mesh and use texture atlas.<br>
book12 = create multiple box front faces in a grid as a single buffer mesh using random texture per quad.<br>
book13 = create a quad face for each side of a cube, one single mesh, each face a texture from a atlas.<br>
book14 = create a mesh from a series of cubes with atlassed textured faces(random texture) - Functionised<br>
book15 = chunck world block simple height map(texture/atlas) and remove block with touch(x,y screen position ray<br>
book16 = chunk with light.<br>
book17 = chunks to world. lighted world and fog.<br>
book18 = test with chunk and raycasting hud. (ray.at)<br>
book19 = Hud using a secondary camera and viewport clipping.<br>
book21 = World with camera keyboard control and buggy? touch controls.<br>
book22 - World with camera fpsfly control and collision camera/world.<br>
book23 - World with camera fps with basic gravity and map collision and minecraft ios touch control first person??buggy<br>
BOOK25 - World with camera fps jumping backwards map collision touch-controls<br>
book26 - Flower mesh build. small<br>
book27 - Grass flower plants large map test<br>
book28 - MAIN engine with plants<br>
book29 - MAIN engine with tunnel test and modified fps camera.<br>
book30 - MAIN engine with block remove (needs user controls remake)<br>
book31 - MAIN - engine with block highlighting. Delay for digging(long hold then release)<br>
book32 - MAIN - engine. Continue digging/placing when finger stays down. (dig/place distance now 500) !dig and place block<br>
book33 - Billboard / Canvasses on top of 3d view as user interface(ui) example.<br>
book34 - MAIN - engine - Changed camera movement drag and turn. Forward.<br>
book35 - MAIN - engine - Multi touch - move and turn (!)<br>
book36 - import json scenes. from https://threejs.org/editor/ Using to create game models and characters. models folder.<br>
book37 - import json scenes and find body part and rotate this independantly inside the combined scene mesh.<br> 
book38 - import json scene as a character and trying to animate it throught the code.<br>
book39 - chunk example with changing texture from atlas on cube inside chunk in realtime.(fast)<br>
book40 - chunk example with changing texture in cube from atlas with light levels using vertexcolors. 2 in this example. Each face of each cube settable<br>
book41 - main - testing out hide remove show chunks based on distance - precursor to generator.<br>
book42 - main - genererate new chunks around player(unoptimized) hide/show distance and no destroy.<br>



<a href="http://www.youtube.com/watch?feature=player_embedded&v=IDWdGPViRdM" target="_blank">
 <img src="http://img.youtube.com/vi/IDWdGPViRdM/mqdefault.jpg" alt="Watch the video" width="460" height="260" border="2" />
</a>
