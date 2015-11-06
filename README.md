# Chase The Dot Game

**Student:** Ciaran Whyte </br>
**Lecturer:** Ian Mcloughlin </br>
**Module:** Graphic Programming </br>

**----------------------------------------------------------------------------------------------------------------------------**<br/>
**IMPORTANT:** This game has been primarily tested on Google Chrome and therefore i would recommend it as your browser of choice to run the game. This game also contains Javascript classes, a fairly new concept to javascript and yet to be fully standardized. Therefore some older browsers may not run it yet, again i recommend a recent version of Google Chrome. The audio files being used were downloaded from various websites. The game has two levels, and you proceed to level two if you score >= 1700. This game also uses some custom styled popup boxes. To do this i included some plugin code that is available from JQuery. This code is contained in the file JQuery-Alert-Dialogs. The file that should be ran first is Home.html which is the homepage that leads you into the game.</br>
**----------------------------------------------------------------------------------------------------------------------------**

## A Brief Introduction

This game has been created for a Graphics Programming module in GMIT. Using javascript and the HTML5 canvas. The rules are simple,
you control pacman and you chase the red dots for points while trying to avoid the blue dot which takes your lives away. Ocasionally
a yellow dot appears which grants an extra life. You control pacman using the directional arrows on the keyboard.

## Main Components

This game is composed of ten files. Three HTML files, six Javascript files and a CSS file. Here each will be explained. Here are the files:

* Home.html
* Game.css
* Index.html
* Index2.html
* GlobalVariables.js
* GameplayFunctions.js
* Dot.js
* BouncingBall.js
* BorderCollisionsPacman.js
* MoveMouthPacman.js

_**Home.html**_ is the homepage allowing you to enter or exit. It contains a header, canvas and table with one row and two columns holding the buttons. Home.html also uses Game.css, BouncingBall.js, Dot.js and GameplayFunctions.js as external files. These are explained further down. The homepage also plays some audio which is done by a function defined in GameplayFunctions.js

_**Game.css**_ is simple file providing CSS styling for Home.html, background, borders, button styling etc

_**Index.html**_ is the main page and its where level one of the game is played. It uses all .js files as external files. The HTML is simple, only including a canvas. The javascript structured as follows: </br>
* At the top we have the external javascript files and global variables, most of the global variables are however are coming from GlobalVariables.js. We then create some dot objects for pacman to chase and ball object for him to avoid.
* There is then a do while which sets x and y coordinates for the ball object chasing pacman.
* Then we then call two functions, one outputs the players lives and score to the screen. The other is then a popup box which shows the start instuctions.
* Then we call a function which plays the opening audio for the game.
* The function which handles the key events is next. We find the key code and depending on if we are going, left, right, up or down we set the relevant animation frame function and cancel the others, the function is attached to the body tag. Also contained inside this function we start the games audio. The function startGameplayAudio() which is defined in GameplayFunctions.js starts the audio if it hasnt already been started, otherwise it does nothing.
* The last four functions simply define the functions being called by the key event, they are very similar but vary slightly depending on the direction that pacman is moving in. Some of the functions used inside these four functions have been defined in the external javascript files. The external file being used is stated in comments beside the function calls. The main four functions are named:<br/>

1. pacmanGoRight()
2. pacmanGoLeft()
3. pacmanGoUp()
4. pacmanGoDown()

Each of these functions runs an animation frame and the one thats run depends on which arrow key we press and is handled by the whichbutton() method. If there is a new button push the current running animation frame is cancelled and the next is run from that point. 

_**Index2.html**_ This is where level two of the game is run its very similar to Index1.html except for additional functions and variables for a second ball that pacman must avoid.

_**GlobalVariables.js**_ A javascript file that contains all the variables shared by Index1.html and Index2.html. There are additional variables needed in the second level that arent needed in the first. All of these variables are in this file.

_**GameplayFunctions.js**_ This javascript file defines some general functions used in the game such as, popup boxes for start, game over and progression to level two, increasing the speed of the ball chasing pacman, outputting the user information to the screen, redrawing the canvas background, resetting the counter responsible for changing pacmans mouth position, moving to the next level and various functions responsible for the audio of the game.

_**Dot.js**_ Is a javascript class created to handle dots in the game. Both the extra life dot and dot pacman chases are defined using the dot class and its functions. eg a function for finding if if intersects with pacman (another circle)

_**BouncingBall.js**_ Is a javascript class created to handle the bouncing ball for the game. The ball pacman must avoid.

_**BorderCollisionsPacman.js**_ Defines the functions needed for detecting if pacman has reached the end of the canvas depending on his current direction. These functions also are responsible for drawing pacman on the canvas.

_**MouthMovePacman.js**_ Defines the functions used for opening/closing pacmans mouth, when it does it and from what angle depending on the direction he is going in.

**Each of these files has been heavily commented to assist in the readibilty and help quicken anyones understanding in exactly whats happening.**

_Enjoy :D_
