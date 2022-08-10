update : inside each createblock function(bottom): remove the draw red to make transparent.<br><br>

Isometric Pixel Art objects. Scalable while keeping the pixels intact.<br><br>

Call the draw function for the specific shape and set the width, height and depth.<br><br>

Filled and lines. There is a setColor function that can be changed for different
colors(manual)<br><br>

I'm currently looking into adding a feature to draw each tile into a image container using
those image data methods<br> The functions now are a bit slow since they draw pixel by pixel
and go through a couple of arrays while they are created.<br><br>

Each object is drawn line by line. Each line can manually have its color be set. I also want
to create a list based flood fill routine. The current flood fill can bork the program if the
object created is to large(recursive) - edit - list based flood added.<br><br>

More objects are most likely going to be created.<br><br>

You can create a game map with the functions or insert the functions into a drawing tool.<br>
The images are not perfect. Some pixel missing or misplaced problems remain. I'm stil learning..<br>
