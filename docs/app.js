// Creating variables for the start-button and the countdown-text elements by selecting their classes
const startButton = document.querySelector(".start-button");
const countdownText = document.querySelector(".countdown-text");

// Creating the variables for all 3 timer options buttons
const pomodoroButton = document.querySelector(".pomodoro-button");
const shortBreakButton = document.querySelector(".short-break-button");
const longBreakButton = document.querySelector(".long-break-button");

// Creating 3 timer variables that hold the start time, short break time, and long break time in minutes.
var defaultTime = 25;
var shortBreakTime = 5;
var longBreakTime = 15;

// Setting the countdown time by multiplying 60 seconds by x minutes (default 25 minutes)
var countdownTime = 60 * 25;

// Changing the value of the countdownTime by clicking on the 3 options buttons
pomodoroButton.addEventListener("click", function () {
  countdownTime = 60 * 25; // 25 minutes for Pomodoro
  //   Also changing the html text to show the new time
  countdownText.textContent = "25:00";
  console.log("CountdownTime set to " + countdownTime);
});

shortBreakButton.addEventListener("click", function () {
  countdownTime = 60 * 5; // 5 minutes for short break
  //   Also changing the html text to show the new time
  countdownText.textContent = "05:00";
  console.log("countdownTime set to " + countdownTime);
});

longBreakButton.addEventListener("click", function () {
  countdownTime = 60 * 15; // 15 minutes for long break
  //   Also changing the html text to show the new time
  countdownText.textContent = "15:00";
  console.log("countdownTime set to " + countdownTime);
});

// Adding a click event listener to the .start-button button
startButton.addEventListener("click", function () {
  // Logging
  console.log("Start button clicked");

  // Adding a form of error prevention by disabling the button after it has been pressed. Resource: https://stackoverflow.com/questions/13831601/disabling-and-enabling-a-html-input-button
  startButton.disabled = true;
  console.log("Start button disabled");

  const countdownInterval = setInterval(function () {
    // Lowering the countdown time by 1 second
    countdownTime = countdownTime - 1;

    // Calculating minutes and seconds
    // Math floor function is used to round down decimal numbers to represent the minutes
    const minutes = Math.floor(countdownTime / 60);
    // The modulo operator is used to get the reamainder which represents the seconds
    const seconds = countdownTime % 60;

    // Formatting the countdown text to "MM:SS".
    // We can use "textContent" to change the text inside an element. Resource: https://www.shecodes.io/athena/10151-how-to-change-text-when-clicking-in-javascript
    // We need to conver thet minutes and seconds to strings from numbers (for code below). Resource: https://www.w3schools.com/jsref/jsref_tostring_number.asp
    // We also need to set or limit the string to be show in the MM:SS format. Resource: https://www.geeksforgeeks.org/how-to-convert-seconds-to-time-string-format-hhmmss-using-javascript/#
    countdownText.textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

    // When the countdown time reaches 0, clear the interval
    if (countdownTime === 0) {
      // Playing an audio file when the countdown reaches 0. Resource: https://stackoverflow.com/questions/9419263/how-to-play-audio
      var audio = new Audio("assets/alarm.mp3");
      audio.play();

      clearInterval(countdownInterval);
      // Logging
      console.log("Countdown has reached 0");
      // Re-Enabling the button after the countdown has reached 0
      startButton.disabled = false;

      // Resetting the countdown time to the vaule that it started at
      countdownText.textContent = countdownTime;
    }
  }, 1000);
});

// Adding JS to change the background color of the website and the background color of elements depedning on the timer option picked
var websiteBody = document.querySelector("body");
var navbarBackground = document.querySelector(".navbar-container");
var helpButton = document.querySelector(".navbar-help-button");
var aboutButton = document.querySelector(".navbar-about-button");
var navbarHR = document.querySelector(".navbar-hr");
var timerContainer = document.querySelector(".timer-outer-container");
var startButtonText = document.querySelector(".start-button-text");

pomodoroButton.addEventListener("click", function () {
  // Changing the elements background color to the base red color: #BA4949
  websiteBody.style.backgroundColor = "#BA4949";
  navbarBackground.style.backgroundColor = "#BA4949";
  startButtonText.style.color = "#BA4949";

  // Changing the elements text color to the lighter red color: #C66A6A
  helpButton.style.backgroundColor = "#C66A6A";
  aboutButton.style.backgroundColor = "#C66A6A";
  timerContainer.style.backgroundColor = "#C66A6A";
  pomodoroButton.style.backgroundColor = "#C66A6A";
  shortBreakButton.style.backgroundColor = "#C66A6A";
  longBreakButton.style.backgroundColor = "#C66A6A";

  // Changing the hr color to the darker red color: #A74242
  navbarHR.style.borderTop = "2px solid #A74242";
  
  // Adding .active class when button is clicked. Used for styling purposes. Resource: https://www.w3schools.com/howto/howto_js_active_element.asp
  pomodoroButton.classList.add("active"); // Adding the active class to the short break button. Resource: https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element
});

shortBreakButton.addEventListener("click", function () {
  // Changing the elements background color to the base green color: #38868a
  websiteBody.style.backgroundColor = "#38868a";
  navbarBackground.style.backgroundColor = "#38868a";
  startButtonText.style.color = "#38868a";

  // Changing the elements text color to the lighter green color: #4c9196
  helpButton.style.backgroundColor = "#4c9196";
  aboutButton.style.backgroundColor = "#4c9196";
  timerContainer.style.backgroundColor = "#4c9196";
  pomodoroButton.style.backgroundColor = "#4c9196";
  shortBreakButton.style.backgroundColor = "#4c9196";
  longBreakButton.style.backgroundColor = "#4c9196";

  // Changing the hr color to the darker green color: #32777c
  navbarHR.style.borderTop = "2px solid #32777c";


  // Adding .active class when button is clicked. Used for styling purposes. Resource: https://www.w3schools.com/howto/howto_js_active_element.asp
  shortBreakButton.classList.add("active"); // Adding the active class to the short break button. Resource: https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element
});

longBreakButton.addEventListener("click", function () {
  // Changing the elements background color to the base blue color: #397097
  websiteBody.style.backgroundColor = "#397097";
  navbarBackground.style.backgroundColor = "#397097";
  startButtonText.style.color = "#397097";

  // Changing the elements text color to the lighter red color: #4d7fa2
  helpButton.style.backgroundColor = "#4d7fa2";
  aboutButton.style.backgroundColor = "#4d7fa2";
  timerContainer.style.backgroundColor = "#4d7fa2";
  pomodoroButton.style.backgroundColor = "#4d7fa2";
  shortBreakButton.style.backgroundColor = "#4d7fa2";
  longBreakButton.style.backgroundColor = "#4d7fa2";

  // Changing the hr color to the darker blue color: #336588
  navbarHR.style.borderTop = "2px solid #336588";

  // Adding .active class when button is clicked. Used for styling purposes. Resource: https://www.w3schools.com/howto/howto_js_active_element.asp
  longBreakButton.classList.add("active"); // Adding the active class to the short break button. Resource: https://stackoverflow.com/questions/507138/how-to-add-a-class-to-a-given-element
});




// Clicking the pomodoro button when the page loads. Resource: https://stackoverflow.com/questions/21418915/click-a-button-element-on-page-load
document.addEventListener("DOMContentLoaded", function() {
  pomodoroButton.click();
  console.log("Pomodoro button clicked");
});



