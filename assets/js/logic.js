// variables to keep track of quiz state
    var currentQuestion = 0;
    var timer;
    var timerCount;
    var initials = "";
    
// variables to reference DOM elements
    var questionsEl = document.getElementById('questions');
    var questionTitleEl = document.getElementById("#question-title");
    var answerButtonsEl = document.getElementById("choices");
    var timerId = document.querySelector(".timer-sec");
    var startButton = document.querySelector('#startButton');
    var finalPage = document.getElementById('#finalScreen');
    var submitButton = document.getElementById("submit");
    
// potentially hiding the final screen 
    
/// FUNCTION TO START THE QUIZ
function startQuiz(event) {
  event.stopPropagation();
  // hide start screen 
  document.getElementById('startScreen').className = "hide";
  // show questions 
  document.getElementById('questions').className = "show";
  // show starting time
  timerCount = 60;
  // call functions to start quiz
  getQuestion();
  clockTick();
}

function getQuestion() {
  // get current question object from array
  var questionValue = questions[currentQuestion];

  // update title with current question
  
  document.getElementById('question-title').textContent =  questionValue.title;

  // clear out ant old question choices
  document.getElementById('choices').innerHTML = '';

  // loop over choices
  for(var i = 0; i < questionValue.choices.length;i++) {
      //create new button for each choice
      var btn = document.createElement("button");
      btn.textContent = i+1 + ". " + questionValue.choices[i];
      btn.setAttribute("data-index", i);
      //display on the page
      document.querySelector("#choices").appendChild(btn);
  }
}



/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {
  var element = event.target;
  if (element.matches("button") !== true) {
  }
  else {
      var questionValue = questions[currentQuestion];
      if (questionValue.answer !== questionValue.choices[element.getAttribute("data-index")]) {
          if (timerCount > 10) {
              timerCount-= 10;
              document.getElementsByClassName("timer-sec").textContent = timerCount
              console.log("Incorrect! Try again!");
              document.getElementById("feedback").textContent = "Incorrect!";
              document.getElementById("feedback").className = "show";
        }
      }
      else {
          console.log("Correct!");
          document.getElementById("feedback").textContent = "Correct!";
          document.getElementById("feedback").className = "show";
          currentQuestion++;
          if (currentQuestion > 3){
              quizEnd()
          }
          else {
              getQuestion();
          }
      }
      
  }
}


/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
  // stop timer
clearInterval(timerInterval);
  // show end screen
  document.getElementById('finalScreen').className = "show";
  // show final score

  // hide questions section
  document.getElementById('questions').className = "hide";
}

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
  // update time
  timerInterval = setInterval(function() {
    timerCount--;
    timerId.textContent = timerCount; 
  // check if user ran out of time
  if (timerCount === 0) {
    clearInterval(timerInterval);
    quizEnd();
    }
  
  }, 1000);
}

function saveHighscore() {
  // get value of input box - for initials
document.getElementById("submit").textContent = "initials";
  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

/// CLICK EVENTS ///
  // user clicks button to submit initials
submitButton.addEventListener("click", saveHighscore);
  // user clicks button to start quiz
  startButton.addEventListener("click", startQuiz);

  // user clicks on element containing choices
  document.querySelector("#questions").addEventListener("click", questionClick);