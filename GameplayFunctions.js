//Output Score and lives
function outputUserInfo(ctx, score, lives)
{
    ctx.fillStyle = "blue";
    ctx.font = "bold 28px Arial";
    ctx.fillText("SCORE: "+score, 1125, 50);
    ctx.fillStyle = "blue";
    ctx.font = "bold 28px Arial";
    ctx.fillText("LIVES: "+lives, 1143, 80);
}

//This function controls the audio (waka waka) for pacman which will play for an hour. Starts playing if it hasnt already been started. If it //has been started and pacman isnt dead then dont do anything, and if its been started and pacman is dead then stop it.
function startGameplayAudio(audioOn, pacmanDead, audio)
{
    if(audioOn == false && pacmanDead == false)
    {
        audio.volume = 0.1;
        audio.play();                           //play audio
        audioOn = true;                         //audio is playing so set audioOn to true
        return [audioOn, pacmanDead];
    }
    else if(audioOn == true && pacmanDead == false)
    {
        return [audioOn, pacmanDead];
    }
    else if(pacmanDead == true && audioOn == true)
    {
        audio.pause();
        audio.currentTime = 0;
        return [audioOn, pacmanDead];
    }
}

//Function to run sound when pacman catches a dot. Sound only runs for a couple of seconds so no need to add extra controls for it.
function gotDotAudio(audio)
{
    audio.play(); //play the audio
}

//Function to run the pacman dead audio, takes the audio as an argument and runs it.
function pacmanDeadAudio(audio)
{
    audio.play();
}

//Function to run the pacman start of game audio, takes the audio as an argument and runs it.
function pacmanBeginsAudio(audio)
{
    audio.play();
}

//Function to run the pacman start of game audio, takes the audio as an argument and runs it.
function pacmanInjuredAudio(audio)
{
    audio.volume = 1.0;
    audio.play();
}
 
//Function to increase speed of the ball chasing pacman either use + or - to add to the ball speed depending on its sign.
function increaseBallSpeed(speedX, speedY)
{
    var ballIncreaseSpeedX = 0.5; //How much we increase the speed by when pacman gets a dot
    var ballIncreaseSpeedY = 0.5;
            
    //we either add(+) or minus(-) speed depending of what sign (+ or -) the speed currently is.
    if(speedX > 0)
    {
        speedX += ballIncreaseSpeedX;
    }
    else if(speedX  < 0)
    {
        speedX -= ballIncreaseSpeedX;
    }
                   
    if(speedY > 0)
    {
        speedY += ballIncreaseSpeedY;
    }
    else if(speedY < 0)
    {
        speedY -= ballIncreaseSpeedY;
    }
    return [speedX, speedY];
}
        
//Output the game instructions to the user before the game begins.
function startingInstructionsPopup()
{
    jAlert('Press any arrow key to begin.' + 
            '\nPacman will move in the first direction you press.' + 
            '\nThe four arrow keys are used to control pacman during the game.', 'Start Instructions');
}

//Redraws the background of the canvas
function redrawCanvasBackground(ctx, height, width)
{
    ctx.fillStyle = "black";  
    ctx.fillRect(0, 0, width, height);
}

//Outputs a popup to show game is over
function outputGameOverPopup(score)
{
    jConfirm('You have died!\n Score is ' +score+ '\nDo you wish to play again or cancel?(Back to Home)', 'GAME OVER!', function(r) 
    {
        if(r)//If we click ok (play again)
        {
            location.reload();//reload the page
        }
        else//otherwise
        {
            window.location = "Home.html";//go back to home
        }
    });
}
        