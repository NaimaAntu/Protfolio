document.addEventListener("DOMContentLoaded", () => {
  const fullNameInput = document.getElementById("fullName");
  const fullNameParent = fullNameInput.parentElement;
  const fullNameIcon = fullNameParent.querySelector(".validation-icon");
  const fullNameError = fullNameParent.querySelector(".error-message");

  const passwordInput = document.getElementById("password");
  const passwordParent = passwordInput.parentElement;
  const passwordIcon = passwordParent.querySelector(".validation-icon");
  const passwordError = passwordParent.querySelector(".error-message");

  fullNameInput.addEventListener("input", () => {
    const value = fullNameInput.value.trim();
    const hasNumber = /\d/.test(value);

    if (value === "") {
      fullNameInput.classList.remove("valid", "invalid");
      fullNameIcon.classList.remove("valid", "invalid");
      fullNameError.textContent = "";
    } else if (hasNumber) {
      fullNameInput.classList.add("invalid");
      fullNameInput.classList.remove("valid");
      fullNameIcon.classList.add("invalid");
      fullNameIcon.classList.remove("valid");
      fullNameError.textContent = "Numbers are not allowed in the name.";
    } else {
      fullNameInput.classList.add("valid");
      fullNameInput.classList.remove("invalid");
      fullNameIcon.classList.add("valid");
      fullNameIcon.classList.remove("invalid");
      fullNameError.textContent = "";
    }
  });

  passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    const lengthCheck = value.length >= 8;
    const numberCheck = /[0-9]/.test(value);
    const uppercaseCheck = /[A-Z]/.test(value);
    const lowercaseCheck = /[a-z]/.test(value);
    const specialCharCheck = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const isValid = lengthCheck && numberCheck && uppercaseCheck && lowercaseCheck && specialCharCheck;

    if (value === "") {
      passwordInput.classList.remove("valid", "invalid");
      passwordIcon.classList.remove("valid", "invalid");
      passwordError.textContent = "";
    } else if (!isValid) {
      passwordInput.classList.add("invalid");
      passwordInput.classList.remove("valid");
      passwordIcon.classList.add("invalid");
      passwordIcon.classList.remove("valid");
      passwordError.textContent =
        "Password must be 8+ chars and include uppercase, lowercase, number & special char.";
    } else {
      passwordInput.classList.add("valid");
      passwordInput.classList.remove("invalid");
      passwordIcon.classList.add("valid");
      passwordIcon.classList.remove("invalid");
      passwordError.textContent = "";
    }
  });

  document.getElementById("bioDataForm").addEventListener("submit", (e) => {
    if (
      !fullNameInput.classList.contains("valid") ||
      !passwordInput.classList.contains("valid")
    ) {
      e.preventDefault();
      alert("Please fix the errors in the form before submitting.");
    }
  });
});
