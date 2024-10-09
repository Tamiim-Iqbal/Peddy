const countdownElement = document.getElementById('countdown');
const customAdopt = document.getElementById("customAdopt");
let countdownInterval;                        // Declare the interval globally

function startCountdown() {
  let counter = 3;                            // Reset the counter to 3 each time the modal is opened

  // Clear any existing countdown interval to avoid multiple intervals running at once
  if (countdownInterval) {
    clearInterval(countdownInterval);
  }

  // Update the initial countdown value
  countdownElement.style.setProperty('--value', counter);

  // Start the countdown and update the global countdownInterval variable
   countdownInterval = setInterval(() => {
    if (counter > 0) {
      countdownElement.style.setProperty('--value', counter); 
      countdownElement.innerText = counter; 
      counter--; 
    } else {
      clearInterval(countdownInterval);  // Stop the countdown when it reaches 0
      customAdopt.close();  // Close the modal
      countdownElement.style.setProperty('--value', 3);
    }
  }, 1000);  // Update every second
  
}

const displayAdopt = (button, petId) => {
    
    button.innerText = "Adopted";
    button.disabled = true;

    if (button.disabled) {
      button.style.border = "none"; 
    }
    // console.log(petId);

    // way 1
    // document.getElementById("showAdoptData").click();
    // way 2
    customAdopt.showModal();
    startCountdown();
    
       
  }