var canvas = document.getElementById('myCanvas');


    var context = canvas.getContext('2d');
    var x,y;

    

    for( x=0;x<200;x++)
    {
        for( y=0;y<200;y++)
        {
            var i=0;
            //iterate through screen co-ordinates 
            i = Math.random();
            
            
            
            var color=i.toString(16);
            context.beginPath();//starts writing out the pixels
            context.rect(x*4, y*4, 4, 4);//creates a square that is 4/4 at current position, which is being iterated by the two for loops 
            //in exclusion of i, x*n when n incriments, black spots appear more often 
            context.fillStyle ='#'+color+color+color;
            context.fill();//for some reason this code only outputs when this is here 
            
        }
    }
