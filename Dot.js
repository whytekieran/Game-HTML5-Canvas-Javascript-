"use strict";
//Class defining the dot that pacman character tries to catch
class Dot
{
    //Constructor for co-ordinates, radius, coulour and context.
    constructor(x, y, r, ctx, colour)
    {
        this.x = x;
        this.y = y;
        this.r = r;
        this.ctx = ctx;
        this.colour = colour;
    }
    
    //getters and setters
    setRadius(r)
    {
        this.r = r;
    }
    
    getRadius()
    {
        return this.r;
    }
    
    setX(x)
    {
        this.x = x;
    }
    
    getX()
    {
        return this.x;
    }
    
    setY(y)
    {
        this.y = y;
    }
    
    getY()
    {
        return this.y;
    }
    
    setColour(colour)
    {
        this.colour = colour;
    }
    
    getColour()
    {
        return this.colur;
    }
    
    //move the x and y co-ordinates function for moving the Dot
    moveDot(x, y)
    {
        this.x = x;
        this.y = y;
    }
    
    //draw the dot (function to draw the dot)
    drawDot()
    {
        this.ctx.fillStyle = this.colour;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0 * Math.PI, 2 * Math.PI);
        this.ctx.fill();
    }
    
    //Checking if two dots(circles) intersect returns true or false
    intersect(x, y, r)
    {
        var currentBallX = this.x;
        var currentBallY = this.y;
        var currentBallR = this.r;
        var comparedBallX = x; 
        var comparedBallY = y;
        var comparedBallR = r;
        
        //Using Pythagorean theorem to detect if two circles intersect
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
}

