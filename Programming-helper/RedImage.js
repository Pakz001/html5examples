// create red colored image

var canvas = document.getElementById('canvas'); 
var context = canvas.getContext('2d'); 
var imageData = context.getImageData(0, 0, canvas.width, canvas.height); 

for (var i = 0; i < imageData.data.length; i += 4) { 
    imageData.data[i] = 255;    // red 
    imageData.data[i + 1] = 0;  // green 
    imageData.data[i + 2] = 0;  // blue 
    imageData.data[i + 3] = 255; // alpha 
}
