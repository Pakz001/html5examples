<h2>IPhone - IPad - Touch Device - Browser App - Pixel Art Brush Oriented Drawing Tool.</h2><br>

<br>
Each file right now is a stand alone app. Download and run with a browser. Or copy out the text from one of these files here in the github repo in this browser and put it in a empty text file and save it with the .html extention. Then open it with a browser. Maybe it can also be pasted into a webpage online that runs html code.(learn html sites or codepen things<br> The tool here requires a touch device at the moment. No mouse or keyboard support. I might buy a apple pencil(gen 2) and start modifying the app to use features from that.<br><br>

I am coding this app with Textastic(app store) on a ipad pro. Testing sometimes on Iphone SE2020, Iphone 13 and Regular Ipad(2020+)<br>
<br>
prototypes, samples, experiments of a 2d pixel editing tool(sprite editor paint tool)
<br><br>
trying to create and learn to create specialized paint brushes.<br>
initial idea, create a pixel art brush that has height. angle/edge/higlight/shade/move speed/slow add details.<br>
<br><br>
notes:(Messy notes)<br>

* figure out smear logic.<br>

* overwrite and insert mode button<br>
<br>

Ideas:

* default shaded shapes - maybe in tab window with color objects - objects like oval, rect, triangle(3d object editor! paste to canvas and/or transparancy )

* Edge wall trace routine - fill/tool that hugs edges(4 - 8 way) a sort of create a outline around a line. Stops at no more of hugging color.

* Blob brush. each touch up a different 1 color random shape as a brush. this for bush and clouds and such. size/sharpness.

* Line tool - editor (tab) for setting color start to end of line. a,b,c-repeat,b,a (design) This for texturing purposes. (bresenham)

* a line tool. the thickness is settable. there is a rainbow editor that can be used to color each individual line in the thick line. + dither. quick save preset and quick menu. test on how to draw a pixel art sword and lighted and shaded pillar. (bresenham)

* The brush rotation system. to rotate anything below on the canvas with the brush. around, (rotate)outside inwards, (rotate)inwards outwards. full area, or sparks.

* Generative brushes. pattern generators. brick/rock/wavy sin grids. line thickness sliders. (fill with generative pattern)

* screen anchor icon for setting light direction used for placing lighter and darker tones(angle) - make range function returning when point is inside radian range -pi , pi

* edge color darkerst of current brush color when touching color outside of palette range(lighter too) - or with light angle or anchor.<br>

* Brush tip designer user interface. Draw in a circle. When you draw the complete cirle edge. a slider sets the amount of the circle
to be drawn. You move up. slider is set to 50 %. Only the top half is drawn with. You can set a shadow to the bottom and lighter
edge at the top. Or drawn or round texture.<br>

* Brushes per image element category. Tree Branch brush: Tree Stump Brush: Leaf Brush: Grass Brush: Water Brush: (Pixel art referenced constructed)<br> 
<br>

* spray trigger

* lock anchor. touch position brush tip is aimed* rotated at anchor. this for tunnel like effects. note: make brush tios x<br>

* add alias brush. read area and place pixels<br>

* undo<br>

* cls<br>

* random level generator for drawing on top off. sort of paint by numbers. maze generators top down land masses. random inspiration idea button<br>

* Blob brushes - Use shapes other than round and square - generate a random* single blob of x,y size. The edges are read as a array for the brush logic to use.<br>

* pixel art tree/bush brush. Draw from the center out. reference: down black edges and darker inside. Up lighter edges and slightly darker smudge(leaf). angle ui / color range ui. / detailing level ui.<br>

* a brush where edges up and down are shaded. left and right are lighter and darker. (find reference<br>

* a brush where there is a settable tip which draws a selected settable border at the direction it is moving in or ending in.

* fill color area turns into selection area. only draw inside selection.

<br><br>
AngleEdgeColorRampBrush_x.html
<br>
<img src="Media/CAA218CA-E255-4908-A84F-E7032C7A28E1.png" width="60%"><br>
<img src="Media/6AADF1B5-CB6E-425B-A82D-CA270D749F70.png" width="60%"><br>
<img src="Media/0581894F-C5D0-4F27-8652-A5DEC9D73256.png" width="60%"><br>
<img src="Media/4E1651F4-87DA-4FD7-9E5E-24B67695F1DB.png" width="60%"><br>
