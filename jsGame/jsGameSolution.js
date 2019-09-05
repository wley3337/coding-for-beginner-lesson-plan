

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
    addEventListenerToSquare(squareOne())
    addEventListenerToSquare(squareTwo())
    addEventListenerToSquare(squareThree())
    addEventListenerToSquare(squareFour())
    addEventListenerToSquare(squareFive())
    addEventListenerToSquare(squareSix())
    addEventListenerToSquare(squareSeven())
    addEventListenerToSquare(squareEight())
    addEventListenerToSquare(squareNine())
}

//when a user clicks on a square we want to:
function playerTurn(square){
    const currentText = square.children[0].innerText

    //check if it's already occupied
    //if it isn't 
    if (currentText === ""){
        //place the players marker on the square Where do we get the player's mark?
        square.children[0].innerText = player().innerText
        //check to see if they won
       if(!didIWin()){
           //change the player's turn hint: the span has an id of 'player'
           changePlayer()
       }else{
           console.log(square.children[0].innerText)
        alert( `Player ${player().innerText} Wins! Refresh to play again!`)
       }
    //if it is occupied 
    }else{
        //alert the player to go some place else. 
        alert("Please choose another square")
    }
}


function didIWin(){

    // what are the conditions we need to check to see if person has won? 
    // think about the id of the square. What would the text in the other squares look like if we won? 
    // our board by id looks like: 
            //     1|2|3
            //     4|5|6
            //     7|8|9

    // each of these statements returns a 'true' or 'false' 
    // since we use the `or` ( || ) if any of these return true someone has won. 
    // you can look at the logic for each of these below,
    return(
        squareCornerWin() || 
        squareCenterWin() ||
        squareTwoWin() ||
        squareEightWin() || 
        squareFourWin() 
    )
}

//function to select player
function player(){
    return document.getElementById('player')
}

//change player function
function changePlayer(){
    // look to see who the 'current' player is
    const currentPlayer = player().innerText
     //if the current player is player 'X'
    if(currentPlayer=== "X"){
        //change it to player 'O'
        player().innerText = "O"
    //otherwise
    }else{
        //change it to player 'X'
        player().innerText = "X"
    }

}

//functions to select each square so we can reuse them
function squareOne(){
    return document.getElementById("s-1")
}
function squareTwo(){
    return document.getElementById("s-2")
}
function squareThree(){
    return document.getElementById("s-3")
}
function squareFour(){
    return document.getElementById("s-4")
}
function squareFive(){
    return document.getElementById("s-5")
}
function squareSix(){
    return document.getElementById("s-6")
}
function squareSeven(){
    return document.getElementById("s-7")
}
function squareEight(){
    return document.getElementById("s-8")
}
function squareNine(){
    return document.getElementById("s-9")
}


//generic add event listener 'onClick'
function addEventListenerToSquare(square){
    //given a square of our board, add an 'click' event listener that calls on a function of the player's turn
    square.addEventListener('click', function(){playerTurn(square)}  )
}



// WIN CONDITIONS
// each condition needs to be true in order for a square to 'win' See if you can look through and follow what's being checked
//if it's a corner square
function squareCornerWin(){
  if(squareOne().children[0].innerText === squareTwo().children[0].innerText &&
   squareOne().children[0].innerText === squareThree().children[0].innerText &&
   squareOne().children[0].innerText !== ""&&
   squareTwo().children[0].innerText !== ""&&
   squareThree().children[0].innerText !== ""){
       return true
   }
   if(squareOne().children[0].innerText === squareFour().children[0].innerText &&
   squareOne().children[0].innerText === squareSeven().children[0].innerText &&
   squareOne().children[0].innerText !== "" &&
   squareFour().children[0].innerText !== "" &&
   squareSeven().children[0].innerText !== ""){
       return true
   }
   if(squareOne().children[0].innerText === squareFive().children[0].innerText &&
   squareOne().children[0].innerText === squareNine().children[0].innerText &&
   squareFive().children[0].innerText !== "" &&
   squareNine().children[0].innerText !== "" &&
   squareOne().children[0].innerText !== ""){
       return true
   }
   return false
}

//if it's the center square
function squareCenterWin(){

    if(squareFive().children[0].innerText === squareTwo().children[0].innerText &&
    squareFive().children[0].innerText === squareEight().children[0].innerText &&
    squareTwo().children[0].innerText !== "" &&
    squareEight().children[0].innerText !== "" &&
    squareFive().children[0].innerText !== ""){
        return true
    } 
    if(squareFive().children[0].innerText === squareThree().children[0].innerText &&
    squareFive().children[0].innerText === squareSeven().children[0].innerText &&
    squareSeven().children[0].innerText !== "" &&
    squareThree().children[0].innerText !== "" &&
    squareFive().children[0].innerText !== ""){
        return true
    }  
    if(squareFive().children[0].innerText === squareOne().children[0].innerText &&
    squareFive().children[0].innerText === squareNine().children[0].innerText &&
    squareNine().children[0].innerText !== "" &&
    squareOne().children[0].innerText !== "" &&
    squareFive().children[0].innerText !== ""){
        return true
    }  
    if(squareFive().children[0].innerText === squareFour().children[0].innerText &&
    squareFive().children[0].innerText === squareSix().children[0].innerText &&
    squareSix().children[0].innerText !== "" &&
    squareFour().children[0].innerText !== "" &&
    squareFive().children[0].innerText !== ""){
        return true
    }  
    return false
}

//if it's square 2
function squareTwoWin(){
    if(squareTwo().children[0].innerText === squareOne().children[0].innerText &&
    squareTwo().children[0].innerText === squareThree().children[0].innerText &&
    squareThree().children[0].innerText !== ""){
        return true
    }  
    if(squareTwo().children[0].innerText === squareFive().children[0].innerText &&
    squareTwo().children[0].innerText === squareEight().children[0].innerText &&
    squareEight().children[0].innerText !== ""){
        return true
    }  
    return false;
}

function squareFourWin(){
    if(squareFour().children[0].innerText === squareOne().children[0].innerText &&
    squareFour().children[0].innerText === squareSeven().children[0].innerText &&
    squareSeven().children[0].innerText !== ""){
        return true
    }  
    if(squareFour().children[0].innerText === squareFive().children[0].innerText &&
    squareFour().children[0].innerText === squareSix().children[0].innerText &&
    squareSix().children[0].innerText !== ""){
        return true
    }  
    return false
}

// square Six
function squareSixWin(){
    if(squareSix().children[0].innerText === squareThree().children[0].innerText &&
    squareSix().children[0].innerText === squareNine().children[0].innerText &&
    squareNine().children[0].innerText !== ""){
        return true
    }  
    if(squareSix().children[0].innerText === squareFive().children[0].innerText &&
    squareSix().children[0].innerText === squareFour().children[0].innerText &&
    squareFour().children[0].innerText !== ""){
        return true
    }  
    return false
}

// square Eight
function squareEightWin(){
    if(squareEight().children[0].innerText === squareTwo().children[0].innerText &&
    squareEight().children[0].innerText === squareFive().children[0].innerText && squareFive().children[0].innerText !== "" ){
        return true
    }  
    if(squareEight().children[0].innerText === squareSeven().children[0].innerText &&
    squareEight().children[0].innerText === squareNine().children[0].innerText && squareNine().children[0].innerText !== ""){
        return true
    }  
    return false
}