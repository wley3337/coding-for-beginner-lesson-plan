
// This is where you write all of you JavaScript code. 

// <--- this two forward slashes let you write comments in your code. 
// The computer will skip over these lines. 
//It's a great way to leave notes for yourself!

// Step one is to link this file to our HTML document. 
// This is similar to adding our CSS files except that the file reference 
// goes inside of <script> </script> tags


//Declare three variables
// the order is this:
// keyWord variableName = valueOfOurVariable 


var once = "Upon a time..." //<-- var is an older way to write variable declarations and you will see it in some code examples. 

let twoBe = "The change you want to see in the world" //<-- let allows you to change the value stored in the variable

const always = "Be learning" //<-- const is short for constant, so it's value can not change. A note here: When you use const with an array or an object, you can add and remove things to the array and object because you're not changing the outer wrapper. It's kind of like you have a backpack. Even though the stuff you keep in the backpack changes, the backpack doesn't. 


// What can we keep in our variables? 

let booleanGoodDay = true;
let booleanBadDay = false;

const stringTypeWithDoubleQuotes = "get the cheese"
const stringTypeWithSingleQuotes = 'unwrap the cheese'
const stringTypeWithBackTicks = `eat the cheese` 

let numberInteger = 42 
let numberFloats = 3.14 //mmmmm... pie



// FUNCTIONS!!!!!

//Functions are a way for us to hold a set of instructions. 
//These instructions can be reused or `called` multiple times
// A function has a few parts to it. 
function nameForFunction(argumentList){ //<-- and curly braces to hold all of our instructions. 

}

// not all functions need names. Much like pesky posts online these are call anonymous functions and look like 
(function(){
    const truth = "This is really hard to call though"
})


//function names should describe what our function does so that in 3 months when we come back
//to add that new feature, we understand what's going on. 

//what does our function do? 
function increaseLikes () {
    //what steps do we need to take in order to accomplish our goal? 

    //We need to get the current likes
    //go to the DOM and get the value that is displayed. 
    //we should probably store this so we can use it later
    let currentLikes = document.getElementById('likes').innerText //<--- we should remember that this is a string "innerText" can help you remember
    console.log(typeof currentLikes) // <--- console.log() allows us to log something to the console in our browser. this is part of our debugging process. 
    // ^--- this should return type of String 
    //everything we get from the DOM will be a string or a node

    // we need to convert the string to a number and add 1 to it
    let newLikes =  parseInt(currentLikes) + 1 

    //then we need to update the DOM with this new value
    document.getElementById('likes').innerText = newLikes
    
    //and we're done!(with our instructions)
}

// how do we add this to the DOM
//JavaScript Listens to the DOM, it's a creepy big brothery type of thing. 
//So, we need to add an 'event' listener.
//what do we want to add it to? 
const likeButton = document.getElementById('likeButton')

// So an event listener takes two things.
// What it's listening for and what it will do when it 'hears' that thing. 
// So... 
likeButton.addEventListener('click', increaseLikes) 