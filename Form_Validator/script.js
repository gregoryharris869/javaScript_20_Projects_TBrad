"use strict";

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.classList.add("error");
  const small = formControl.querySelector("small");
  small.textContent = message;
}

// Show success outline

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.classList.add("success");
}

// Check email is valid.

function isValidEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Get field name

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//  Check required fields

function checkRequired(inputArr) {
  let allFieldsFilled = true;
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required.`);
      allFieldsFilled = false;
    } else {
      showSuccess(input);
    }
  });
  return allFieldsFilled;
}

// function checkRequired(inputArr) {
//   inputArr.forEach(function (input) {
//     if (input.value.trim() === "") {
//       showError(input, `${getFieldName(input)} is required.`);
//     } else {
//       showSuccess(input);
//     }
//   });
// }

// Event Listener

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
});
