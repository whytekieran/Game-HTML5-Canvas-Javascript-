//Functions to hangle borcer collisions for pacman depending on the direction he is going
//If he is going right
//Takes co-ordinates, radius, canvaswidth, two angles for controlling the open/close of his mouth and the context
function rightBorderCollision(x, y, r, canvasWidth, bottomJaw, topJaw, ctx, colour)
{
    //If pacmans x co-ordinate plus radius equals the width(right side)
    if((x + r) >= canvasWidth)
    {
        //just draw pacman and return x, dont increment it
        ctx.beginPath();
        ctx.arc(x, y, r, bottomJaw * Math.PI, 1.25 * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, r, 0.75 * Math.PI, topJaw * Math.PI);
        ctx.fill();
        ctx.beginPath();
        return x;
    }
    else //otherwise
    {
        //draw pacman, increment x, and return it.
        ctx.beginPath();
        ctx.arc(x, y, r, bottomJaw * Math.PI, 1.25 * Math.PI);
        ctx.fillStyle = colour;                 
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, r, 0.75 * Math.PI, topJaw * Math.PI);
        ctx.fill();
        ctx.beginPath(); 
        x += 7;
        return x;
    }
}

//If he is going left
//Takes co-ordinates, radius, canvaswidth, two angles for controlling the open/close of his mouth and the context
function leftBorderCollision(x, y, r, canvasWidth, bottomJaw, topJaw, ctx, colour)
{
    //If pacmans x co-ordinate plus radius equals the 0 (left side of canvas)
    if((x - r) <= 0)
    {
        //just draw pacman and return x, dont de-increment it
        ctx.beginPath();
        ctx.arc(x, y, r, bottomJaw * Math.PI, 0.25 * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, r, 1.75 * Math.PI, topJaw * Math.PI);
        ctx.fill();
        ctx.beginPath();
        return x;
    }
    else//otherwise
    {
        //draw pacman, de-increment x, and return it.
        ctx.beginPath();
        ctx.arc(x, y, r, bottomJaw * Math.PI, 0.25 * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, r, 1.75 * Math.PI, topJaw * Math.PI);
        ctx.fill();
        ctx.beginPath(); 
        x -= 7;
        return x;
    }
}

//If he is going down
//Takes co-ordinates, radius, canvaswidth, two angles for controlling the open/close of his mouth and the context
function upBorderCollision(x, y, r, canvasHeight, bottomJaw, topJaw, ctx, colour)
{
    //If pacmans x co-ordinate plus radius equals 0 (top)
    if((y - r) <= 0)
    {
        //just draw pacman and return y, dont de-increment it
        ctx.beginPath();
        ctx.arc(x, y, r, bottomJaw * Math.PI, 0.75 * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, r, 0.25 * Math.PI, topJaw * Math.PI);
        ctx.fill();
        ctx.beginPath();
        return y;
    }
    else//otherwise
    {
        //draw pacman, de-increment y, and return it.
        ctx.beginPath();
        ctx.arc(x, y, r, bottomJaw * Math.PI, 0.75 * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, r, 0.25 * Math.PI, topJaw * Math.PI);
        ctx.fill();
        ctx.beginPath();
        y -= 7;
        return y;
    }
}

//If he is going down
//Takes co-ordinates, radius, canvaswidth, two angles for controlling the open/close of his mouth and the context
function downBorderCollision(x, y, r, canvasHeight, bottomJaw, topJaw, ctx, colour)
{
    //If pacmans x co-ordinate plus radius equals the height (bottom)
    if((y + r) >= canvasHeight)
    {
        //just draw pacman and return y, dont increment it
        ctx.beginPath();
        ctx.arc(x, y, r, 1.25 * Math.PI, bottomJaw * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, r, topJaw * Math.PI, 1.75 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        return y;
    }
    else//otherwise
    {
        //draw pacman, increment y, and return it.
        ctx.beginPath();
        ctx.arc(x, y, r, 1.25 * Math.PI, bottomJaw * Math.PI);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(x, y, r, topJaw * Math.PI, 1.75 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        y += 7;
        return y;
    }
}


