# Chase The Dot Game

**Student:** Ciaran Whyte </br>
**Student ID:** G00254624 </br>
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
* Dot.js
* BouncingBall.js
* BorderCollisionsPacman.js
* MoveMouthPacman.js

_**Home.html**_ is the homepage allowing you to enter or exit. It contains a header, canvas and table with one row and two columns holding the buttons. Home.html also uses Game.css, BouncingBall.js and Dot.js as external files. These are explained further down.

_**Game.css**_ is simple file providing CSS styling for Home.html, background, borders, button styling etc

_**Index.html**_ is the main page and its where the game is played. It uses all .js files as external files. The HTML is simple, only including a canvas. The main running javascript program you could say, runs here. Its structured as follows: </br>
* At the top we have the external javascript files and global variables along with a do-while which sets X,Y coordinates for the ball chasing pacman.
* Then there are two functions, one outputs the players lives and score to the screen. The other is responsible for increasing the speed of the ball chasing pacman.
* Next we have a JAlert popup box which is built using a JQuery plugin, it gives briefs instructions on playing the game.
* Then we call the function to output score and lives left. We declare three objects, two dot objects (defined in Dot.js) one for pacman to catch and a second to provide the extra life dot. The third object is a BouncingBall object (defined in BouncingBall.js) and is the ball chasing pacman. We only draw the ball pacman will chase on the screen for now. 
* The function which handles or key events is next. We find the key code and depending on if we are going, left, right, up or down we set the relevant animation frame function and cancel the others.
* The last four functions simply define the functions being called by the key event, they are very similar but vary slightly depending on the direction that pacman is moving in. Some of the functions in here have been defined in the external javascript files. To run the game we use AnimationFrames, the onKeyUp event (called in html body tag) and cancelAnimationFrames along with good old fashioned logic :P 

_**Dot.js**_ is a javascript class created to handle dots in the game. Both the extra life dot and dot pacman chases are defined using the dot class and its functions. eg a function for finding if if intersects with pacman (another circle)

_**BouncingBall.js**_ is a javascript class created to handle the bouncing ball for the game. The game pacman chases.

_**BorderCollisionsPacman.js**_ defines the functions needed for detecting if pacman has reached the end of the canvas depending on his current direction.

_**MouthMovePacman.js**_ defines the functions used for opening/closing pacmans mouth, when it does it and from what angle depending on the direction he is going in.

**Each of these files has been heavily commented to assist in the readibilty and help quicken anyones understanding in exactly whats happening.**

_Enjoy :D_
