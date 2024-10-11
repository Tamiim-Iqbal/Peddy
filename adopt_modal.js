const countdownElement = document.getElementById('countdown');
const customAdopt = document.getElementById("customAdopt");
let countdownInterval;                        // Declare the interval globally

function startCountdown() {
  let counter = 3;                          

  // Start the countdown and update the global countdownInterval variable
   countdownInterval = setInterval(() => {
    if(counter > 1)
    {
      counter--; 
      countdownElement.innerText = counter; 
    }
      
    else{
      customAdopt.close();                  // Close the modal
      clearInterval(countdownInterval);                              
    }
  }, 1000);                                 // Update every second
  
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
    countdownElement.innerText = 3;
  }