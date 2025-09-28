


//script for onmouseover
const hover_button = document.getElementById("hoverme");
hover_button.onmouseover = function () {
    hover_button.style.color = "black";
    hover_button.style.backgroundColor = "orange";
    hover_button.textContent="mouse on me"
};
hover_button.onmouseout = function () {
    hover_button.style.color = "black";
    hover_button.style.backgroundColor = "green";
    hover_button.textContent="mouse out"
};



//script for onclick event
const button = document.getElementById("clickme");
const section1= document.getElementById("fsection")
button.onclick = function () {
    fsection.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};



//Showing a color 
const names=document.getElementById('input');
const display = document.getElementById("inputdisplay");

names.onchange = function () {
    display.textContent = `Wow, ill call you ${names.value}ie`;
};






//simple modal functionality
const openbutton=document.getElementById("openbtn")
const closebutton=document.getElementById("closebtn")
const modal=document.getElementById("modal")

openbutton.addEventListener('click', () => {
    modal.style.display="flex";
});
closebutton.addEventListener('click', () => {
    modal.style.display="none";
});





//drop down menu functionality

const btn = document.getElementById("dropdownBtn");
const menu = document.getElementById("dropdownContent");
const tabs = document.querySelectorAll(".dropdown-content a");
const panes = document.querySelectorAll(".tab-pane");

// Toggle dropdown menu
btn.addEventListener("click", () => {
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
});

// Close menu if clicked outside
window.addEventListener("click", (event) => {
  if (!event.target.matches("#dropdownBtn")) {
    menu.style.display = "none";
  }
});

// Show tab content on click
tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();

    const target = tab.getAttribute("data-tab");

    panes.forEach(pane => {
      pane.style.display = (pane.id === target) ? "block" : "none";
    });

    menu.style.display = "none"; // close dropdown
  });
});

document.getElementById("home").style.display = "block";










const form = document.getElementById("signupForm");

// Input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

// Error spans
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const formSuccess = document.getElementById("formSuccess");

// Helper function for email validation
function isValidEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
  return re.test(email);
}

// Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent actual form submission
  let valid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  } else {
    nameError.textContent = "";
  }

  // Email validation
  if (!isValidEmail(emailInput.value)) {
    emailError.textContent = "Please enter a valid email.";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  // Password validation (minimum 6 chars)
  if (passwordInput.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  // Confirm password validation
  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
    valid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  // If all validations pass
  if (valid) {
    formSuccess.textContent = "Form submitted successfully!";
    form.reset(); // optional: clear the form
  } else {
    formSuccess.textContent = "";
  }
});