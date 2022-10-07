var scoresList = document.querySelector("#highscores");

var scores = [];
function printHighscores() {
    // either get scores from localstorage or set to empty array
  scores.innerHTML = "";
    // sort highscores by score property in descending order
    localStorage.setItem("scores", JSON.stringify(scores));
    // loop through scores
      // create li tag for each high score
  
      // display on page
  }
  
  /// FUNCTION TO CLEAR SCORES ///
  function clearHighscores() {
    // remove an item from local storage
    // reload the page
  }
  
  /// CLICK EVENT TO RUN THE CLEAR SCORES FUNCTION ///
  
  // run function when page loads
  printHighscores();