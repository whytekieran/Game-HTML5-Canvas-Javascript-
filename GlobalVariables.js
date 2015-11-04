                            //Global variables which are shared between level one and two


        var leftRight = 670;                                     //X co-ordinate for pacman character
        var upAndDownbody = 310;                                 //Y co-ordinate for pacman character
        var changeMouth = 0;                                     //counter for when pacmans mouth should open/close
        var radius = 50;                                         //pacmans radius
        var dotRadius = 10;                                      //dot pacman chases radius
        var ballRadius = 25;                                     //circle pacman avoids radius
        var openCloseMouth1 = 0.25;                              //2 angles for pacmans mouth when going right
        var openCloseMouth2 = 1.75;
        var openCloseMouth3 = 1.25;                              //2 angles for pacmans mouth when going left
        var openCloseMouth4 = 0.75;
        var openCloseMouth5 = 1.75;                              //2 angles for pacmans mouth when going up
        var openCloseMouth6 = 1.25;
        var openCloseMouth7 = 0.25;                              //2 angles for pacmans mouth when going down
        var openCloseMouth8 = 0.75;
        var mouthPositions = [];                                 //array to take the two return values of change mouth functions
        var speeds1 = [];                                        //holds x,y speeds returned from increase ball speed function
        var speeds2 = [];                                        //Level one needs one array, level 2 uses both (two balls)
        var directions1 = [];                                    //keeps the changed directions (+ or -) for ball1 bouncing of canvas 
        var directions2 = [];                                    //Level one needs one array, level 2 uses both (two balls)
        var stopRight;                                           //4 variables used to clear intervals
        var stopLeft;
        var stopUp;
        var stopDown;
        var ballSpeedX1 = 0.5                                   //Speed of ball(s) chasing pacman. In level one (Index1.html) we only need two
        var ballSpeedY1 = 0.5;                                  //but in level two we have two balls so we use four variables.
        var ballSpeedX2 = 0.5                                   
        var ballSpeedY2 = 0.5;
        var ballMaxSpeed = 30;                                  //Maximum speed of the ball chasing pacman
        var scoreCnt = 0;                                       //counter for the score
        var scoreIncrease = 1;                                  //increase score
        var lives = 3;
        var caught1 = false;                                    //Boolean to check if pacman has been hit by the ball only one needed for 
        var caught2 = false;                                    //level 1 but two are used in level 2
        var gotLife = false;                                    //Boolean to check if pacman is entitled to a life
        var lifeDotLocationSet = false;         //Making sure the extra life location is set once and not at every animation frame
        var lifeDotX = 0;                       //X and Y coordinates for the extra life dot
        var lifeDotY = 0;
        var stillHitCnt = 0;                    //counter that runs while pacman is hit
        var changePacmanColour = -1;            //will be 0 or 1, decideds if we change pacmans colour
        var pacmanAudioOn = false;              //sets when pacman waka waka should be on/off
        var pacmanEndAudio = false;             //condition to turn off audio when pacman dies
        var pacmanAudioResults = [];            //array to hold both the two booleans declared previous when returned from function
        var play = true;                        //Boolean which will be set to false when pacman dies to stop the animation frame running in                                                   //the background behind the cust JQuery plugin popup menu 

        //Creating audio objects for the game
        var pacmanAudio = new Audio('AudioFiles/WakaWaka.mp3');
        var pacmanEatsAudio = new Audio('AudioFiles/PacmanGetsDot.mp3');
        var pacmanDiesAudio = new Audio('AudioFiles/PacmanDies.mp3');
        var pacmanIntroAudio = new Audio('AudioFiles/PacmanIntroMusic.mp3');
        var pacmanHurtAudio = new Audio('AudioFiles/HurtBeep.mp3');
        var pacmanNextLevelAudio = new Audio('AudioFiles/PacmanNextLevel.wav');