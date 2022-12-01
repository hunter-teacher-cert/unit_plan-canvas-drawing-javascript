
        // the getElementById method returns a DOM object representing the element with the supplied id
        // this object is assigned to the canvas variable with the following code:
        var canvas = document.getElementById("canvas");
        
        // the 2d argument says that we want to draw a two-dimensional image on our canvas 
        // We save this drawing context object in the variable ctx using the following code: 
        var ctx = canvas.getContext("2d");
        
        // fillRect takes four parameters, first two are the x-y co-ordinates on the canvas, the top left corner 
        // the next two parameters are the width and height of the rectangle     
        ctx.fillRect(0, 0, 10, 10);

        // using a for loop can you think of some images that you would like to draw?    
        // draws a line of squares going diagonally
        for (var h = 0; h <= 8; h++){
            ctx.fillRect(h*10, h*10, 10, 10);
        }
        
        // using a for loop to draw the x with a fill rectangle method 
        for (var i = 80; i >= 0; i-=10){
            ctx.fillRect(i, 80-i, 10, 10);
        }
        