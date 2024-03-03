// Get reference to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  // Get user preferences for password length and character types from HTML
  var passwordLength = document.getElementById("length").value;
  var includeLowercase = document.getElementById("lowercase").checked;
  var includeUppercase = document.getElementById("uppercase").checked;
  var includeNumeric = document.getElementById("numeric").checked;
  var includeSpecial = document.getElementById("special").checked;

  // Generate password based on user preferences
  var password = generatePassword(parseInt(passwordLength), includeLowercase, includeUppercase, includeNumeric, includeSpecial);

  // Get reference to the #password input
  var passwordText = document.querySelector("#password");

  // Display generated password
  passwordText.value = password;
}

// Function to generate password based on user preferences
function generatePassword(length, includeLowercase, includeUppercase, includeNumeric, includeSpecial) {
  var charset = "";

  if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumeric) charset += "0123456789";
  if (includeSpecial) charset += "!@#$%^&*()_+-=[]{}|;:,.<>?";

  if (charset === "") {
    alert("Please select at least one character type.");
    return "";
  }

  var generatedPassword = "";

  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * charset.length);
    var randomChar = charset.charAt(randomIndex);
    generatedPassword += randomChar;
  }

  return generatedPassword;
}