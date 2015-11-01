# Chase The Dot Game

**Student:** Ciaran Whyte </br>
**Lecturer:** Ian Mcloughlin </br>
**Module:** Graphic Programming </br>

**----------------------------------------------------------------------------------------------------------------------------**
**IMPORTANT:** This game has been primarily tested on Google Chrome and therefore i would recommend it as your browser of choice to run the game. This game also contains Javascript classes, a fairly new concept to javascript and yet to be fully standardized. Therefore some older browsers may not run it yet. Again i recommend a recent version of Google Chrome. Finally this game uses some custom styled popup boxes. To do this i included some plugin code that is availible from JQuery. This code is contained in the file JQuery-Alert-Dialogs.</br>
**----------------------------------------------------------------------------------------------------------------------------**

## A Brief Introduction

This game has been created for a Graphics Programming module in GMIT. Using javascript and the HTML5 canvas. The rules are simple,
you control pacman and you chase the red dots for points while trying to avoid the blue dot which takes your lives away. Ocasionally
a yellow dot appears which grants an extra life. You control pacman using the directional arrows on the keyboard.

## Main Components

This game is composed of seven files. Two HTML files, four Javascript files and a CSS file. Here each will be explained. Here are the files:

* Home.html
* Game.css
* Index.html
* GameplayFunctions.js
* Dot.js
* BouncingBall.js
* BorderCollisionsPacman.js
* MoveMouthPacman.js

_**Home.html**_ is the homepage allowing you to enter or exit. It contains a header, canvas and table with one row and two columns holding the buttons. Home.html also uses Game.css, BouncingBall.js and Dot.js as external files. These are explained further down.

_**Game.css**_ is simple file providing CSS styling for Home.html, background, borders, button styling etc

_**Index.html**_ is the main page and its where the game is played. It uses all .js files as external files. The HTML is simple, only including a canvas. The main running javascript program you could say, runs here. Its structured as follows: </br>
* At the top we have the external javascript files and global variables, then we create three objects. two dots, one for pacman to chase and one for extra lives. Then a ball which pacman must avoid.
* There is then a do while which sets x and y coordinates for the ball object chasing pacman.
* Then we then call two functions, one outputs the players lives and score to the screen. The other is then a popup box which shows the start instuctions.
* The function which handles or key events is next. We find the key code and depending on if we are going, left, right, up or down we set the relevant animation frame function and cancel the others.
* The last four functions simply define the functions being called by the key event, they are very similar but vary slightly depending on the direction that pacman is moving in. Some of the functions inside these four functions have been defined in the external javascript files, which file as been stated in comments beside the function calls. To run the game we use AnimationFrames, the onKeyUp event (called in html body tag) and cancelAnimationFrames along with good old fashioned logic :P 
_**GameplayFunctions.js**_ This javascript file defines some general functions used in the game such as, popus boxes for start and game over, increasing the speed of the ball chasing pacman, outputting the user information to the screen and redrawing the canvas background.

_**Dot.js**_ is a javascript class created to handle dots in the game. Both the extra life dot and dot pacman chases are defined using the dot class and its functions. eg a function for finding if if intersects with pacman (another circle)

_**BouncingBall.js**_ is a javascript class created to handle the bouncing ball for the game. The game pacman chases.

_**BorderCollisionsPacman.js**_ defines the functions needed for detecting if pacman has reached the end of the canvas depending on his current direction.

_**MouthMovePacman.js**_ defines the functions used for opening/closing pacmans mouth, when it does it and from what angle depending on the direction he is going in.

**Each of these files has been heavily commented to assist in the readibilty and help quicken anyones understanding in exactly whats happening.**

_Enjoy :D_
