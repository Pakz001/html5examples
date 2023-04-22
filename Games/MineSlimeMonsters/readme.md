# Porting code : 3279 of 5000.
*(Monkey2 to Javascript)*
<br>Working on gfx(see below) and slight hand injury break from the typing..<br>


<br><br>

![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://cromdesi.home.xs4all.nl/images/linking/gif/dogsketch.gif)<br>
*(sketch for the walking egg monsters. Wil get scarier and colored after tweaking)*

<img src="Media/IMG_2050.png" width=50% height=50%><br>
*(some of the level graphics that wil be used in the early version..)*



<br>
<br>
<br>
Conversion project from my Monkey 2 game 'Mine Slime and Monsters'..
<br>
When it gets around 5000 lines it should be close to converted.
<br>
<br>
I was planning on creating (more)gfx for the game and adding features and cleaning it up a bit..
<br>
    
<br>Old Version : (Emscripten)<br>
<img src="Media/screenshot.png" width="20%"></img><br>
[Play game in browser - old / keyboard only -](https://cromdesi.home.xs4all.nl/emscripten/monstermineslime/Untitled1.html)
<br><br>



**Conversion notes :**
* Added new controller code system. Should make joypad and touch control easier.
* Figure out what to do with resolution / window size changes.(pauze/rebuild?)
* Still struggling with offscreen canvasses.
* Need to fix a memory leak from old version.
* Variables Ints in array -> pay attention. (fix : Math.floor(variable) ) - note - Look at wrong use of this. - look at random(x,y)


 <br><br>
**Ideas :**
* Scientist say matter can form out of nothingness. Taking this a notch further, "the spawning of devil eggs".
* infinite sized maps? (Keep mining - save/load chunks)
* Shops to sell loot and buy loads of ammo and guns and equipment.
* Radio controlled drones. Machine gun drone and Explosive drone and flame thrower drone.
* flame thrower..
* Talk to villagers.
* rescue villagers (mission?)
* Lighting system?
* Ladder rider - tool for going up and down ladders faster (store:levels)

<br><br>
**Adding Features later on :**
* Controller(xbox)
* Touch screen controls(touch the screen and it displays a sliding menu to activate touch controls.)
