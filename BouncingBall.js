"use strict";
//Class defining the bouncing ball that kills the pacman character
class BouncingBall
{
    //constructor takes co-ordinates, radius, colour and the context (pencil) for the canvas.
    constructor(x, y, r, ctx, colour)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        this.ctx = ctx;
        this.colour = colour;
    }
     //Draws the ball
    drawBall()
    {
        this.ctx.fillStyle = this.colour;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0 * Math.PI, 2 * Math.PI);
        this.ctx.fill();
    }
   
    //moves the balls x/y co-ordinates
    moveBall(x, y)
    {
        this.x = x;
        this.y = y;
    }
    
    //Checking if two dots(circles) intersect returns true/false
    intersect(x, y, r)
    {
        var currentBallX = this.x;
        var currentBallY = this.y;
        var currentBallR = this.r;
        var comparedBallX = x; 
        var comparedBallY = y;
        var comparedBallR = r;
        
        //Using Pythagorean theorem
        //d=√(xp−xc)sq+(yp−yc)sq
        var distanceUnrooted = Math.pow(comparedBallX - this.x, 2) + Math.pow(comparedBallY - this.y, 2);
        var distanceRooted = Math.sqrt(distanceUnrooted);
        var iDistanceRooted = (parseInt(distanceRooted, 10));
        var totalRadius = currentBallR + comparedBallR;
                
        if(totalRadius > iDistanceRooted)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    //Makes a bouncing ball bounce around the canvas
    makeBallBounce(canvasWidth, canvasHeight, ballDirX, ballDirY)
    {
        //Making sure the ball chasing pacman bounces around the canvas (collision detection for canvas border and bouncing ball)
        if((this.x - this.r) <= 0 || (this.x + this.r) >= canvasWidth)
        {
	       ballDirX = -ballDirX;
        }
	    if((this.y - this.r) <= 0 || (this.y + this.r) >= canvasHeight)
        {
		   ballDirY = -ballDirY;
	    }
        
         return [ballDirX, ballDirY];
    }
}