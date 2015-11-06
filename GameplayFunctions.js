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
function startGameplayAudio(audioOn, pacmanDeadOrWin, audio)
{
    if(audioOn == false && pacmanDeadOrWin == false)
    {
        audio.volume = 0.25;
        audio.play();                           //play audio
        audioOn = true;                         //audio is playing so set audioOn to true
        return [audioOn, pacmanDeadOrWin];
    }
    else if(audioOn == true && pacmanDeadOrWin == false)
    {
        return [audioOn, pacmanDeadOrWin];
    }
    else if(pacmanDeadOrWin == true && audioOn == true)
    {
        audio.pause();
        audio.currentTime = 0;
        return [audioOn, pacmanDeadOrWin];
    }
}

//Plays the audio music for the homepage in a loop.
function playHomePageMusic(audio)
{
    audio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
    audio.play();
}

//Function to run sound when pacman catches a dot. Sound only runs for a couple of seconds so no need to add extra controls for it.
function gotDotAudio(audio)
{
    audio.volume = 0.5;
    audio.play(); //play the audio
}

//Function to run the pacman dead audio, takes the audio as an argument and runs it.
function pacmanDeadAudio(audio)
{
    audio.volume = 0.5;
    audio.play();
}

//Function to run the pacman start of game audio, takes the audio as an argument and runs it.
function pacmanBeginsAudio(audio)
{
    audio.volume = 0.5;
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

//Allows player to proceed to level two. Pauses the game audio, plays a winning audio and gives a popup option
function moveToLevelTwo(audioGame, audioCongrats, score)
{
    audioGame.pause();
    audioCongrats.volume = 1.0;
    audioCongrats.play();
                    
    jConfirm('You have reached level 2!\n Score is ' +score+ '\nPlay level 2 or cancel?(Back to Home)', 'CONGRATULATIONS!',                             function(r){
            if(r)//If we click ok (play again)
            {
                window.location = "Index2.html"//reload the page
            }
            else//otherwise
            {
                window.location = "Home.html";//go back to home
            }
        });
}

function youWin(audioGame, audioCongrats, score)
{
    audioGame.pause();
    audioCongrats.volume = 1.0;
    audioCongrats.play();
                    
    jConfirm('Your the king pacman ball avoiding thing :P '+
             '\nYOU WIN!!'+
             '\nDo you wish to play again or cancel?(Back to Home)', 
             'YAYYYYY!!!',                                  
             function(r) 
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

//Set the counter to change pacmans mouth back to zero if it is 7
function resetChangeMouthPositionCounter(changeMouth)
{
    if(changeMouth == 7)
    {
        changeMouth = 0;
    }
    
    return changeMouth;
}
        