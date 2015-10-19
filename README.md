# Chase The Dot Game

**Student:** Ciaran Whyte </br>
**Student ID:** G00254624 </br>
**Lecturer:** Ian Mcloughlin </br>
**Module:** Graphic Programming </br>

**----------------------------------------------------------------------------------------------------------------------------**
**IMPORTANT:** This game has been primarily tested on Google Chrome and therefore i would recommend it as your browser of choice to run the game. This game also contains Javascript classes, a fairly new concept to javascript and yet to be fully standardized. Therefore some older browsers may not run it yet. Again i recommend a recent version of Google Chrome.</br>
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

_**Game.css**_ is simple providing CSS styling for Home.html, background, borders, button styling etc

_**Index.html**_ is the main page and its where the game is played. It uses all .js files as external files. The HTML is simple, only including a canvas. The main running javascript program you could say. Runs here. To run the game we use AnimationFrames, the onKeyUp event (called in html body tag) and cancelAnimationFrames along with good old fashioned logic :P Index.html also contains a few functions for controlling chasing ball speed and outputting score and lives to the canvas. (Defined near the top along with the variables) 

_**Dot.js**_ is a javascript class created to handle dots in the game. Both the extra life dot and dot pacman chases are defined using the dot class and its functions. eg a function for finding if if intersects with pacman (another circle)

_**BouncingBall.js**_ is a javascript class created to handle the bouncing ball for the game. The game pacman chases.

_**BorderCollisionsPacman.js**_ defines the functions needed for detecting if pacman has reached the end of the canvas depending on his current direction.

_**MouthMovePacman.js**_ defines the functions used for opening/closing pacmans mouth, when it does it and from what angle depending on the direction he is going in.

**Each of these files has been heavily commented to assist in the readibilty and help quicken anyones understanding in exactly whats happening.**

Enjoy :D
