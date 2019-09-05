

// ************ BE SURE TO LINK THE CORRECT JAVASCRIPT FILE TO YOUR HTML **********



// Adding the start of our game information to this event listener 
// makes sure that our webpage is fully loaded before we start doing anything. 
// This means that even if our <script> tag is moved to the top of the file
// our application won't break.
document.addEventListener("DOMContentLoaded", ()=>{
    //what do we want to put in here?
    startGame()
})



//what are the steps that we need to take in order for our game to work? 
function startGame(){
    //add all the event listeners for a player's move
}

//when a user clicks on a square we want to:
function playerTurn(square){
    const currentText = square.children[0].innerText
    //check if it's already occupied
    //if it isn't 
    if (currentText === ""){
        //place the players marker on the square Where do we get the player's mark?
        //check to see if they won
       if(!didIWin()){
           //change the player's turn hint: the span has an id of 'player'
       }else{
        //alert the player that they won!
       }
    //if it is occupied 
    }else{
        //alert the player to go some place else. 
      
    }
}


function didIWin(){

    // what are the conditions we need to check to see if person has won? 
    // think about the id of the square. What would the text in the other squares look like if we won? 
    // our board by id looks like: 
            //     1|2|3
            //     4|5|6
            //     7|8|9

    // each of the different win condition check's statements returns a 'true' or 'false' 
 

}

//function to select player
function player(){
}

//change player function
function changePlayer(){
    // look to see who the 'current' player is
     //if the current player is player 'X'
    if(currentPlayer=== "X"){
        //change it to player 'O'
    //otherwise
    }else{
        //change it to player 'X'
    }

}

//functions to select each square so we can reuse them
function squareOne(){
}
function squareTwo(){
}
function squareThree(){
}
function squareFour(){
}
function squareFive(){
}
function squareSix(){
}
function squareSeven(){
}
function squareEight(){
}
function squareNine(){
}


//generic add event listener 'onClick'
function addEventListenerToSquare(square){
    //given a square of our board, add an 'click' event listener that calls on a function of the player's turn
}



// WIN CONDITIONS
// each condition needs to be true in order for a square to 'win' See if you can look through and follow what's being checked
//if it's a corner square
function squareCornerWin(){
}

//if it's the center square
function squareCenterWin(){

}

//if it's square 2
function squareTwoWin(){
}

function squareFourWin(){
}

// square Six
function squareSixWin(){
}

// square Eight
function squareEightWin(){
}