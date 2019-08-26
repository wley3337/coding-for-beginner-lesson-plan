// this is where you write all of you JavaScript code. It gets imported to the HTML page inside of the <script> </script> tag

//some JavaScript Notes:
// you will see 'var' used to declare variables. You will also see 'let' and 'const' used
// 'var' is an older style of writing JavaScript
// 'const' is newer and is used more often now. It is short for `Constant`. It is not allowed to change. 
// 'let' is used when we want something to change over time. This is used when we want a number to increase over the course of our code. 




//this allows us to get the current button on the page
const button = document.getElementById("like-button")

// goal: increase current like count by 1
function increaseLikes(){

  // find current like count
  const paragraph = document.getElementById("like-paragraph");
  // things we get from our web page always come back as strings
  const countAsAString = paragraph.innerText
    
    
  // increase the count
  // in order to do + 1 to something we need to be sure it's converted to a number
  const countAsANumber = parseInt(countAsAString)
  const newLikeCount = countAsANumber + 1

  // add the new like count to the DOM!
  // here, the browser will turn our number into a string again to display it,
  // so we don't need to worry about making it into a string first
  paragraph.innerText = newLikeCount
}

// here we are saying that when we click on the button we would like it to run our function increaseLikes
button.onclick = increaseLikes