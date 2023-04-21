<h1>Porting code : 1800 of 5000.</h1>
Monkey2 to Javascript<br><br>
<hr />

<img src="https://cromdesi.home.xs4all.nl/images/linking/gif/dogsketch.gif" width="20%"><br>
*(sketch for the walking egg monsters. Wil get scarier and colored after tweaking)*
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
<img src="Media/oldversion.jpg" width="20%"></img><br>
[Play game in browser - old / keyboard only -](https://cromdesi.home.xs4all.nl/emscripten/monstermineslime/Untitled1.html)
<br><br>



**Conversion notes :**
* Added new controller code system. Should make joypad and touch control easier.
* Figure out what to do with resolution / window size changes.(pauze/rebuild?)
* Still struggling with offscreen canvasses.
* Need to fix a memory leak from old version.
* Variables Ints in array -> pay attention. (fix : Math.floor(variable) )


 <br><br>
**Ideas :**
* Scientist say matter can form out of nothingness. Taking this a notch further, "the spawning of devil eggs".
* infinite maps?
* Shops to sell loot and buy loads of ammo and guns and equipment.
* Radio controlled drones. Machine gun drone and Explosive drone and flame thrower drone.
* flame thrower..
* Talk to villagers.
* rescue villagers (mission?)
* Lighting system?

<br><br>
**Adding Features later on :**
* Controller(xbox)
* Touch screen controls(touch the screen and it displays a sliding menu to activate touch controls.)
