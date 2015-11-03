//The folling functions are responsible for opening/closing pacmans mouth depending on what direction he is going
//If he is going right, function takes changemouth which only changes the mouth position every 6 times the function is ran
//And the two angles for his top/bottom jaw
function changeMouthRight(changeMouth, openCloseMouth1, openCloseMouth2)
{
    if(changeMouth == 6)//if the function is on its 6th iteration (6, 12, 18, 24.....etc)
    {
        //If his mouth is open
        if(openCloseMouth1 == 0.25 && openCloseMouth2 == 1.75)
        {
            openCloseMouth1 = 0;//set angles for top and bottom/jaw to close
            openCloseMouth2 = 2;
            return [openCloseMouth1, openCloseMouth2]; 
        }
        else if(openCloseMouth1 == 0 && openCloseMouth2 == 2)//otherwise
        {
            openCloseMouth1 = 0.25;//open his mouth
            openCloseMouth2 = 1.75;
            return [openCloseMouth1, openCloseMouth2]; 
        }
    }
    return [openCloseMouth1, openCloseMouth2];//always return the angles as an array regardless of whats done
}

function changeMouthLeft(changeMouth, openCloseMouth3, openCloseMouth4)
{
    if(changeMouth == 6)//if the function is on its 6th iteration
    {
        //If his mouth is open
        if(openCloseMouth3 == 1.25 && openCloseMouth4 == 0.75)
        {
            openCloseMouth3 = 1;  //set angles for top and bottom/jaw to close
            openCloseMouth4 = 1;
            return [openCloseMouth3, openCloseMouth4];
        }
        else if(openCloseMouth3 == 1 && openCloseMouth4 == 1)//otherwise
        {
            openCloseMouth3 = 1.25;//open his mouth
            openCloseMouth4 = 0.75;
            return [openCloseMouth3, openCloseMouth4];
        }
    }
    return [openCloseMouth3, openCloseMouth4];//always return the angles as an array regardless of whats done
}

function changeMouthUp(changeMouth, openCloseMouth5, openCloseMouth6)
{
    if(changeMouth == 6)//if the function is on its 6th iteration
    {
        //If his mouth is open
        if(openCloseMouth5 == 1.75 && openCloseMouth6 == 1.25)
        {
            openCloseMouth5 = 1.5;  //set angles for top and bottom/jaw to close
            openCloseMouth6 = 1.5;
            return [openCloseMouth5, openCloseMouth6];
        }
        else if(openCloseMouth5 == 1.5 && openCloseMouth6 == 1.5)//otherwise
        {
            openCloseMouth5 = 1.75;//open his mouth
            openCloseMouth6 = 1.25;
            return [openCloseMouth5, openCloseMouth6];
        }
    }
    return [openCloseMouth5, openCloseMouth6];//always return the angles as an array regardless of whats done
}

function changeMouthDown(changeMouth, openCloseMouth7, openCloseMouth8)
{
   if(changeMouth == 6)//if the function is on its 6th iteration
    {
        //If his mouth is open
        if(openCloseMouth7 == 0.25 && openCloseMouth8 == 0.75)
        {
            openCloseMouth7 = 0.5;  //set angles for top and bottom/jaw to close
            openCloseMouth8 = 0.5;
            return [openCloseMouth7, openCloseMouth8];
        }
        else if(openCloseMouth7 == 0.5 && openCloseMouth8 == 0.5)//otherwise
        {
            openCloseMouth7 = 0.25;//open his mouth
            openCloseMouth8 = 0.75;
            return [openCloseMouth7, openCloseMouth8];
        }
    }
    return [openCloseMouth7, openCloseMouth8];//always return the angles as an array regardless of whats done
}