// Only add the newsletter button if on the homepage
const isHomePage =
  window.location.pathname === "/" ||
  window.location.pathname.endsWith("index.html");

if (isHomePage) {
  //Putting a button that takes user to sign up form, placed after the header
  const header = document.querySelector("header");
  if (header) {
    const signUpButton = document.createElement("button");
    signUpButton.textContent = "Sign-up to our Newsletter Here";
    signUpButton.onclick = () => {
      window.open("form_index.html", "_blank");
    };
    signUpButton.className = "newsletter-button";
    header.insertAdjacentElement("afterend", signUpButton);
}
//Creating a "hamburger" menu button for page links to hide in when screen/window size is smaller
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) { //Prevents errors by checking if any elements are missing
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

const form = document.getElementById("form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    //Using querySelector for value and focus
    const emailInput     = form.querySelector('[name="email"]');
    const firstNameInput = form.querySelector('[name="firstName"]');
    const lastNameInput  = form.querySelector('[name="lastName"]');

    const email     = emailInput.value.trim();
    const firstName = firstNameInput.value.trim();
    const lastName  = lastNameInput.value.trim();

    if (!firstName) {
      alert("Please enter your first name.");
      firstNameInput.focus();
      return;
    }

    if (!lastName) {
      alert("Please enter your last name.");
      lastNameInput.focus();
      return;
    }

    if (!email) {
      alert("Please enter your email address.");
      emailInput.focus();
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    alert("Sign-up successful, press okay to return to HoverHealth homepage.");
    window.close();
  });
}

//This is to make sure email address is valid in its layout e.g. abc@xyz.com
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

//Sets toggle for radio buttons so user can unselect age range if they change their mind or misclick
const ageRadios = document.querySelectorAll('input[type="radio"][name="age"]');

ageRadios.forEach(radio => {
  radio.addEventListener("mousedown", function () {
    this.wasChecked = this.checked;
  });

  radio.addEventListener("click", function () {
    if (this.wasChecked) {
      this.checked = false;
    }
  });
  //Welcome message to show when sign in page is onload
  window.onload = function() {
  alert("Welcome to the XYZ Corporation/Ltd. - Newsletter Signup");
};
});
