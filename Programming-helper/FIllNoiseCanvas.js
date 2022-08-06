/////////////////////////////
          // Fill the canvas with noise
          /////////////////////////////

          var img=new Array(w*h);
          var i;
          for(i=0;i<img.length;i++){
            img[i]=Math.floor((Math.random()*256));
          }
          context.putImageData(img,0,0,0,0,w,h);
