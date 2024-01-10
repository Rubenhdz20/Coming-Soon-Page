const emailInput = document.querySelector('#email');
const errorMessage = document.querySelector('#email-error');
const notifyButton = document.querySelector('#notify-button');
  
notifyButton.addEventListener('click', function() {
    event.preventDefault();
    // Check if the email is empty or not valid
    const isValidEmail = validateEmail(emailInput.value);
  
    if (!isValidEmail || emailInput.value === '') {
    // Display error message
    errorMessage.classList.add("flex", "items-center", "bottom-6", "text-red-400");
    errorMessage.classList.remove("hidden");
  
    // Add error class to the input for styling
    emailInput.classList.remove('border-light-blue', 'placeholder-light-blue', 'focus:border-strong-blue');
    emailInput.classList.add('border-red-400', 'placeholder-red-400', 'focus:border-red-400');
    } else {
    // Clear error message and styling if the email is valid
    errorMessage.classList.add('hidden');
    emailInput.classList.remove('error');
        
       // Perform further actions (e.g., submit the form, send notification)
    // Add your code here...
    }
});
  
// Validate email function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const htmlElement = document.querySelector("html");

const toggleButton = document.querySelector("#toggle");
    
toggleButton.addEventListener("click", () =>{
	htmlElement.classList.toggle('dark');
})

const svgContainer = document.querySelector('#svg-container');
const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');

svgContainer.addEventListener('click', () => {
    moon.classList.toggle('hidden');
    sun.classList.toggle('hidden');
});