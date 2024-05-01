// Creating a feature where the countdown timer text will begin to countdown when the start-button is clicked

// Creating variables for the start-button and the countdown-text elements by selecting their classes
const startButton = document.querySelector(".start-button");
const countdownText = document.querySelector(".countdown-text");

// Setting the countdown time by multiplying 60 seconds by x minutes (default 25 minutes)
var countdownTime = 60 * 25;

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
      countdownText.textContent = "25:00";
    }
  }, 1000);
});
